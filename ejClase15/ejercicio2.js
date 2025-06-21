//Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El
// último invitado no puede asistir. Elimina al último invitado y muestra quién
// fue eliminado y el estado actualizado de la lista.

// Lista inicial de invitados
let invitados = ["Ana", "Juan", "Carlos", "Sofía"];

// Eliminar al último invitado
let eliminado = invitados.pop();

// Mostrar quién fue eliminado
console.log("Invitado eliminado:", eliminado);

// Mostrar la lista actualizada
console.log("Lista actualizada:", invitados);
