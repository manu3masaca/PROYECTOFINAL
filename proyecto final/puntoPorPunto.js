// PUNTO 1: ESTRUCTURA DE DATOS
// a) Crear un array de objetos
// llamado libros que contenga al
// menos 10 libros. Cada libro debe
// tener las siguientes propiedades:
// ✔ id (número)
// ✔ título (string),
// ✔ autor (string),
// ✔ año (número),
// ✔ género (string),
// ✔ disponible (booleano).
// b) Crear un array de objetos
// llamado usuarios con al menos 5
// usuarios. Cada usuario debe tener:
// ✔ id (número)
// ✔ nombre (string)
// ✔ email (string)
// ✔ librosPrestados (array de ids de
// libros).

//hacer array de libros 
const libros = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, género: "Ficción", disponible: true },
    { id: 2, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605, género: "Ficción", disponible: true },
    { id: 3, titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", año: 1985, género: "Ficción", disponible: false },
    { id: 4, titulo: "La casa de los espíritus", autor: "Isabel Allende", año: 1982, género: "Ficción", disponible: true },
    { id: 5, titulo: "frankenstein", autor: "Mary Shelley", año: 1818, género: "Ficción", disponible: true },
    { id: 6, titulo: "el hueco", autor: "german castro", año: 1993, género: "Ficción", disponible: true },
    { id: 7, titulo: "el tunel", autor: "Ernesto Sabato", año: 1948, género: "Ficción", disponible: true },
    { id: 8, titulo: "las enseñanzas de don juan", autor: "Carlos Castaneda", año: 1968, género: "Ficción", disponible: true },
    { id: 9, titulo: "el principito", autor: "Antoine de Saint-Exupéry", año: 1943, género: "Ficción", disponible: true },
    { id: 10, titulo: "una realidad aparte", autor: "carlos castaneda", año: 1977, género: "Ficción", disponible: true }
];

//hacer array de usuarios
const usuarios = [
    { id: 1, nombre: "Juan Pérez", email: "juan.perez@example.com", librosPrestados: [1, 2] },
    { id: 2, nombre: "María Gómez", email: "maria.gomez@example.com", librosPrestados: [3] },
    { id: 3, nombre: "Diana González", email: "diana.gonzalez@example.com", librosPrestados: [4, 5] },
    { id: 4, nombre: "Carlos López", email: "carlos.lopez@example.com", librosPrestados: [] },
    { id: 5, nombre: "Laura Martínez", email: "laura.martinez@example.com", librosPrestados: [6] }
];

// PUNTO 2: FNCIONES DE GESTIÓN DE LIBROS
// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que
// agregue un nuevo libro al array libros.
// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por
// título, autor o género utilizando el algoritmo de búsqueda lineal.
// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título
// o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego
// muestre los libros ordenados en la consola.
// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por
// parámetro.

//función para agregar libro
function agregarLibro(id, titulo, autor, año, genero) {
    const nuevoLibro = { id, titulo, autor, año, genero, disponible: true };
    libros.push(nuevoLibro); //push agrega el nuevo libro al array
}

//función para buscar libro
function buscarLibro(criterio, valor) {
    const resultado = libros.filter(libro => libro[criterio].toLowerCase().includes(valor.toLowerCase()));//filter 
    //filtra los libros que cumplen con el criterio
    //.toLowerCase() convierte el texto a minúsculas .includes() verifica si el valor está incluido en el texto
    return resultado; 
}

//función para ordenar libros
function ordenarLibros(criterio) {
    if (criterio === "titulo") {
        libros.sort((a, b) => a.titulo.localeCompare(b.titulo));//.sort() ordena los libros por título
    //localeCompare() compara dos cadenas de texto y devuelve un número que indica si la cadena de texto a es menor,
    //igual o mayor que la cadena de texto b
    } else if (criterio === "año") {
        libros.sort((a, b) => a.año - b.año);
    }
    console.log(libros);
}

//función para borrar libro
function borrarLibro(id) {
    const index = libros.findIndex(libro => libro.id === id);// findIndex busca el índice del libro con el id dado
    if (index !== -1) {
        libros.splice(index, 1);//splice elimina el libro del array
    } else {
        console.log("Libro no encontrado");
    }
}

// PUNTO 3: FUNCIONES DE GESTIÓN DE USUARIOS
// a) Implementar una función registrarUsuario(nombre, email) que agregue un
// nuevo usuario al array usuarios.
// b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el
// array completo de usuarios
// c) Crear una función buscarUsuario(email) que devuelva la información de un
// usuario dado su email.
// d) Implementar una función borrarUsuario(nombre, email) que elimine el
// usuario seleccionado.

