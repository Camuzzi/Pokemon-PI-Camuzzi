
const axios = require('axios');

const { Pokemon } = require("../../db");

const getAllPokemons = async () => {
    let apiPokemons = [];

    // for (let i = 1; i < 5 ; i++) {
    //     const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=12&offset=12");

    //     apiPokemons.push(...data.results);
    // }

    const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=150");

    apiPokemons.push(...data.results);

    

    //const dbPokemons = await Pokemon.findAll();

    //return [...dbPokemons,...apiPokemons];
    return apiPokemons;

}

module.exports = {getAllPokemons};