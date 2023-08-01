import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_BY_NAME = "GET_BY_NAME";

export function getPokemons() {
    return async function (dispatch){
        const response = await axios("http://localhost:3001/pokemons");
        return dispatch({
            type: "GET_POKEMONS",
            payload: response.data
        })
    }
}

export function getByName(name) {
    return async function(dispatch) {
        const response = await axios(`http://localhost:3001/pokemons/?name=${name}`);
        return dispatch({
            type: "GET_BY_NAME",
            payload: response.data
        })
    }
}