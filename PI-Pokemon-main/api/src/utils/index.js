
const filterPokemons = async (array,source) => {
    
    if (Array.isArray(array) && source === "api") {
        
        const infoPokemons = Promise.all(array).then(
            (response) => response.map( (e) => {
                return {
                    id: e.id,
                    name: e.name,
                    image: e.sprites.other.dream_world.front_default,
                    hp: e.stats[0].base_stat,
                    attack: e.stats[1].base_stat,
                    defense: e.stats[2].base_stat,
                    speed: e.stats[3].base_stat,
                    height: e.height,
                    weight: e.weight,
                    Types: e.types?.map((r) => r.type.name),
                };
            } )
        );
    
        return await infoPokemons;

    }

    if (!Array.isArray(array) && source === "api") {
        return {
            id: array.id,
            name: array.name,
            image: array.sprites.other.dream_world.front_default,
            hp: array.stats[0].base_stat,
            attack: array.stats[1].base_stat,
            defense: array.stats[2].base_stat,
            speed: array.stats[3].base_stat,
            height: array.height,
            weight: array.weight,
            Types: array.types?.map((r) => r.type.name),  
        }
    }
    
    
}

const filterTypes = (data) => {
    return data.map( (e) => {
        return {
            id: e.id,
            name: e.name
        }
    })
}


const updateDB = async () => {

}

module.exports = {filterPokemons,filterTypes};