// schema  数据模型
const mongoose = require("./db")
var userSchema = mongoose.Schema({
    name:{
        type:String,
        get(params){    //不建议使用
            return 'a001'+params
        },
        required:true
    },
    sn:{
        type:String,
        index:true,
        // maxlength:20,
        // minlength:10,
        match:/^sn(.*)/i,
        validate:function(sn){
            return sn.length>10
        }
    },
    age:{
        type:Number,
        min:0,      //用在num类型上面
        max:150
    },
    status:{
        type:String,
        default:'success',//默认值
        enum:['success','error']  //status的值必须在对应的数组里面  注意枚举是用在string类型
    }
})
// 静态方法

userSchema.statics.findBySn=function(sn,cb){


    // 通过find方法获取 sn的数据   this 关键字获取当前的model

    this.find({"sn":sn},function(err,docs) {
        cb(err,docs)
    })
}

// 实例方法     (基本不用)

userSchema.methods.print=function(){
    console.log("我是一个实例方法")

    console.log(this.name)
}


// 定义model操作数据库

module.exports =  mongoose.model("User",userSchema,'user');