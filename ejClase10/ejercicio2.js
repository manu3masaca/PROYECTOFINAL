// deberás:
// 1.	Pide al usuario que ingrese su nombre.
// 2.	Pide al usuario que ingrese su edad.
// 3.	Pide al usuario que ingrese su peso.
// 4.	Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.

const prompt = require('prompt-sync')();

// 1. Pide al usuario que ingrese sus datos
let nombre = prompt('Ingrese su nombre: ').toLowerCase();
let edad = parseInt (prompt('Ingrese su edad: '));
let peso = parseInt (prompt('Ingrese su peso: '));

// 2. muestra el mensaje personalizado
console.log("hola " + nombre + ", tus datos son: " + "-peso:" + peso + " -edad:" + edad + " años");