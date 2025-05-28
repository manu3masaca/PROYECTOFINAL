//Define una constante PI con el valor de pi (3.14159). Pide al usuario
//que ingrese el radio de un círculo y calcula su área y perímetro
//utilizando la constante PI.

const prompt = require("prompt-sync")({ sigint: true });

//crear constante PI
const PI = 3.14159;

//pedir al usuario el radio
let radio = parseFloat(prompt("ingrese el radio del circulo: "))

//calcular area y perimetro
let area = PI * Math.pow(radio, 2);
let perimetro = 2 * PI * radio;

//respuestas
console.log("el area del circulo es: " + area);
console.log("el perimetro del ceirculo es: " + perimetro);