var foo = require('foo');
/*
* foo默认在目录下没有，没有的话nodejs会在node_modules里面找这个模块
* */
console.log(foo.add(1,2));
console.log(foo.sayHello())