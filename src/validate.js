export default function validate(input) {
  // en esta funcion deberian estar todas las validaciones dependiendo el tipo de input.

  // la primer validacion es si el campo esta vacio
  if (input.length) {
    return false;
  } else {
    return true;
  }
}
