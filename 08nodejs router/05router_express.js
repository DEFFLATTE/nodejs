
var G ={};

var app=function (req,res) {
    console.log('app'+req);
    if(G['login']){
        G['login'](req,res);/*执行注册的方法*/
    }
}
//定义一个get方法
app.get=function (string,callback) {
    console.log('app.get')
    //注册方法
    G[string]=callback;
    // G['login']=function (req,res) {
    //
    // }
}
// app.post=function () {
//     console.log('app.post')
// }

//执行get方法
app.get('login',function (req,res) {
    console.log('login'+req)
})

setTimeout(function () {
    app('req','req');
},1000)
