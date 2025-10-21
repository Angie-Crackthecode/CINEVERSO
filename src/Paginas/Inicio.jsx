import { useRef, useEffect } from "react";
import peliculas from "../Componentes/PeliculasData";

export default function Inicio({ searchQuery = "" }) {
  const categorias = ["Top 10", "Basadas en Libros", "Kids", "Documentales", "Asiáticas"];
  const carruseles = useRef({});

  // ✅ Función para moverse con botones o automáticamente
  const scroll = (categoria, direccion) => {
    const contenedor = carruseles.current[categoria];
    if (contenedor) {
      const scrollAmount = direccion === "left" ? -300 : 300;
      contenedor.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // ✅ Movimiento automático cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      categorias.forEach((categoria) => scroll(categoria, "right"));
    }, 10000); // cada 10 segundos
    return () => clearInterval(interval);
  }, []);

  // ✅ Filtrar películas según el buscador (ahora también por año)
  const peliculasFiltradas = peliculas.filter((peli) => {
    const query = searchQuery.toLowerCase();
    return (
      peli.titulo?.toLowerCase().includes(query) ||
      peli.genero?.toLowerCase().includes(query) ||
      peli.categoria?.toLowerCase().includes(query) ||
      peli.anio?.toString().includes(query) // 🔹 NUEVA LÍNEA para buscar por año
    );
  });

  return (
    <div className="p-6">
      {/* Título principal */}
      <h1 className="text-3xl font-bold mb-6 text-[#00C8D7] text-center">
        🎬 Todas las películas
      </h1>

      {/* Mensaje si no hay resultados */}
      {peliculasFiltradas.length === 0 ? (
        <p className="text-center text-[#B0B0B0] text-lg mt-10">
          No se encontraron películas con ese nombre 😢
        </p>
      ) : (
        categorias.map((categoria) => {
          const peliculasCategoria = peliculasFiltradas.filter(
            (peli) => peli.categoria.toLowerCase() === categoria.toLowerCase()
          );

          if (peliculasCategoria.length === 0) return null;

          return (
            <div key={categoria} className="mb-12 relative">
              {/* Título de categoría */}
              <h2 className="text-2xl font-semibold text-[#00C8D7] mb-3">
                {categoria}
              </h2>

              {/* Botones de flechas a los costados */}
              <button
                onClick={() => scroll(categoria, "left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#0B1014]/70 hover:bg-[#00C8D7] text-white p-2 rounded-full z-10 transition-all"
              >
                ◀
              </button>
              <button
                onClick={() => scroll(categoria, "right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#0B1014]/70 hover:bg-[#00C8D7] text-white p-2 rounded-full z-10 transition-all"
              >
                ▶
              </button>

              {/* Carrusel de películas */}
              <div
                ref={(el) => (carruseles.current[categoria] = el)}
                className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
              >
                {peliculasCategoria.map((peli, index) => (
                  <div
                    key={peli.id || index}
                    className="bg-[#1A1F25] rounded-lg p-3 shadow-md hover:scale-105 transition-transform duration-300 min-w-[180px]"
                  >
                    <img
                      src={peli.imagen}
                      alt={peli.titulo}
                      className="rounded-lg mb-2 w-full h-48 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-white truncate">
                      {peli.titulo}
                    </h3>
                    <p className="text-sm text-[#B0B0B0]">
                      {peli.anio} • {peli.genero}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
