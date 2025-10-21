<<<<<<< HEAD
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Navbar({ onSearch }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search); // 🔍 Enviamos el texto al componente padre (App.jsx)
    navigate("/"); // Muestra los resultados en la página de inicio
  };

  return (
    <nav className="bg-[#0B1014] text-white shadow-lg px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1
        className="text-2xl font-bold cursor-pointer text-[#00C8D7]"
        onClick={() => navigate("/")}
      >
        CINEVERSO
      </h1>

      {/* Barra de navegación */}
      <div className="hidden md:flex space-x-6 font-semibold">
        <Link to="/" className="hover:text-[#00C8D7]">Inicio</Link>
        <Link to="/top" className="hover:text-[#00C8D7]">Top 10</Link>
        <Link to="/kids" className="hover:text-[#00C8D7]">Kids</Link>
        <Link to="/documentales" className="hover:text-[#00C8D7]">Documentales</Link>
        <Link to="/libros" className="hover:text-[#00C8D7]">Basadas en Libros</Link>
        <Link to="/asiaticas" className="hover:text-[#00C8D7]">Asiáticas</Link>
        <Link to="/contacto" className="hover:text-[#00C8D7]">Contacto</Link>
      </div>

      {/* Barra de búsqueda */}
      <form onSubmit={handleSearch} className="flex bg-[#1A1F25] rounded-lg px-3 py-1">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar..."
          className="bg-transparent outline-none text-sm placeholder-[#B0B0B0]"
        />
        <button type="submit" className="text-[#00C8D7] ml-2">🔍</button>
      </form>

      {/* Botones de login y carrito */}
      <div className="flex items-center gap-4 ml-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-[#00C8D7] hover:bg-[#00E0FF] text-black font-semibold px-3 py-1 rounded-lg"
        >
          Iniciar sesión
        </button>
        <button
          onClick={() => navigate("/register")}
          className="border border-[#00C8D7] hover:bg-[#00C8D7] hover:text-black font-semibold px-3 py-1 rounded-lg"
        >
          Registrarse
        </button>
        <button onClick={() => navigate("/carrito")} className="hover:text-[#00C8D7]">
          <ShoppingCart size={22} />
        </button>
      </div>
=======
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext"; // asegúrate de que el path coincida
import { useUser } from "../Context/UserContext";

export function Navbar({ onOpenLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, logout } = useUser();

  const actionBtn =
    "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium " +
    "hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition";

  return (
    <nav className="bg-gradient-to-r from-[#001f4d] to-[#0b3d91] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo / Nombre */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img
            src="https://images.vexels.com/media/users/3/153808/isolated/preview/4876c523fb2612dceba4be0c7031461c-icono-de-trazo-frontal-de-silla-de-oficina.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="font-semibold text-lg tracking-tight">
            La casa de la oficina
          </span>
        </Link>

        {/* Enlaces (desktop) */}
        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-semibold hover:text-blue-200 transition-colors ${
                isActive ? "text-blue-300 underline underline-offset-4" : ""
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/Contacto"
            className={({ isActive }) =>
              `font-semibold hover:text-blue-200 transition-colors ${
                isActive ? "text-blue-300 underline underline-offset-4" : ""
              }`
            }
          >
            Contacto
          </NavLink>
          <NavLink
            to="/PelisLibros"
            className={({ isActive }) =>
              `font-semibold hover:text-blue-200 transition-colors ${
                isActive ? "text-blue-300 underline underline-offset-4" : ""
              }`
            }
          >
            PelisLibros
          </NavLink>
        </div>

        {/* Acciones derechas */}
        <div className="flex items-center gap-2">
          {/* Botón de tema */}
          <button onClick={toggleTheme} className={actionBtn}>
            Cambiar a {theme === "dark" ? "Light" : "Dark"}
          </button>

          {/* Estado de usuario */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              {user?.avatar && (
                <img
                  src={user.avatar}
                  alt={user.nombre ?? "Usuario"}
                  referrerPolicy="no-referrer"
                  className="h-8 w-8 rounded-full object-cover"
                />
              )}
              <div className="hidden sm:block leading-4 text-right">
                <p className="text-sm font-medium">{user?.nombre}</p>
                <p className="text-xs text-blue-200">{user?.cargo}</p>
              </div>
              <button onClick={logout} className={actionBtn}>
                Cerrar sesión
              </button>
            </div>
          ) : (
            <button onClick={onOpenLogin} className={actionBtn}>
              Iniciar sesión
            </button>
          )}

          {/* Botón hamburguesa (móvil) */}
          <button
            className="md:hidden text-2xl focus:outline-none ml-1"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-[#0b3d91] flex flex-col items-center space-y-3 py-4">
          <NavLink to="/" end onClick={closeMenu}>
            Inicio
          </NavLink>
          <NavLink to="/nosotros" onClick={closeMenu}>
            Nosotros
          </NavLink>
          <NavLink to="/productos" onClick={closeMenu}>
            Productos
          </NavLink>
          <NavLink to="/contacto" onClick={closeMenu}>
            Contacto
          </NavLink>
        </div>
      )}
>>>>>>> ee09641dbf65a344a9b78c951bf3ce5120f14abf
    </nav>
  );
}
