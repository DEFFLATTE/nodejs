

/*
* 1.安装ejs npm install ejs
*
* 2.配置express的模板引擎
* app.set("view engine","ejs");
*
* express 里面使用ejs 安装以后就可以使用，不需要引入
*
* 3.在express中使用ejs
* 1.渲染的模板引擎
*
* 2.数据
*
* res.render("news",{
*   "news":"["我是新闻啊"，"我也是啊","哈哈哈哈哈"]"
* });
*
* */

var express = require('express');
var app = express();
/*配置ejs模板引擎*/
//views默认会在这个文件里面找模板
app.set('view engine','ejs')

/*设置ejs模板文件位置*/
// app.set('views',__dirname+'static')

//中间件app.use

//express.static('public') 给oublic目录下面的文件提供静态web服务
app.use(express.static('public'));

//配置虚拟目录的静态web服务
app.use('/static',express.static('public'));

/*端口大于3000*/
app.listen('8888','127.0.0.1');

app.get('/',function (req,res) {
    // res.send('ejs的演示')
    res.render('index')/*ejs渲染模板*/
})
app.get('/news',function (req,res) {
    // res.send('ejs的演示')
    var arr = ['111','222','333'];
    res.render('news',{/*数据*/
        list:arr
    })/*ejs渲染模板*/
})
