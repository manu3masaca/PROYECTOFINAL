// Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], queremos
// quedarnos solo con los nombres que comiencen con la letra 'A'. Por ejemplo,
// el nombre 'Luis' no debería estar en el resultado porque empieza con 'L'.

// Lista de nombres
let nombres = ['Ana', 'Luis', 'Andrea', 'María'];

// Filtrar nombres que empiezan con 'A'
let nombresConA = nombres.filter(function(nombre) {
  return nombre.startsWith('A');
});

// Mostrar resultado
console.log(nombresConA);