//función para registrar usuario
function registrarUsuario(nombre, email) {
    const nuevoUsuario = { id: usuarios.length + 1, nombre, email, librosPrestados: [] };//.length + 1 genera un
    //nuevo id para el usuario
    usuarios.push(nuevoUsuario);//push agrega el nuevo usuario al array
}

//función para mostrar todos los usuarios
function mostrarTodosLosUsuarios() {
    return usuarios;
}

//función para buscar usuario
function buscarUsuario(email) {
    return usuarios.find(usuario => usuario.email === email);// find busca el primer usuario que cumpla con la 
    //condición dada, en este caso que el email sea igual al email dado
}

//función para borrar usuario
function borrarUsuario(email) {
    const index = usuarios.findIndex(usuario => usuario.email === email);// findIndex busca el índice del usuario 
    //con el email dado
    if (index !== -1) {
        usuarios.splice(index, 1);// splice elimina el usuario del array
    } else {
        console.log("Usuario no encontrado");
    }
}

// PUNTO 4: FUNCIONES DE PRESTAMO Y DEVOLUCIÓN DE LIBROS
// a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque
// un libro como no disponible y lo agregue a la lista de libros prestados
// del usuario.
// b) Implementar una función devolverLibro(idLibro, idUsuario) que
// marque un libro como disponible y lo elimine de la lista de libros
// prestados del usuario.

//función para prestar libro
function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro); // find busca el libro con el id dado
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
    
    if (libro && usuario) {
        if (libro.disponible) {
            libro.disponible = false;
            usuario.librosPrestados.push(idLibro); //push agrega el id del libro a la lista de libros prestados 
            //del usuario
            console.log(`Libro "${libro.titulo}" prestado a ${usuario.nombre}`);
        } else {
            console.log("El libro no está disponible");
        }
    } else {
        console.log("Libro o usuario no encontrado");
    }
}

//función para devolver libro
function devolverLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);// find busca el libro con el id dado
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);// find busca el usuario con el id dado
    
    if (libro && usuario) {
        const index = usuario.librosPrestados.indexOf(idLibro); // indexOf busca el índice del id del libro en la
        // lista de libros prestados del usuario
        if (index !== -1) {
            libro.disponible = true;
            usuario.librosPrestados.splice(index, 1);// splice elimina el id del libro de la lista de libros 
            // prestados del usuario
            console.log(`Libro "${libro.titulo}" devuelto por ${usuario.nombre}`);
        } else {
            console.log("El libro no se le ha prestado a este usuario");
        }
    } else {
        console.log("Libro o usuario no encontrado");
    }
}

// PUNTO 5: REPORTES DE PRESTAMOS
// a) Crear una función generarReporteLibros() que utilice métodos avanzados
// de arrays (.map(), .filter(), .reduce()) para generar un reporte con la
// siguiente información:
// ✔ Cantidad total de libros.
// ✔ Cantidad de libros prestados.
// ✔ Cantidad de libros por género.
// ✔ Libro más antiguo y más nuevo

function generarReporteLibros() {
    const totalLibros = libros.length;
    const librosPrestados = libros.filter(libro => !libro.disponible).length; // filter filtra los libros que no están
    // disponibles (prestados) y luego se cuenta su longitud
    const librosPorGenero = libros.reduce((acc, libro) => { // reduce acumula la cantidad de libros por género
        acc[libro.genero] = (acc[libro.genero] || 0) + 1;
        return acc;
    }, {});
    const libroMasAntiguo = libros.reduce((acc, libro) => acc.año < libro.año ? acc : libro);// reduce compara los años
    // de los libros y devuelve el libro más antiguo
    const libroMasNuevo = libros.reduce((acc, libro) => acc.año > libro.año ? acc : libro);// reduce compara los años 
    // de los libros y devuelve el libro más nuevo

    console.log("Reporte de Libros:");
    console.log(`Total de libros: ${totalLibros}`);
    console.log(`Libros prestados: ${librosPrestados}`);
    console.log("Cantidad de libros por género:", librosPorGenero);
    console.log(`Libro más antiguo: "${libroMasAntiguo.titulo}" (${libroMasAntiguo.año})`);
    console.log(`Libro más nuevo: "${libroMasNuevo.titulo}" (${libroMasNuevo.año})`);
}

