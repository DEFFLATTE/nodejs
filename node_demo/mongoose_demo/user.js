var  UserModel = require("./module/user.js");

// var user = new UserModel()

// user.name = "张三",
// user.age = 20



var user = new UserModel({
    name:'赵si',
    sn:'sn123456789',
    age:140,
    sex:'男',
    status:'success'
})

// console.log(user.name,user.age);

user.save();

// UserModel.findBySn('123456783',function(err,docs){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(docs)
// })

// user.print();//自定义的实例方法



// user.save((err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     UserModel.find({},function(err,docs){
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(docs);
//     })
// })

// UserModel.find({},function(err,docs){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(docs);
// })