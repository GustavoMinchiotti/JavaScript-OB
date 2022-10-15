// Listas o array

const lista = [1, "hola", true, undefined, null]; //forma convencional de declararla

const lista2 = new Array(1, 5, "casa");

const lista3 = new Array(4); //la lista sera una constante pero se puede modificar su contenido.
lista3[2] = "indice 2";

const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log("lista4: " + lista4);

// "listas": "node Listas, Objetos y Fechas en JS.js",      con esto había agregado el archivo al .json

