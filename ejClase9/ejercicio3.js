//Declara dos variables booleanas condicion1 y condicion2. Pide al
//usuario que ingrese dos valores booleanos (true o false) y muestra el
//resultado de diversas combinaciones lógicas.

const prompt = require("prompt-sync")({ sigint: true });

//declarar variables booleanas
let respuesta1 = prompt("ingrese respuesta verdadero/falso: ").toLowerCase();
let respuesta2 = prompt("ingrese otra respuesta verdadero/falso: ").toLowerCase();

//convertir a booleanos reales
let condicion1 = (respuesta1 === "verdadero");
let condicion2 = (respuesta2 === "verdadero");

//mostrar los resultados de combinaciones logicas
console.log("resultados logicos: ");
console.log("respuesta 1 AND respuesta 2:" , condicion1 && condicion2);
console.log("respuesta 1 OR respuesta 2: " , condicion1 || condicion2);
console.log("NOT respuesta 1: " , !condicion1);
console.log("NOT respuesta 2: " , !condicion2);

