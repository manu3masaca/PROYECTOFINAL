// Supón que tienes una lista de películas con su duración en minutos:
// const movies = [
// { title: 'El Señor de los Anillos', duration: 200 },
// { title: 'Inception', duration: 148 },
// { title: 'Matrix', duration: 136 },
// { title: 'Toy Story', duration: 81 },
// { title: 'Coco', duration: 105 }
// ];
// Queremos:
// o Encontrar la película más corta en duración.
// o De las películas restantes, quedarnos con aquellas cuyo título tenga
// más de 10 caracteres.
// o Crear una lista de los títulos largos en minúsculas.
// o Imprime en la consola:
// o El título de la película más corta.
// o La lista de títulos largos en minúsculas.

const movies = [
  { title: 'El Señor de los Anillos', duration: 200 },
  { title: 'Inception', duration: 148 },
  { title: 'Matrix', duration: 136 },
  { title: 'Toy Story', duration: 81 },
  { title: 'Coco', duration: 105 }
];

// 1. Encontrar la película más corta en duración
let peliculaMasCorta = movies.reduce((min, movie) => {
  return movie.duration < min.duration ? movie : min;
});

// 2. Obtener las películas restantes (excluyendo la más corta)
let peliculasRestantes = movies.filter(movie => movie.title !== peliculaMasCorta.title);

// 3. Filtrar las películas cuyo título tenga más de 10 caracteres
let titulosLargos = peliculasRestantes
  .filter(movie => movie.title.length > 10)
  .map(movie => movie.title.toLowerCase());

// 4. Imprimir resultados
console.log("Película más corta:", peliculaMasCorta.title);
console.log("Títulos largos en minúsculas:", titulosLargos);