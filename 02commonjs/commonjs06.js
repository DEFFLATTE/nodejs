var nav =require('nav');


//nav在根目录不存在，去node_modules,找到了nav文件夹，nav文件夹下面有package.json

//找package.json入口文件"main":"nav.js"

console.log(nav);

//npm 安装的模块就是这样引入的  npm init --yes  进入目录运行这个命令