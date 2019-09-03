var http = require('http');

var config = require('./config')

var app = http.createServer(function (req,res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    res.write('你好');
    console.log(config)
    res.end();
});

app.listen(8001,'127.0.0.1');
//如果想要外面访问方法或属性，必须通过export或者module.exports暴露属性或者方法
//在需要使用这些模块的文件中，通过require的方法引入这个模块，这个时候就可以使用模块里面暴露的属性和方法