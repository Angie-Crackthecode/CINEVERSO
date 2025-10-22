import { useState } from "react";
import peliculas from "../Componentes/PeliculasData";

export default function PeliLibros() {
  // ✅ Filtramos solo las películas que son de la categoría "Basadas en Libros"
  const peliculasLibros = peliculas.filter(
    (peli) => peli.categoria.toLowerCase() === "basadas en libros"
  );

  // ✅ Obtenemos los géneros únicos (para el menú lateral)
  const generos = [...new Set(peliculasLibros.map((p) => p.genero))];

  // ✅ Estado para el género seleccionado
  const [generoSeleccionado, setGeneroSeleccionado] = useState("Todos");

  // ✅ Filtramos según el género seleccionado
  const peliculasFiltradas =
    generoSeleccionado === "Todos"
      ? peliculasLibros
      : peliculasLibros.filter((p) => p.genero === generoSeleccionado);

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      {/* 🔹 Menú lateral de géneros */}
      <aside className="md:w-1/4 bg-[#1A1F25] p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-[#00C8D7] mb-4 text-center">
          🎭 Géneros
        </h2>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setGeneroSeleccionado("Todos")}
              className={`w-full text-left px-3 py-2 rounded-md transition ${
                generoSeleccionado === "Todos"
                  ? "bg-[#00C8D7] text-black font-semibold"
                  : "hover:bg-[#00C8D7]/30"
              }`}
            >
              Todos
            </button>
          </li>
          {generos.map((gen) => (
            <li key={gen}>
              <button
                onClick={() => setGeneroSeleccionado(gen)}
                className={`w-full text-left px-3 py-2 rounded-md transition ${
                  generoSeleccionado === gen
                    ? "bg-[#00C8D7] text-black font-semibold"
                    : "hover:bg-[#00C8D7]/30"
                }`}
              >
                {gen}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* 🔹 Catálogo de películas */}
      <main className="flex-1">
        <h1 className="text-3xl font-bold text-[#00C8D7] mb-6 text-center">
          📚 Películas basadas en libros
        </h1>

        {peliculasFiltradas.length === 0 ? (
          <p className="text-center text-gray-400">
            No hay películas disponibles en este género 😢
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {peliculasFiltradas.map((peli, index) => (
              <div
                key={peli.id || index}
                className="bg-[#1A1F25] p-3 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={peli.imagen}
                  alt={peli.titulo}
                  className="rounded-lg mb-2 w-full h-48 object-cover"
                />
                <h3 className="text-lg font-semibold text-white truncate">
                  {peli.titulo}
                </h3>
                <p className="text-sm text-[#B0B0B0]">{peli.genero}</p>
                <p className="text-xs text-gray-500">{peli.anio}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}