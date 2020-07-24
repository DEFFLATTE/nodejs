// 2.wwwroot文件夹下面有images css js 以及index.html,找出wwwroot目录下面的所有的目录,然后放在一个数组中

const fs = require('fs');
var path = './wwwroot';
/*
fs.readdir(path,(err,data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data)
    let arr = [];
    data.map(item=>{
        fs.stat(`${path}/${item}`,(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(`是目录${data.isDirectory()}`);
            if(data.isDirectory()){
                arr.push(item)
            }
        })
    })
    console.log(arr)
})
*/

// 1.改造for循环 递归实现    2.nodejs里面的新特性  async await

fs.readdir(path,(err,data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data)
    let arr = [];
        (function getDir(i){
            if(i==data.length){
                console.log(arr);
                return
            }
            fs.stat(`${path}/${data[i]}`,(err,stats)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(`是目录${stats.isDirectory()}`);
                if(stats.isDirectory()){
                // console.log(data)
                    arr.push(data[i])
                }
                getDir(i+1)
            })
        })(0)
       
    
    console.log(arr)
})



