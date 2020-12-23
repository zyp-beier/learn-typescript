/*
interface IPerson{
    name: string,
    age:number,
    sayHi: ()=>string
}

let customer:IPerson = {
    name: 'zhaoyinping',
    age: 23,
    sayHi:() => {return `hello`}
}

console.log(customer.name)
console.log(customer.age)
console.log(customer.sayHi())

let employee:IPerson = {
    name: 'beibei',
    age: 23,
    sayHi:() => {return 'heihei'}
}

console.log(employee.name)
console.log(employee.age)
console.log(employee.sayHi())
console.log(employee.sayHi)
*/

//联合类型和接口
/*interface RunOptions {
    program: string;
    commandline:string[]|string|(()=> string)
}
//commandline是字符串
let options:RunOptions = {
    program: 'hehe',
    commandline: '字符串'
}
console.log(options.program)
console.log(options.commandline)

//commandline是字符串数组
options = {
    program: 'gege',
    commandline: ['数组','数组','数组']
}
console.log(options.program)
console.log(options.commandline)

//commandline是函数表达式
options = {
    program:"test1",
    commandline:()=>{return "1+1";}
};
console.log(options.program)
console.log(options.commandline)*/

//接口继承
//单继承示例
/*interface Person {
    age:number
}
interface Musician extends Person{
    instrument:string
}

let drummer = <Musician>{};
drummer.age = 23
drummer.instrument = 'heihei'
console.log(drummer.age)
console.log(drummer.instrument)*/

//多继承实例
interface Iparent1 {
    v1:number
}
interface IPatent2 {
    v2:string
}

interface Child extends Iparent1,IPatent2{
    v3:string[]
}

let child:Child = {
    v1:1,
    v2:'string',
    v3:['aa','bb','cc']
}
console.log(child.v1,child.v2,child.v3)
