/*
console.log("TypeScript Number 属性: ");
console.log("最大值为: " + Number.MAX_VALUE);
console.log("最小值为: " + Number.MIN_VALUE);
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
console.log("正无穷大:" + Number.POSITIVE_INFINITY);
*/

//NaN 实例
/*
let month = 0
if(month<=0 || month>12){
    month = Number.NaN
    console.log('月份是' + month)
}else {
    console.log('输入月份数值正确')
}
*/

//prototype 实例
function employee(id:number,name:string) {
    this.id = id
    this.name = name
}

let emp = new employee(123,'赵银萍')
employee.prototype.email = '1528466340@qq.com'

console.log(emp.id)
console.log(emp.name)
console.log(emp.email)

