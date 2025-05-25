//escribir un programa que: 
//-solicite al usuario un nuemero cualquiera
//-calcule el doble de ese numero
//-muestre el resultado en la consola

const prompt = require("prompt-sync")({ sigint: true }); 

let numero = prompt("ingrese un numero: ");
const resultado = numero * 2

console.log("resultado: ", resultado);



