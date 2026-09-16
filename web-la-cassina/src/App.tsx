// src/App.tsx
import { Navbar } from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Cabana from './pages/Cabana';

export default function Home() {
  return (
    <main className="w-full bg-slate-50">
      <Navbar />
      
      {/* 1. Portada con Carrusel */}
      <Hero />
      
      {/* 2. Sección Historia y Magnitud */}
      <Cabana />
      
      {/* Secciones restantes (relleno temporal para que el menú pueda hacer scroll) */}
      <section id="remates" className="h-screen flex items-center justify-center bg-brand-navy text-brand-gold"><h2 className="text-4xl font-copperplate">Remates</h2></section>
      <section id="genetica" className="h-screen flex items-center justify-center bg-slate-100 text-brand-navy"><h2 className="text-4xl font-copperplate">Genética</h2></section>
      <section id="contacto" className="h-screen flex items-center justify-center bg-brand-navy text-white"><h2 className="text-4xl font-copperplate">Contacto</h2></section>
    </main>
  );
}