// 6.Identificación Avanzada de libros:
// a) Implementar una función librosConPalabrasEnTitulo() que identifique y
// muestre todos los libros cuyo título contiene más de una palabra (no títulos
// que contengan números ni otros caracteres). La función debe devolver un
// array con los títulos de esos libros y mostrarlo en la consola.
// asegurarse de que solo se filtren los datos por letras y espacios.

const libros = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, género: "Ficción", disponible: true },
    { id: 2, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605, género: "Ficción", disponible: true },
    { id: 3, titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", año: 1985, género: "Ficción", disponible: false },
    { id: 4, titulo: "La casa de los espíritus", autor: "Isabel Allende", año: 1982, género: "Ficción", disponible: true },
    { id: 5, titulo: "frankenstein", autor: "Mary Shelley", año: 1818, género: "Ficción", disponible: true },
    { id: 6, titulo: "el hueco", autor: "german castro", año: 1993, género: "Ficción", disponible: true },
    { id: 7, titulo: "el tunel", autor: "Ernesto Sabato", año: 1948, género: "Ficción", disponible: true },
    { id: 8, titulo: "las enseñanzas de don juan", autor: "Carlos Castaneda", año: 1968, género: "Ficción", disponible: true },
    { id: 9, titulo: "el principito", autor: "Antoine de Saint-Exupéry", año: 1943, género: "Ficción", disponible: true },
    { id: 10, titulo: "una realidad aparte", autor: "carlos castaneda", año: 1977, género: "Ficción", disponible: true }
];

const usuarios = [
    { id: 1, nombre: "Juan Pérez", email: "juan.perez@example.com", librosPrestados: [1, 2] },
    { id: 2, nombre: "María Gómez", email: "maria.gomez@example.com", librosPrestados: [3] },
    { id: 3, nombre: "Diana González", email: "diana.gonzalez@example.com", librosPrestados: [4, 5] },
    { id: 4, nombre: "Carlos López", email: "carlos.lopez@example.com", librosPrestados: [] },
    { id: 5, nombre: "Laura Martínez", email: "laura.martinez@example.com", librosPrestados: [6] }
];

// Función para limpiar texto
function limpiarTexto(texto) {
  return texto
    .toLowerCase()   // convierte a minúsculas
    .normalize("NFD")    // normaliza caracteres especiales
    .replace(/[\u0300-\u036f]/g, "") // elimina tildes
}

// Crear una nueva versión del array con los campos limpios
const librosLimpios = libros.map(libro => ({   //el map crea un nuevo array con los objetos modificados
  ...libro,
  titulo: limpiarTexto(libro.titulo),     // limpiar título
  autor: limpiarTexto(libro.autor),     // limpiar autor
  género: limpiarTexto(libro.género) // limpiar género
}));


function librosConPalabrasEnTitulo(libros) {
    const librosFiltrados = libros.filter(libro => {
        // Verificar si el título contiene más de una palabra y no contiene números ni caracteres especiales
        const palabras = libro.titulo.trim().split(/\s+/);   // Divide el título en palabras
        return palabras.length > 1 && /^[a-zA-Z\s]+$/.test(libro.titulo);    // Verifica que el título solo contenga letras y espacios
    });

    // Extraer los títulos de los libros filtrados
    const titulos = librosFiltrados.map(libro => libro.titulo);  // Mapea los libros filtrados para obtener solo los títulos

    // Mostrar los títulos en la consola
    console.log("Libros con más de una palabra en el título:");

    titulos.forEach(titulo => console.log(titulo));  // el foreach recorre el array de títulos y los muestra en la consola

    // Devolver el array de títulos
    return titulos;
}

// Llamar a la función y mostrar los resultados
const titulosLibros = librosConPalabrasEnTitulo(libros);

// 7. Cálculos Estadísticos
// a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para
// calcular y mostrar:
// ✔ Promedio de años de publicación de los libros.
// ✔ Año de publicación más frecuente.
// ✔ Diferencia en años entre el libro más antiguo y el más nuevo.

