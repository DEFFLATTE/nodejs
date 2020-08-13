var ArticleCateModel=require('./module/articlecate');
var UserModel = require('./module/user2');
var ArticleModel = require('./module/article');


// 分类的增加
// var cate = new ArticleCateModel({
//     title:'国内新闻',
//     // description:'国际新闻123'
// })
// cate.save();

// 增加用户

// var user = new UserModel({
//     username:'lisi',
//     password:'11116464611111',
//     name:'李四',
//     age:20,
//     sex:'男',
//     tel:18767533745
// })
// user.save();


// var article=new ArticleModel();
// article.title="老八吃粑粑"

// article.cid='5f349cf132a7691ffcccecfb'  //国际新闻 5f33b4c479c27024385947bd  国内新闻 5f349cf132a7691ffcccecfb

// article.author_id='5f349627a37d1427c0965980'  //李四  5f349644e94e2c25185fc413  张三  5f349627a37d1427c0965980

// article.author_name='张三'

// article.description='老八吃粑粑，奥利给干了兄弟们此处省略300字'

// article.content='老八吃粑粑，奥利给干了兄弟们此处省略1000字'

// article.save();




// 查询文章信息

// ArticleModel.find({},function(err,docs){

//     console.log(docs);
// })

// 查询文章信息 并显示文章的分类 以及文章的作者信息

// 两个表的关联查询
ArticleModel.aggregate([
    {
        $lookup:{
            from:"articlecate",
            localField:"cid",
            foreignField:"_id",
            as:"cate"
        }
    }
],function(err,docs){
    if(err){
        console.log(err);
        return;
    }
    console.log(JSON.stringify(docs));
})
ArticleModel.aggregate([
    {
        $lookup:{
            from:"articlecate",
            localField:"cid",
            foreignField:"_id",
            as:"cate"
        }
    },{
        $lookup:{
            from:"user",
            localField:"author_id",
            foreignField:"_id",
            as:"author"
        }
    }
],function(err,docs){
    if(err){
        console.log(err);
        return;
    }
    // console.log(JSON.stringify(docs));
    console.log(docs);
})

