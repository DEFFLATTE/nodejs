const fs = require('fs');

var str = '';
for(var i=0;i<500;i++){

    str +='秘制汉堡系：一日三餐没烦恼，今天就吃老八秘制小汉堡。即实惠，还管饱。臭豆腐，腐乳，加柠檬，你看这汉堡做的行不行。奥利给，兄弟们，造它就完了。吧唧吧唧，咔~咔咔~咔。111111\n';
}

var writeStream = fs.createWriteStream('./data/output.txt');

writeStream.write(str);

// 标记写入完成
writeStream.end();

writeStream.on('finish',()=>{
    console.log('写入完成');
})