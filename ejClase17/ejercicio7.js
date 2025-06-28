// Escribe una función "gestionarFloreria" que realice las siguientes tareas
// con una lista predefinida de nombres de flores:
// 1. Quite los espacios en blanco alrededor de cada flor.
// 2. Verifique si existe la flor "Margarita" y, si está presente, agregue
// "Azucena" al final de la lista.
// 3. Reemplace todas las flores "Orquídea" por "Clavel".
// 4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue
// "Girasol" al inicio de la lista.
// Devuelva una cadena de flores en orden alfabético separadas por puntos.

// Lista predefinida de flores (algunas con espacios)
let flores = [" Rosa ", "Orquídea", "Lirio", " Margarita", "Tulipán", "Orquídea "];

// Función para gestionar la florería
function gestionarFloreria(lista) {
  // 1. Quitar espacios en blanco alrededor de cada flor
  let floresLimpias = lista.map(flor => flor.trim());

  // 2. Verificar si existe "Margarita" y agregar "Azucena" al final si existe
  if (floresLimpias.includes("Margarita")) {
    floresLimpias.push("Azucena");
  }

  // 3. Reemplazar todas las "Orquídea" por "Clavel"
  floresLimpias = floresLimpias.map(flor => flor === "Orquídea" ? "Clavel" : flor);

  // 4. Verificar índice de "Girasol"; si no está, agregarlo al inicio
  let indiceGirasol = floresLimpias.indexOf("Girasol");
  if (indiceGirasol === -1) {
    floresLimpias.unshift("Girasol");
  }

  // 5. Ordenar alfabéticamente y unir con puntos
  let resultadoFinal = floresLimpias.sort().join(".");

  // Devolver el resultado final
  return resultadoFinal;
}

// Ejecutar la función y mostrar el resultado
let resultado = gestionarFloreria(flores);
console.log(resultado);
