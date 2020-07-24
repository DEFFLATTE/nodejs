const http = require('http');
const url = require('url');

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
    res.write("<head><meta charset='UTF-8'/></head>");
    res.write("niyaosile")
    if(req.url != '/favicon.ico'){
        var userinfo = url.parse(req.url,true).query;
        const {name,age} = userinfo;
        console.log(`姓名：${name}----年龄：${age}`)
    }
    res.end();
}).listen('8888')