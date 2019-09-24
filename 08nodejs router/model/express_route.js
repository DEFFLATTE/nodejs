var url = require('url');
//f封装方法改变res,绑定res.send()
function changeReq(res) {
    res.send=function (data) {
        res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
        res.end(data);

    }
}
//暴露的模块
var Server = function () {

    var G = this;//全局变量
    //处理getpost请求
    this._get={};

    this._post={};
    var app = function (req,res) {


        changeReq(res);
        // console.log(req.url);
        //获取路由
        var pathname = url.parse(req.url).pathname;
        // console.log(pathname)
        //获取请求的方式 get post
        var method=req.method.toLowerCase();
        if(!pathname.endsWith('/')){
            pathname=pathname+'/';
        }
        if(G['_'+method][pathname]){
            if(method=='post'){/*执行post请求*/
                let postStr=''
                req.on('data',function (chunk) {
                    postStr+=chunk;
                })
                req.on('end',function (err,chunk) {
                    req.body=postStr;/*表示拿到post的值*/
                    console.log(postStr)
                    G['_'+method][pathname](req,res);

                })
            }else{/*执行get请求*/
                G['_'+method][pathname](req,res);/*执行方法*/
            }
            // G[pathname](req,res);/*执行注册的方法*/
        }else{
            res.end('no router')
        }
    }

    app.get=function (string,callback) {
        if(!string.endsWith('/')){
            string=string+'/'
        }
        if(!string.startsWith('/')){
            string='/'+string;
        }
        //注册方法
        G._get[string]=callback;
    }
    app.post=function (string,callback) {
        if(!string.endsWith('/')){
            string=string+'/'
        }
        if(!string.startsWith('/')){
            string='/'+string;
        }
        //注册方法
        G._post[string]=callback;
    }


    return app;
}

module.exports=Server();
