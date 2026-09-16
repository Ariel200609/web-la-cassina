// src/components/sections/Hero.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, MapPin, Mail } from 'lucide-react';

export default function Hero() {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1544383835-bca2bc6f5ea3?auto=format&fit=crop&w=1200&q=80",
      tag: "Pasión por la genética productiva",
      titlePart1: "Calidad",
      titlePart2: "Genética",
      description: "Más de 20 años de mejoramiento incesante. La genética que producimos es puesta a prueba en nuestros propios planteles a lo largo de 10.000 hectáreas.",
      btnText: "Ver Remates 2026",
      btnLink: "#remates"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=1200&q=80",
      tag: "Pasión por la genética productiva",
      titlePart1: "Cuatro",
      titlePart2: "Razas",
      description: "Producimos Angus, Polled Hereford, Braford y Brangus. Contamos con un rodeo de aproximadamente 7500 animales orientados a la cría e invernada.",
      btnText: "Conocé Nuestra Historia",
      btnLink: "#la-cabana"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      tag: "Pasión por la genética productiva",
      titlePart1: "Adaptabilidad",
      titlePart2: "Garantizada",
      description: "Nuestro objetivo es desarrollar genética cien por cien productiva, asegurando que los reproductores se adaptan a cualquier zona de nuestro país.",
      btnText: "Catálogo de Reproductores",
      btnLink: "#genetica"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // EFECTO AUTOPLAY: Cambia la imagen automáticamente cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const currentSlide = slides[currentIndex];

  return (
    <section id="inicio" className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden bg-white text-brand-navy font-archivo md:flex-row pt-20 md:pt-0">
      
      {/* Lado Izquierdo: Contenido Dinámico */}
      <div className="flex w-full flex-col justify-center px-6 py-6 md:w-1/2 lg:w-[45%] lg:p-20 relative z-30 md:h-screen bg-white">
        
        <div className="flex flex-col justify-center relative z-40">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex} 
              initial="hidden" 
              animate="visible" 
              exit={{ opacity: 0, transition: { duration: 0.2 } }} 
              variants={containerVariants}
            >
              <motion.header className="mb-2 md:mb-4" variants={itemVariants}>
                <p className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-brand-gold-dark uppercase">
                  {currentSlide.tag}
                </p>
              </motion.header>

              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight" variants={itemVariants}>
                <span className="text-slate-900 block">{currentSlide.titlePart1}</span>
                <span className="text-brand-navy block">{currentSlide.titlePart2}</span>
              </motion.h1>
              
              <motion.div className="my-4 h-1 w-12 md:w-16 bg-brand-navy" variants={itemVariants}></motion.div>
              
              <motion.p className="mb-6 md:mb-8 max-w-md text-sm md:text-base text-slate-600 font-light leading-relaxed" variants={itemVariants}>
                {currentSlide.description}
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex gap-4">
                 <a href={currentSlide.btnLink} className="bg-brand-navy hover:bg-opacity-90 text-white px-5 py-3 md:px-6 md:py-3 font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all shadow-md rounded-sm">
                    {currentSlide.btnText}
                 </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pie del Hero: Contacto */}
        <footer className="hidden md:block mt-8 w-full border-t border-slate-200 pt-6 relative z-40">
          <div className="grid grid-cols-1 gap-4 text-xs text-slate-500 sm:grid-cols-3 font-medium tracking-wide">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand-gold-dark" />
              <span>info@lacassina.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand-gold-dark" />
              <span>(02923) 564889</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-brand-gold-dark" />
              <span>Ruta 65, Guaminí, Bs. As.</span>
            </div>
          </div>
        </footer>

        {/* =========================================
            FRANJA CURVA DORADA - MÓVILES
        ========================================= */}
        <div className="md:hidden absolute left-0 right-0 -bottom-16 h-24 sm:-bottom-20 sm:h-32 z-30 pointer-events-none drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              {/* Degradado metálico basado en los Pantones de La Cassina */}
              <linearGradient id="gold-grad-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(177,142,70)" />
                <stop offset="50%" stopColor="rgb(234,222,151)" />
                <stop offset="100%" stopColor="rgb(100,76,11)" />
              </linearGradient>
            </defs>
            {/* 1. Fondo blanco grueso que tapa la línea recta de la imagen */}
            <path d="M0,0 L100,0 L100,40 Q50,100 0,40 Z" fill="#ffffff" />
            {/* 2. Franja dorada súper gruesa */}
            <path d="M0,38 Q50,98 100,38 L100,60 Q50,120 0,60 Z" fill="url(#gold-grad-mobile)" />
          </svg>
        </div>

        {/* =========================================
            FRANJA CURVA DORADA - COMPUTADORAS
        ========================================= */}
        <div className="hidden md:block absolute top-0 bottom-0 -right-24 w-24 lg:-right-32 lg:w-32 z-30 pointer-events-none drop-shadow-[15px_0_15px_rgba(0,0,0,0.4)]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              {/* Degradado metálico vertical */}
              <linearGradient id="gold-grad-desktop" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(234,222,151)" />
                <stop offset="30%" stopColor="rgb(177,142,70)" />
                <stop offset="60%" stopColor="rgb(100,76,11)" />
                <stop offset="100%" stopColor="rgb(234,222,151)" />
              </linearGradient>
            </defs>
            {/* 1. Fondo blanco que "invade" la foto tapando el corte recto */}
            <path d="M0,0 L40,0 Q100,50 40,100 L0,100 Z" fill="#ffffff" />
            {/* 2. Franja dorada súper gruesa (Aprox 20px - 30px de grosor) */}
            <path d="M38,0 Q98,50 38,100 L60,100 Q120,50 60,0 Z" fill="url(#gold-grad-desktop)" />
          </svg>
        </div>
      </div>

      {/* Lado Derecho: Carrusel de Imágenes */}
      {/* El lg:w-[55%] hace que la imagen ceda un poco de espacio a la curva */}
      <div className="relative w-full flex-1 md:h-screen md:w-1/2 lg:w-[55%] overflow-hidden group bg-brand-navy min-h-[40vh] z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={currentSlide.image}
            alt={`La Cassina - Slide ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/800x1200/1D1934/ECD798?text=Foto+Cabaña+La+Cassina";
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-brand-navy/10 pointer-events-none"></div>

        {/* Controles del Carrusel */}
        <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex justify-end gap-2 md:gap-4 z-50">
          <button onClick={prevImage} className="p-3 md:p-4 bg-white/90 border border-transparent hover:bg-brand-gold text-brand-navy rounded-full transition-all flex items-center justify-center shadow-lg">
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button onClick={nextImage} className="p-3 md:p-4 bg-white/90 border border-transparent hover:bg-brand-gold text-brand-navy rounded-full transition-all flex items-center justify-center shadow-lg">
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}