//escribir un programa que:
//-Pida al usuario que ingrese un número.
//-Verifique si el número es positivo, negativo o igual a cero.
//-Muestre un mensaje indicando cuál es el caso.

const prompt = require("prompt-sync")({ sigint: true });

let numero = prompt ("ingrese un numero: ");
if (numero > 0){console.log("numero positivo");} 
else if (numero < 0){console.log("numero negativo");} 
else {console.log("numero es 0");} 

console.log(parseFloat(numero));

