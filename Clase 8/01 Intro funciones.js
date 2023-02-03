// Qué son las funciones, cómo se declaran y cómo se utilizan
const nom = "Gorka"

// saludar("Miguel") //* puedo pasar una variable o directamente un valor
saludar(nom)

function saludar(nombre) {  //* con la sintaxis ${....} inserto el parámetro dentro de la string. // en el caso de undefined es porque no tiene parámetro
    console.log(`Hola ${nombre}`)
}
saludar() //* Este da como resultado undefined

//? -------------------------------------------------------------------------------------- 

let nombre_2 = "Juan"                    //*en este ejemplo la variable no cambia aún luego de ser usada en la función 
console.log(nombre_2)
//*                                      // ESTO ES PASAR POR VALOR  -- el original no cambia -- tipo de dato primitivo
despedir(nombre_2)
console.log(nombre_2)

function despedir(nombre) {             //* pero al crear dentro de la func. otro parámetro ese queda expresado extiendo solo dentro de la misma.
    nombre = "Diego"
    console.log(`Adiós ${nombre}`)
}

//? ----------------------------------------------------------------------------------------//

let persona = { nombre: "Juan", apellido: "González" }          //*en este ejemplo El OBJETO si cambia luego de ser modificado en la función
console.log(persona)
//*                                                             // ESTO ES PASAR POR REFERENCIA -- el original cambia -- tipo de dato 
saludarPersona(persona)

console.log(persona) //* con la modificación dentro de la func. cambió el objeto original. CUIDADO!!!!

function saludarPersona(objeto) {
    objeto.apellido = "Villar" //* cambio el valor dentro del objeto original...
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

//? -------------------------------------------------------------------------------------------//

function imprimeNumero(numero = 7) { //* Parámetros por defecto u opcionales --- si no le paso nada imprime 7 sino imprime lo que le pase 
    console.log(numero)
}
imprimeNumero()

//? --------------------------------------------------------------------------------------------/

function imprimir(...parametros) { //* con el factor de propagación puedo pasar un objeto como parámetro
    console.log(parametros)
}

imprimir(1, 3, 9, 2, "hola", { id: 9 })

//? --------------------------------------------------------------------------------------------//

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 9, 15, 16)

console.log(s)

//////
let variable = "hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "adiós"
    console.log(variable_interna)
    return a * b
}


console.log(multiplicar(4, 9))