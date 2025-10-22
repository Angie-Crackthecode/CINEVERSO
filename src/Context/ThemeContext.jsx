// ThemeContext.jsx (MODIFICADO)
import { createContext, useContext, useState, useMemo } from "react";

// 1. Crear el contexto
const ThemeContext = createContext();

// 2. Hook personalizado para consumir el contexto
export const useTheme = () => useContext(ThemeContext);

// 3. Componente Provider
export const ThemeProvider = ({ children }) => {
    // 💡 CAMBIAR EL ESTADO INICIAL A 'dark'
    const [theme, setTheme] = useState('dark'); 

    // Función para cambiar entre 'light' y 'dark'
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Usamos useMemo para optimizar y solo recalcular si 'theme' cambia
    const value = useMemo(() => ({
        theme,
        toggleTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};