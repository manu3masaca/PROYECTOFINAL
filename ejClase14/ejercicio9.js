//En este ejercicio, trabajaremos con una lista de modelos de autos.
// Implementa una función llamada ultimaAparicionModeloAuto(modelo) que
// encuentre y muestre la última posición en la lista donde aparece el modelo
// específico de auto dado por modelo.
// Datos Iniciales:
// ✔ Utiliza un array llamado modelosAutos que contiene varios modelos de
// autos, algunos repetidos para demostrar la funcionalidad.
// Funcionalidad:
// ✔ Implementa la función ultimaAparicionModeloAuto(modelo), que toma
// modelo como parámetro (un string).
// ✔ Debes recorrer el array de manera manual para encontrar la última
// aparición del modelo.
// ✔ Si el modelo se encuentra en el array, la función debe imprimir por
// consola la posición (índice + 1) en la que aparece (considerando que la numeracion es de 1 a N)

// Array con modelos de autos (puede contener repetidos)
let modelosAutos = [
  "Toyota", "Ford", "Chevrolet", "Renault", "Ford",
  "Honda", "Fiat", "Chevrolet", "Peugeot", "Ford"
];

// Función que encuentra la última aparición del modelo
function ultimaAparicionModeloAuto(modelo) {
  let ultimaPosicion = -1;

  // Recorremos el array manualmente
  for (let i = 0; i < modelosAutos.length; i++) {
    if (modelosAutos[i].toLowerCase() === modelo.toLowerCase()) {
      ultimaPosicion = i; // Guardamos la posición más reciente
    }
  }

  // Mostramos resultado
  if (ultimaPosicion !== -1) {
    console.log(`El modelo "${modelo}" aparece por última vez en la posición ${ultimaPosicion + 1}.`);
  } else {
    console.log(`El modelo "${modelo}" no se encuentra en la lista.`);
  }
}

// Ejemplo de uso
ultimaAparicionModeloAuto("Ford");      // Debería decir posición 10
ultimaAparicionModeloAuto("Chevrolet"); // Debería decir posición 8
ultimaAparicionModeloAuto("BMW");       // No está en la lista