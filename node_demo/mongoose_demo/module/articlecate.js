var mongoose=require('./db');
const { Schema } = require('mongoose');

var ArticleCateSchema = new mongoose.Schema({
    title:{
        type:String,unique:true
    },
    description:String,
    addtime:{
        type:Date
    }
});

module.exports=mongoose.model('ArticleCate',ArticleCateSchema,'articlecate');