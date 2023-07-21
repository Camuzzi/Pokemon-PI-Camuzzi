const {getAllPokemons} = require("../controllers/pokemonControllers/getAllPokemons");
const {getPokeById} = require("../controllers/pokemonControllers/getPokeById");

const getPokemonsHandler = async (req,res) => {
    //const {name} = req.query;
    let allPokemons = [];
    try {

        // if (name) {
        //     const pokemonByName = await getPokemonByName(name);

        //     if (pokemonByName.length === 0){
        //         return res.status(404).json({response: `There are no pokemon with the name ${name}`})
        //     }

        //     res.status(200).json(pokemonByName);

        // } else{
        //     allPokemons = await getAllPokemons();
        //     res.status(200).json(allPokemons);
        // }

        allPokemons = await getAllPokemons();
        res.status(200).json(allPokemons);

    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

const getPokeByIdHandler = async (req,res) => {
    const {idPokemon} = req.params;

    const idSource = isNaN(idPokemon) ? "bdd" : "api";

    try {
        const idResult = await getPokeById(idPokemon,idSource);
        res.status(200).json(idResult);
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

module.exports = {getPokemonsHandler,getPokeByIdHandler};