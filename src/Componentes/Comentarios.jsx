// src/components/ComentariosPelicula.jsx (ADAPTADO AL TEMA OSCURO)
import React from 'react';
// Importamos el array de comentarios
import { comentariosPeliculas } from '../assets/comentariospeli';

/**
 * Componente que muestra los comentarios filtrados para una película específica.
 * @param {number} peliculaId - El ID de la película actual.
 */
function ComentariosPelicula({ peliculaId }) {

  // 1. Filtrar los comentarios por el ID de la película
  const comentariosFiltrados = comentariosPeliculas.filter(
    (comentario) => comentario.peliculaId === peliculaId
  );

  // Helper para mostrar estrellas según la puntuación
  const renderPuntuacion = (puntuacion) => {
    return (
      <div className="flex text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < puntuacion ? 'fill-current' : 'text-gray-600'}`} // 💡 Tamaño más pequeño (w-4 h-4) y color de fondo ajustado
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.487 7.71l6.568-.955L10 1l2.945 5.755 6.568.955-4.758 4.835 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-10 pt-6"> {/* Se eliminó el border-t para evitar doble línea con el padre */}
      <h2 className="text-3xl font-extrabold text-cyan-400 mb-6">
        Comentarios y Reseñas ({comentariosFiltrados.length})
      </h2>

      {comentariosFiltrados.length === 0 ? (
        <p className="text-gray-400 italic">Aún no hay comentarios para esta película. ¡Sé el primero!</p>
      ) : (
        <div className="space-y-4"> {/* Espaciado más compacto */}
          {comentariosFiltrados.map((comentario) => (
            <div
              key={comentario.id}
              className="bg-gray-700 p-4 rounded-lg border-l-4 border-cyan-500 shadow-lg transition-shadow duration-300 hover:shadow-cyan-500/30" // 💡 Fondo oscuro y acento cian
            >
              {/* Encabezado del comentario */}
              <div className="flex justify-between items-start mb-2">
                <p className="text-md font-semibold text-gray-200"> {/* 💡 Tamaño de fuente mediano */}
                  {comentario.nombreUsuario}
                </p>
                {/* Puntuación en estrellas */}
                {renderPuntuacion(comentario.puntuacion)}
              </div>

              {/* Mensaje del comentario */}
              <p className="text-gray-300 text-sm leading-relaxed italic"> {/* 💡 Texto más pequeño y claro */}
                {comentario.mensaje}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Formulario simple para añadir comentario */}
      <div className="mt-8 p-6 bg-gray-900 border border-gray-700 rounded-lg shadow-xl"> {/* 💡 Fondo más oscuro */}
        <h3 className="text-xl font-bold text-cyan-400 mb-4">¡Deja tu opinión!</h3>
        <button
          className="w-full bg-cyan-600 text-gray-900 py-2 rounded-lg font-semibold hover:bg-cyan-500 transition shadow-md"
          onClick={() => alert("Funcionalidad de añadir comentario aún no implementada.")}
        >
          Escribir Comentario
        </button>
      </div>
    </div>
  );
}

export default ComentariosPelicula;