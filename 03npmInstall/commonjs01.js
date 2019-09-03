//npm i silly-datetime

//引入模块

var sd = require('silly-datetime');
let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
let year = sd.format(new Date(), 'YYYY-MM-DD');
console.log(time)

var http = require('http');


var app = http.createServer(function (req,res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    res.write('你好   '+time+year);
    res.end();
});

app.listen(8001,'127.0.0.1');