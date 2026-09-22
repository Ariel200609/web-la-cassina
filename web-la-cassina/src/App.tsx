// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import Home from './pages/Home';
import Historia from './components/sections/Historia';
import Establecimiento from './components/sections/Establecimiento'; // <-- 1. Importamos la nueva página

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/la-cabana" element={<Historia />} />
          
          {/* 2. Agregamos la ruta del Establecimiento */}
          <Route path="/establecimiento" element={<Establecimiento />} />
          
          <Route path="/remates" element={<div className="flex items-center justify-center h-screen text-4xl font-copperplate">Remates</div>} />
          <Route path="/genetica" element={<div className="flex items-center justify-center h-screen text-4xl font-copperplate">Genética</div>} />
          <Route path="/contacto" element={<div className="flex items-center justify-center h-screen text-4xl font-copperplate">Contacto</div>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;