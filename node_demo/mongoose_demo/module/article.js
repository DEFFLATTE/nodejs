var mongoose=require('./db');
const { Schema } = require('mongoose');


var ArticleSchema = new mongoose.Schema({
    title:{
        type:String,unique:true
    },
    cid:{
        type:Schema.Types.ObjectId
    },   /*分类  id*/
    author_id:{
        type:Schema.Types.ObjectId
    },/*用户的id*/
    author_name:{
        type:String
    },
    description:String,
    content:String
});

module.exports=mongoose.model('Article',ArticleSchema,'article');