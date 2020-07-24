/*
  1.我们可以把公共的功能抽离成为一个单独的js文件作为一个模块，
  默认情况下这个模块里面的方法或者属性，外面是没法访问的。
  如果要让外部可以访问模块里面的方法或者属性，
  就必须在模块里面通过exports或者module.exports暴露属性或者方法。

  2.在需要使用这些模块的文件中，通过require的方式引入这个模块。
  这个时候就可以使用模块里面暴露的属性和方法
 */ 

 var request = require('./module/request');
 
//  console.log(request);    //{ xxxx: { get: [Function: get], post: [Function: post] } }

// console.log(request);   //{ get: [Function: get], post: [Function: post] }

console.log(request);   //{ get: [Function: get], post: [Function: post] }
request.get();
request.post();