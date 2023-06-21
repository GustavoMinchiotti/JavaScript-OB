//* Formas de importar/exportar módulos
//* 1. CommonJS - require (antigua)
//* 2. Import ES6 - import

// const moduloMatematicas = require("./modulos/matematicas.js") //?sintaxis antigua (solo exporta)
// const factorial = moduloMatematicas.factorial;   //? importa del módulo la función factorial
// const { factorial, suma } = moduloMatematicas; //* esto es deconstrucción //?sintaxis antigua (solo deconstruye)
// const suma = moduloMatematicas.suma;
// console.log(moduloMatematicas.suma)

const { factorial, suma } = require("./modulos-Common/matematicas.js") //! acá directamente importa y deconstruye todo a la vez

const fact = factorial(5)
console.log(fact)

const sum = suma(12, 90)
console.log(sum)

//si lo quisiera usar sin deconstuir sería: const sum = moduloMatematicas.suma(12, 90)


// console.log(module) //* module es un objeto global que ya existe en Js