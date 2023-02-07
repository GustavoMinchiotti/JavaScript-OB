// Funciones tipo flecha - funciones anónimas

const array = [1, 5, 6, 2, 7, 12, 8, 92]

const array2 = array.map((valor) => valor * 2)

console.log(array2)

// const dobleDelValor = valor => {
//     return valor * 2
// }
const dobleDelValor = valor => valor * 2    //* al igual que la función de arriba devuelve el valor *2 pero con esta sintaxis abreviada

console.log(doble(6))
console.log(dobleDelValor(6)) //* al pasar el 6 como parámetro me da el doble de ese num según la función

const array3 = array.map(dobleDelValor) //* acá declaro que array 3 es igual a la func. de arriba que es "anónima" por eso debajo la imprimo y no da error

console.log(array3)

function doble(valor) {
    return valor * 2
}