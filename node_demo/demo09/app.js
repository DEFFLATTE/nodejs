const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const common = require('./module/common')
http.createServer(function (req, res) {
    // http://127.0.0.1:8081/login.html
    // http://127.0.0.1:8081/index.html

    // 1.获取地址

    let pathname = url.parse(req.url).pathname;
    // console.log(pathname);
    pathname=pathname=='/'?'/index.html':pathname;
    // console.log(pathname);
    let extname = path.extname(pathname);
    // console.log(extname);
    // 2.通过fs模块读取文件
    if(pathname!='/favicon.ico'){
        fs.readFile('./static'+pathname,(err,data)=>{
            if(err){
                res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8'});
                res.end('这个页面不存在');
            }
            let mine = common.getMime(extname);
            // console.log(mine);
            res.writeHead(200, {'Content-Type': ''+mine+';charset="utf-8'});
            res.end(data);
        })
    }

   
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');