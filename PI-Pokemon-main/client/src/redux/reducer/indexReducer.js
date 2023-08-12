import { GET_POKEMONS,GET_BY_NAME,GET_TYPES,FILTER_BY_TYPE,FILTER_DATA,FILTER_ALPHA,CREATE_POKEMON,GET_DETAIL,CLEAN_DETAIL, RESET_FILTERS } from "../actions/indexActions";

let initialState = {allPokemons:[],allTypes:[],pokemonsByName:[],auxPokemons:[],pokemonDetail:[],filtersPokemons:[],filters:{type:"all",data:"all",order:"reset"}};

function rootReducer (state = initialState,action) {
    switch (action.type){
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                auxPokemons: action.payload,
                filteredPokemons: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                pokemonsByName: action.payload,
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

             state.filtersPokemons = state.auxPokemons.filter( (pokemon) => pokemon.Types.includes(action.payload) );
  

            return {
                ...state,
                allPokemons: [...state.filtersPokemons]
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
                state.filtersPokemons = state.auxPokemons.filter((p) => typeof p.id !== "number");
            } else {
                state.filtersPokemons = state.auxPokemons.filter((p) => typeof p.id === "number");
            }

            return {
                ...state,
                allPokemons: [...state.filtersPokemons]
            }

        case FILTER_ALPHA:
               
            if (action.payload === "reset") 
             return {
                ...state,
                allPokemons:[...state.auxPokemons]
            };

            let sortedPokemons = [...state.filtersPokemons];

            if (action.payload === "asc") {
            sortedPokemons.sort((a, b) => a.name.localeCompare(b.name));
            } else if (action.payload === "atc") {
            sortedPokemons.sort((a, b) => b.attack - a.attack);
            } else {
            sortedPokemons.sort((a, b) => b.name.localeCompare(a.name));
            }
        
            return {
            ...state,
            allPokemons: sortedPokemons
            }

        case RESET_FILTERS:
            return{
                ...state,
                allPokemons: [...state.auxPokemons]
            }

        case CREATE_POKEMON:
            return {
                ...state,
                allPokemons: [...state.auxPokemons],
                filtersPokemons: [...state.auxPokemons] 
            };
            

        default:
            return state;
    }
}

export default rootReducer;