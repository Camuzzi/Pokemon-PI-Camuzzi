const {getAllPokemons} = require("../controllers/pokemonControllers/getAllPokemons");
const {getPokeById} = require("../controllers/pokemonControllers/getPokeById");
const {getByName} = require("../controllers/pokemonControllers/getByName");
const {createPoke} = require("../controllers/pokemonControllers/createPoke");

const getPokemonsHandler = async (req,res) => {
    const {name} = req.query;
    
    try {

        const response = name ? await getByName(name) : await getAllPokemons();
        res.status(200).json(response);


    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

const getPokeByIdHandler = async (req,res) => {
    const {idPokemon} = req.params;

    const idSource = isNaN(idPokemon) ? "db" : "api";

    try {
        const idResult = await getPokeById(idPokemon,idSource);
        res.status(200).json(idResult);
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }
}

const createPokeHandler = async (req,res) => {
    const {name,image,hp,attack,defense,speed,height,weight,type} = req.body;

    try {
        const newPokemon = await createPoke(name,image,hp,attack,defense,speed,height,weight,type);

       return res.status(201).json({ message: "Pokemon created successfully!"});

    } catch (error) {
       return res.status(400).json({error: error.message}) 
        
    }
}

module.exports = {getPokemonsHandler,getPokeByIdHandler,createPokeHandler};