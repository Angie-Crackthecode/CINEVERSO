import { useRef } from "react";

export default function MovieCarousel({ titulo, peliculas }) {
  const carruselRef = useRef(null);

  const scrollLeft = () => {
    carruselRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    carruselRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-[#00C8D7] mb-3">{titulo}</h2>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1A1F25]/70 hover:bg-[#00C8D7] text-white p-3 rounded-full z-10"
        >
          ◀
        </button>

        <div
          ref={carruselRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth px-10"
        >
          {peliculas.map((peli) => (
            <div
              key={peli.id}
              className="min-w-[220px] bg-[#1A1F25] rounded-lg p-3 shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <img
                src={peli.imagen}
                alt={peli.titulo}
                className="rounded-lg w-full h-64 object-cover"
              />
              <h3 className="text-lg font-bold mt-2">{peli.titulo}</h3>
              <p className="text-sm text-[#B0B0B0]">{peli.anio}</p>
              <p className="text-sm text-[#00C8D7]">{peli.genero}</p>
              <button className="mt-2 bg-[#00C8D7] text-black px-3 py-1 rounded hover:bg-[#00E0FF] transition">
                Ver ahora
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1A1F25]/70 hover:bg-[#00C8D7] text-white p-3 rounded-full z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
