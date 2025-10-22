// ✅ src/Context/UserContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto global de usuario
const UserContext = createContext();

// Hook personalizado para acceder fácilmente al contexto
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // usuario activo
  const [isAuthenticated, setIsAuthenticated] = useState(false); // estado de sesión

  // ✅ Al cargar la app, revisa si hay un usuario guardado
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("usuarioActivo"));
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

  // ✅ Iniciar sesión
  const login = (usuarioData) => {
    setUser(usuarioData);
    setIsAuthenticated(true);
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioData));
  };

  // ✅ Registrar usuario y loguearlo al instante
  const register = (usuarioData) => {
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioData));
    setUser(usuarioData);
    setIsAuthenticated(true);
  };

  // ✅ Cerrar sesión
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
        setUser, // 🔹 para actualizar desde login
        isAuthenticated,
        setIsAuthenticated, // 🔹 para actualizar el estado global
        login,
        register,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
