//escribir un programa que 
//Solicite al usuario que ingrese su nombre.
//Muestre un saludo personalizado usando el nombre ingresado.

const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("ingrese su nombre: ");
console.log("un placer conocerte "+ nombre)