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
var child = {
    v1: 1,
    v2: 'string',
    v3: ['aa', 'bb', 'cc']
};
console.log(child.v1, child.v2, child.v3);
