// src/components/sections/InstagramReels.tsx
import { motion } from 'framer-motion';
import { PlayCircle, ExternalLink } from 'lucide-react';

import reels1 from '../../assets/images/reels1.png';
import reels2 from '../../assets/images/reels2.png';
import reels3 from '../../assets/images/reels3.png';
import reels4 from '../../assets/images/reels4.png';

// Ícono SVG de Instagram personalizado
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function InstagramReels() {
  // Estos son Reels de ejemplo por si quieren subirlos manualmente.
  // Si usan un Widget automático (ej. Elfsight), borraríamos esta grilla e insertaríamos el widget.
  const reelsEjemplo = [
    {
      id: 1,
      imagen: reels1,
      link: "https://instagram.com/lacassina",
      vistas: "12.5K"
    },
    {
      id: 2,
      imagen: reels2,
      link: "https://instagram.com/lacassina",
      vistas: "8.2K"
    },
    {
      id: 3,
      imagen: reels3,
      link: "https://instagram.com/lacassina",
      vistas: "15.1K"
    },
    {
      id: 4,
      imagen: reels4,
      link: "https://instagram.com/lacassina",
      vistas: "10.3K"
    }
  ];

  return (
    <section id="reels" className="py-24 bg-white text-slate-900 font-archivo overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Encabezado de la Sección */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <InstagramIcon className="w-6 h-6 text-[#C9AE71]" />
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#C9AE71] uppercase">
                Pasión Productiva en Acción
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-[#1D1934] uppercase font-copperplate leading-tight">
              Nuestros <span className="text-[#C9AE71]">Reels</span>
            </h3>
            <p className="mt-4 text-slate-500 font-light text-lg">
              Acompañanos en el día a día de la cabaña. Seguí nuestro trabajo, la preparación de los reproductores y el corazón de La Cassina desde adentro.
            </p>
          </motion.div>

          <motion.a 
            href="https://instagram.com/lacassina"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group flex items-center gap-2 bg-[#1D1934] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#C9AE71] hover:text-[#1D1934] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Seguir a @lacassina <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        {/* GRILLA DE REELS (Si usan un widget automático como Elfsight, se reemplaza esta grilla por el código del widget) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {reelsEjemplo.map((reel, index) => (
            <motion.a
              key={reel.id}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group aspect-[9/16] bg-slate-100 rounded-2xl overflow-hidden shadow-md cursor-pointer block"
            >
              {/* Imagen de fondo del Reel */}
              <img 
                src={reel.imagen} 
                alt={`Reel La Cassina ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay oscuro que aparece al pasar el mouse */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1934]/90 via-[#1D1934]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Ícono de Play centrado */}
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-[#C9AE71] group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
              </div>

              {/* Vistas (Estilo Instagram) */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white font-medium text-sm">
                <PlayCircle className="w-4 h-4" />
                {reel.vistas}
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}