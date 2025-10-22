// src/pages/Contacto.jsx (CÓDIGO MEJORADO)
import { FormContacto } from "../Componentes/FormContacto";
import { Link } from "react-router-dom"; // 👈 IMPORTAR Link

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-8 text-gray-100">
      <div className="max-w-xl mx-auto">

        <h1 className="text-4xl text-cyan-400 font-extrabold mb-4 text-center">
          📩 Contáctanos
        </h1>
        <p className="text-center text-gray-300 mb-8 text-lg">
          ¿Tienes alguna duda o sugerencia? Completa el formulario y te responderemos pronto.
        </p>

        {/* El formulario se envuelve en un div para que FormContacto lo gestione */}
        <FormContacto />

      </div>

      {/* Invitación a Seguir Navegando */}
      <div className="mt-12 text-center p-6 bg-gray-800/50 rounded-xl max-w-2xl mx-auto border border-cyan-400/30 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-3">
          ¡La aventura cinematográfica no termina aquí! 🍿
        </h2>
        <p className="text-gray-400 mb-4">
          Mientras esperamos tu mensaje, te invitamos a ver las últimas novedades del catálogo.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-cyan-600 text-gray-900 font-bold py-3 px-8 rounded-full transition-all hover:bg-cyan-500 shadow-xl shadow-cyan-500/50 uppercase text-sm tracking-widest"
        >
          🎬 Explorar Catálogo
        </Link>
      </div>
    </div>
  );
}