// 1.改造for循环 递归实现    2.nodejs里面的新特性  async await
const fs = require('fs');
const { rejects } = require('assert');
var path = './wwwroot';
// fs.readdir(path,(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data)
//     let arr = [];
//         (function getDir(i){
//             if(i==data.length){
//                 console.log(arr);
//                 return
//             }
//             fs.stat(`${path}/${data[i]}`,(err,stats)=>{
//                 if(err){
//                     console.log(err);
//                     return;
//                 }
//                 console.log(`是目录${stats.isDirectory()}`);
//                 if(stats.isDirectory()){
//                 // console.log(data)
//                     arr.push(data[i])
//                 }
//                 getDir(i+1)
//             })
//         })(0)
       
    
//     console.log(arr)
// })

// 1.判断是文件还是目录
async function isDir(path){
    return new Promise((resolve,reject)=>{
        fs.stat(path,(error,stats)=>{
            if(error){
                console.log(error)
                reject(error);
            }
            if(stats.isDirectory()){
                resolve(true);
            }else{
                resolve(false);
            }
        })
    })
}
// 2.获取wwwroot里面的所有资源  循环遍历

 function main(){
    var dirArr = [];
    fs.readdir(path,async (err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    // data.map(async item=>{
    //     if(await isDir(path+'/'+item)){
    //         dirArr.push(item)
    //     }
    // })
    for(var i=0;i<data.length;i++){
           if(await isDir(path+'/'+data[i])){
            dirArr.push(data[i])
        } 
    }
    console.log(dirArr);

})
}
main();