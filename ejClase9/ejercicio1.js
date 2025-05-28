//Declara dos variables numéricas numero1 y numero2. Pide al usuario
//que ingrese dos números y muestra cuál es mayor o si son iguales.

const prompt = require("prompt-sync")({ sigint: true });

//declarar 2 variables que se le piden al usuario
let numero1 = parseInt(prompt ("ingrese un numero: "));
let numero2 = parseInt(prompt ("ingrese otro numero: "));

//ver si es mayor o igual
if (numero1 > numero2){console.log(numero1 + " es mayor que " + numero2);}
else if (numero1 < numero2){console.log(numero2 + " es mayor que " + numero1);}
else {console.log(numero1 + " es igual que " + numero2)}

