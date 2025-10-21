// src/components/DetallePelicula.jsx (CÓDIGO ACTUALIZADO)
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { peliculasBasadasEnLibros } from '../assets/pelislibros'; 
// IMPORTAR EL NUEVO COMPONENTE
import  ComentariosPelicula  from '../Componentes/Comentarios';

function DetallePelicula() {
  const { id } = useParams();
  const pelicula = peliculasBasadasEnLibros.find(p => p.id === parseInt(id));

  // (Código de error si la película no existe...)
  if (!pelicula) {
    // ... (código de error)
    return <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl p-6 md:p-10">
        
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium mb-6 inline-block">
          &larr; Volver al Catálogo
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Columna Izquierda: Imagen Referencial */}
          <div className="flex-shrink-0 w-full md:w-1/3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Imagen Referencial</h2>
            <img
              src={pelicula.imagenURL}
              alt={`Portada de ${pelicula.nombre}`}
              className="w-full h-auto rounded-lg shadow-xl object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x600?text=PORTADA+OFICIAL"; }}
            />
          </div>

          {/* Columna Derecha: Detalles, Botón de Alquilar y Comentarios */}
          <div className="flex-grow">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 border-b pb-2">
              {pelicula.nombre}
            </h1>
            
            {/* Rango de Edad y Duración (Etiquetas) */}
            {/* ... (código de etiquetas) */}
            <div className="flex flex-wrap items-center space-x-4 mb-6 text-gray-600">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-bold text-sm shadow-md">
                Edad: {pelicula.rangoEdad}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Duración: {pelicula.duracionPelicula}
              </span>
            </div>

            {/* Ficha Técnica y Descripción */}
            {/* ... (código de descripción y reseña) */}
            <div className="space-y-4 mb-8">
              <div>
                <strong className="block text-gray-900 text-lg">Autor de la Obra:</strong>
                <p className="text-gray-700">{pelicula.autor}</p>
              </div>
              <div>
                <strong className="block text-gray-900 text-lg">Detalles de la Película:</strong>
                <p className="text-gray-700">{pelicula.detallesPelicula}</p>
              </div>
            </div>
            
            <div className="mb-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Descripción de la Película</h2>
              <p className="text-gray-800 leading-relaxed">
                {pelicula.descripcionPelicula}
              </p>
            </div>
            
            {/* Botón de Alquilar Grande */}
            <button
              onClick={() => alert(`Confirmando alquiler de: ${pelicula.nombre}`)}
              className="mt-4 w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-150 shadow-xl text-lg uppercase tracking-wider"
            >
              Alquilar Película
            </button>
            
            {/* INTEGRACIÓN DEL COMPONENTE DE COMENTARIOS */}
            <ComentariosPelicula peliculaId={pelicula.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallePelicula;