// src/components/sections/Socios.tsx
import { motion } from 'framer-motion';

// Importamos las imágenes de los logos
import pedronoelrey from '../../assets/images/pedronoelrey.png';
import colomboycolombo from '../../assets/images/colomboycolombo.png';
import monasterio from '../../assets/images/monasterio.png';
import leojaconis from '../../assets/images/leojaconis.png';
import enrico from '../../assets/images/enrico.png';

export default function Socios() {
  const logosOriginales = [
    { id: 'pedro', src: pedronoelrey, alt: 'Pedro Noel Rey' },
    { id: 'colombo', src: colomboycolombo, alt: 'Colombo y Colombo' },
    { id: 'monasterio', src: monasterio, alt: 'Monasterio Tattersall' },
    { id: 'leojaconis', src: leojaconis, alt: 'Leo Jaconis' },
    { id: 'enrico', src: enrico, alt: 'Enrico' }
  ];

  const logosDuplicados = [...logosOriginales, ...logosOriginales];

  return (
    <section className="w-full bg-white py-12 md:py-16 overflow-hidden flex flex-col items-center justify-center border-b border-gray-100">
      
      <h3 className="text-center text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-10">
        Nuestros Socios 
      </h3>

      <div className="w-full relative flex items-center overflow-hidden max-w-7xl mx-auto">
        
        <motion.div
          className="flex items-center gap-16 md:gap-24 whitespace-nowrap min-w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, 
          }}
        >
          {logosDuplicados.map((logo, idx) => (
            <img 
              key={`${logo.id}-${idx}`}
              src={logo.src} 
              alt={logo.alt}
              // Logos a todo color por defecto, con efecto de agrandamiento (scale-110) al pasar el mouse
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          ))}
        </motion.div>

        {/* Degradados laterales blancos para un fundido suave */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      </div>
    </section>
  );
}