import peliculas from "./PeliculasData";

export default function MovieGallery() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
      {peliculas.map((peli) => (
        <div 
          key={peli.id} 
          className="bg-[#1A1F25] p-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200"
        >
          <img 
            src={peli.imagen} 
            alt={peli.titulo} 
            className="rounded-lg w-full h-64 object-cover"
          />
          <h2 className="text-lg font-bold mt-2 text-white">{peli.titulo}</h2>
          <p className="text-sm text-[#B0B0B0]">{peli.anio}</p>
          <p className="text-sm text-[#00C8D7] font-semibold">{peli.genero}</p>

          <button className="mt-2 bg-[#00C8D7] text-black px-3 py-1 rounded hover:bg-[#00E0FF] transition">
            Ver ahora
          </button>
        </div>
      ))}
    </div>
  );
}
