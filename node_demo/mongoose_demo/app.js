// mongoose已实现性能优化
console.time('user');
const UserModel = require("./module/user")
console.timeEnd('user')


console.time('news');
const NewsModel = require("./module/news")
console.timeEnd('news')

