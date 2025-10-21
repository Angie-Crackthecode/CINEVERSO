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
    </nav>
  );
}
