import { Navbar } from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Socios from '../components/sections/Socios';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-archivo flex flex-col">
      <Navbar />

      <Hero />

      <main className="flex-1 w-full flex flex-col">
        <Socios />
        
        {/* Aquí debajo irán futuras secciones de contenido */}
      </main>

      {/* El Footer cierra la página */}
      <Footer />
    </div>
  );
}