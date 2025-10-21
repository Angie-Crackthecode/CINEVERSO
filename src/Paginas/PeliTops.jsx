export default function PeliTops() {
  const top10 = [
    "Cómo entrenar a tu dragón",
    "Superman",
    "La Hora De La Desaparición",
    "Caught Stealing",
    "Thunderbolts",
    "Los 4 fantásticos: primeros pasos",
    "Misión: Imposible - Sentencia final",
    "Blade",
    "Guardianes de la noche",
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl text-turquesa font-bold mb-4">🔥 Top 10 Películas 2025</h1>
      <ul className="space-y-3">
        {top10.map((p, i) => (
          <li key={i} className="flex justify-between items-center bg-gray-900 p-3 rounded-xl">
            <span>{i + 1}. {p}</span>
            <button className="bg-turquesa text-black px-3 py-1 rounded-md">Ver info</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
