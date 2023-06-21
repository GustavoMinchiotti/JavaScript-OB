//* Formas de importar/exportar módulos
//* 1. Import ES6 - import

//import { suma } from './modulos/matematicas.js' //? Forma mas utilizada al momento puede importar funciones también constantes = "const sum = suma(4, 12);"

import * as moduloMatematicas from './modulos/matematicas.js' //* así importo todo pero cambia la sintaxis para llamar a la función = "const sum = moduloMatematicas.suma(4, 12);"

import getAutor from './modulos/literatura.js'; // importo el mod literatura -- Solo una por defecto y las que quiera por nombre



const sum = moduloMatematicas.suma(4, 12);
console.log(sum);


console.log(getAutor());