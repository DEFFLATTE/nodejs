// 回调函数解决异步
/*
function getData(callback){
    // ajax
    setTimeout(function(){
        var name = 'zhangsan';
        callback(name)
    },1000);
}
getData(function(name){
    console.log(name)
})
*/
/*Promise来处理异步*/
// var p = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         var name = 'zhangsan';
//         resolve(name)
//     },1000);
// })
// p.then((value)=>{
//     console.log(value);
// })


/*async await来处理异步*/
async function getData(){
    // ajax
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            var name = 'zhangsan';
            resolve(name)
        },1000);
    })
    
}
async function main(){
    let name = await getData();
    console.log(name);
}
main();