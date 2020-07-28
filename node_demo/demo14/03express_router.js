const http = require('http');
const app = require('./module/routes');


// 注册web服务
http.createServer(app).listen(9999);

console.log('Server running at http://127.0.0.1:9999/');


// http:127.0.0.1:9999/news

// 配置路由
app.get('/',(req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8'});
    res.end('首页');
})
app.get('/login',(req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8'});
    res.end('登录');
})
app.get('/news',(req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8'});
    res.end('新闻');
})

