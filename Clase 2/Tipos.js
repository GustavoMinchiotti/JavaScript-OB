// Tipos primitivos

// number
4;
0;

// string
"Hola mundo";
'Hola mundo';
`Hola mundo`;

// booleanos
true;
false;

// nulo y undefined
null; // esta asignado en memoria pero esta vacío
undefined; // no esta definido y no tiene lugar asignado en memoria

/* null, undefined, false, 0 ==> Todas son Falsy ----- 
En la clase pasó como parámetro todas estas y quedaba sombreada la condición de arriba 
porque No se cumplía, ahora como Sí se cumple (true) queda sombreado abajo el else.
console.log(null === undefined)*/

if (true) {
    console.log("cumple")
} else {
    console.log("no cumple") //? sombreado significa que se ha declarado pero no se lee nunca
}
