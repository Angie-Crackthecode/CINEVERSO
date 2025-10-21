import React from 'react';
import { Link } from 'react-router-dom';
// Importa el arreglo de datos. Ajusta la ruta si es necesario.
import { peliculasBasadasEnLibros } from '../assets/pelislibros';

function CatalogoPeliculas() {
  const handleAlquilar = (nombrePelicula) => {
    alert(`Has seleccionado alquilar: ${nombrePelicula}`);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Catálogo de Películas 🎬
      </h1>

      {/* Grid responsivo con Tailwind */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {peliculasBasadasEnLibros.map((pelicula) => (
          <div 
            key={pelicula.id} 
            className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col"
          >
            {/* ENLACE DE NAVEGACIÓN A LA PÁGINA DE DETALLES */}
            <Link to={`/detalles/${pelicula.id}`} className="relative w-full h-72 block">
              <img
                src={pelicula.imagenURL}
                alt={`Portada de ${pelicula.nombre}`}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/400x300?text=IMAGEN"; }}
              />
            </Link>

            {/* Contenido de la Tarjeta */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              
              {/* ENLACE DE NAVEGACIÓN PARA EL NOMBRE */}
              <Link to={`/detalles/${pelicula.id}`}>
                <h2 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-indigo-600 transition-colors">
                  {pelicula.nombre}
                </h2>
              </Link>
              
              <button
                onClick={() => handleAlquilar(pelicula.nombre)}
                className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-full font-medium hover:bg-indigo-700 transition duration-150 shadow-md"
              >
                Alquilar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogoPeliculas;