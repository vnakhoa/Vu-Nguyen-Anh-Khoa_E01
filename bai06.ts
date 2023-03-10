// import { question } from "readline-sync";

const a: number = 1283;
let donVi: number;
donVi = a % 1280;

let hangChuc: number;
hangChuc = (a % 1203)/10;

let hangTram: number;
hangTram = (a % 1083)/100;

console.log('Hang don vi: ',donVi);
console.log('Hang chuc: ',hangChuc);
console.log('Hang tram: ',hangTram);