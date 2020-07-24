const http = require('http');
const url = require('url');

http.createServer((req,res)=>{

    /*
    request     获取客户端传过来的信息
    response       给浏览器响应信息
    */ 

        // http://127.0.0.1?name=zhangsan&age=20   想获取url传过来的name 和 age

        // 设置响应头
        // 状态码是 200，文件类型 html,字符集是 utf8
        res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});    //解决乱码

        res.write("<head><meta charset='UTF-8'/></head>");  //解决乱码

        console.log(req.url)  //获取浏览器访问的地址

        if(req.url!='/favicon.ico'){
            var userinfo = url.parse(req.url,true).query;
            const {name,age} = userinfo
            console.log(`姓名：${name}---年龄：${age}`)
        }

        res.end(); //结束响应
}).listen(9999);
