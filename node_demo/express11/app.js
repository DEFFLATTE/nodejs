/*

获取post传过来的数据
1.npm install body-parser
2.var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
4.接收post数据
req,body

*/
const express = require("express");
const bodyParser = require('body-parser')
const ejs = require("ejs");
const app = express();

// 引入外部模块
const admin = require("./routes/admin")
const api = require("./routes/api")
const index = require("./routes/index")
// 配置模板引擎
app.engine("html",ejs.__express)
app.set("view engine","html")
// 配置静态web目录
app.use(express.static("static"))
// 配置第三方中间件
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

// 配置外部路由模块
app.use("/admin",admin)
app.use("/api",api)
app.use("/",index)

//监听端口  端口号建议写成3000以上

app.listen(8888)