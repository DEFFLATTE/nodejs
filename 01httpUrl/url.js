var http = require('http');

var url = require('url');

http.createServer(function (req,res) {
    // req.url  获取浏览器url输入的信息



    //拿取参数 aid cid
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //不要显示图标请求
    if(req.url!='/favicon.ico'){
        console.log(req.url);
        var query = url.parse(req.url,true);//第一个参数地址，第二个参数truebia表示把参数转换成对象
             console.log(query)
        console.log('aid='+query.query.aid);//获取url的get传值
        console.log('cid='+query.query.cid);
    }

    res.write('aid='+query.query.aid+'cid='+query.query.cid);
    res.end();
}).listen(8888);