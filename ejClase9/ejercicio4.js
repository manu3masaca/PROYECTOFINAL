//Declara una variable nombre y pide al usuario que ingrese su nombre.
//Verifica si el nombre ingresado es igual a tu nombre.

const prompt = require("prompt-sync")({ sigint: true });

//declarar variables
let usuario = ("manu");
let nombre = prompt("ingrese su nombre: ").toLowerCase();

//verifican si los nombres coinciden
if (nombre === usuario){console.log("bienvenida " + usuario);
} else if (nombre !== usuario){console.log("nombre no coincide");}