/*
session保存在数据库里面

https://www.npmjs.com/package/connect-mysql
https://www.npmjs.com/package/connect-redis
https://www.npmjs.com/package/connect-mongo

1.配置express-session

2.安装connect-mongo
    npm i connect-mongo --save

3.引入
    const MongoStore = require('connect-mongo')(session);
4.配置中间件
    app.use(session({
    secret: 'this is session',//服务器端生成 session 签名
    name:"itying",//修改session对应的cookie名称
    resave: false,//强制保存 session 即使它没有变化
    saveUninitialized: true,//强制将未初始化的 session 存储
    cookie: { 
        maxAge:1000*60*60,
        secure: false //true 表示只有https协议才能访问cookie
    },
    rolling:true, //在每次请求时强行设置 cookie , 这将重置 cookie 的过期时间（默认：false）
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:27017/shop',
        touchAfter:24*3600//不管发出多少请求 在24小时内只更新一次session，除非你改变了session
    })
  }))
*/ 

const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const app = express()
// 配置session的中间件
app.use(session({
    secret: 'this is session',//服务器端生成 session 签名
    name:"itying",//修改session对应的cookie名称
    resave: false,//强制保存 session 即使它没有变化
    saveUninitialized: true,//强制将未初始化的 session 存储
    cookie: { 
        maxAge:1000*60*60,
        secure: false //true 表示只有https协议才能访问cookie
    },
    rolling:true, //在每次请求时强行设置 cookie , 这将重置 cookie 的过期时间（默认：false）
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:27017/shop',
        touchAfter:24*3600//不管发出多少请求 在24小时内只更新一次session，除非你改变了session
    })
  }))


app.get("/",(req,res)=>{
//    获取
    if(req.session.username||req.session.age){
        console.log(req.session)
        console.log(req.session.username)
        res.send(req.session.username+"--"+req.session.age+"-已登录")
    }else{
        res.send("未登录")
    }
    
})

app.get("/login",(req,res)=>{
     // 设置session
     req.session.username="张三"
     req.session.age = 20
    res.send("执行登录")
})

app.get("/loginout",(req,res)=>{
    // 1.设置session的过期时间为0（它会把所有的session销毁）
    // req.session.cookie.maxAge = 0;

    // 2.销毁指定session
    // req.session.username="";

    // 3.销毁session destroy
    req.session.destroy()

    res.send("退出登录")
    
})
app.listen(8888)