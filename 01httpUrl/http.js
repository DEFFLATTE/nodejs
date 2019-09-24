/**
 * Created by zhouhangfeng on 2019/8/30.
 */
var http=require('http');

http.createServer(function (req,res) {
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.write('你好 nodejs');
    res.write('你好 nodejs');
    res.write('你好 nodejs');
    res.write('你好 nodejs');
    res.end()//结束响应
}).listen(8009);