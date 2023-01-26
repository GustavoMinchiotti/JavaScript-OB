//? Trabajando con fechas
const fecha = new Date() // arroja la fecha actual

console.log("fecha 1 ___:", fecha)

//? Atención - Los meses inicializan en 0 (0 - Enero, 11 - Diciembre)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192) // en este caso cuando uno comienza a escribir el intellisense ayuda con los parámetros sino verlos en documentación

console.log("fecha 2 ___:",fecha2)

const fecha3 = new Date(-10000000000000) //* Milisegundos como parámetro
console.log("fecha 3 ___:",fecha3)

const fecha4 = new Date("October 13, 1979 12:15:15") //* parámetros mas claros
console.log("fecha 4 ___:",fecha4)

console.log("fecha 1 < 2 ___:", fecha < fecha2)

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log("fecha 5 ___:",fecha5)

console.log(fecha2 === fecha5) //* ERROR - No se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()) //* OK - Esta es la forma de comparar la igualdad entre fechas 


//* --------------------++++++++++++++++++ Obtener el día, el mes y el año de una fecha +++++++++++++++++++++-----------------------
//? Obtener el día .getDate()
console.log(fecha2.getDate()) 

//? Obtener el mes .getMonth() (0 - Enero, 11 - Diciembre)
console.log(fecha2.getMonth() + 1)

//? Obtener el año .getFullYear()
console.log(fecha2.getFullYear())

console.log(fecha2)

//* .toLocaleDateString  ---------método

//? link para ver los formatos ("en-GB") por ejemplo
//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

console.log(fecha.toLocaleDateString("en-GB"))