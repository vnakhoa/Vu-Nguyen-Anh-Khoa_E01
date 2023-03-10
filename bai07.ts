import { question } from "readline-sync";
// import Math;

let x: number = Number(question('Nhap x: '));
let y: number = Number(question('Nhap y: '));

let s: number;
s = Math.sqrt(x**y);

console.log(s);