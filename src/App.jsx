// ✅ src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// 🧭 Páginas
import Inicio from "./Paginas/Inicio";
import PeliTops from "./Paginas/PeliTops";
import PeliKids from "./Paginas/PeliKids";
import PeliDocumentales from "./Paginas/PeliDocumentales";
import PeliLibros from "./Paginas/PeliLibros";
import PeliAsiaticas from "./Paginas/PeliAsiaticas";
import Contacto from "./Paginas/Contacto";
import Login from "./Paginas/Login";
import Register from "./Paginas/Register";
import Carrito from "./Paginas/Carrito";

// 🧱 Componentes
import Navbar from "./Componentes/Navbar";

// 🎨 Estilos globales
import "./App.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // 🔍 Función para manejar la búsqueda
  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <div className="min-h-screen bg-[#0B1014] text-white">
      {/* ✅ Navbar global con buscador y rutas */}
      <Navbar onSearch={handleSearch} />

      {/* ✅ Contenido principal con rutas activas */}
      <main className="p-4">
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<Inicio searchQuery={searchQuery} />} />

          {/* Páginas de películas */}
          <Route path="/PeliculasTops" element={<PeliTops />} />
          <Route path="/PeliculasKids" element={<PeliKids />} />
          <Route path="/peliasiaticas" element={<PeliAsiaticas />} />
          <Route path="/PeliDocumentales" element={<PeliDocumentales />} />
          <Route path="/PeliLibros" element={<PeliLibros />} />

          {/* Página de contacto */}
          <Route path="/Contacto" element={<Contacto />} />

          {/* Autenticación */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />

          {/* Carrito */}
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </main>
    </div>
  );
}
