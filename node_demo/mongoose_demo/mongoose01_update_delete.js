// 1.引入mongoose
const mongoose = require('mongoose');

// 2.建立连接
mongoose.connect('mongodb://127.0.0.1:27017/itying',{useNewUrlParser:true,useUnifiedTopology:true})

// 3.定义一个Schema

var NewsSchema=mongoose.Schema({
    title:String,
    author:String,
    pic:String,
    content:String,
    status:Number
})

// 4.定义操作数据库的Model

var News = mongoose.model('News',NewsSchema,'news');

// 5.增加数据

// 通过实例化Model创建增加的数据
// var news=new News({
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

// 6.修改数据

// News.updateOne({"_id":"5f23cde2d2fb642e70cdcd43"},{"title":"我是一个修改后的新闻"},function(err,doc){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(doc);
// })

// 删除数据

News.deleteOne({"_id":"5f23cde2d2fb642e70cdcd43"},function(err,doc){
    if(err){
        console.log(err);
        return
    }
    console.log(doc);
})



