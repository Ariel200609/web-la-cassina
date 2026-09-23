// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import Home from './pages/Home';
import Historia from './components/sections/Historia';
import Establecimiento from './components/sections/Establecimiento';
import Equipo from './components/sections/Equipo';
import ProgramaGenetico from './pages/ProgramaGenetico'; // <-- Importamos la nueva página de Genética
import Remates from './pages/Remates';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      {/* Contenedor principal flexible para empujar el footer hacia abajo */}
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col w-full">
        <Routes>
          {/* Home principal */}
          <Route path="/" element={<Home />} />
          
          {/* Páginas de "Estancias y Cabaña" */}
          <Route path="/la-cabana" element={<Historia />} />
          <Route path="/establecimiento" element={<Establecimiento />} />
          <Route path="/equipo" element={<Equipo />} />
          
          {/* Nuestra nueva página con el Programa Genético real */}
          <Route path="/genetica" element={<ProgramaGenetico />} />
          <Route path="/remates" element={<Remates />} />
          
          {/* Vistas en construcción temporales */}
          <Route path="/contacto" element={<div className="flex flex-1 items-center justify-center h-[70vh] text-4xl font-copperplate">Contacto</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;