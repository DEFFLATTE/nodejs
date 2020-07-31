const mongoose = require("./db");
var newsSchema = mongoose.Schema({
    title:String,
    author:String,
    pic:String,
    content:String,
    status:{
        type:Number,
        default:1
    }
})
module.exports = mongoose.model("News",newsSchema,"news")