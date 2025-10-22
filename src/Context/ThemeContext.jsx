import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const UserContext = createContext();

// Hook personalizado
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 🔹 Cargar usuario activo si existe
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("usuarioActivo"));
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

  // 🔹 Iniciar sesión manualmente
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem("usuarioActivo", JSON.stringify(userData));
  };

  // 🔹 Registrar un nuevo usuario (usado en Register.jsx)
  const register = (newUser) => {
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem("usuarioActivo", JSON.stringify(newUser));
  };

  // 🔹 Cerrar sesión
  const logout = () => {
    localStorage.removeItem("usuarioActivo");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
