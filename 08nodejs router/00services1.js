/**
 * Created by zhouhangfeng on 2019/8/30.
 */
var http=require('http');
var url = require('url');
var ejs=require('ejs');
var fs=require('fs');

//引入扩展名的方法是在文件里面获取到的
var router = require('./model/router');
// mimeModel.getMime(fs,EventEmitter,'.css')  //获取文件类型

http.createServer(function (req,res) {

// router.statics(req,res,'static')
    console.log(req.url);
    res.end()


}).listen(8888);
