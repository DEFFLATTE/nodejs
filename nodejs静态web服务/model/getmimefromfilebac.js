
var fs = require('fs');
exports.getMime = function (fs,exname) {

     //,html
    console.log('1')
        fs.readFile('./mime.json',function (err,data) {
            if(err){
                console.log('json文件不存在');
                return false
            }
            // console.log(data.toString());
            var Mime=JSON.parse(data.toString());

            // console.log(Mime[exname]);
            console.log('2')
            return Mime[exname]||'text/html';

        })
    console.log('3')
 
}