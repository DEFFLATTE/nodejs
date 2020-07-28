const http = require('http');
const app = require('./module/routes');
const url = require('url');

// common.getFileMime('.png');
http.createServer(function (req, res) {
    // 创建静态web服务
    app.static(req,res,'static')
    // 路由
    let pathname = url.parse(req.url).pathname.replace("/","");
    // http://127.0.0.1:8888/news   pathname=news

     // http://127.0.0.1:8888/login   pathname=login

      // http://127.0.0.1:8888/xxxx   pathname=xxxx   app.xxxx不存在
      try{
        app[pathname](req,res)
      }catch (error){
          app['error'](req,res)
      }
    
    
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');