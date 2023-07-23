const axios = require('axios');
const { Pokemon,Type } = require("../../db");

const {getAllPokemons} = require("./getAllPokemons");

const getByName = async (name) => {
    const allPokemons = await getAllPokemons();

    const filterByNamePokemons = allPokemons.filter( (e) => e.name.toLowerCase() === name.toLowerCase());

    return filterByNamePokemons;

};

module.exports = {getByName};