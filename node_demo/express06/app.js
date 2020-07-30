const express = require('express');

const app = express()
const cookieParser = require('cookie-parser');
const { signedCookies } = require('cookie-parser');
// 配置cookieParser中间件
app.use(cookieParser("ityingxxx"))

app.get("/",(req,res)=>{
//  设置cookie
// res.cookie("username","zhangsan",{maxAge:1000*60*60})
    // res.cookie("username","zhangsan",{maxAge:1000*60*60,path:"/article"})

    // 多个域名共享cookie aaa.itying.com   bbb.itying.com   
    // res.cookie("username","zhangsan",{maxAge:1000*60*60,domain:".itying.com"})

    // 中文 cookie
    // res.cookie("username","张三",{maxAge:1000*60*60})

    /* cookie的加密
    
    1.配置中间件的时候需要传入加密的参数

    app.use(cookieParser("itying"))

    2.res.cookie("username","张三",{maxAge:1000*60*60,signed:true})

    3.req.signedCookies

    */
    res.cookie("username","张三",{maxAge:1000*60*60,signed:true})
    res.send("你好 express")
})

app.get("/article",(req,res)=>{
    // 获取cookie
    let username = req.cookies.username;
    res.send("新闻页面----"+username)
})
app.get("/user",(req,res)=>{
     // 获取cookie
    let username = req.cookies.username;
    res.send("用户----"+username)
})

app.get("/product",(req,res)=>{
     // 获取加密的cookie
    let username = req.signedCookies.username;
    res.send("product----"+username)
})

app.listen(8888)
