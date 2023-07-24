const { Router } = require('express');
const {getPokemonsHandler,getPokeByIdHandler,createPokeHandler} = require("../handlers/pokemonHandler")

const pokemonRouter = Router();

pokemonRouter.get('/',getPokemonsHandler);

pokemonRouter.get('/:idPokemon',getPokeByIdHandler);

pokemonRouter.post('/',createPokeHandler);

module.exports = pokemonRouter;