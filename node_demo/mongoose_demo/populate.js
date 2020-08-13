// 注意使用 populate需要引入用到的model
var ArticleCateModel=require('./module/articlecate');
var UserModel = require('./module/user2');
var ArticleModel = require('./module/article');

//文章表和分类表的关联
// ArticleModel.find({}).populate('cid').exec(function(err,docs){
//     console.log(docs)
// })

// 三个表关联
ArticleModel.find({}).populate('cid').populate('author_id').exec(function(err,docs){
    console.log(docs)
})

// ArticleModel.aggregate   建议使用
