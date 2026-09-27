// src/App.tsx
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';

// Importaciones diferidas (Lazy Loading) para optimizar la velocidad
const Home = lazy(() => import('./pages/Home'));
const Historia = lazy(() => import('./components/sections/Historia'));
const Establecimiento = lazy(() => import('./components/sections/Establecimiento'));
const Equipo = lazy(() => import('./components/sections/Equipo'));
const ProgramaGenetico = lazy(() => import('./pages/ProgramaGenetico'));
const Remates = lazy(() => import('./pages/Remates'));
const Exposiciones = lazy(() => import('./pages/Exposiciones'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Prensa = lazy(() => import('./components/sections/Prensa'));
const TorosPadres = lazy(() => import('./components/sections/TorosPadres'));

function App() {
  return (
    <BrowserRouter>
      {/* El Navbar carga de inmediato, sin diferir */}
      <Navbar />

      {/* Contenedor principal flexible para empujar el footer hacia abajo */}
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col w-full">
        
        {/* Suspense envuelve las rutas y muestra el fallback mientras el código baja */}
        <Suspense fallback={
          <div className="flex-1 flex items-center justify-center bg-slate-50 min-h-[70vh]">
            <div className="text-[#1D1934] font-copperplate text-2xl md:text-3xl animate-pulse tracking-widest uppercase">
              Cargando La Cassina...
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/la-cabana" element={<Historia />} />
            <Route path="/establecimiento" element={<Establecimiento />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/Prensa" element={<Prensa />} />
            <Route path="/genetica" element={<ProgramaGenetico />} />
            <Route path="/toros-padres" element={<TorosPadres />} />
            <Route path="/remates" element={<Remates />} />
            <Route path="/exposiciones" element={<Exposiciones />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Suspense>

      </div>
    </BrowserRouter>
  );
}

export default App;