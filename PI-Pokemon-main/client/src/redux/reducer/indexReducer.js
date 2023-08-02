import { GET_POKEMONS,GET_BY_NAME,GET_TYPES,FILTER_BY_TYPE,FILTER_DATA } from "../actions/indexActions";

let initialState = {allPokemons:[],allTypes:[],pokemonsByName:[],auxPokemons:[]};

function rootReducer (state = initialState,action) {
    switch (action.type){
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                auxPokemons: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                pokemonsByName: action.payload
            }
        case GET_TYPES:
            return {
                ...state,
                allTypes: action.payload
            }

        case FILTER_BY_TYPE:

            if (action.payload === "all") return {...state,allPokemons:[...state.auxPokemons]}

            let filteredPokemons = state.auxPokemons.filter( (pokemon) => pokemon.type.includes(action.payload) );

            return {
                ...state,
                allPokemons: [...filteredPokemons]
            }

        case FILTER_DATA:
            let filter;

            if (action.payload === "all"){
                filter = state.auxPokemons;
                return {
                    ...state,
                    allPokemons: [...filter]
                }
            }

            if (action.payload === "db") {
                filter = state.auxPokemons.filter((p) => typeof p.id !== "number");
            } else {
                filter = state.auxPokemons.filter((p) => typeof p.id === "number");
            }

            return {
                ...state,
                allPokemons: [...filter]
            }


        default:
            return state;
    }
}

export default rootReducer;