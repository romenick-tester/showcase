import React, { useContext, createContext, useState, useCallback, useReducer, useEffect } from "react";
import { getAllPokemonRequest, getAllPokemonSuccess, getAllPokemonError } from "./actions";
import { pokemonReducers as reducer } from "./reducers";
import axios from "axios";

export const AppContext = createContext();

const initialState = {
    loading: true,
    error: null,
    list: []
}

export const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = useCallback(async () => {
        dispatch(getAllPokemonRequest());
        try {
            const { data } = await axios.get("/api/pokemon");
            dispatch(getAllPokemonSuccess(data));
        } catch (err) {
            console.error(err.message);
            dispatch(getAllPokemonError());
        }
    })

    useEffect(() => {
        fetchData();
    }, [])

    const vars = { ...state, sidebar };
    const funcs = { setSidebar };

    return <AppContext.Provider value={{ ...vars, ...funcs }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}