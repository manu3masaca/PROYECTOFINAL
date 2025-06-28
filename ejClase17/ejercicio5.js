//A partir del siguiente array de frases, escribe la función “procesarFrases”
// que realice las siguientes tareas:
// 1. Convierta cada frase a minúsculas. Investigar el método
// “.toLowerCase()” para este punto.
// /Global_Objects/String/toLowerCase
// 2. Divida cada frase en palabras.
// 3. Reemplace las palabras "malo" por "bueno".
// 4. Combine las palabras de cada frase en una nueva cadena separada
// por espacios.
// 5. Devuelva un nuevo array con las frases modificadas.

// Array de frases original
let frases = [
  "Este producto es Malo",
  "El servicio fue muy Malo",
  "Tu actitud no es mala, pero podría mejorar",
  "Nada malo ocurrió durante el evento"
];

// Función para procesar las frases
function procesarFrases(arrayFrases) {
  // Usamos map para transformar cada frase
  let frasesProcesadas = arrayFrases.map(frase => {
    // 1. Convertir a minúsculas
    let minuscula = frase.toLowerCase();

    // 2. Dividir en palabras
    let palabras = minuscula.split(" ");

    // 3. Reemplazar "malo" por "bueno"
    palabras = palabras.map(palabra => palabra === "malo" ? "bueno" : palabra);

    // 4. Volver a unir las palabras con espacios
    let fraseFinal = palabras.join(" ");

    return fraseFinal;
  });

  // 5. Devolver el nuevo array con las frases modificadas
  return frasesProcesadas;
}

// Ejecutar la función y mostrar resultado
let resultado = procesarFrases(frases);
console.log(resultado);
