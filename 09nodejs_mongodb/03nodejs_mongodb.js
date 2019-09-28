var http = require('http');

var ejs = require('ejs');

var MongoClient = require('mongodb').MongoClient;/*引入数据库MongoClient*/

var DBurl = 'mongodb://localhost:27017/itying';//连接数据库的地址 student表示数据库的名称
var url = require('url');
var app = require('./model/express_route');

http.createServer(app).listen(8888);

app.get('/',function (req,res) {
    MongoClient.connect(DBurl,function (err,db) {
        if(err){
            console.log('链接数据库失败');
            return
        }
    //    查询数据
        var list = [];/*放数据库里面的所有数据*/

        var result = db.collection('user').find();

        result.each(function (error,doc) {
            if(error){
                console.log(error)
            }else{
                if(doc!=null){
                    list.push(doc);
                }else{/*doc==null表示数据循环完成*/
                    console.log(list)
                    ejs.renderFile('views/index.ejs',{list:list},function (err,data) {
                        res.send(data);
                    })
                }
            }
        })

    })
    // var msg = '这是数据库数据'
    // ejs.renderFile('views/index.ejs',{msg:msg},function (err,data) {
    //     res.send(data);
    // })
})
app.get('/add',function (req,res) {
    MongoClient.connect(DBurl,function (err,db) {
        if(err){
            console.log('链接数据库失败');
            return
        }
        db.collection('user').insertOne({"name":'xiangxiang',"age":22},function (error,data) {
            if(error){
                console.log('增加数据失败')
                return
            };
            console.log(data);
            res.send('增加数据成功')
            db.close();
        })
    })
})
