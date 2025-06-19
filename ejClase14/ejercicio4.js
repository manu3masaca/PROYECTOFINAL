//Solicita al usuario la cantidad de productos comprados y el precio unitario.
// Usa una función flecha para calcular el total con descuento según la
// cantidad.

const prompt = require('prompt-sync')();

// Preguntar cuántos productos diferentes va a ingresar
let numProductos = parseInt(prompt("¿Cuántos productos desea ingresar?"));

let cantidades = [];
let precios = [];

// Pedir cantidad y precio de cada producto
for (let i = 1; i <= numProductos; i++) {
  let cantidad = parseInt(prompt(`Ingrese la cantidad del producto #${i}:`));
  let precio = parseFloat(prompt(`Ingrese el precio unitario del producto #${i}:`));
  
  cantidades.push(cantidad);
  precios.push(precio);
}

// Función flecha para calcular el total con descuento
const calcularTotalConDescuento = (cantidades, precios) => {
  // Calcular total sin descuento y cantidad total
  let total = 0;
  let totalCantidad = 0;

  for (let i = 0; i < cantidades.length; i++) {
    total += cantidades[i] * precios[i];
    totalCantidad += cantidades[i];
  }

  // Determinar descuento por cantidad total
  let descuento = 0;
  if (totalCantidad >= 10 && totalCantidad < 20) {
    descuento = 0.10;
  } else if (totalCantidad >= 20) {
    descuento = 0.20;
  }

  return total - (total * descuento);
};

// Calcular total y mostrar
let totalFinal = calcularTotalConDescuento(cantidades, precios);
console.log(`El total a pagar con descuento es: $${totalFinal.toFixed(2)}`);