// src/components/sections/Hero.tsx
import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, MapPin, Mail } from 'lucide-react';

export default function Hero() {
  // Ahora cada slide tiene su imagen y su propio texto basado en la historia real de La Cassina
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1544383835-bca2bc6f5ea3?auto=format&fit=crop&w=1200&q=80",
      tag: "Tradición y Excelencia",
      titlePart1: "Calidad",
      titlePart2: "Genética",
      description: "Más de 20 años de mejoramiento incesante. La genética que producimos es puesta a prueba en nuestros propios planteles a lo largo de 10.000 hectáreas.",
      btnText: "Ver Remates 2026",
      btnLink: "#remates"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=1200&q=80",
      tag: "Diversidad Productiva",
      titlePart1: "Cuatro",
      titlePart2: "Razas",
      description: "Producimos Angus, Polled Hereford, Braford y Brangus. Contamos con un rodeo de aproximadamente 7500 animales orientados a la cría e invernada.",
      btnText: "Conocé Nuestra Historia",
      btnLink: "#la-cabana"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      tag: "Desempeño Comprobado",
      titlePart1: "Adaptabilidad",
      titlePart2: "Garantizada",
      description: "Nuestro objetivo es desarrollar genética cien por cien productiva, asegurando que los reproductores se adapten a cualquier zona de nuestro país.",
      btnText: "Catálogo de Reproductores",
      btnLink: "#genetica"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const currentSlide = slides[currentIndex];

  return (
    // Fondo blanco (bg-white) y texto oscuro por defecto (text-slate-900)
    <section id="inicio" className="relative flex min-h-screen w-full flex-col overflow-hidden bg-white text-slate-900 md:flex-row pt-24 md:pt-0">
      
      {/* Lado Izquierdo: Contenido Dinámico */}
      <div className="flex w-full flex-col justify-between p-8 md:w-1/2 lg:w-3/5 lg:px-20 relative z-10">
        
        {/* Usamos AnimatePresence para que el texto cambie suavemente */}
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex} 
              initial="hidden" 
              animate="visible" 
              exit={{ opacity: 0, transition: { duration: 0.2 } }} 
              variants={containerVariants}
            >
              
              <motion.header className="mb-4" variants={itemVariants}>
                <p className="text-xs font-bold tracking-[0.15em] text-blue-700 uppercase">
                  {currentSlide.tag}
                </p>
              </motion.header>

              {/* Tipografía reducida (de 7xl a 5xl/6xl) */}
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight" variants={itemVariants}>
                <span className="text-slate-900 block">{currentSlide.titlePart1}</span>
                <span className="text-blue-800 block">{currentSlide.titlePart2}</span>
              </motion.h1>
              
              <motion.div className="my-6 h-1 w-16 bg-blue-700" variants={itemVariants}></motion.div>
              
              <motion.p className="mb-8 max-w-md text-base text-slate-600 font-light leading-relaxed" variants={itemVariants}>
                {currentSlide.description}
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex gap-4">
                 <a href={currentSlide.btnLink} className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 font-bold uppercase tracking-widest text-xs transition-colors shadow-md">
                    {currentSlide.btnText}
                 </a>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pie del Hero: Contacto (Fijo) */}
        <footer className="mt-8 w-full border-t border-slate-100 pt-6">
          <div className="grid grid-cols-1 gap-4 text-xs text-slate-500 sm:grid-cols-3 font-medium tracking-wide">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-blue-700" />
              <span>info@lacassina.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-blue-700" />
              <span>(02923) 564889</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-blue-700" />
              <span>Ruta 65, Guaminí, Bs. As.</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Lado Derecho: Carrusel de Imágenes */}
      <div className="relative w-full h-[50vh] md:h-screen md:w-1/2 lg:w-2/5 overflow-hidden group bg-slate-100">
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
              e.currentTarget.src = "https://placehold.co/800x1200/e2e8f0/475569?text=Foto+Cabaña+La+Cassina";
            }}
          />
        </AnimatePresence>

        {/* Controles del Carrusel */}
        <div className="absolute bottom-12 right-12 flex justify-end gap-4 z-20">
          <button onClick={prevImage} className="p-4 bg-white/90 border border-slate-200 hover:bg-blue-800 hover:border-transparent hover:text-white text-blue-900 rounded-full transition-all flex items-center justify-center shadow-lg">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextImage} className="p-4 bg-white/90 border border-slate-200 hover:bg-blue-800 hover:border-transparent hover:text-white text-blue-900 rounded-full transition-all flex items-center justify-center shadow-lg">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}