const axios = require('axios');
const { Pokemon,Type } = require("../../db");

const {filterPokemons} = require("../../utils/index");


const getPokeById = async (id,source) => {

    const pokemon = source === "api" ? (
        (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
    )
    : (
        await Pokemon.findByPk(id, {
            include: { model:Genre, through: {attributes: []}}
        })
    )

    return filterPokemons(pokemon,source);
}

module.exports = {getPokeById};