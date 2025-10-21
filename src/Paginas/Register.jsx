import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    gmail: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    const exists = users.find((u) => u.gmail === form.gmail);

    if (exists) {
      alert("⚠️ Este correo ya está registrado");
      return;
    }

    users.push(form);
    localStorage.setItem("usuarios", JSON.stringify(users));
    alert("✅ Registrado correctamente");
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl text-[#00C8D7] mb-4">Registrarse</h1>
      <form
        onSubmit={handleRegister}
        className="bg-[#1A1F25] p-6 rounded-lg w-80 space-y-3"
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#0B1014] text-white"
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#0B1014] text-white"
        />
        <input
          type="email"
          name="gmail"
          placeholder="Correo electrónico"
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#0B1014] text-white"
        />
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#0B1014] text-white"
        />
        <button className="w-full bg-[#00C8D7] hover:bg-[#00E0FF] text-black py-2 rounded font-bold">
          Registrarse
        </button>
      </form>
    </div>
  );
}
