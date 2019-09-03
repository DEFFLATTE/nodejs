//npm install md5-node

//注意安装模块的时候我们要把这个模块写入到package.json这个配置文件

//npm install md5-node --save 或者 npm install md5-node --save-dev


//有时候npm install 下载不下来 很慢

//如果安装完成淘宝镜像  可以用cnpm 安装


var md5 = require('md5-node');
var sd = require('silly-datetime');
console.log(md5('123456'));
let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
let year = sd.format(new Date(), 'YYYY-MM-DD');
console.log(time)