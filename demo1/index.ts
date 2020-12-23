
/*let num:number = 0;
let count:number = 0;

for(num=0;num<=20;num++) {
    if(num % 2 == 0) {
        continue
    }
    count++
}

console.log(count);*/

//函数
/*function add():string {
    return '这是一个字符串'
}

function getAdd() {
    console.log( add())
}

getAdd()*/

//带参数
/*function a(x:number,y:number):string {
    let n:string;
    return n = (x + y)+'string'
}

console.log(a(2,3))*/

//可选参数(可选参数必须跟在必需参数后面)
/*function b(x:number,y:number,z?:number) {
    if(z){
        return x + y + z
    }
    return x + y
}

let listItem = b(1,2)
let bb = b(1,2,3)
console.log(listItem)
console.log(bb)*/

//默认参数
/*function c(x:number=1,y?:string) {
        if(y)return x + y
    return x
}

console.log(c(3,'heihei'))
console.log(c(5))*/

//剩余参数
/*function d(x,...y:string[]) {
    return x + y.join(',')
}

function e(x,...y:number[]) {
    for(let i=0;i<y.length;i++) {
        x += y[i]
    }
    return x
}

console.log(d('heihei','jajaja','haha','xixi'))
console.log(e(1,3,5,7,9))*/

//函数自调用(立即执行函数)
/*(function () {
    let x = 'zidiaoyogn'
    console.log(x)
})()*/

//构造函数
/*let  myFunction = new Function('a','b','return a * b')
let x = myFunction(4,3)
console.log(x)*/

//递归函数
/*function factorial(number) {
    if(number<=0) return 1
    else{
        return number * factorial(number-1)
    }
}
console.log(factorial(6))*/

//Lambda 函数(箭头函数)
/*const f = (x:number) => 10 + x
console.log(f(5))*/
