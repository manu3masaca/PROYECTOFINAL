//Pide al usuario que ingrese su edad y verifica si es mayor o menor de
//edad. Muestra un mensaje personalizado según el caso.

const prompt = require("prompt-sync")({ sigint: true });

// pedir al usuario su edad
let edad = parseInt(prompt("ingrese su edad: "));

//verificar si es mayor de edad
if (edad > 18){console.log(" TE DAMOS LA BIENVENIDA ");
} else if (edad < 18){console.log(" NO SE AUTORIZO LA ENTRADA");}


