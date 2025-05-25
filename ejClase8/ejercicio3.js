//escribir un programa que 
//Pida al usuario que ingrese dos números.
//Sume ambos números.
//Muestre el resultado de la suma.

const prompt = require("prompt-sync")({ sigint: true });

let a = parseFloat(prompt ("ingrese numero: "));
let b = parseFloat(prompt ("ingrese numero a sumar: "));
const suma = a + b 

console.log("resultado: ", suma);