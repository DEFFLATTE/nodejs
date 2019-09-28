
var fs = require('fs');
var path = require('path');/*nodejs自带模块*/
//url模块
var url= require('url');

 function getMime(exname,callback) {

    fs.readFile('./mime.json',function (err,data) {
        if(err){
            console.log('json文件不存在');
            return false
        }
        // console.log(data.toString());
        var Mime=JSON.parse(data.toString());
        var result =  Mime[exname]||'text/html';
        callback(result)
    })
}

exports.statics=function (req,res,staticpath) {

    var pathname = url.parse(req.url).pathname;/*获取url的值*/

    if(pathname=='/'){
        pathname='/index.html';//默认加载的首页
    }
    //获取文件的后缀名
    var exname = path.extname(pathname)

    if(pathname!=='/favicon.ico'){/*过滤请求/favicon.ico*/
        console.log(pathname);
        fs.readFile(staticpath+'/'+pathname,function (err,data) {
                if(err){/*没有这个文件*/
                    fs.readFile(staticpath+'/404.html',function (err,data) {
                        res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
                        res.write(data);
                        res.end()//结束响应
                    })
                }else{
                    getMime(exname,function (mime) {
                        res.writeHead(200,{"Content-Type":""+mime+"; charset=utf-8"});
                        res.write(data);
                        res.end()//结束响应
                    })
                }
            }
        )}
}