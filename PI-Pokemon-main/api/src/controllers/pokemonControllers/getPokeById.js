const axios = require('axios');
const { Pokemon,Type } = require("../../db");

const {filterPokemons} = require("../../utils/index");


const getPokeById = async (id,source) => {

    if (source === "api"){
        const pokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
        return filterPokemons(pokemon,source);
    } else {
        const pokemon = await Pokemon.findOne({
            where: {id:id},
        })
        return pokemon;
    }

}

module.exports = {getPokeById};