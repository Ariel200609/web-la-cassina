// src/components/sections/Hero.tsx
import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, MapPin, Mail } from 'lucide-react';

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1544383835-bca2bc6f5ea3?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Sin la propiedad 'ease', TypeScript compila perfecto
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="inicio" className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#0f172a] text-white md:flex-row pt-24 md:pt-0">
      
      {/* Lado Izquierdo: Contenido e Información */}
      <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          
          <motion.header className="mb-8" variants={itemVariants}>
            <p className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase">
              Tradición y Excelencia
            </p>
          </motion.header>

          <motion.h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl uppercase tracking-tighter" variants={itemVariants}>
            Calidad <br />
            <span className="text-amber-500">Genética</span>
          </motion.h1>
          
          <motion.div className="my-6 h-1 w-20 bg-amber-500" variants={itemVariants}></motion.div>
          
          <motion.p className="mb-10 max-w-lg text-lg text-gray-300 font-light leading-relaxed" variants={itemVariants}>
            Más de 20 años de mejoramiento incesante. La genética que producimos es puesta a prueba en nuestros propios planteles a lo largo de 10.000 hectáreas.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex gap-4">
             <a href="#remates" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 font-bold uppercase tracking-widest text-sm transition-colors shadow-lg">
                Ver Remates 2026
             </a>
          </motion.div>
        </motion.div>

        {/* Pie del Hero: Contacto */}
        <motion.footer className="mt-16 w-full" initial="hidden" animate="visible" variants={itemVariants}>
          <div className="grid grid-cols-1 gap-4 text-xs text-gray-400 sm:grid-cols-3 font-medium tracking-wide">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-amber-500" />
              <span>info@lacassina.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-amber-500" />
              <span>(02923) 564889</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-amber-500" />
              <span>Ruta 65, Guaminí, Bs. As.</span>
            </div>
          </div>
        </motion.footer>
      </div>

      {/* Lado Derecho: Carrusel de Imágenes */}
      <div className="relative w-full h-[50vh] md:h-screen md:w-1/2 lg:w-2/5 overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`La Cassina - Slide ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        
        {/* Overlay oscuro sutil */}
        <div className="absolute inset-0 bg-slate-900/20"></div>

        {/* Controles del Carrusel (Flechas) */}
        <div className="absolute inset-x-0 bottom-10 flex justify-center gap-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={prevImage} className="p-3 bg-black/60 hover:bg-amber-600 text-white rounded-full backdrop-blur transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextImage} className="p-3 bg-black/60 hover:bg-amber-600 text-white rounded-full backdrop-blur transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}