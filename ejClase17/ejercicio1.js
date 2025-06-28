//Crea un objeto literal que represente un estudiante. El mismo debe tener
// las siguientes propiedades: nombre, edad y un array de notas (con 5
// notas).
// Luego, escribe la función “procesarEstudiante” que tendrá como objetivo
// realizar las siguientes tareas:
// 1. Agregar una nueva nota al array de notas.
// 2. Eliminar la primera nota del array.
// 3. Calcular el promedio de las notas restantes.
// 4. Convertir el nombre del estudiante a mayúsculas. Para esto
// investiga sobre el método “toUpperCase()”
// 5. Devuelver un objeto con el nombre en mayúsculas y el promedio de
// las notas.

// 1. Crear el objeto literal del estudiante
const estudiante = {
  nombre: "Juan Pérez",
  edad: 20,
  notas: [8, 7, 9, 6, 10]
};

// 2. Crear la función para procesar al estudiante
function procesarEstudiante(est) {
  // a. Agregar una nueva nota
  est.notas.push(9);

  // b. Eliminar la primera nota
  est.notas.shift();

  // c. Calcular el promedio de las notas restantes
  let suma = 0;
  for (let i = 0; i < est.notas.length; i++) {
    suma += est.notas[i];
  }
  const promedio = suma / est.notas.length;

  // d. Convertir el nombre a mayúsculas
  const nombreMayusculas = est.nombre.toUpperCase();

  // e. Devolver el objeto con nombre en mayúsculas y promedio
  return {
    nombre: nombreMayusculas,
    promedio: promedio
  };
}

// 3. Ejecutar la función y mostrar el resultado
const resultado = procesarEstudiante(estudiante);
console.log(resultado);