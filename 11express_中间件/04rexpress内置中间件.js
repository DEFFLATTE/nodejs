/**
   路由中间件
 */


var express = require('express');
var app = new express();


app.use('/static',express.static('public'));

app.get('/',function (req,res) {
    res.send('你好express');
})



app.listen(3000,'127.0.0.1');
