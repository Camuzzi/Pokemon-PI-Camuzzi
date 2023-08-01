// import './cards.styles.css';
// import Card from "../card/card";

// function Cards({games}) {

//   const gamesList = games;

//     return (
//       <div className="card-style" >
//         {gamesList?.map((game) => (
//           <Card game={game}/>
//         ))}
//       </div>
//     );
//   }
  
//   export default Cards;

import "./cards.styles.css";

import Card from "../card/card";

function Cards({pokemons}) {

    const pokemonList = pokemons;

    return(
        <div>
            {pokemonList.map((pokemon) => (
                <Card pokemon={pokemon} />
            ))}
        </div>
    );

}

export default Cards;