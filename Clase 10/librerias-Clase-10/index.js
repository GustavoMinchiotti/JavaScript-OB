// instalo axios
// npm i axios

import axios from "axios";

// Make a request for a user with a given ID

axios.get('https://pokeapi.co/api/v2/pokemon/ditto') //*acá pegué la url de la api a la que llamo
    .then(function (response) {
        // handle success
        console.log(response.data); //? modifiqué a .data para obtener la data específica del poke, de lo contrario baja muchos mas datos
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });