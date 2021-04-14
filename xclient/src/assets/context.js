import React, { useContext, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    return <AppContext.Provider value={{ sample: "hello" }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}