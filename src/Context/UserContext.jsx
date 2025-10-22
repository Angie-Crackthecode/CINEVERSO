import { createContext, useContext, useState, useEffect } from "react";

// 1. Crear el contexto global de usuario
const UserContext = createContext();

// 2. Hook personalizado para acceder fácilmente al contexto
// ESTO ES LO QUE NECESITAS PARA CONSUMIR EL USUARIO
export const useUser = () => useContext(UserContext);

// 3. Componente Provider
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); 
    const [isAuthenticated, setIsAuthenticated] = useState(false); 

    // ✅ Cargar usuario activo al iniciar la aplicación
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("usuarioActivo"));
        if (storedUser) {
            setUser(storedUser);
            setIsAuthenticated(true);
        }
    }, []);

    // ✅ Iniciar sesión y guardar en localStorage
    const login = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem("usuarioActivo", JSON.stringify(userData));
    };

    // ✅ Registrar (y loguear al instante)
    const register = (newUser) => {
        setUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem("usuarioActivo", JSON.stringify(newUser));
    };

    // ✅ Cerrar sesión y limpiar localStorage
    const logout = () => {
        localStorage.removeItem("usuarioActivo");
        setUser(null);
        setIsAuthenticated(false);
    };

    // ✅ Proveer datos y funciones globales
    return (
        <UserContext.Provider 
            value={{ 
                user, 
                isAuthenticated, 
                login, 
                register, 
                logout,
                // Puedes incluir setUser/setIsAuthenticated si necesitas mutar el estado directamente
                // setUser,
                // setIsAuthenticated, 
            }}
        >
            {children}
        </UserContext.Provider>
    );
};