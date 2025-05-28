//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
//valores numéricos de tu elección. Pide al usuario que ingrese un
//número y verifica si está dentro del rango definido por las constantes.

const prompt = require("prompt-sync")({ sigint: true });

//definir constantes
const RANGO_MINIMO = 0 
const RANGO_MAXIMO = 9

//pedir al usuario un numero
let numero = parseInt(prompt("ingrese un numero: "));

//verificar si el numero esta dentro del rango de las constantes
if (numero >= RANGO_MINIMO){console.log(numero + " esta dentro del rango");
} else if (numero <= RANGO_MAXIMO){console.log(numero + " esta dento del rango");
} else {console.log(numero + " NO esta dentro del rango");}

if (numero > RANGO_MAXIMO){console.log(numero + " NO esta dentro del rango");
} else if (numero < RANGO_MINIMO){console.log(numero + " NO esta dentro del rango");}