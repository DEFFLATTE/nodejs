/**
   路由中间件
 */


var express = require('express');
var app = new express();

app.get('/',function (req,res) {
    res.send('你好express');
})

app.get('/news',function (req,res) {
    res.send('这是路由中间件news');
})
/*匹配所有路由 404*/
app.use(function (req,res) {
    res.status(404).send('这是404, 表示路由没有匹配到')
})


app.listen(3000,'127.0.0.1');
