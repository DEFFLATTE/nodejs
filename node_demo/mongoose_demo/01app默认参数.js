// mongoose 默认参数、mongoose模块化、mongoose性能疑问






// mongoose 默认参数：增加数据的时候，如果不传入数据会使用默认配置的数据

const mongoose = require("mongoose");

// useNewUrlParser这个属性会在url里识别验证用户所需的db,为升级前是不需要指定的，升级后一定要指定

mongoose.connect('mongodb://127.0.0.1:27017/itying',{useNewUrlParser:true,useUnifiedTopology:true},function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("数据库连接成功")
});
// 定义数据表（集合的）映射     字段名称必须和数据库保持一致


var userSchema = mongoose.Schema({
    username:String,
    age:Number,
    status:{
        type:Number,
        default:1
    }
})

// 定义model操作数据库

var UserModel = mongoose.model("User",userSchema,'user');

// 数据的查找
// UserModel.find({},function(err,doc){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(doc);
// })

// 数据的增加
var user = new UserModel({
    username:'张三xxx',
    age:40
})

user.save((err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('增加数据成功')
})
