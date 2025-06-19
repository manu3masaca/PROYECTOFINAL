//Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
// ✔ título: una cadena con el título del libro.
// ✔ autor: una cadena con el nombre del autor del libro.
// ✔ anioPublicacion: un número con el año de publicación del libro.
// Luego, crea una función llamada mostrarLibro que tome un arreglo de libros
// como parámetro y muestre por consola la información de cada libro en el
// formato especificado.

// Definimos los objetos libro1 y libro2
let libro1 = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anioPublicacion: 1967
};

let libro2 = {
  titulo: "1984",
  autor: "George Orwell",
  anioPublicacion: 1949
};

// Función para mostrar información de los libros
function mostrarLibro(libros) {
  libros.forEach((libro, index) => {
    console.log(`Libro #${index + 1}`);
    console.log(`Título: ${libro.titulo}`);
    console.log(`Autor: ${libro.autor}`);
    console.log(`Año de publicación: ${libro.anioPublicacion}`);
    console.log('---------------------------');
  });
}

// Llamamos a la función con un arreglo que contiene ambos libros
mostrarLibro([libro1, libro2]);