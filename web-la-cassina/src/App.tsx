// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import Home from './pages/Home';
import Historia from './components/sections/Historia';
import Establecimiento from './components/sections/Establecimiento';
import Equipo from './components/sections/Equipo'; // <-- Importamos Equipo

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      {/* SOLUCIÓN AL ESPACIO BLANCO: 
          Cambiamos <main> por un <div> flexible (flex flex-col) que abarque toda la pantalla.
          Así las páginas de adentro se expanden y empujan el Footer hacia el final. */}
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/la-cabana" element={<Historia />} />
          <Route path="/establecimiento" element={<Establecimiento />} />
          
          {/* Agregamos la ruta del equipo */}
          <Route path="/equipo" element={<Equipo />} />
          
          <Route path="/remates" element={<div className="flex items-center justify-center h-screen text-4xl font-copperplate">Remates</div>} />
          <Route path="/genetica" element={<div className="flex items-center justify-center h-screen text-4xl font-copperplate">Genética</div>} />
          <Route path="/contacto" element={<div className="flex items-center justify-center h-screen text-4xl font-copperplate">Contacto</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;