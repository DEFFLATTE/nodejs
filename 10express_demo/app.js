
var express=require('express');/*引入*/
var app = express();/*实例化*/

app.get('/',function (req,res) {
    res.send('你好express11');
})

app.listen(8888,'127.0.0.1')

