//Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una
// función flecha para calcular el precio final.

const prompt = require('prompt-sync')();

//solicitar datos
let precio = parseInt(prompt("ingrese el precio de su producto: "));
let iva = parseInt(prompt("ingrse el iva correspondiente al producto: "))

//calcular precio final
const calcularPrecioFinal = (precio, iva) => precio + (precio * iva / 100);
let precioFinal = calcularPrecioFinal(precio, iva);

//mostrar resultados
console.log(`El precio final con IVA es: $${precioFinal.toFixed(2)}`);



