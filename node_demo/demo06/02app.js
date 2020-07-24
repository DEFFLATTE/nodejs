
// 1.判断服务器上面有没有upload目录，如果没有创建这个目录，如果有不作操作。
const fs = require('fs');
var path = './upload'
fs.stat('./upload',(err,data)=>{
    if(err){
    //    执行创建目录
        mkdir(path)
        return
    }

    if(data.isDirectory()){
        console.log('upload存在')
    }else{
        //    首先删除文件，再执行创建目录
        fs.unlink(path,(error)=>{
            if(!error){
                mkdir(path)
            }else{
                console.log('请检测传入的数据是否正确')
            }
        })
    }
})

function mkdir(dir){
    fs.mkdir(dir,(err)=>{
        if(err){
            console.log(errr);
            return
        }
        console.log('创建成功')
    })
}
