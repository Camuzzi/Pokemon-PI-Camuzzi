import { GET_POKEMONS,GET_BY_NAME } from "../actions/indexActions";

let initialState = {allPokemons:[],allTypes:[],pokemonsByName:[]};

function rootReducer (state = initialState,action) {
    switch (action.type){
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                pokemonsByName: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;