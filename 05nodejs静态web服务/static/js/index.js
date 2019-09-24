let arr = [1,2,3,4,5];
let str = ''
for(var i= 0;i<arr.length;i++){
    str += '我是js增加的内容'
}
document.getElementsByTagName('p')[0].innerHTML = str