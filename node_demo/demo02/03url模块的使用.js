const url = require('url');

var api = 'http://itying.com?name=zhangsan&age=20';

console.log(url.parse(api,true))

let getValue = url.parse(api,true).query;

const {name,age} = getValue

console.log(`姓名：${name}---年龄：${age}`)

