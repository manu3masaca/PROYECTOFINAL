//Tienes una lista de palabras en una oración. Debes:
// 1. Dividir la oración en palabras individuales.
// 2. Clasificar las palabras en dos categorías:
// ▪ Cortas (menos de 5 letras)
// ▪ Largas (5 letras o más)
// 3. Mostrar ambas listas de palabras clasificadas.
// 4. La oración es: "JavaScript es un lenguaje poderoso y versátil".

// Oración dada
let oracion = "JavaScript es un lenguaje poderoso y versátil";

// 1. Dividir la oración en palabras
let palabras = oracion.split(" ");

// 2. Clasificar palabras en cortas y largas
let cortas = [];
let largas = [];

for (let palabra of palabras) {
  if (palabra.length < 5) {
    cortas.push(palabra);
  } else {
    largas.push(palabra);
  }
}

// 3. Mostrar ambas listas
console.log("Palabras cortas (menor a 5 letras):", cortas);
console.log("Palabras largas (mayor o igual a 5 letras):", largas);
