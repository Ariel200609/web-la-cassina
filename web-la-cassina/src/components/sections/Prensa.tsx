// src/components/sections/Prensa.tsx
import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle, Newspaper } from 'lucide-react';
import Footer from '../layout/Footer'; // <-- Importamos el Footer
import Notaclarin from '../../assets/images/notaClarin.png';

export default function Prensa() {
  // La primera nota la usaremos como "Destacada"
  const notaDestacada = {
    medio: "Clarín Rural",
    titulo: "Fundó un estudio de abogados, ganó un Martín Fierro y se volcó de lleno a su pasión por el campo y la cría de razas",
    descripcion: "La historia de Roque Cassini y cómo transformó su pasión ganadera en una cabaña de elite con presencia en las pistas más exigentes del país.",
    link: "https://www.clarin.com/rural/fundo-estudio-abogados-gano-martin-fierro-volco-lleno-pasion-campo-cria-razas_0_hZOD0hTRrx.html",
    tipo: "Diario",
    fecha: "Julio 2026"
  };

  const notasGrilla = [
    {
      id: 1,
      medio: "La Nación",
      titulo: "Al criador le está yendo muy bien: volaron los precios de los toros con una oferta sin cambios",
      link: "https://www.lanacion.com.ar/economia/campo/al-criador-le-esta-yendo-muy-bien-volaron-los-precios-de-los-toros-con-una-oferta-sin-cambios-nid08092026/?utm_source=appln",
      tipo: "Diario",
      fecha: "Septiembre 2026"
    },
    {
      id: 2,
      medio: "Valor Carne",
      titulo: "La Cassina lleva su genética de elite a Cañuelas con el foco en la carne de calidad",
      link: "https://www.valorcarne.com.ar/la-cassina-lleva-su-genetica-de-elite-a-canuelas-con-el-foco-en-la-carne-de-calidad/",
      tipo: "Portal Especializado",
      fecha: "2026"
    },
    {
      id: 3,
      medio: "Agrositio",
      titulo: "Toros subieron 59%, pero comprar un reproductor exige casi los mismos kilos de ternero",
      link: "https://www.agrositio.com.ar/noticia/248166-toros-subieron-59-pero-comprar-un-reproductor-exige-casi-los-mismos-kilos-de-ternero.html",
      tipo: "Portal Especializado",
      fecha: "2026"
    },
    {
      id: 4,
      medio: "InfoSudoeste",
      titulo: "Genética: la apuesta al momento ganadero de La Cassina",
      link: "https://infosudoeste.com.ar/2026/07/14/genetica-la-apuesta-al-momento-ganadero-de-la-cassina/",
      tipo: "Portal Especializado",
      fecha: "Julio 2026"
    },
    {
      id: 5,
      medio: "Agrositio TV",
      titulo: "De abogado fanático a productor y cabañero Angus: la historia de Roque Cassini",
      link: "https://www.agrositio.com.ar/canal-agrositio/ganaderia-tv/246450-de-abogado-fanatico-a-productor-y-cabanero-angus-la-historia-de-roque-cassini-y-la-cassina.html",
      tipo: "Video",
      fecha: "2026"
    },
    {
      id: 6,
      medio: "Canal Rural",
      titulo: "11° Remate de Invierno - La Cassina en la TV",
      link: "https://www.youtube.com/watch?v=hO4IgCrMzdE",
      tipo: "Video",
      fecha: "Agosto 2026"
    }
  ];

  return (
    // 1. Contenedor principal con flex flex-col y min-h-screen para anclar el Footer
    <div className="min-h-screen bg-slate-50 text-slate-900 font-archivo flex flex-col">
      
      {/* 2. El <main> se lleva el flex-1 para expandirse y empujar el Footer abajo */}
      <main className="flex-1 w-full pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Encabezado */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#C9AE71] uppercase mb-2">
              Pasión Productiva
            </h2>
            <h1 className="text-4xl md:text-5xl font-black text-[#1D1934] uppercase font-copperplate">
              Prensa y Medios
            </h1>
            <div className="w-16 h-1 bg-[#C9AE71] mx-auto mt-6 shadow-sm mb-8"></div>
            <p className="max-w-2xl mx-auto text-slate-600 font-light text-lg">
              El impacto de nuestra genética y el trabajo diario en el campo se refleja en los medios más importantes del país.
            </p>
          </motion.div>

          {/* NOTA DESTACADA (Diseño Premium) */}
          <motion.a 
            href={notaDestacada.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group block bg-[#1D1934] rounded-2xl overflow-hidden shadow-2xl mb-12 relative border border-[#C9AE71]/30 hover:border-[#C9AE71] transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1D1934] via-[#1D1934]/90 to-transparent z-10 hidden md:block"></div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-8 md:p-12 relative z-20 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-[#C9AE71] text-[#1D1934] text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                    Nota Principal
                  </span>
                  <span className="text-[#C9AE71] text-sm font-medium flex items-center gap-2">
                    <Newspaper className="w-4 h-4" /> {notaDestacada.medio}
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl font-copperplate text-white mb-4 leading-tight group-hover:text-[#C9AE71] transition-colors">
                  {notaDestacada.titulo}
                </h3>
                <p className="text-gray-400 font-light text-base md:text-lg mb-8 leading-relaxed">
                  {notaDestacada.descripcion}
                </p>
                <div className="inline-flex items-center gap-2 text-[#C9AE71] font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Leer entrevista completa <ExternalLink className="w-4 h-4" />
                </div>
              </div>
              <div className="w-full md:w-1/2 h-64 md:h-auto relative z-0">
                <img 
                  src={Notaclarin} 
                  alt="La Cassina Clarín Rural" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.a>

          {/* GRILLA DE OTRAS NOTICIAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notasGrilla.map((nota, index) => (
              <motion.a 
                key={nota.id}
                href={nota.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group block bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#C9AE71]/50 transition-all duration-300 flex flex-col h-full"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
                      {nota.tipo === 'Video' ? <PlayCircle className="w-4 h-4 text-[#C9AE71]" /> : <Newspaper className="w-4 h-4 text-[#C9AE71]" />}
                      {nota.medio}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {nota.fecha}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#1D1934] mb-6 group-hover:text-[#C9AE71] transition-colors leading-snug">
                    {nota.titulo}
                  </h3>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#1D1934] transition-colors">
                    {nota.tipo === 'Video' ? 'Ver cobertura' : 'Leer artículo'}
                    <ExternalLink className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </main>

      {/* 3. Colocamos el Footer al final del componente */}
      <Footer />
      
    </div>
  );
}