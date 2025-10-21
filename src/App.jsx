import { Route, Routes } from 'react-router-dom'
import {Inicio} from './Paginas/Inicio'
import CatalogoPeliculas from './Paginas/PeliLibros'
import {FormContacto} from './Paginas/Contacto'
import DetallePelicula from './Paginas/Detalle'
import { Navbar } from './Componentes/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/pelislibros" element={<CatalogoPeliculas />} />
        <Route path="/detalles/:id" element={<DetallePelicula />} />
        <Route path="/contacto" element={<FormContacto />} />
      </Routes>
    </>
  )
}

export default App
