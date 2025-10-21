export default function PeliLibros() {
  const peliculas = [
    "Harry Potter",
    "Orgullo y Prejuicio",
    "El señor de los anillos",
    "Crepúsculo",
    "Yo antes de ti",
    "El padrino",
    "El resplandor",
    "Mujercitas",
    "It",
    "Psicosis",
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl text-turquesa font-bold mb-4">📖 Basadas en Libros</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {peliculas.map((p, i) => (
          <div key={i} className="bg-gray-900 p-3 rounded-xl text-center">
            <h2 className="mb-2">{p}</h2>
            <button className="bg-turquesa text-black px-3 py-1 rounded-md">Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
}
