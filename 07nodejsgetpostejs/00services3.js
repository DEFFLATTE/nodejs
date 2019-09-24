/**
 * Created by zhouhangfeng on 2019/8/30.
 */
var http=require('http');
var url = require('url');
//引入扩展名的方法是在文件里面获取到的
var router = require('./model/router');

var ejs = require('ejs')
// mimeModel.getMime(fs,EventEmitter,'.css')  //获取文件类型

http.createServer(function (req,res) {
//    login 登录的一些功能  register 注册的功能
        res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
        var pathname = url.parse(req.url).pathname;
        if(pathname=='/login'){

            var data = '你好我是后台数据';
            var list=[
                '1111',
                '2222',
                '33333',
                '44444'
            ]
            //把数据库的数据渲染到模板上面

            ejs.renderFile('views/login.ejs',{msg:data,list:list},function (err,data) {
                res.end(data)
            })
            // res.end('login')
        }else if(pathname=='/register'){
           var msg='这是注册页面';
           var h = "<h2>这是一个h2</h2>"
           ejs.renderFile('views/register.ejs',{msg:msg,h:h},function (err,data) {
               res.end(data);
           })

        }else if(pathname=='/order'){
            res.end('order')
        }else{
            res.end('index')
        }



}).listen(8888);