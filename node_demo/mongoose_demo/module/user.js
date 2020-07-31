// schema  数据模型
const mongoose = require("./db")
var userSchema = mongoose.Schema({
    username:String,
    age:Number,
    status:{
        type:Number,
        default:1
    }
})
// 定义model操作数据库

module.exports =  mongoose.model("User",userSchema,'user');