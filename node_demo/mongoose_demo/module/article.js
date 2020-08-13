var mongoose=require('./db');
const { Schema } = require('mongoose');


var ArticleSchema = new mongoose.Schema({
    title:{
        type:String,unique:true
    },
    cid:{
        type:Schema.Types.ObjectId,
        ref:"ArticleCate"   //cid和文章分类建立关系 model
    },   /*分类  id*/
    author_id:{
        type:Schema.Types.ObjectId,
        ref:"User"  //author_id和用户表建立关系 model
    },/*用户的id*/
    author_name:{
        type:String
    },
    description:String,
    content:String
});

module.exports=mongoose.model('Article',ArticleSchema,'article');