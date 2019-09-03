//1.判断服务器上面有没有upload这个目录，没有创建这个目录  （图片上传）
var fs = require('fs');
// fs.stat('upload',function (err,stats) {
//     if(err){
//         fs.mkdir('upload',function (error) {
//             if(error){
//                 console.log(error)
//                 return false;
//             }
//             console.log('创建成功')
//         })
//     }else{
//         console.log('目录已经存在')
//         console.log(stats.isDirectory())
//     }
//
// })




//2.找出html目录下面的所有的目录，然后打印出来
//错误写法
// fs.readdir('html',function (err,data) {
//     if(err){
//         console.log(err)
//         return false
//     }
//     //判断是目录还是文件
//     console.log(data);
//     for(var i=0;i<data.length;i++){
//         console.log(data[i])
//         fs.stat(data[i],function (error,stats) {/*循环判断是目录还是文件  --异步--错误写法*/
//             console.log(data[i])
//         })
//     }
// })
//答应出什么 3 3 3
// for(var i=0;i<=3;i++){
//     setTimeout(function () {
//         console.log(i)
//     },100)
// }

//正确的写法
var fileArr=[];
fs.readdir('html',function (err,data) {
    if(err){
        console.log(err)
        return false
    }
    //判断是目录还是文件  递归学到了！！！！！！！！！！
        (function getFile(i) {
            if(i==data.length){
                console.log(fileArr);
                return false
            }
            fs.stat('html/'+data[i],function (error,stats) {/*循环判断是目录还是文件  --异步--错误写法*/
                if(stats.isDirectory()){
                    fileArr.push(data[i])
                }
            //    递归调用
                getFile(i+1);
            })
        })(0)



})

