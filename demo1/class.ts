/*class Car{
    //字段
    engine:string;
    //构造函数
    constructor(engine:string) {
        this.engine = engine
    }
    //方法
    disp():void {
        console.log('发动机为'+ this.engine)
    }
}

let car = new Car('engine')
console.log(car.engine)
car.disp()*/

//类的继承(子类只能继承一个父类，TypeScript 不支持继承多个类，但支持多重继承)
/*class Shape {
    Area:number

    constructor(a:number) {
        this.Area = a
    }
}

class Circle extends Shape{
    disp():void {
        console.log('圆的面积' + this.Area)
    }
}

let circle  = new Circle(223)
circle.disp()*/

//多重继承
/*class Root {
    str:string;
}

class Child extends Root {}
class Leaf extends Child {} // 多重继承，继承了 Child 和 Root 类

let obj = new Leaf();
obj.str ="hello"
console.log(obj.str)*/


//继承类的方法重写
/*class PrinterClass {
    doPrint():void{
        console.log('父类的doPrint方法')
    }
}

class StringPrinter extends PrinterClass{
    doPrint(): void {
        super.doPrint();//调用父类的函数
        console.log('子类的doPrint方法')
    }
}

let printer = new StringPrinter()
printer.doPrint()*/

//static 关键字(static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。)
/*class StaticMem {
    static num:number;
    static disp():void {
        console.log('num的值为' + StaticMem.num)
    }
}

StaticMem.num = 12 // 初始化静态变量
StaticMem.disp() // 调用静态方法*/

//instanceof 运算符(instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。)
/*
class Person {
}
let obj = new Person()
let isPerson = obj instanceof Person;
console.log('obj对象是Person类实例化来的吗' + isPerson)
*/

// 访问控制修饰符
/*
// public（默认） : 公有，可以在任何地方被访问。
// protected : 受保护，可以被其自身以及其子类和父类访问。
// private : 私有，只能被其定义所在的类访问。

class Encapsulate {
    str1:string = "hello"
    private str2:string = "world"
}

let obj = new Encapsulate()
console.log(obj.str1)     // 可访问
console.log(obj.str2)   // 编译错误， str2 是私有的*/

//类和接口
