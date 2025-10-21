export default function Carrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const eliminar = (titulo) => {
    const nuevo = carrito.filter((p) => p.titulo !== titulo);
    localStorage.setItem("carrito", JSON.stringify(nuevo));
    window.location.reload();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl text-[#00C8D7] mb-4">🛒 Tu carrito</h1>
      {carrito.length === 0 ? (
        <p className="text-gray-400">No hay películas en el carrito.</p>
      ) : (
        carrito.map((p, i) => (
          <div key={i} className="bg-[#1A1F25] p-3 rounded-xl mb-3 flex justify-between">
            <span>{p.titulo}</span>
            <button
              onClick={() => eliminar(p.titulo)}
              className="text-red-400 hover:text-red-600"
            >
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
}
