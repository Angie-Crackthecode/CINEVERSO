import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import PeliTops from "./Paginas/PeliTops";
import PeliKids from "./Paginas/PeliKids";
import PeliDocumentales from "./Paginas/PeliDocumentales";
import PeliLibros from "./Paginas/PeliLibros";
import PeliAsiaticas from "./Paginas/PeliAsiaticas";
import Contacto from "./Paginas/Contacto";
import Navbar from "./Componentes/Navbar";
import Login from "./Paginas/Login";
import Register from "./Paginas/Register";
import Carrito from "./Paginas/Carrito";
import "./App.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <div className="min-h-screen bg-[#0B1014] text-white">
      {/* ✅ Navbar global */}
      <Navbar onSearch={handleSearch} />

      {/* ✅ Rutas */}
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Inicio searchQuery={searchQuery} />} />
          <Route path="/top" element={<PeliTops />} />
          <Route path="/kids" element={<PeliKids />} />
          <Route path="/documentales" element={<PeliDocumentales />} />
          <Route path="/libros" element={<PeliLibros />} />
          <Route path="/asiaticas" element={<PeliAsiaticas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </main>
    </div>
  );
}
