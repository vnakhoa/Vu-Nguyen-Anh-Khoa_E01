import { question } from "readline-sync";

let a: number;
let b: number;
a = Number(question('Nhap a: '));  //kiểu dữ liệu: viết thường "number"   ,  ép dữ liệu viết hoa "Number".
b = Number(question('Nhap b: '));  // Ko ép kiểu thì question() trả về string.

let tong: number = a + b;
let thuong: number = a / b;

console.log("a+b = ", tong);
console.log("a/b = ", thuong);