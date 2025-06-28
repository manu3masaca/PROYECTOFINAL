// Escribe una función "gestionarAutos" que realice las siguientes tareas con
// una lista predefinida de marcas de autos:
// 1. Quite los espacios en blanco alrededor de cada marca.
// 2. Verifique si existe la marca "Tesla".
// 3. Reemplace todas las marcas "Ford" por "BMW".
// 4. Encuentre el índice de la marca "Chevrolet".
// 5. Devuelva una cadena de marcas en orden alfabético separadas por
// puntos. Utilizar “.sort()”

// Lista predefinida de marcas de autos (con espacios)
let marcasAutos = [" Ford", "Chevrolet ", "  Toyota", "Tesla", " Nissan", "Ford"];

// Función para gestionar las marcas
function gestionarAutos(lista) {
  // 1. Quitar espacios en blanco alrededor de cada marca
  let marcasLimpias = lista.map(marca => marca.trim());

  // 2. Verificar si existe la marca "Tesla"
  let existeTesla = marcasLimpias.includes("Tesla");

  // 3. Reemplazar todas las marcas "Ford" por "BMW"
  let marcasActualizadas = marcasLimpias.map(marca => 
    marca === "Ford" ? "BMW" : marca
  );

  // 4. Encontrar el índice de la marca "Chevrolet"
  let indiceChevrolet = marcasActualizadas.indexOf("Chevrolet");

  // 5. Ordenar alfabéticamente y unir con puntos
  let marcasOrdenadas = marcasActualizadas.sort().join(".");

  // Retornar resultados
  return {
    marcasLimpias: marcasLimpias,
    contieneTesla: existeTesla,
    indiceChevrolet: indiceChevrolet,
    resultadoFinal: marcasOrdenadas
  };
}

// Ejecutar la función y mostrar el resultado
let resultado = gestionarAutos(marcasAutos);
console.log(resultado);

