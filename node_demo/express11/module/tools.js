const multer  = require('multer')
const path = require('path')
const sd = require('silly-datetime')
const mkdirp = require('mkdirp')
const { type } = require('os')
// var upload = multer({ dest: 'static/uploads' })//上传之前目录必须存在



let tools={
    multer(){

        var storage = multer.diskStorage({
            // 配置上传的目录
            destination: async (req, file, cb) =>{
              // 1.获取当前日期   20200703
                let day = sd.format(new Date(), 'YYYYMMDD');
                console.log(day);
                console.log(typeof(day))
              // static/upload/20200703
                let dir = path.join("static/uploads",day)
              // 2.按照日期生成图片存储目录   mkdirp是一个异步方法
              await mkdirp(dir)

              cb(null, dir)  //上传之前目录必须存在
            },
            // 修改上传后的文件名
            filename: function (req, file, cb) {
                // 1.获取后缀名
                console.log(file.originalname)
                console.log(typeof(file.originalname))
                let extname = path.extname(file.originalname)
                console.log(extname)
                // 2.根据时间戳生成文件名
              cb(null, Date.now()+extname)
            }
          })
        
        var upload = multer({storage:storage})

        return upload;
    }
}

module.exports = tools;