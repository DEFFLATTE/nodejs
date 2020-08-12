const mongoose = require("./db");
var FocusSchema = mongoose.Schema({
    title:{
        type:String,
        trim:true   //定义mongoose模式修饰符 去掉空格
    },
    pic:String,
    redirect:{
        type:String,
        set(params){  //增加数据的时候对redirect字段进行处理
            // params可以获取redirect的值              返回的数据就是redirect在数据库实际保存的值


            /*
            www.baidu.com               http://www.baidu.com
            http://www.baidu.com        http://www.baidu.com
            */
           if(!params){
               return ''
           }else{
                if(params.indexOf('http://')!=0&&params.indexOf('https://')!=0){

                    return 'http://'+params
                }
                return params

           }

        }
    },
    status:{
        type:Number,
        default:1
    }
})
module.exports = mongoose.model("Focus",FocusSchema,"focus")