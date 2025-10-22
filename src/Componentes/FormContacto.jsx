import { useState } from "react";

export function FormContacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [errores, setErrores] = useState({});
  const { theme } = useTheme();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validar = () => {
    const nuevosErrores = {};
    if (!form.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
    if (!emailRegex.test(form.email))
      nuevosErrores.email = "Correo inválido. Usa un formato correcto.";
    if (form.mensaje.trim().length < 10)
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    return nuevosErrores;
  };

  const limpiarFormulario = () => {
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = validar();

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    alert("✅ Mensaje enviado con éxito");
    console.log("Datos enviados:", form);
    limpiarFormulario();
    setErrores({});
  };

  return (
    <div
      className={
        theme === "dark"
          ? "bg-gray-900 text-white p-6 rounded-xl shadow-lg"
          : "bg-white text-gray-900 p-6 rounded-xl shadow-lg"
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo: Nombre */}
        <div>
          <label className="block font-semibold mb-1">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className="w-full p-2 border rounded text-black"
          />
          {errores.nombre && (
            <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>
          )}
        </div>

        {/* Campo: Email */}
        <div>
          <label className="block font-semibold mb-1">Correo electrónico:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            className="w-full p-2 border rounded text-black"
          />
          {errores.email && (
            <p className="text-red-500 text-sm mt-1">{errores.email}</p>
          )}
        </div>

        {/* Campo: Mensaje */}
        <div>
          <label className="block font-semibold mb-1">Mensaje:</label>
          <textarea
            name="mensaje"
            rows="4"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
            className="w-full p-2 border rounded text-black"
          ></textarea>
          {errores.mensaje && (
            <p className="text-red-500 text-sm mt-1">{errores.mensaje}</p>
          )}
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full bg-[#00CED1] text-black font-bold py-2 rounded-lg hover:bg-[#00b5b0] transition"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}
