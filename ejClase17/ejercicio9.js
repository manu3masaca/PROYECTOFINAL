// Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso,
// aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo
// mismo del ejercicio anterior (buscar la posición de un número en un
// array), pero partiendo de esta lista: 12, 3, 5, 1, 22, 47, 100 
// Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor
// a mayor, utilizando bubble sort. Luego, respondan las siguientes
// preguntas:
// o ¿Cuál es la posición del número 12?
// o ¿Cuál es la posición del número 5?
// o ¿Cuál es la posición del número 22?
// o ¿Cuál es la posición del número 100?

// Lista desordenada
let lista = [12, 3, 5, 1, 22, 47, 100];

// 1. Función para ordenar con bubble sort
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Intercambiar
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    n--; // Optimización: el último elemento ya está en su lugar
  } while (swapped);
  
  return arr;
}

// 2. Función para búsqueda binaria
function busquedaBinaria(arr, objetivo) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arr[medio] === objetivo) {
      return medio;
    } else if (arr[medio] < objetivo) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return -1; // No encontrado
}

// Ordenar la lista primero
let listaOrdenada = bubbleSort([...lista]); // Usamos spread para no modificar la original

console.log("Lista ordenada:", listaOrdenada);

// Buscar posiciones de los números
console.log("Posición del número 12:", busquedaBinaria(listaOrdenada, 12));
console.log("Posición del número 5:", busquedaBinaria(listaOrdenada, 5));
console.log("Posición del número 22:", busquedaBinaria(listaOrdenada, 22));
console.log("Posición del número 100:", busquedaBinaria(listaOrdenada, 100));