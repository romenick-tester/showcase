import React, { useContext, createContext, useState, useReducer, useEffect } from "react";
import getAllPokemon from "./actions";
import { pokemonReducers as reducer } from "./reducers";

export const AppContext = createContext();

const initialState = {
    loading: false,
    error: null,
    list: []
}

export const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = (type) => {
        getAllPokemon(dispatch, type);
    }

    const vars = { ...state, sidebar };
    const funcs = { setSidebar, getPokemon };

    return <AppContext.Provider value={{ ...vars, ...funcs }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}