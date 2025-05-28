//Pide al usuario que ingrese su peso en kilogramos y conviértelo a
//libras. Muestra el resultado con un mensaje. (Averigua como pasar de
//kg a libras, Pista: 2.20462)

const prompt = require("prompt-sync")({ sigint: true });
function kilogramosALibras(kilogramos) {return kilogramos * 2.20462;} 

//igresar peso en kg
let kilogramos = parseInt(prompt("ingresa tu peso en kg: "));

// transformar peso a libras
let pesoALibras = kilogramosALibras(kilogramos);

//mostrar mensaje
console.log("tu peso en libras es: " + pesoALibras);
