// src/Componentes/FormContacto.jsx (CON ESTILOS AJUSTADOS)
import { useState } from "react";
import { useTheme } from "../Context/ThemeContext";

export function FormContacto() {
  // ... (Lógica de estado y validación aquí - SIN CAMBIOS)
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [errores, setErrores] = useState({});
  const { theme } = useTheme();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validar = () => {
    // ... (Lógica de validación)
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

  // 💡 NUEVOS ESTILOS AJUSTADOS PARA TEMA BLANCO/NEGRO
  const isDark = theme === "dark";

  // Estilos para el input (fondo y borde)
  const inputClasses = `w-full p-3 border rounded-lg shadow-inner transition-colors ${isDark
      ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500"
      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-cyan-500 focus:border-cyan-500" // 💡 Se usa el mismo acento cian para light/dark
    }`;

  // Estilos para el contenedor del formulario (fondo principal)
  const containerClasses = `p-8 rounded-xl shadow-2xl transition-colors ${isDark
      ? "bg-gray-800 text-white"
      : "bg-white text-gray-900" // 💡 Fondo blanco y texto oscuro
    }`;

  return (
    <div className={containerClasses}>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Campo: Nombre */}
        <div>
          {/* 💡 Label siempre turquesa (o cian-400) para acento */}
          <label className="block text-sm font-medium text-cyan-400 mb-1">Nombre Completo:</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre y apellido"
            className={inputClasses}
          />
    </div>

{/* Campo: Email - (mismo patrón aplicado) */ }
  <div>
    <label className="block text-sm font-medium text-cyan-400 mb-1">Correo Electrónico:</label>
    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      placeholder="ejemplo@correo.com"
      className={inputClasses}
    />
    {errores.email && (
      <p className="text-red-500 text-sm mt-1 font-semibold">{errores.email}</p>
    )}
  </div>

  {/* Campo: Mensaje - (mismo patrón aplicado) */ }
  <div>
    <label className="block text-sm font-medium text-cyan-400 mb-1">Mensaje:</label>
    <textarea
      name="mensaje"
      rows="4"
      value={form.mensaje}
      onChange={handleChange}
      placeholder="Escribe tu consulta o comentario aquí..."
      className={`${inputClasses} resize-none`}
    ></textarea>
    {errores.mensaje && (
      <p className="text-red-500 text-sm mt-1 font-semibold">{errores.mensaje}</p>
    )}
  </div>

  {/* Botón de envío - Siempre con el color de acento cian */ }
  <button
    type="submit"
    className="w-full flex items-center justify-center bg-cyan-600 text-gray-900 py-3 rounded-lg font-bold hover:bg-cyan-500 transition duration-300 shadow-lg shadow-cyan-500/50 uppercase tracking-widest text-lg transform hover:scale-[1.01]"
  >
    Enviar Mensaje
  </button>
</form >
 </div >
);
}