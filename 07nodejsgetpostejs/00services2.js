/**
 * Created by zhouhangfeng on 2019/8/30.
 */
var http=require('http');
var url = require('url');
//引入扩展名的方法是在文件里面获取到的
var router = require('./model/router');
// mimeModel.getMime(fs,EventEmitter,'.css')  //获取文件类型

http.createServer(function (req,res) {
//    login 登录的一些功能  register 注册的功能

        var pathname = url.parse(req.url).pathname;
        if(pathname=='/login'){
            res.end('login')
        }else if(pathname=='/register'){
            res.end('register')
        }else if(pathname=='/order'){
            res.end('order')
        }else{
            res.end('index')
        }





}).listen(8888);