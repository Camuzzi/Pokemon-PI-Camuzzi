import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_TYPES = "GET_TYPES";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE"; 
export const FILTER_DATA = "FILTER_DATA";

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

export function getTypes() {
    return async function(dispatch){
        const response = await axios("http://localhost:3001/types");
        return dispatch({
            type: "GET_TYPES",
            payload: response.data
        })
    }
}

export function filterByType(type) {
    return {
        type: FILTER_BY_TYPE,
        payload: type
    }
}

export function dataFilter(data) {
    return {
        type: FILTER_DATA,
        payload: data
    }
}