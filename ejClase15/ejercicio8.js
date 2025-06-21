//Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte
//"gatos" utilizando el método adecuado.

let frase = "Los gatos son geniales";

// Extraer "gatos"
let palabra = frase.substring(4, 9); // empieza en el índice 4 y termina antes del 9

console.log(palabra);