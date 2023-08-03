import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_TYPES = "GET_TYPES";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE"; 
export const FILTER_DATA = "FILTER_DATA";
export const FILTER_ALPHA = "FILTER_ALPHA";
export const CREATE_POKEMON = "CREATE_POKEMON";

export function getPokemons() {
    return async function (dispatch){
        const response = await axios("http://localhost:3001/pokemons");
        return dispatch({
            type: GET_POKEMONS,
            payload: response.data
        })
    }
}

export function getByName(name) {
    return async function(dispatch) {
        const response = await axios(`http://localhost:3001/pokemons/?name=${name}`);
        return dispatch({
            type: GET_BY_NAME,
            payload: response.data
        })
    }
}

export function getTypes() {
    return async function(dispatch){
        const response = await axios("http://localhost:3001/types");
        return dispatch({
            type: GET_TYPES,
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

export function alphaFilter(data){
    return {
        type: FILTER_ALPHA,
        payload: data
    }
}

export function createPoke(form) {
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/pokemons",form);
        return dispatch({
            type: CREATE_POKEMON,
            payload: response.data
        })
    }
}