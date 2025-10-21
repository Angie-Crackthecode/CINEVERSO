import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    const userFound = users.find((u) => u.gmail === email && u.contraseña === pass);

    if (userFound) {
      alert("Inicio de sesión exitoso ✅");
      localStorage.setItem("usuarioActivo", JSON.stringify(userFound));
    } else {
      alert("❌ Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl text-[#00C8D7] mb-4">Iniciar sesión</h1>
      <form
        onSubmit={handleLogin}
        className="bg-[#1A1F25] p-6 rounded-lg w-80 space-y-3"
      >
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-[#0B1014] text-white"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-full p-2 rounded bg-[#0B1014] text-white"
        />
        <button className="w-full bg-[#00C8D7] hover:bg-[#00E0FF] text-black py-2 rounded font-bold">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
