
//安装mongodb
// var MongoClient=require('mongodb').MongoClient;

// var url = 'mongodb://localhost"27017/test';链接数据库的地址
//连接数据库
/*
4.实现增加修改删除
MongoClient.connect(url,function(err,db){

    db.collection('user').insertOne({'name':'zhangsan},function(error,data)){


    }
})



* */



var http = require('http');

var ejs = require('ejs');

var MongoClient = require('mongodb').MongoClient;/*引入数据库MongoClient*/

var url = 'mongodb://localhost:27017/itying';//连接数据库的地址 student表示数据库的名称
var Url = require('url')
// MongoClient.connect(url,function(err,db) {
//
//     db.collection('user').insertOne({'name': 'zhangsan'}, function (error, data) {
//
//
//     })
// }

var app = require('./model/express_route')
http.createServer(app).listen(8888);
app.get('/',function (req,res) {
    console.log('index')
    var msg = '这是数据库的数据111';
    ejs.renderFile('views/index.ejs',{msg:msg},function (err,data) {
        res.send(data);
    })
    res.end('login')
})

app.get('/add',function (req,res) {
//    增加数据
    MongoClient.connect(url,function (err,db) {
        // console.log(db)
        if(err){
            console.log(err);
            console.log("数据库连接失败");
            return;
        }
    //    增加数据
        db.collection('user').insertOne({
            "name":"zhouhangfeng",
            "age":20
        },function (error,result) {
            if(error){
                console.log('增加数据失败');
                return;
            }
            res.send('增加数据成功');
            db.close();/*关闭数据库*/
        })
    })
})
app.get('/edit',function (req,res) {
//    修改数据
//     res.send('修改数据成功')
    MongoClient.connect(url,function (err,db) {
        if(err){
            console.log(err);
            console.log("数据库连接失败");
            return;
        }
        db.collection('user').updateOne({"name":"wangmazi"},{$set:{
            "age":18
            }},function (error,data) {
            if(error){
                console.log('修改数据失败');
                return;
            }
            console.log(data)
            res.send('修改数据成功');
            db.close();/*关闭数据库*/
        })

    })
})
app.get('/delete',function (req,res) {
//    删除数据
//     delete?name=lisi
    console.log(Url.parse(req.url,true));
    var query=Url.parse(req.url,true).query;
    console.log(query.name);
    var name = query.name;
    MongoClient.connect(url,function (err,db) {
        if(err){
            console.log(err);
            console.log("数据库连接失败");
            return;
        }
        db.collection('user').deleteOne({"name":name},function (error,data) {
            if(error){
                console.log('删除数据失败');
                return;
            }
            console.log(data);
              res.send('删除数据成功');
            db.close();/*关闭数据库*/
        })
    })
})
