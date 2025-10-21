// src/components/ComentariosPelicula.jsx
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
            className={`w-5 h-5 ${i < puntuacion ? 'fill-current' : 'text-gray-300'}`} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.487 7.71l6.568-.955L10 1l2.945 5.755 6.568.955-4.758 4.835 1.123 6.545z"/>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-10 pt-6 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Comentarios y Reseñas ({comentariosFiltrados.length})
      </h2>

      {comentariosFiltrados.length === 0 ? (
        <p className="text-gray-500 italic">Aún no hay comentarios para esta película. ¡Sé el primero!</p>
      ) : (
        <div className="space-y-6">
          {comentariosFiltrados.map((comentario) => (
            <div 
              key={comentario.id} 
              className="bg-gray-50 p-5 rounded-lg border-l-4 border-indigo-400 shadow-sm"
            >
              {/* Encabezado del comentario */}
              <div className="flex justify-between items-start mb-3">
                <p className="text-lg font-semibold text-gray-900">
                  {comentario.nombreUsuario}
                </p>
                {/* Puntuación en estrellas */}
                {renderPuntuacion(comentario.puntuacion)}
              </div>
              
              {/* Mensaje del comentario */}
              <p className="text-gray-700 leading-relaxed italic">
                {comentario.mensaje}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Formulario simple para añadir comentario (opcional) */}
      <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-inner">
        <h3 className="text-xl font-bold text-indigo-600 mb-4">¡Deja tu opinión!</h3>
        <button
          className="w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition"
          onClick={() => alert("Funcionalidad de añadir comentario aún no implementada.")}
        >
          Escribir Comentario
        </button>
      </div>
    </div>
  );
}

export default ComentariosPelicula;