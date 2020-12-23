/*let txt = new String('string')
console.log(txt.constructor)*/

/*
// charAt()返回在指定位置的字符。
let str = new String("RUNOOB");
console.log("str.charAt(0) 为:" + str.charAt(0)); // R
console.log("str.charAt(1) 为:" + str.charAt(1)); // U
console.log("str.charAt(2) 为:" + str.charAt(2)); // N
console.log("str.charAt(3) 为:" + str.charAt(3)); // O
console.log("str.charAt(4) 为:" + str.charAt(4)); // O
console.log("str.charAt(5) 为:" + str.charAt(5)); // B
*/

// concat()连接两个或更多字符串，并返回新的字符串。
/*
let str1 = new String( "RUNOOB" );
let str2 = new String( "GOOGLE" );
let str3: string;
// @ts-ignore
str3 = str1.concat(str2);
console.log("str1 + str2 : " + str3) // RUNOOBGOOGLE
*/

// indexOf()返回某个指定的字符串值在字符串中首次出现的位置。
/*let en = 'this is a string'

console.log(en.indexOf('a'))*/

// lastIndexOf()从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。

let str4 = new String( "This is string one and again string" );
let index = str4.lastIndexOf( "string" );
console.log("lastIndexOf 查找到的最后字符串位置 :" + index ); // 29

index = str4.lastIndexOf( "one" );
console.log("lastIndexOf 查找到的最后字符串位置 :" + index ); // 15
