// ✅ src/Componentes/Login.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import usuariosRegistrados from "../Componentes/UsuariosData"; // usuarios base

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [temaOscuro, setTemaOscuro] = useState(
    () => localStorage.getItem("tema") === "oscuro"
  );

  const { setUser, setIsAuthenticated } = useUser(); // ✅ obtenemos funciones globales
  const navigate = useNavigate();

  // 🌓 Guardar el modo seleccionado y aplicarlo
  useEffect(() => {
    document.documentElement.classList.toggle("dark", temaOscuro);
    localStorage.setItem("tema", temaOscuro ? "oscuro" : "claro");
  }, [temaOscuro]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Usuarios guardados + usuarios base
    const usersLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
    const todosLosUsuarios = [...usuariosRegistrados, ...usersLocal];

    // Buscar coincidencia por correo o gmail + contraseña
    const userFound = todosLosUsuarios.find(
      (u) =>
        (u.email?.toLowerCase() === email.toLowerCase() ||
          u.gmail?.toLowerCase() === email.toLowerCase()) &&
        (u.password === pass || u.contraseña === pass)
    );

    if (userFound) {
      alert(`✅ Bienvenido ${userFound.nombre || userFound.email || "Usuario"}`);
      localStorage.setItem("usuarioActivo", JSON.stringify(userFound));

      // ✅ actualizamos el contexto global
      setUser(userFound);
      setIsAuthenticated(true);

      navigate("/"); // redirige al inicio
    } else {
      alert("❌ Correo o contraseña incorrectos");
    }
  };

  const irARegistro = () => navigate("/registro");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B1014] dark:bg-gray-100 text-white dark:text-black transition-colors">
      <div className="bg-[#1A1F25] dark:bg-white p-8 rounded-2xl shadow-lg w-80 transition-colors">
        {/* 🌓 Botón para cambiar tema */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setTemaOscuro(!temaOscuro)}
            className="text-sm px-3 py-1 border rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition"
          >
            {temaOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
          </button>
        </div>

        <h1 className="text-3xl font-bold text-[#00C8D7] mb-6 text-center">
          Iniciar sesión
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#0B1014] dark:bg-gray-100 text-white dark:text-black focus:ring-2 focus:ring-[#00C8D7] outline-none"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
            className="w-full p-2 rounded bg-[#0B1014] dark:bg-gray-100 text-white dark:text-black focus:ring-2 focus:ring-[#00C8D7] outline-none"
          />

          <button
            type="submit"
            className="w-full bg-[#00C8D7] hover:bg-[#00E0FF] text-black py-2 rounded font-bold transition-colors"
          >
            Iniciar sesión
          </button>
        </form>

        {/* 🔹 Botón de registro */}
        <button
          onClick={irARegistro}
          className="w-full mt-4 border border-[#00C8D7] text-[#00C8D7] py-2 rounded font-semibold hover:bg-[#00C8D7] hover:text-black transition-colors"
        >
          Registrarse
        </button>

        <p className="text-sm text-gray-400 dark:text-gray-700 text-center mt-4">
          ¿No tienes cuenta?{" "}
          <a href="/registro" className="text-[#00E0FF] hover:underline">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
}
