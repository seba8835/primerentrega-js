let fechaNacimiento;
let continuar = true;

while (continuar) {
  // Pedimos al usuario que ingrese su fecha de nacimiento (en formato dd/mm/aaaa)
  fechaNacimiento = prompt("Ingrese su fecha de nacimiento en formato dd/mm/aaaa:");

  // Convertimos la fecha de nacimiento a un objeto Date de JavaScript
  let fechaNacimientoDate = new Date(fechaNacimiento);

  // Obtenemos la fecha actual
  let fechaActual = new Date();

  // Calculamos la edad de la persona en años redondeando hacia abajo
  let edad = Math.floor((fechaActual - fechaNacimientoDate) / (365.25 * 24 * 60 * 60 * 1000));

  // Determinamos si la persona está en edad jubilatoria
  if (edad >= 60 && fechaNacimientoDate.getFullYear() < fechaActual.getFullYear() - 60) {
    console.log("Usted está en edad jubilatoria.");
  } else if (edad >= 65 && fechaNacimientoDate.getFullYear() < fechaActual.getFullYear() - 65) {
    console.log("Usted está en edad jubilatoria.");
  } else {
    console.log("Usted no está en edad jubilatoria.");
  }

  // Preguntamos al usuario si desea continuar ingresando fechas
  let respuesta = prompt("¿Desea ingresar otra fecha de nacimiento? (S/N)");

  // Si la respuesta es "N", terminamos el bucle
  if (respuesta.toUpperCase() === "N") {
    continuar = false;
  }
}