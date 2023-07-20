const { Router } = require('express');
const {getPokemonsHandler} = require("../handlers/pokemonHandler")

const pokemonRouter = Router();

pokemonRouter.get('/',getPokemonsHandler);

//pokemonRouter.get('/:idVideogame',getVideogameByIdHandler);

//pokemonRouter.post('/',createNewGameHandler);

module.exports = pokemonRouter;