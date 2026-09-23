// src/components/sections/Hero.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // <-- Importamos Link para la navegación

// Imágenes del Carrusel
import toroHereford from '../../assets/images/TORO-HEREFORD.png';
import cabana from '../../assets/images/cabana.png';
import animales from '../../assets/images/animales.png';
import bannerRemate from '../../assets/images/bannerRemate.png';
import bannerExpo from '../../assets/images/bannerExpo.png';
import animales2 from '../../assets/images/animales.png';

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
      title: "LA CABAÑA",
      subtitle: "Con una superficie en explotación de 10.000 hectáreas, destinadas a la ganadería de cría y de invernada."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Refs para la lógica nativa de arrastre (Swipe)
  const timeoutRef = useRef<number | null>(null);
  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef<number>(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay
  const startAutoplay = useCallback(() => {
    if (timeoutRef.current !== null) clearInterval(timeoutRef.current);
    timeoutRef.current = window.setInterval(() => {
      nextImage();
    }, 6000);
  }, [nextImage]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timeoutRef.current !== null) clearInterval(timeoutRef.current);
    };
  }, [startAutoplay, currentIndex]);

  // Detección de celular para ajustar la sensibilidad del arrastre
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // LÓGICA DE ARRASTRE TÁCTIL (Móviles)
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragDelta.current = 0;
    if (timeoutRef.current !== null) clearInterval(timeoutRef.current);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (dragStartX.current !== null) {
      dragDelta.current = e.touches[0].clientX - dragStartX.current;
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    const threshold = isMobile ? 30 : 50;
    if (dragDelta.current > threshold) prevImage();
    else if (dragDelta.current < -threshold) nextImage();
    
    dragStartX.current = null;
    dragDelta.current = 0;
    startAutoplay();
  }, [isMobile, nextImage, prevImage, startAutoplay]);

  // LÓGICA DE ARRASTRE MOUSE (Escritorio)
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (dragStartX.current !== null) {
      dragDelta.current = e.clientX - dragStartX.current;
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    if (dragDelta.current > 50) prevImage();
    else if (dragDelta.current < -50) nextImage();
    
    dragStartX.current = null;
    dragDelta.current = 0;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    startAutoplay();
  }, [nextImage, prevImage, startAutoplay, handleMouseMove]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
    if (timeoutRef.current !== null) clearInterval(timeoutRef.current);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove, handleMouseUp]);

  // Variantes de texto limpias
  const textVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { x: 50, opacity: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="inicio" className="relative w-full h-screen flex flex-col font-archivo bg-[#1D1934]">
      
      {/* 1. CARRUSEL FULL-SCREEN */}
      <div 
        className="relative flex-1 w-full overflow-hidden bg-black touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        style={{ cursor: 'grab' }}
      >
        <AnimatePresence mode="wait">
          <motion.div key={currentIndex} className="absolute inset-0">
            
            <motion.img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-[#1D1934]/90 via-[#1D1934]/50 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1D1934]/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 max-w-7xl mx-auto pt-20 pointer-events-none">
              <motion.h1 
                initial="hidden" animate="visible" exit="exit" variants={textVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight drop-shadow-xl font-copperplate"
              >
                {slides[currentIndex].title}
              </motion.h1>
              
              <motion.p 
                initial="hidden" animate="visible" exit="exit" variants={textVariants}
                className="mt-4 md:mt-6 text-lg md:text-2xl text-gray-200 max-w-xl drop-shadow-md border-l-4 border-[#ECD798] pl-4 font-light"
              >
                {slides[currentIndex].subtitle}
              </motion.p>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* PUNTITOS INDICADORES */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center items-center gap-2 z-30 md:hidden">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'bg-[#ECD798] w-6' : 'bg-white/50 w-1.5'
              }`}
            />
          ))}
        </div>

        {/* FLECHAS DE NAVEGACIÓN */}
        <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-30">
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }} 
            className="p-4 bg-white/10 border border-white/20 hover:bg-[#ECD798] hover:border-transparent text-white hover:text-[#1D1934] rounded-full backdrop-blur-sm transition-all shadow-lg flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30">
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }} 
            className="p-4 bg-white/10 border border-white/20 hover:bg-[#ECD798] hover:border-transparent text-white hover:text-[#1D1934] rounded-full backdrop-blur-sm transition-all shadow-lg flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* 2. FRANJA DORADA CURVA SEPARADORA */}
      <div className="relative z-30 w-full h-8 md:h-12 -mt-8 md:-mt-12 pointer-events-none drop-shadow-[0_-5px_10px_rgba(0,0,0,0.5)]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(100,76,11)" />
              <stop offset="50%" stopColor="rgb(234,222,151)" />
              <stop offset="100%" stopColor="rgb(100,76,11)" />
            </linearGradient>
          </defs>
          <path d="M0,100 L100,100 L100,50 Q50,0 0,50 Z" fill="#1D1934" />
          <path d="M0,50 Q50,0 100,50" fill="none" stroke="url(#gold-grad)" strokeWidth="4" />
        </svg>
      </div>

      {/* 3. BANNERS DE ACCESO INFERIORES (Con React Router Link) */}
      <div className="w-full bg-[#1D1934] relative z-20 flex-shrink-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
          
          <Link to="/genetica" className="relative flex items-center justify-center h-24 md:h-32 overflow-hidden group border-b md:border-b-0 md:border-r border-white/10">
            <img src={animales2} alt="Programa Genético" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%]" />
            <div className="absolute inset-0 bg-[#1D1934]/80 group-hover:bg-[#1D1934]/40 transition-colors duration-500"></div>
            <div className="relative z-10 flex flex-col items-center px-4">
              <h3 className="text-sm md:text-lg font-bold uppercase tracking-widest text-white font-copperplate text-center drop-shadow-md">
                Programa Genético
              </h3>
              <span className="mt-2 text-[#ECD798] text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                Ver Información +
              </span>
            </div>
          </Link>

          <Link to="/remates" className="relative flex items-center justify-center h-24 md:h-32 overflow-hidden group border-b md:border-b-0 md:border-r border-white/10">
            <img src={bannerRemate} alt="Remates 2026" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%]" />
            <div className="absolute inset-0 bg-[#1D1934]/80 group-hover:bg-[#1D1934]/40 transition-colors duration-500"></div>
            <div className="relative z-10 flex flex-col items-center px-4">
              <h3 className="text-sm md:text-lg font-bold uppercase tracking-widest text-white font-copperplate text-center drop-shadow-md">
                Remates 2026
              </h3> 
              <span className="mt-2 text-[#ECD798] text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                Ver Catálogos +
              </span>
            </div>
          </Link>

          <Link to="/exposiciones" className="relative flex items-center justify-center h-24 md:h-32 overflow-hidden group">
            <img src={bannerExpo} alt="Exposiciones 2026" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%]" />
            <div className="absolute inset-0 bg-[#1D1934]/80 group-hover:bg-[#1D1934]/40 transition-colors duration-500"></div>
            <div className="relative z-10 flex flex-col items-center px-4">
              <h3 className="text-sm md:text-lg font-bold uppercase tracking-widest text-white font-copperplate text-center drop-shadow-md">
                Exposiciones 2026
              </h3>
              <span className="mt-2 text-[#ECD798] text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                Ver Calendario +
              </span>
            </div>
          </Link>

        </div>
      </div>

    </section>
  );
}