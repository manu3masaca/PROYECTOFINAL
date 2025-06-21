//Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato",
// "Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el
// "Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y
// muéstrala. Finalmente, muestra la lista actualizada.


// Lista inicial de mascotas
let mascotas = ["Perro", "Gato", "Conejo"];

// Agregar "Hámster" al inicio
mascotas.unshift("Hámster");

// Atender a la primera mascota
let atendida = mascotas.shift();

// Mostrar la mascota atendida
console.log("Mascota atendida:", atendida);

// Mostrar la lista actualizada
console.log("Lista actualizada:", mascotas);