import { GET_POKEMONS,GET_BY_NAME,GET_TYPES,FILTER_BY_TYPE,FILTER_DATA,FILTER_ALPHA,CREATE_POKEMON,GET_DETAIL,CLEAN_DETAIL } from "../actions/indexActions";

let initialState = {allPokemons:[],allTypes:[],pokemonsByName:[],auxPokemons:[],pokemonDetail:[]};

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

        case GET_DETAIL:
            return{
                ...state,
                pokemonDetail: action.payload
            }
        
        case CLEAN_DETAIL:
            return{
                ...state,
                pokemonDetail: []
            }

        case FILTER_BY_TYPE:

            if (action.payload === "all") return {...state,allPokemons:[...state.auxPokemons]}

             let filteredPokemons = state.auxPokemons.filter( (pokemon) => pokemon.Types.includes(action.payload) );
  

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

        case FILTER_ALPHA:
            let alphaFilter;

            if (action.payload === "all") return {...state,allPokemons:[...state.auxPokemons]}

           alphaFilter = state.auxPokemons.sort((a,b) => {
            if(action.payload === "asc"){
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
           });

           alphaFilter = state.auxPokemons.sort((a,b) => {
            if(action.payload === "asc"){
                return a.name.localeCompare(b.name);
            } else if (action.payload === "atc"){
               return b.attack - a.attack;
            } else {
                return b.name.localeCompare(a.name);
            }
           });

           return {
            ...state,
            allPokemons: [...alphaFilter]
           }

        case CREATE_POKEMON:
            return {
                ...state
            };
            

        default:
            return state;
    }
}

export default rootReducer;