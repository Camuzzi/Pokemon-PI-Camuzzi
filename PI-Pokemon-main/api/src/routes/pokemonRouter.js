const { Router } = require('express');
const {getPokemonsHandler,getPokeByIdHandler} = require("../handlers/pokemonHandler")

const pokemonRouter = Router();

pokemonRouter.get('/',getPokemonsHandler);

pokemonRouter.get('/:idPokemon',getPokeByIdHandler);

//pokemonRouter.post('/',createNewGameHandler);

module.exports = pokemonRouter;