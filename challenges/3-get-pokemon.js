const axios = require('axios');

const getPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon').
    then((pokemon) => {
        const caughtPokemon = [];
        pokemon.data.results.forEach(pokemon => {
            if(caughtPokemon.length < 20){
                caughtPokemon.push(pokemon);
            }
        });
        console.log(caughtPokemon) // log this new arr 
    })
}

getPokemon()

// .then((pokemon) => {
//     console.log(pokemon);
// })