const axios = require('axios');
const { Pokemon,Type } = require("../../db");

const {filterPokemons} = require("../../utils/index");


const getPokeById = async (id,source) => {

    // const videogame = source === "api" ? (
    //     (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data
    // )
    // : (
    //     await Videogame.findByPk(id, {
    //         include: { model: Genre, through: { attributes: [] } }
    //       })
    // )

    // return filterVideogames(videogame,source);

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