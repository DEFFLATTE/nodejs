/**
 * Created by zhouhangfeng on 2019/8/30.
 */
var http=require('http');
var url = require('url');
//引入扩展名的方法是在文件里面获取到的
var router = require('./model/router');

var ejs = require('ejs')
var fs = require('fs');
// mimeModel.getMime(fs,EventEmitter,'.css')  //获取文件类型

http.createServer(function (req,res) {
//    login 登录的一些功能  register 注册的功能
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

        //获取get还是post请求
        var method = req.method.toLowerCase();
            console.log(method)

        var pathname = url.parse(req.url).pathname;
        if(pathname=='/login'){/*显示登录页面*/

            ejs.renderFile('views/form.ejs',{},function (err,data) {
                res.end(data);
            })

        }else if(pathname=='/dologin'&&method=='get'){/*执行登录的操作*/
            console.log(url.parse(req.url,true).query);
            res.end('dologin');

        }else if(pathname=='/dologin'&&method=='post'){/*执行登录的操作*/
            var postStr='';
            req.on('data',function (chunk) {
                postStr += chunk;
            })
            req.on('end',function (err,chunk) {
                fs.appendFile('login.txt',postStr+'\n',function (err1) {
                    if(err){
                        console.log(err);
                        return
                    }
                    console.log('写入数据成功')
                })
                res.end("<script>alert(\"登录成功\");history.back()</script>")
            })



        }else{
            ejs.renderFile('views/index.ejs',{},function (err,data) {
                res.end(data);
            })
        }



}).listen(8888);