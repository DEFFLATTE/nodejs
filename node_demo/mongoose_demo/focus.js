var  FocusModel = require("./module/focus.js");


var focus = new FocusModel({
    title:"          我是一个国际新闻6666666         ",
    pic:'http://www.xxx.com/x.png',  //http://
    redirect:"https://www.aaa.com"
})

focus.save(function(err){
    if(err){
        console.log(err);
        return;
    }
    FocusModel.find({},function(err,docs){
        if(err){
            console.log(err);
            return;
        }
        console.log(docs)
    })
})
