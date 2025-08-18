import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const LanguajeContext = createContext();

// Crear un proveedor de contexto
export const LanguajeProvider = ({ children }) => {
  const [idioma, setIdioma] = useState(() => {
    const storedIdioma = localStorage.getItem("idioma");
    return storedIdioma || "es";
  });

  useEffect(() => {
    localStorage.setItem("idioma", idioma);
  }, [idioma]);

  const toggleIdioma = () => {
    setIdioma((prevIdioma) => (prevIdioma === "es" ? "en" : "es"));
  };

  return (
    <LanguajeContext.Provider value={{ idioma, toggleIdioma }}>
      {children}
    </LanguajeContext.Provider>
  );
};


