import React, { useState } from "react";
import peliculas from "../Componentes/PeliculasData"; // ✅ Asegúrate que PeliculasData exporte tu lista correctamente

export default function PeliKids() {
  const [generoSeleccionado, setGeneroSeleccionado] = useState("Todos");

  // ✅ Filtramos solo las películas para niños o familiares
  const peliculasKids = peliculas.filter(
    (p) => p.categoria === "Kids" || p.categoria === "Familiar"
  );

  // ✅ Extraemos géneros únicos
  const generos = [
    "Todos",
    ...new Set(peliculasKids.map((p) => p.genero)),
  ];

  // ✅ Filtramos según el género seleccionado
  const peliculasFiltradas =
    generoSeleccionado === "Todos"
      ? peliculasKids
      : peliculasKids.filter((p) => p.genero === generoSeleccionado);

  return (
    <div className="flex flex-col md:flex-row p-6 bg-[#0B1014] min-h-screen text-white">
      {/* --- MENÚ LATERAL DE GÉNEROS --- */}
      <aside className="md:w-1/5 mb-6 md:mb-0 md:mr-6 bg-[#1A1F25] p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-[#00C8D7] mb-3">🍿 Géneros</h2>
        <ul className="space-y-2">
          {generos.map((g, i) => (
            <li
              key={i}
              onClick={() => setGeneroSeleccionado(g)}
              className={`cursor-pointer p-2 rounded-lg text-sm transition-colors ${
                generoSeleccionado === g
                  ? "bg-[#00C8D7] text-black font-semibold"
                  : "hover:bg-[#00C8D7]/30"
              }`}
            >
              {g}
            </li>
          ))}
        </ul>
      </aside>

      {/* --- LISTA DE PELÍCULAS KIDS --- */}
      <main className="flex-1">
        <h1 className="text-3xl font-bold text-[#00C8D7] mb-4">
          🧒 Películas para Niños
        </h1>
        <p className="text-gray-300 mb-6">
          Diversión y aventuras para disfrutar en familia.
        </p>

        {peliculasFiltradas.length === 0 ? (
          <p className="text-gray-400 text-center">
            No hay películas disponibles en este género.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {peliculasFiltradas.map((p, i) => (
              <div
                key={i}
                className="bg-[#1A1F25] rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform"
              >
                <img
                  src={p.imagen}
                  alt={p.titulo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h2 className="text-lg font-semibold mb-1">{p.titulo}</h2>
                  <p className="text-gray-400 text-sm mb-2">{p.genero}</p>
                  <button className="w-full bg-[#00C8D7] text-black py-1 rounded-md hover:bg-[#00E0FF] font-bold transition-colors">
                    Ver más
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
