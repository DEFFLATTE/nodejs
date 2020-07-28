const http = require('http');
const app = require('./module/routes');
const ejs = require('ejs');
const queryString = require('querystring');
const { MongoClient } = require('mongodb')
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'itying';
// const client = new MongoClient(url,{ useUnifiedTopology: true });

// 注册web服务
http.createServer(app).listen(9999);

app.static("public");//修改默认静态web目录

console.log('Server running at http://127.0.0.1:9999/');


// http:127.0.0.1:9999/news

// 配置路由
app.get('/', (req, res) => {
    MongoClient.connect(url,{ useUnifiedTopology: true },(err,client) => {
            if (err) {
                console.log(err);
                return;
            }
            let db = client.db(dbName);
            // 查询数据
            db.collection("user").find({}).toArray((err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
                client.close();//关闭数据库连接
                ejs.renderFile('./views/index.ejs', {
                    list: result
                }, (err, data) => {
                    res.send(data);
                })
            })
        })
})
app.get('/register', (req, res) => {

    ejs.renderFile("./views/register.ejs", {}, (err, data) => {
        // res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8'});
        // res.end(data);
        res.send(data);
    })
})
app.post('/doRegister', (req, res) => {
    // name=1&age=1
    let body = queryString.parse(req.body);
    MongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
        if(err){
            console.log(err);
            return;
        }
        let db = client.db(dbName);
        db.collection("user").insertOne(body,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("插入一条数据成功");
            res.send("插入一条数据成功");
        })
    })
})

