

exports.getMime = function (fs,EventEmitter,exname) {

     //,html
    console.log('1')
        fs.readFile('./mime.json',function (err,data) {
            if(err){
                console.log('json文件不存在');
                return false
            }
            // console.log(data.toString());
            var Mime=JSON.parse(data.toString());
            var result = Mime[exname]||'text/html';
            EventEmitter.emit('to_mime',result)

        })

}
