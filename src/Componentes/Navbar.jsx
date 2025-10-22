import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import { useUser } from "../Context/UserContext";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const navigate = useNavigate();

  const { theme = "light", toggleTheme } = useTheme();
  const { user, isAuthenticated, logout } = useUser();

  // ✅ Menú original que tú pusiste
  const menuItems = [
    { path: "/", label: "Inicio" },
    { path: "/PeliculasTops", label: "Peli Tops" },
    { path: "/PeliculasKids", label: "Peli Kids" },
    { path: "/PeliAsiáticas", label: "Peli Asiáticas" },
    { path: "/PeliDocumentales", label: "Peli Documentales" },
    { path: "/PeliLibros", label: "Peli Libros" },
    { path: "/Contacto", label: "Contacto" },
  ];

  const actionBtn =
    "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium " +
    "hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition";

  return (
    <nav className="bg-gradient-to-r from-[#001f4d] to-[#0b3d91] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* 🌟 Logo circular preparado */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="w-9 h-9 rounded-full bg-white"></div>
          <span className="font-semibold text-lg tracking-tight">
            La casa de la oficina
          </span>
        </Link>

        {/* 🔹 Menú escritorio */}
        <div className="hidden md:flex gap-6">
          {menuItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end
              className={({ isActive }) =>
                `font-semibold hover:text-blue-200 transition-colors ${
                  isActive ? "text-blue-300 underline underline-offset-4" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* ⚙️ Acciones */}
        <div className="flex items-center gap-2">
          {/* 🌓 Cambiar tema */}
          <button onClick={toggleTheme} className={actionBtn}>
            {theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
          </button>

          {/* 🛒 Carrito */}
          <button
            onClick={() => navigate("/carrito")}
            className="relative text-xl hover:text-blue-300 transition"
            title="Ver carrito"
          >
            <FaShoppingCart />
          </button>

          {/* 👤 Usuario */}
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
            <>
              <button onClick={() => navigate("/login")} className={actionBtn}>
                Iniciar sesión
              </button>
              {/* 🔹 CORREGIDO: /register en lugar de /registro */}
              <button onClick={() => navigate("/register")} className={actionBtn}>
                Registrarse
              </button>
            </>
          )}

          {/* 📱 Menú móvil */}
          <button
            className="md:hidden text-2xl focus:outline-none ml-1"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 📱 Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-[#0b3d91] flex flex-col items-center space-y-3 py-4 text-lg font-medium">
          {menuItems.map(({ path, label }) => (
            <NavLink key={path} to={path} onClick={closeMenu}>
              {label}
            </NavLink>
          ))}

          {!isAuthenticated ? (
            <>
              <button
                onClick={() => {
                  closeMenu();
                  navigate("/login");
                }}
                className={actionBtn}
              >
                Iniciar sesión
              </button>
              {/* 🔹 CORREGIDO: /register */}
              <button
                onClick={() => {
                  closeMenu();
                  navigate("/register");
                }}
                className={actionBtn}
              >
                Registrarse
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                logout();
                closeMenu();
              }}
              className={actionBtn}
            >
              Cerrar sesión
            </button>
          )}

          <button
            onClick={() => {
              closeMenu();
              navigate("/carrito");
            }}
            className="flex items-center gap-2 text-white hover:text-blue-300 text-lg mt-2"
          >
            <FaShoppingCart /> Ver carrito
          </button>
        </div>
      )}
    </nav>
  );
}
