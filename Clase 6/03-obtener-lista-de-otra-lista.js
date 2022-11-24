//! Cómo obtener una lista a partir de otra .slice()
//! No es lo mismo que splice 

const array = ["hola", 1, 2, 3, true, null, "adios"]

//? ESTE MÉTODO NO MODIFICA EL VALOR DEL ARRAY ORIGINAL

console.log(array.slice(1, 4)) // nos da inicio y fin según indice , no toma al último

const array2 = array.slice(2, 5) // Acá construyo otro array
console.log(array2)

const array3 = array.slice(2, -2) // en este caso el número negativo cuenta del final hacia el comienzo la cantidad de pociones empezando de 1 
console.log(array3)