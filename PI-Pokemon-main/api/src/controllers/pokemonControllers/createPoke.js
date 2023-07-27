const axios = require('axios');

const {filterPokemons} = require("../../utils/index");
const {getAllPokemons} = require("./getAllPokemons");

const { Pokemon,Type } = require("../../db");

const createPoke = async (name,image,hp,attack,defense,speed,height,weight,types) => {
    const allPokemons = await getAllPokemons();

    const validation = allPokemons.find( element => element.name === name);

    if(validation){
        throw Error(`There is already a pokemon with the name ${name}, please choose another one!`)
    } else {
        const newPokemon = await Pokemon.create({name,image,hp,attack,defense,speed,height,weight});

        types.forEach(type => {
            newPokemon.addType(type);
        });

         
        return newPokemon;
    }

}

module.exports = {createPoke};