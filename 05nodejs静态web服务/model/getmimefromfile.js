
exports.getMime = function (fs,exname) {

    //    把读取改成同步
    var data=fs.readFileSync('./mime.json');
    //data.toString() 转换成JSON字符串
    var Mime = JSON.parse(data.toString());/**/
    return Mime[exname]||'text/html';
    console.log('3')
 
}