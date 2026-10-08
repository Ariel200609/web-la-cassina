// src/components/sections/Hero.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useHeroSlides } from '../../hooks/useHeroSlides';

// Imágenes del Carrusel (fallback si Sanity está vacío)
import toroHereford from '../../assets/images/TORO-HEREFORD.webp';
import cabana from '../../assets/images/cabana.webp';
import animales from '../../assets/images/animales.webp';
import bannerRemate from '../../assets/images/bannerRemate.webp';
import bannerExpo from '../../assets/images/bannerExpo.webp';
import animales2 from '../../assets/images/animales.webp';
// Importa el flyer nuevo aquí (asegúrate de tener el archivo en la carpeta)
import flyerCachari from '../../assets/videos/cachari.mp4';
import entrevista from '../../assets/videos/entrevista.mp4';

export default function Hero() {
  // Datos desde Sanity CMS
  const { slides: sanitySlides, loading: sanityLoading } = useHeroSlides();

  // 1. Array de 4 Banners Rotativos - Fallback estático
  const fallbackSlides = [
    {
      id: 1,
      video: flyerCachari, 
      title: "PRÓXIMO REMATE",
      subtitle: "Acompañanos en nuestro próximo remate en Cacharí. Conocé las condiciones y la oferta genética.",
      link: "/remates",
      buttonText: "Ver Remate"
    },
    {
      id: 2,
      image: animales,
      title: "CALIDAD GENÉTICA",
      subtitle: "25 años de progreso genético continuo, maximizando el rendimiento productivo, sobre información precisa y confiable.",
      link: "/genetica",
      buttonText: "Programa Genético"
    },
    {
      id: 3,
      image: cabana,
      title: "ESTANCIAS Y CABAÑA LA CASSINA",
      subtitle: "Más de ocho mil hectáreas de producción agrícola, basada en las mejores prácticas para cuidar el suelo, y ganadera de altísima calidad, cuya piedra angular es nuestro programa genético.",
      link: "/establecimiento",
      buttonText: "El Establecimiento"
    },
    {
      id: 4,
      image: toroHereford,
      title: "CUATRO RAZAS",
      subtitle: "Producimos Angus, Hereford, Brangus y Braford, en las categorías Puro de Pedigree, Puro Controlados, Registrados y Categoría C.",
      link: "/genetica",
      buttonText: "Ver Razas"
    },
    {
      id: 5,
      video: entrevista,
      title: "Cacharí",
      subtitle: "",
      link: "/entrevista",
      buttonText: "Ver Entrevista"
    }
  ];

  // Usar datos de Sanity si hay, sino fallback estático
  const slides = (!sanityLoading && sanitySlides.length > 0)
    ? sanitySlides.map((s) => ({
        id: s.id,
        image: s.mediaType === 'image' ? s.image : undefined,
        video: s.mediaType === 'video' ? s.video : undefined,
        title: s.title,
        subtitle: s.subtitle,
        link: s.link || '',
        buttonText: s.buttonText || '',
      }))
    : fallbackSlides;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
  const timeoutRef = useRef<number | null>(null);
  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Detectar si el slide actual es un video
  const currentSlideIsVideo = slides.length > 0 && !!slides[currentIndex]?.video;

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const stopAutoplay = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearInterval(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    // No auto-avanzar en slides con video — el video controla cuándo avanzar
    if (currentSlideIsVideo) return;
    timeoutRef.current = window.setInterval(() => {
      nextImage();
    }, 6000);
  }, [nextImage, currentSlideIsVideo, stopAutoplay]);

  // Cuando el video termina, avanzar al siguiente slide
  const handleVideoEnded = useCallback(() => {
    nextImage();
  }, [nextImage]);

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, [startAutoplay, stopAutoplay, currentIndex]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const textVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { x: 50, opacity: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="inicio" className="relative w-full h-screen flex flex-col font-archivo bg-[#1D1934]">
      <Helmet>
        <title>La Cassina | Liderazgo en Genética Bovina</title>
        <meta name="description" content="La Cassina Angus: Tradición y excelencia en genética bovina. Criadores de campeones argentinos y líderes en el mercado de embriones y semen." />
        <meta name="keywords" content="La Cassina, Angus, Cabaña Angus, Cabaña La Cassina, Ganadería, Genética Bovina, Embriones Angus, Toros Angus" />
        <meta name="author" content="La Cassina Angus" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lacassina.com" />
        <meta property="og:title" content="La Cassina | Liderazgo en Genética Bovina" />
        <meta property="og:description" content="Excelencia en genética Angus, Hereford, Brangus y Braford. Criadores de campeones argentinos desde 1960." />
        <meta property="og:image" content="/images/logo.png" />
      </Helmet>

      {/* CARRUSEL FULL-SCREEN */}
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
            
            {/* Lógica para renderizar Video o Imagen según lo que tenga el slide actual */}
            {slides[currentIndex].video ? (
              <motion.video
                ref={(el) => {
                  videoRef.current = el;
                  if (el) el.muted = isMuted;
                }}
                src={slides[currentIndex].video}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                autoPlay
                muted={isMuted}
                playsInline
                onEnded={handleVideoEnded}
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            ) : (
              <motion.img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-r from-[#1D1934]/90 via-[#1D1934]/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1D1934]/60 via-transparent to-transparent pointer-events-none" />

            <div className={`absolute inset-0 flex flex-col items-start px-6 md:px-20 max-w-7xl mx-auto pointer-events-none ${currentSlideIsVideo ? 'justify-end pb-32 md:pb-40' : 'justify-center pt-20'}`}>
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

              {/* Botón de enlace hacia las páginas internas */}
              {slides[currentIndex].link && (
                <motion.div 
                  initial="hidden" animate="visible" exit="exit" variants={textVariants}
                  className="mt-8 pointer-events-auto"
                >
                  <Link 
                    to={slides[currentIndex].link} 
                    className="inline-block px-8 py-3 bg-[#ECD798] text-[#1D1934] font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
                  >
                    {slides[currentIndex].buttonText}
                  </Link>
                </motion.div>
              )}
            </div>

          </motion.div>
        </AnimatePresence>

        {/* BOTÓN MUTE/UNMUTE — solo en slides con video */}
        {currentSlideIsVideo && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              const newMuted = !isMuted;
              setIsMuted(newMuted);
              if (videoRef.current) videoRef.current.muted = newMuted;
            }}
            className="absolute bottom-20 md:bottom-8 right-6 md:right-8 z-30 p-3 bg-white/10 border border-white/20 hover:bg-[#ECD798] hover:border-transparent text-white hover:text-[#1D1934] rounded-full backdrop-blur-sm transition-all shadow-lg flex items-center justify-center"
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        )}

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

      {/* FRANJA DORADA CURVA SEPARADORA */}
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

      {/* BANNERS DE ACCESO INFERIORES */}
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