// src/components/sections/Hero.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Imágenes
import toroHereford from '../../assets/images/TORO-HEREFORD.png';
import cabana from '../../assets/images/cabana.png';
import animales from '../../assets/images/animales.png';

export default function Hero() {
  const slides = [
    {
      id: 1,
      image: toroHereford,
      title: "CUATRO RAZAS",
      subtitle: "Producimos Angus, Polled Hereford, Braford y Brangus."
    },
    {
      id: 2,
      image: animales,
      title: "CALIDAD GENÉTICA",
      subtitle: "Más de 20 años de mejoramiento incesante en nuestros planteles."
    },
    {
      id: 3,
      image: cabana,
      title: "La Cabaña",
      subtitle: "Con una superficie en explotación de 10.000 hectáreas, destinadas a la ganadería de cría y de invernada."
    }
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay del carrusel cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <section id="inicio" className="relative w-full flex flex-col pt-[72px] bg-[#1D1934] font-archivo">
        
        {/* 1. CARRUSEL */}
        <div className="relative w-full h-[60vh] md:h-[75vh] bg-black overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} className="absolute inset-0">
              
              <motion.img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

              {/* 
                TEXTO DEL HERO: 
                justify-start y pt-12 (móvil) / pt-24 (PC) mantienen el texto arriba a la izquierda siempre.
              */}
              <div className="absolute inset-0 flex flex-col justify-start pt-12 md:pt-24 items-start px-6 md:px-20 max-w-7xl mx-auto">
                <motion.h1 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight drop-shadow-2xl font-copperplate text-left"
                >
                  {slides[currentIndex].title}
                </motion.h1>
                <motion.p 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="mt-4 md:mt-6 text-base md:text-2xl text-gray-100 max-w-xl drop-shadow-md border-l-2 border-[#ECD798] pl-4 font-light text-left"
                >
                  {slides[currentIndex].subtitle}
                </motion.p>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* 2. FRANJA DORADA CON DEGRADADO */}
        <div 
          className="w-full h-1.5 md:h-2 relative z-20 shadow-lg"
          style={{
            background: 'linear-gradient(90deg, rgb(100,76,11) 0%, rgb(234,222,151) 50%, rgb(100,76,11) 100%)'
          }}
        />

        {/* 3. BOTONES DE ACCESO RÁPIDO */}
        <div className="w-full bg-[#1D1934] relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <a href="#programa-genetico" className="flex items-center justify-center h-20 md:h-24 bg-white/0 hover:bg-[#ECD798] text-white hover:text-[#1D1934] transition-all duration-300 group">
              <h3 className="text-sm md:text-lg font-bold uppercase tracking-widest transition-transform group-hover:scale-105 font-copperplate text-center">
                Programa Genético
              </h3>
            </a>
            <a href="#remates" className="flex items-center justify-center h-20 md:h-24 bg-white/0 hover:bg-[#ECD798] text-white hover:text-[#1D1934] transition-all duration-300 group">
              <h3 className="text-sm md:text-lg font-bold uppercase tracking-widest transition-transform group-hover:scale-105 font-copperplate text-center">
                Remates 2026
              </h3>
            </a>
            <a href="#exposiciones" className="flex items-center justify-center h-20 md:h-24 bg-white/0 hover:bg-[#ECD798] text-white hover:text-[#1D1934] transition-all duration-300 group">
              <h3 className="text-sm md:text-lg font-bold uppercase tracking-widest transition-transform group-hover:scale-105 font-copperplate text-center">
                Exposiciones 2026
              </h3>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}