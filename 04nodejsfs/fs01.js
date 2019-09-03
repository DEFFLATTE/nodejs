/*
* 1.fs.stat 检测是文件还是目录
* 2.fs.mkdir 创建目录
* 3.fs.writeFile 创建写入文件
* 4.fs.appendFile 追加文件
* 5.fs.readFile 读取文件
* 6.fs.readdir 读取目录
* 7.fs.rename 重命名
* 8.fs.rmdir 删除目录
* 9.fs.unlink 删除文件
* */
var fs = require('fs');

// fs.stat('index.txt',function (err,stats) {
//     if(err){
//         console.log(err);
//         return false
//     }
//     console.log('文件:'+stats.isFile())
//     console.log('目录:'+stats.isDirectory())
// })

/*
* 接受参数：
* path   将创建的目录路径
* mode   目录权限（读写权限），默认0777
* callback  回调，传递异常参数err
* */
// fs.mkdir('css',function (err) {
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('创建成功')
// })


/*
* 接受参数：
* filename  文件名称
* data      将要写入的内容可以是字符串或bnuffer数据
* options   option数组对象，包含:
* .encoding   可选值 默认 utf-8,当data是buffer时，该值应该为ignored
* .mode         文件读写权限，默认值 438
* .flag        默认值  'w'
* callback  回调，传递异常参数err
* */
// fs.writeFile('t.txt','你好，nodejs 覆盖','utf8',function (err) {
//          if(err){
//          console.log(err);
//          return
//      }
//      console.log('写入成功')
// })


//
// fs.appendFile('t1.txt','这是写入的内容\n',function (err) {
//     if(err){
//          console.log(err);
//          return
//      }
//      console.log('写入成功')
// })


//
// fs.readFile('t1.txt',function (err,data) {
//         if(err){
//          console.log(err);
//          return
//      }
//      // console.log(data);
//
//     console.log(data.toString())
// })

// fs.readdir('html',function (err,data) {
//     if(err){
//         console.log(err);
//         return
//     }
//     // console.log(data);
//
//     console.log(data)
// })

//拿到一个文件夹下面的所有目录



//1.改名 2.剪切文件
// fs.rename('html/index.html','html/new.html',function (err) {
//         if(err){
//         console.log(err);
//     }
// })

// fs.rename('html/style.css','html/css/basic.css',function (err) {
//     if(err){
//         console.log(err);
//     }
//     console.log('剪切成功')
// })



//   rmdir只能删除目录
// fs.rmdir('html/t',function (err) {
//         if(err){
//         console.log(err);
//          return false
//     }
//     console.log('删除目录成功')
// })
//
fs.unlink('index.txt',function (err) {
    if(err){
        console.log(err);
        return false
    }
    console.log('删除文件成功')
})


















