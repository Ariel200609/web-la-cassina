import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      {/* El menú de navegación se mostrará fijo en todas las rutas */}
      <Navbar />
      
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Vistas de relleno temporales. Luego conectaremos los componentes reales. */}
          <Route path="/la-cabana" element={<div className="flex items-center justify-center h-screen text-4xl font-copperplate">La Cabaña</div>} />
          <Route path="/remates" element={<div className="flex items-center justify-center h-screen text-4xl font-copperplate">Remates</div>} />
          <Route path="/genetica" element={<div className="flex items-center justify-center h-screen text-4xl font-copperplate">Genética</div>} />
          <Route path="/contacto" element={<div className="flex items-center justify-center h-screen text-4xl font-copperplate">Contacto</div>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;