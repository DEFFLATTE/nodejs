
/*
1.安装 ejs
2.app.set("view engine","ejs")
3.使用  (默认加载模板引擎的文件夹是views)
res.render("index",{

})
*/

const express = require("express");
const ejs = require("ejs");
const app = express();
// 配置模板引擎
app.engine("html",ejs.__express)
app.set("view engine","html")
// 配置静态web目录
app.use(express.static("static"))

app.get("/",(req,res)=>{
    let title = 'hello ejs';
    res.render('index',{title:title})
})

app.get("/news",(req,res)=>{
    let userinfo = {
        username:'张三',
        age:20
    };
    let article = "<h3>我是一个h3</h3>";
    let list = ['1','2','3'];
    let newList = [
        {
            title:"新闻1"
        },
        {
            title:"新闻2"
        },
        {
            title:"新闻3"
        }
    ];
    res.render('news',{
        userinfo:userinfo,
        article:article,
        flag:true,
        score:50,
        list:list,
        newList:newList
    })
})

//监听端口  端口号建议写成3000以上

app.listen(8888)