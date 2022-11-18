//! Ejercicio Nº5

let altura_cm = 187; // - Una variable que contenga tu altura en centímetros (entero)
let altura_mt = 1.87; // - Una variable que contenga tu altura en metros (número de coma flotante)
let peso_k = 86.5; // - Una variable que contenga tu peso en kilogramos (número de coma flotante)
console.log(altura_cm);
console.log(altura_mt);
console.log(peso_k);


//* Una variable que contenga tu altura en metros redondeada hacia arriba
//? https://www.w3schools.com/js/tryit.asp?filename=tryjs_number_tofixed
//? https://www.delftstack.com/es/howto/javascript/javascript-round-to-2-decimal-places/

// utilizo x.toFixed() para redondear al quedar en 0 quita decimales
console.log(altura_mt.toFixed());

// utilizo Math.round() para redondear al quedar en 0 quita decimales
console.log(Math.round(altura_mt));

//? utilizo Math.ceil() para redondear hacia arriba MEJOR OPCIÓN
console.log(Math.ceil(altura_mt));


//* Una variable que contenga tu peso en kilogramos redondeado hacia abajo
console.log(peso_k.toFixed());

//! Math.floor() redondea hacia abajo 
console.log(Math.floor(peso_k));


//* Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let averiguar = ((Number.MAX_VALUE) + 1 )

console.log(averiguar == Number.MAX_VALUE);


//! Por OpenBootcamp

const altura_cm_a = 171
const altura_m = 1.71
const peso_kg = 70.2

const altura_red = Math.ceil(altura_m)
const peso_red = Math.floor(peso_kg)

const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE

console.log(sonIguales);