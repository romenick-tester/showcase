import {
    GET_ALL_POKEMON_REQUEST,
    GET_ALL_POKEMON_SUCCESS,
    GET_ALL_POKEMON_ERROR,
} from "./constants";

export const pokemonReducers = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_POKEMON_REQUEST:
            return { ...state, loading: true, error: false };

        case GET_ALL_POKEMON_SUCCESS:
            return { ...state, list: payload, error: false };

        case GET_ALL_POKEMON_ERROR:
            return { ...state, list: [], error: true };
    }
}