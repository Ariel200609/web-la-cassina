// src/components/sections/InstagramReels.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function InstagramReels() {
  // Este useEffect inyecta el script oficial de Elfsight de forma segura para React
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="reels" className="py-24 bg-white text-slate-900 font-archivo overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Encabezado */}
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

        {/* CONTENEDOR DEL WIDGET AUTOMÁTICO DE ELFSIGHT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full min-h-[400px] flex items-center justify-center"
        >
          {/* Aquí inyectamos el ID exacto que te dio la plataforma */}
          <div className="elfsight-app-62efe821-9944-4481-99b6-5fdc02ddd18b" data-elfsight-app-lazy="true"></div>
        </motion.div>

      </div>
    </section>
  );
}