// schema  数据模型
const mongoose = require("./db")
var userSchema = new mongoose.Schema({
    username:{type:String,unique:true},
    password:String,
    name:String,
    age:Number,
    sex:String,
    tel:Number,
    status:{
        type:Number,
        dafault:1
    }
});

module.exports =  mongoose.model("User",userSchema,'user');