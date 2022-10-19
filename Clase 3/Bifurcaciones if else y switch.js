// Bifurcaciones if...else

//* lo mas básico de todo

//Acá no estoy preguntando le estoy pasando Verdadero como parámetro dentro de los paréntesis.

if (true) {
  console.log("es verdadero");
}

if (false) {
  console.log("es verdadero");
} else {
  console.log("Es falso");
}

let saldo = 50;
let efectivo = 100;

if (efectivo < saldo) {
  console.log("Puedes sacar dinero");
}

if (efectivo < saldo) {
  console.log("Puedes sacar dinero");
} else {
  console.log("Saldo insuficiente");
}

//! If else + if else
//* en Js para decir que algo es exactamente igual se usa  ===	equal value and equal type
let nota = 10;

if (nota === 5) {
  console.log("Enhorabuena, has obtenido un sobresaliente");
} else if (nota === 4) {
  console.log("Buen trabajo, pero podrías haberlo hecho mejor");
} else if (nota === 3) {
  console.log("Has obtenido un suficiente");
} else if (nota === 2) {
  console.log("No has aprobado por poco");
} else if (nota === 1) {
  console.log("No has estudiado nada, trabaja un poquito más para la próxima");
} else {
  console.log("Error, introduce una nota entre el 1 y el 5");
}

//! Sentencias Switch

// Acá re-factoriza el if else if else
// Switch ne permite en función de un valor poner varias condiciones

let notaB = 3;

switch (notaB) {
  case 5: // en caso de obtener 5 se ejecuta el código de abajo.
    console.log("Buen trabajo, ¡sobresaliente!");
    break; // Si no está el break la ejecución no corta y sigue hasta el proximo break que encuentre
  case 4:
    console.log("Buen trabajo, pero podrías haberlo hecho mejor");
    break;
  case 3:
    console.log("Has obtenido un suficiente");
    break;
  case 2:
    console.log("No has aprobado por poco");
    break;
  case 1:
    console.log(
      "No has estudiado nada, trabaja un poquito más para la próxima"
    );
    break;
  default:  // caso por defecto si el valor esta por fuera de los parámetros en los "case" se ejecuta la siguiente línea...
    console.log("Error");
    break;
}