function calcularEstadisticas(libros) {
    if (libros.length === 0) {
        console.log("No hay libros para calcular estadísticas.");
        return;   // Verifica si el array de libros está vacío
    }

    // Calcular el promedio de años de publicación
    const totalAños = libros.reduce((sum, libro) => sum + libro.año, 0); // Utiliza reduce para sumar los años de publicación
    const promedioAños = totalAños / libros.length;  //el length se refiere al número de libros en el array

    // Calcular el año de publicación más frecuente
    const añosFrecuentes = {};
    libros.forEach(libro => {    //forEach recorre cada libro en el array
        añosFrecuentes[libro.año] = (añosFrecuentes[libro.año] || 0) + 1;   // Incrementa el contador para el año de publicación
    });
    const añoMasFrecuente = Object.keys(añosFrecuentes).reduce((a, b) => añosFrecuentes[a] > añosFrecuentes[b] ? a : b); // Encuentra el año con más publicaciones

    // Calcular la diferencia entre el libro más antiguo y el más nuevo
    const añosPublicacion = libros.map(libro => libro.año);
    const añoMasAntiguo = Math.min(...añosPublicacion);  // Encuentra el año más antiguo con Math.min
    const añoMasNuevo = Math.max(...añosPublicacion);    // Encuentra el año más nuevo con Math.max
    const diferenciaAños = añoMasNuevo - añoMasAntiguo;    // Calcula la diferencia entre el año más nuevo y el más antiguo

    // Mostrar los resultados
    console.log(`Promedio de años de publicación: ${promedioAños.toFixed(2)}`);  // toFixed(2) limita el resultado a dos decimales
    console.log(`Año de publicación más frecuente: ${añoMasFrecuente}`);
    console.log(`Diferencia en años entre el libro más antiguo (${añoMasAntiguo}) y el más nuevo (${añoMasNuevo}): ${diferenciaAños} años`);
}

// Llamar a la función para calcular y mostrar las estadísticas
calcularEstadisticas(libros);

// 8.Manejo de Cadenas:
// a) Crear una función normalizarDatos() que utilice métodos de strings para:
// ✔ Convertir todos los títulos a mayúsculas.
// ✔ Eliminar espacios en blanco al inicio y final de los nombres de
// autores.
// ✔ Formatear los emails de los usuarios a minúsculas.

function normalizarDatos(libros, usuarios) {
    // Convertir todos los títulos a mayúsculas
    const librosNormalizados = libros.map(libro => ({
        ...libro,
        titulo: libro.titulo.toUpperCase()  // Convierte el título a mayúsculas
    }));

    // Eliminar espacios en blanco al inicio y final de los nombres de autores
    librosNormalizados.forEach(libro => {
        libro.autor = libro.autor.trim();  // Elimina espacios en blanco al inicio y final del nombre del autor
    });

    // Formatear los emails de los usuarios a minúsculas
    const usuariosNormalizados = usuarios.map(usuario => ({
        ...usuario,
        email: usuario.email.toLowerCase()  // Convierte el email a minúsculas
    }));

    // Mostrar los resultados normalizados
    console.log("Libros normalizados:", librosNormalizados);
    console.log("Usuarios normalizados:", usuariosNormalizados);

    return { libros: librosNormalizados, usuarios: usuariosNormalizados };  // Devuelve los datos normalizados
}

// Llamar a la función para normalizar los datos
const datosNormalizados = normalizarDatos(libros, usuarios);

// 9.Interfaz de Usuario por Consola
// a) Implementar una función menuPrincipal() que muestre un menú de
// opciones al usuario y permita interactuar con el sistema utilizando prompt().
// El menú debe incluir opciones para todas las funcionalidades anteriores y
// utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.
//ueden utilizar la estructura que gusten, sin embargo les recomiendo el uso de
// switch ya que hace al codigo mas limpio y claro a la hora de escribirlo.

function menuPrincipal() {
    let opcion;
    do {                    //usamos un do-while para que el menú se muestre al menos una vez
        console.log("\n--- Menú Principal ---");
        console.log("1. Mostrar libros con más de una palabra en el título");
        console.log("2. Calcular estadísticas de los libros");
        console.log("3. Normalizar datos de libros y usuarios");
        console.log("4. Salir");

        opcion = parseInt(prompt("Seleccione una opción (1-4): "));  // Utiliza prompt para obtener la opción del usuario

        switch (opcion) {
            case "1":
                librosConPalabrasEnTitulo(librosLimpios);
                break;         //el break es necesario para salir del switch
            case "2":
                calcularEstadisticas(librosLimpios);
                break;
            case "3":
                normalizarDatos(librosLimpios, usuarios);
                break;
            case "4":
                console.log("Saliendo del menú...");
                break;
            default:
                console.log("Recuerde que deve ser del 1 al 4.");
        }
    } while (opcion !== "4");   // Repite el menú hasta que el usuario elija salir
}

// Llamar a la función para mostrar el menú principal
menuPrincipal();


