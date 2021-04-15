import {
    GET_ALL_POKEMON_REQUEST,
    GET_ALL_POKEMON_SUCCESS,
    GET_ALL_POKEMON_ERROR,
} from "./constants";

export const getAllPokemonRequest = () => {
    return { type: GET_ALL_POKEMON_REQUEST };
}

export const getAllPokemonSuccess = (data) => {
    return { type: GET_ALL_POKEMON_SUCCESS, payload: data };
}

export const getAllPokemonError = () => {
    return { type: GET_ALL_POKEMON_ERROR };
}