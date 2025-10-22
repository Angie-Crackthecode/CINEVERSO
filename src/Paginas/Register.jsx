import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usuariosRegistrados from "../Componentes/UsuariosData"; // usuarios base del sistema
import { useUser } from "../Context/UserContext";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useUser(); // ✅ función global del contexto

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    avatar: "",
    cargo: "Usuario",
  });

  // 🔹 Manejar los cambios de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Función de registro
  const handleSubmit = (e) => {
    e.preventDefault();

    const usuariosLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
    const todos = [...usuariosRegistrados, ...usuariosLocal];

    // ⚠️ Verificar si el correo ya existe
    const existe = todos.some(
      (u) => u.email?.toLowerCase() === formData.email.toLowerCase()
    );

    if (existe) {
      alert("❌ Este correo ya está registrado.");
      return;
    }

    // 🧠 Crear nuevo usuario
    const nuevoUsuario = {
      ...formData,
      id: Date.now(),
      avatar:
        formData.avatar ||
        "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    };

    // 💾 Guardar en localStorage
    const nuevosUsuarios = [...usuariosLocal, nuevoUsuario];
    localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));

    // 👤 Guardar como usuario activo
    register(nuevoUsuario);

    alert(`✅ Bienvenido ${nuevoUsuario.nombre}!`);
    navigate("/"); // Redirige al inicio
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B1014] text-white p-4">
      <div className="bg-[#1A1F25] p-8 rounded-2xl shadow-lg w-96 max-w-full">
        <h1 className="text-3xl font-bold text-[#00C8D7] mb-6 text-center">
          Crear cuenta
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-[#0B1014] text-white focus:ring-2 focus:ring-[#00C8D7] outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-[#0B1014] text-white focus:ring-2 focus:ring-[#00C8D7] outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-[#0B1014] text-white focus:ring-2 focus:ring-[#00C8D7] outline-none"
          />

          <input
            type="url"
            name="avatar"
            placeholder="URL de tu foto (opcional)"
            value={formData.avatar}
            onChange={handleChange}
            className="w-full p-2 rounded bg-[#0B1014] text-white focus:ring-2 focus:ring-[#00C8D7] outline-none"
          />

          <button
            type="submit"
            className="w-full bg-[#00C8D7] hover:bg-[#00E0FF] text-black py-2 rounded font-bold transition-colors"
          >
            Registrarse
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-4">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-[#00E0FF] hover:underline">
            Inicia sesión aquí
          </a>
        </p>
      </div>
    </div>
  );
}