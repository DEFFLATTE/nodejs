const UserModel = require("./module/user")
const NewsModel = require("./module/news")

// 数据的查找
UserModel.find({},function(err,doc){
    if(err){
        console.log(err);
        return;
    }
    console.log(doc);
})
NewsModel.find({},function(err,doc){
    if(err){
        console.log(err);
        return;
    }
    console.log(doc);
})

// 数据的增加
// var user = new UserModel({
//     username:'张三xxx',
//     age:40
// })

// user.save((err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('增加数据成功')
// })

// var news=new NewsModel({
//     title:"我是一个新闻",
//     author:"张三",
//     content:"我是新闻的内容",
//     status:1
// })
// news.save(function(err){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("增加成功")
// });
