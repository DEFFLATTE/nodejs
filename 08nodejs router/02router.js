var http = require('http');
var url = require('url');
var model = require('./model/model')
// model['register']('111','222');
//路由：指的就是针对不同请求的URL，处理不同的业务逻辑
http.createServer(function (req,res) {

    var pathname=url.parse(req.url).pathname.replace('/','');
    console.log(pathname)
    res.end()

}).listen(8888)