const axios = require('axios');

const getPokemon = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon').
    then((pokemon) => {
        const caughtPokemon = [];
        pokemon.data.results.forEach(pokemon => {
            if(caughtPokemon.length < 20){
                caughtPokemon.push(pokemon);
            }
        });
        return caughtPokemon;
    }).then((pokemon) => {
        console.log(pokemon);
    })
}
console.log(getPokemon())