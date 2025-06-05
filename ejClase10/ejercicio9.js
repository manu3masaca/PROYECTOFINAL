// Escribe un programa que calcule el Índice de Masa Corporal (IMC). El IMC se calcula con la fórmula:
// IMC = peso / (altura * altura) pidiendo al usuario que ingrese su peso en kilogramos y su altura en metros.
//  Muestra el resultado 

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese su peso y altura
let peso = parseFloat(prompt("Ingrese su peso en kilogramos: "));
let altura = parseFloat(prompt("Ingrese su altura en metros: "));

// Calcular el IMC
let imc = peso / (altura * altura);

// Mostrar el resultado en la consola
console.log("Su Índice de Masa Corporal es: " + imc.toFixed(2));
