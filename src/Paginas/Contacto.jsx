export default function Contacto() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl text-turquesa font-bold mb-4">📩 Contáctanos</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Tu nombre" className="w-full p-2 rounded text-black" />
        <input type="email" placeholder="Tu correo" className="w-full p-2 rounded text-black" />
        <textarea placeholder="Mensaje" className="w-full p-2 rounded text-black" rows="4"></textarea>
        <button className="bg-turquesa text-black font-bold w-full py-2 rounded-lg">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}
