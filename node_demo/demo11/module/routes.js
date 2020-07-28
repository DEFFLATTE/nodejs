const fs = require('fs');
const path = require('path');
const url = require('url');
// 私有方法
let getFileMime = function (extname) {
        var data = fs.readFileSync('./data/mime.json');//同步方法
        let mimeObj = JSON.parse(data.toString());
        return mimeObj[extname];
    
}

exports.static = function (req,res,staticPath){
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
        try{
            let data = fs.readFileSync('./'+staticPath+pathname);
            if(data){
                // let mine = common.getMime(extname);
                let mine =getFileMime(extname);
                // console.log(mine);
                res.writeHead(200, {'Content-Type': ''+mine+';charset="utf-8'});
                res.end(data);
            }
        }catch(error){

        }
    
    }
    
}