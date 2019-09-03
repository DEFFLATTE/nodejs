var fs = require('fs');
// console.log('1');
//
// fs.readFile('mime.json',function (err,data) {
//     // console.log(data);
//     console.log('2');
// })



// console.log('3');

//非阻塞io


function getMime() {
    fs.readFile('mime.json',function (err,data) {
    return data.toString()
        })
}

console.log(getMime());/*有问题*/