//* - Una función sin parámetros que devuelva siempre "true"
function laVerdadera(params) {
  let veritas = true;
  return veritas;
}

const check = laVerdadera();

console.log(laVerdadera());
console.log(check);

//* - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
// https://www.freecodecamp.org/espanol/news/javascript-settimeout-como-establecer-un-temporizador-en-javascript-o-esperar-durantante-n-segundos/

function miAsinc() {}

const miPromesa = new Promise((resolve, reject) => {
  function escribir() {
    console.log("Hola soy una promesa");
  }
  setTimeout(escribir, 5000);
});


//* - Una función generadora de índices pares automáticos

function* pares() {
  let id = 0;
  while (true) {
    id += 2 ;
    if (id === 10) {
      return id;
    }
    yield id; // Esperando hasta que se vuelva a llamar
  }
}

const generaPares = pares();

console.log(generaPares.next());
console.log(generaPares.next());
console.log(generaPares.next());
console.log(generaPares.next());

//! soluciones OB
function devuelveTrue() {
    return true
}

async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa Nº2"), 5000)
}

//* mis llamadas a los ejercicios resueltos
// const prom = damePromesa();
// prom.then(() => console.log("Se ha ejecutado de forma correcta"))

function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}

//* mis llamadas a los ejercicios resueltos
// const paresOb = idsPares();
// console.log(paresOb.next());
// console.log(paresOb.next());
// console.log(paresOb.next());
// console.log(paresOb.next());