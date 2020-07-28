const url = require('url')

let G = {};


// http:127.0.0.1:9999/news


let app = function(req,res){
    // console.log('调用app方法')

let pathname = url.parse(req.url).pathname;
    if(G[pathname]){
        G[pathname](req,res); //执行方法
    }else{
        res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8'});
        res.end('页面不存在');
    }
}

app.get = function(str,cb){
    // 注册方法
    G[str]=cb;

}

module.exports=app;

