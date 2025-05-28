//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la
//semana correspondiente. Si el número no está dentro de ese rango,
//muestra un mensaje de error.

const prompt = require("prompt-sync")({ sigint: true });

//pedir numero al usuario
let numero = parseFloat(prompt("ingrese un dia de la semana en numero: "));
const dia = {
    1: "lunes",
    2: "martes",
    3: "miercoles",
    4: "jueves",
    5: "viernes",
    6: "sabado",
    7: "domingo",
}
 
//mostrar dias correspondientes o error
if (numero in dia){console.log(numero + " es igual a " + dia[numero]);
} else {console.log("numero invalido, ingresar numero entre 1 y 7");}