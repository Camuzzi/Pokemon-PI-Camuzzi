
import "./cards.styles.css";

import Card from "../card/card";

function Cards({pokemons}) {

    return(
        <div className="cards-style">
            {/* {pokemonList?.map((pokemon) => (
                <Card pokemon={pokemon} key={pokemon.id}/>
            ))} */}
            {/* {pokemonList ?  pokemonList?.map((pokemon) => (
                <Card pokemon={pokemon} key={pokemon.id}/>
            )) : <Card pokemon={pokemonByName} key={pokemonByName.id} />} */}
            {Array.isArray(pokemons) ? (
                pokemons.map((pokemon) => (
                    <Card pokemon={pokemon} key={pokemon.id} />
                ))
            ) : (
                <Card pokemon={pokemons} key={pokemons.id} />
            )
        }
        </div>
    );

}

export default Cards;