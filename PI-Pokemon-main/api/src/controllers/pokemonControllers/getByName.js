const axios = require('axios');
const { Pokemon,Type } = require("../../db");
const { Op } = require('sequelize');
const {filterPokemons} = require("../../utils/index");

const {getAllPokemons} = require("./getAllPokemons");

const getByName = async (name) => {
    
    let pokemon = await Pokemon.findOne({
        where: { name: name },
        include: [
            {
                model: Type,
                attributes: ["name"],
                through: { attributes: [] },
            },
        ],
    });
  


    if (!pokemon) {
        let apiPokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data;
        if (apiPokemon === "Not found") throw Error(`Pokemon ${name} not found`);
        return filterPokemons(apiPokemon,"api");
    }

    const types = pokemon.Types.map(type => type.name);

    const formattedPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        height: pokemon.height,
        weight: pokemon.weight,
        Types: types,
    };


    return formattedPokemon;

};

module.exports = {getByName};