import { question } from "readline-sync";

let f: number = Number(question('Nhap f: '));
let c: number;
c = (5/9) * (f - 32);

console.log(c);