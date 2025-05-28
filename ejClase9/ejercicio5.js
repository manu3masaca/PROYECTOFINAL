//Escribe un programa que pida al usuario que ingrese tres números y
//determine cuál es el mayor de los tres.

const prompt = require("prompt-sync")({ sigint: true });

//pedir al usuario 3 numeros
let numero1 = parseInt(prompt("ingrese un numero: "));
let numero2 = parseInt(prompt("ingrese segundo numero: "));
let numero3 = parseInt(prompt("ingrese tercer numero: "));

// determinar cual numero es mayor
if (numero1 > numero2 , numero1 > numero3 ){console.log("el " + numero1 + " es el mayor");
} else if (numero2 > numero1 , numero2 > numero3){console.log("el " + numero2 + " es el mayor");
} else if (numero3 > numero1 , numero3 > numero2){console.log("el " + numero3 + " es el mayor");}
