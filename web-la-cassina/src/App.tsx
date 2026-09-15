// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  { Navbar } from './components/layout/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      {/* El Navbar va a estar fijo en todas las páginas */}
      <Navbar />
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Rutas temporales hasta que armemos cada página */}
          <Route path="/la-cabana" element={<div className="p-20 text-center text-2xl">La Cabaña</div>} />
          <Route path="/ganaderia" element={<div className="p-20 text-center text-2xl">Ganadería y Agricultura</div>} />
          <Route path="/reproductores" element={<div className="p-20 text-center text-2xl">Venta de Reproductores</div>} />
          <Route path="/eventos" element={<div className="p-20 text-center text-2xl">Eventos</div>} />
          <Route path="/noticias" element={<div className="p-20 text-center text-2xl">Noticias</div>} />
          <Route path="/contacto" element={<div className="p-20 text-center text-2xl">Contacto</div>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;