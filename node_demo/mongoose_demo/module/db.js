const mongoose = require("mongoose");

// useNewUrlParser这个属性会在url里识别验证用户所需的db,为升级前是不需要指定的，升级后一定要指定

mongoose.connect('mongodb://127.0.0.1:27017/itying',{useNewUrlParser:true,useUnifiedTopology:true},function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("数据库连接成功")
});

module.exports=mongoose;