import axios from "axios";
import {
    GET_ALL_POKEMON_REQUEST,
    GET_ALL_POKEMON_SUCCESS,
    GET_ALL_POKEMON_ERROR,
} from "./constants";

const getAllPokemon = async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_POKEMON_REQUEST });

        const { data } = await axios.get("/api/pokemon");

        dispatch({ type: GET_ALL_POKEMON_SUCCESS, payload: data })
    } catch (err) {
        console.log(err.message);
        dispatch({ type: GET_ALL_POKEMON_ERROR });
    }
}

export default getAllPokemon;