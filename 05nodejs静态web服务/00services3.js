/**
 * Created by zhouhangfeng on 2019/8/30.
 */
var fs = require('fs');
var http=require('http');
var path = require('path');/*nodejs自带模块*/
//url模块
var url= require('url');

var mimeModel=require('./model/getmime');
// console.log(mime.getMime('.html'))  //获取文件类型

http.createServer(function (req,res) {

    // http://localhost:8009/index.html  index.html
    var pathname = url.parse(req.url).pathname;
    // console.log(req.url)
    // console.log(url.parse(req.url),'99999999999')
    if(pathname=='/'){
        pathname='index.html';//默认加载的首页
    }
    //获取文件的后缀名
    var exname = path.extname(pathname)
    // console.log(path.extname('index.css'))


    if(pathname!=='/favicon.ico'){/*过滤请求/favicon.ico*/
        console.log(pathname);
        fs.readFile('static/'+pathname,function (err,data) {
            if(err){/*没有这个文件*/
                fs.readFile('static/404.html',function (err,data) {
                    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
                    res.write(data);
                    res.end()//结束响应
                })
            }else{
                var mime=mimeModel.getMime(exname)/*获取文件类型*/
                res.writeHead(200,{"Content-Type":""+mime+"; charset=utf-8"});
                res.write(data);
                res.end()//结束响应
            }
        }
        )}



}).listen(8888);