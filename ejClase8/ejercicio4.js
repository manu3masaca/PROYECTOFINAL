//escribir un programa que:
//Solicite al usuario que ingrese un número entero.
//Determine si el número es par o impar.
//Muestre un mensaje indicando si el número es par o impar.

const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt ("ingrese numero: "))
resultado = numero % 2

if (resultado === 0){console.log ("numero par")}
else {console.log ("numero impar")}
