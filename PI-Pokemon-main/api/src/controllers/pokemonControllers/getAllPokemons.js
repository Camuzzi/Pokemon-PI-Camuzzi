const {filterPokemons} = require("../../utils/index");
const axios = require('axios');

const { Pokemon } = require("../../db");

const getAllPokemons = async () => {
    let apiPokemons = [];
    let urlFilteredPokemons = [];

    //Hacemos un get a 150 pokemons, el cual nos trae sólo el nombre y la url con sus propiedades

    const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=150");

    apiPokemons.push(...data.results);

    //Ahora filtramos esa url para poder manipular las propiedades correctamente

    apiPokemons.map( (element) => {
        urlFilteredPokemons.push( axios.get(element.url).then((res) => res.data) )
    })

    //Con la info que tenemos filtramos los datos que necesitamos de acorde a nuestro modelo

    let filteredPokemons = await filterPokemons(urlFilteredPokemons,"api");


    //-------------// 


    const dbPokemons = await Pokemon.findAll();

    return [...dbPokemons , ...filteredPokemons];
}

module.exports = {getAllPokemons};