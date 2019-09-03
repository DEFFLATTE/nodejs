var fs = require("fs");
var data = '我是从数据库获取的数据，我要保存起来11\n';


//创建一个可以写入的流，写入到文件output.txt中
var writeStream = fs.createWriteStream('output.txt');
for(var i=0;i<100;i++){
    writeStream.write(data,'utf8');
}


//标记写入完成
writeStream.end();

writeStream.on('finish',function () {
    console.log('写入完成');
})
writeStream.on('error',function () {
    console.log('写入失败');
})