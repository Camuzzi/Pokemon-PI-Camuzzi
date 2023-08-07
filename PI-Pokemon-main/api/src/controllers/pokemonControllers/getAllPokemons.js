const {filterPokemons} = require("../../utils/index");
const axios = require('axios');

const { Pokemon,Type } = require("../../db");

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


    // const dbPokemons = await Pokemon.findAll( {include: [{ model: Type, attributes: ['name'], through: { attributes: [] } }]});

    const dbPokemons = await Pokemon.findAll({
        include: [
            {
                model: Type,
                attributes: ["name"],
                through: {attributes: []},
            },
        ],
        attributes: { exclude: ['Types.name'] },
        raw: true,
    })

    const formattedDBPokemons = dbPokemons.reduce((acc, pokemon) => {
        const existingPokemon = acc.find((p) => p.id === pokemon.id);
      
        if (existingPokemon) {
          if (pokemon['Types.name']) {
            existingPokemon.Types.push(pokemon['Types.name']);
          }
        } else {
          const { 'Types.name': type, ...rest } = pokemon;
          acc.push({ ...rest, Types: type ? [type] : [] });
        }
      
        return acc;
      }, []);      
    
    return [...formattedDBPokemons , ...filteredPokemons];
}

module.exports = {getAllPokemons};