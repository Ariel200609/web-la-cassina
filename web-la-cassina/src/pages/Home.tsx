import  { Navbar } from '../components/layout/Navbar';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import Socios from '../components/sections/Socios';
import Footer from '../components/layout/Footer';
import InstagramReels from '../components/sections/InstagramReels';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-archivo flex flex-col">
      
      {/* 1. Configuración de SEO para la Home */}
      <Helmet>
        <title>La Cassina | Liderazgo en Genética Bovina</title>
        <meta name="description" content="La Cassina Angus: Tradición y excelencia en genética bovina. Criadores de campeones argentinos y líderes en el mercado de embriones y semen." />
        <meta name="keywords" content="La Cassina, Angus, Cabaña Angus, Cabaña La Cassina, Ganadería, Genética Bovina, Embriones Angus, Toros Angus" />
        <meta name="author" content="La Cassina Angus" />
        
        {/* Facebook & Open Graph (para cuando compartas links) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lacassina.com/" />
        <meta property="og:title" content="La Cassina | Cabaña líder en Genética Bovina" />
        <meta property="og:description" content="Excelencia en genética Angus. Criadores de campeones argentinos desde 1960." />
        <meta property="og:image" content="/images/logo.png" /> {/* Asegúrate de tener esta imagen en public */}
      </Helmet>

      {/* 2. El componente Navbar (mantenemos el tuyo) */}
      <Navbar />

      <Hero />

      <main className="flex-1 w-full flex flex-col">
        <Socios />
        <InstagramReels />
        {/* Aquí debajo irán futuras secciones de contenido */}
      </main>

      {/* El Footer cierra la página */}
      <Footer />
    </div>
  );
}