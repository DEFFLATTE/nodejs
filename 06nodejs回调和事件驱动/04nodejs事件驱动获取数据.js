var fs = require('fs');
var events = require('events');
var EventEmitter = new events.EventEmitter();
//回调函数解决异步问题
function getMime(callback) {
    fs.readFile('mime.json',function (err,data) {
        EventEmitter.emit('to_mime',data)



        })
}
getMime();
EventEmitter.on('to_mime',function (data) {
    console.log(data.toString())
})

