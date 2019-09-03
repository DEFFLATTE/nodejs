
var fs = require('fs');
var events = require('events');
var EventEmitter = new events.EventEmitter();
// exports.getMime = function (fs,exname) {
//
//      //,html
//     console.log('1')
//         fs.readFile('./mime.json',function (err,data) {
//             if(err){
//                 console.log('json文件不存在');
//                 return false
//             }
//             // console.log(data.toString());
//             var Mime=JSON.parse(data.toString());
//
//             // console.log(Mime[exname]);
//             console.log('2')
//             // return Mime[exname]||'text/html';
//             EventEmitter.emit('data',Mime)
//
//         })
//     console.log('3')
//     EventEmitter.on('data',function (data) {
//         console.log(data[exname])
//         return data[exname]||'text/html';
//     })
//
// }
exports.getMime = function (fs,exname,callback) {

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
         var result =  Mime[exname]||'text/html';

        callback(result)

    })
    console.log('3')

}