const http = require('http');
const app = require('./module/routes');
const ejs = require('ejs');


// 注册web服务
http.createServer(app).listen(9999);

app.static("public");

console.log('Server running at http://127.0.0.1:9999/');


// http:127.0.0.1:9999/news

// 配置路由
app.get('/',(req,res)=>{
    // res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8'});
    // res.end('首页');
    res.send('首页');
})
app.get('/login',(req,res)=>{
   
    ejs.renderFile("./views/form.ejs",{},(err,data)=>{
    // res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8'});
    // res.end(data);
    res.send(data);
    })
})
app.post('/login',(req,res)=>{
    // console.log(req.body);
    // res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8'});
    // res.end(req.body);
    res.send(req.body);
})

