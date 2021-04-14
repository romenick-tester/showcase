import React, { useContext, createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);

    const vars = { sidebar };
    const funcs = { setSidebar };

    return <AppContext.Provider value={{ ...vars, ...funcs }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}