var http = require('http');
var url = require('url');

var G ={};
//定义方法
var app=function (req,res) {
    // console.log('app'+req);
    var pathname = url.parse(req.url).pathname;
    // console.log(pathname)
    if(!pathname.endsWith('/')){
        pathname=pathname+'/';
    }
    if(G[pathname]){
        G[pathname](req,res);/*执行注册的方法*/
    }else{
        res.end('no router')
    }
}
//定义一个get方法
app.get=function (string,callback) {
    // console.log('app.get')
    if(!string.endsWith('/')){
        string=string+'/'
    }
    if(!string.startsWith('/')){
        string='/'+string;
    }
    //注册方法
    G[string]=callback;
    // G['login']=function (req,res) {
    //
    // }
}



//只要有请求就会触发app这个方法
http.createServer(app).listen(8888);
app.get('login',function (req,res) {
    console.log('login')
    res.end('login')
})
app.get('register',function (req,res) {
    console.log('register')
    res.end('register')
})
