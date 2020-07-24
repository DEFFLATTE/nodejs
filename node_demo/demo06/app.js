//1、 https://www.npmjs.com/package/mkdirp
// 2、npm install mkdirp --save
// 3.const mkdirp = require('mkdirp')
// 4.看文档使用
// 

const mkdirp = require('mkdirp');
// mkdirp('./upload',function(err){
//     if(err){
//         console.log(err);
//     }
// });
mkdirp('./upload').then(made =>
    console.log(`made directories, starting with ${made}`)
    )