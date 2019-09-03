var fs = require('fs');
//回调函数解决异步问题
function getMime(callback) {
    fs.readFile('mime.json',function (err,data) {


            callback(data.toString())

        })
}

getMime(function (res) {
    console.log(res);
})