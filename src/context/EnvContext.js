import React, { createContext, useContext } from "react";

// Crea el contexto
const EnvContext = createContext();

// Proveedor del contexto
export const EnvProvider = ({ children }) => {
    const envVariables = {
        apiWeatherKey: process.env.REACT_APP_API_WEATHER_KEY,
        apiWeatherUrl: process.env.REACT_APP_API_WEATHER_URL,
        baseUrl: process.env.REACT_APP_BASE_URL,
        apiMapKey:process.env.REACT_APP_API_MAPS_KEY,
        apiMapUrl:process.env.REACT_APP_MAPS_URL
    };

    return (
        <EnvContext.Provider value={envVariables}>
            {children}
        </EnvContext.Provider>
    );
};

// Hook para usar el contexto
export const useEnv = () => useContext(EnvContext);
