// Escribe un programa que calcule el precio final de un producto después de aplicar un descuento. Pide al usuario que 
// ingrese el precio original y el porcentaje de descuento, y muestra el precio final. 
// let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese el precio original y el descuento
let precioOriginal = parseFloat(prompt("Ingrese el precio del producto: "));
let Descuento = parseFloat(prompt("Ingrese el porcentaje de descuento: ")); 

// Calcular el monto final
let montoDescuento = precioOriginal * (Descuento / 100);
let precioFinal = precioOriginal - montoDescuento;

// Mostrar el resultado en la consola
console.log("El precio final del producto es: " + precioFinal.toFixed(2));
