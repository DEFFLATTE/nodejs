/**
 * Created by zhouhangfeng on 2019/8/30.
 */
var fs = require('fs');
var http=require('http');

http.createServer(function (req,res) {

    // http://localhost:8009/index.html  index.html
    var pathname = req.url;
    if(pathname=='/'){
        pathname=='index.html';//默认加载的首页
    }
    if(pathname!=='/favicon.ico'){/*过滤请求/favicon.ico*/
        console.log(pathname);
        fs.readFile('static/'+pathname,function (err,data) {
            if(err){/*没有这个文件*/
                console.log('404');
                return;
            }else{
                res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
                res.write(data);
                res.end()//结束响应
            }
        }
        )}



}).listen(8009);