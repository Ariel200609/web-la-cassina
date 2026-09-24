import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Star } from 'lucide-react';
import Footer from '../components/layout/Footer';

import imgbanner from  "../assets/images/bannerexposicion.png"

export default function Exposiciones() {
  // Reseteo de scroll al entrar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Datos extraídos exactamente del flyer "Exposiciones 2026"
  const exposiciones = [
    {
      fecha: "9 al 13 de SEPT",
      lugar: "Huinca Renancó, Córdoba",
      nombre: "91º Exposición Rural, Ganadera, Agrícola, Industrial y Comercial",
    },
    {
      fecha: "11 al 13 de SEPT",
      lugar: "Gualeguaychú, Entre Ríos",
      nombre: "39º Exposición Nacional de Hereford",
    },
    {
      fecha: "18 al 21 de SEPT",
      lugar: "Curuzú Cuatiá, Corrientes",
      nombre: "Exposición Feria de la Ganadería, Granja, Industria y Comercio",
    },
    {
      fecha: "19 al 20 de SEPT",
      lugar: "Saavedra (Pigüé), Buenos Aires",
      nombre: "Exposición de Ganadería, Comercio e Industria",
    },
    {
      fecha: "1 al 5 de OCT",
      lugar: "Bahía Blanca, Buenos Aires",
      nombre: "142º Exposición Nacional de Ganadería, Comercio e Industria",
    },
    {
      fecha: "8 al 11 de OCT",
      lugar: "San Luis, San Luis",
      nombre: "79º Exposición Rural de San Luis",
    },
    {
      fecha: "9 al 12 de OCT",
      lugar: "Coronel Suárez, Buenos Aires",
      nombre: "107º Exposición Rural Suarense",
    }
  ];

  return (
    <main className="w-full bg-[#1A1528] font-archivo selection:bg-[#C9AE71] selection:text-[#1A1528] overflow-hidden flex flex-col min-h-screen">
      
      {/* 1. HERO DE EXPOSICIONES */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* Imagen de un toro imponente, similar al Angus negro del flyer */}
          <img 
            src={imgbanner}
            alt="Toro La Cassina Exposiciones" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1528]/80 via-[#1A1528]/60 to-[#1A1528]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-5xl w-full pt-20"
        >
          <span className="text-[#C9AE71] font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-6 block drop-shadow-md">
            Temporada de Exposiciones Rurales 2026
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-copperplate text-white uppercase tracking-widest drop-shadow-2xl mb-8 leading-[1.1]">
            Fortaleza <br className="hidden md:block" />
            <span className="text-[#E8D399]">Genética</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 font-light italic max-w-3xl mx-auto border-t border-white/20 pt-8">
            "En cada rincón del país"
          </p>
        </motion.div>
      </section>

      {/* 2. LÍNEA DE TIEMPO (TIMELINE) DE LA GIRA */}
      <section className="relative z-20 px-4 py-20 md:py-32 bg-[#1A1528]">
        <div className="max-w-4xl mx-auto">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative border-l-2 border-[#C9AE71]/30 ml-4 md:ml-0"
          >
            {exposiciones.map((expo, idx) => (
              <motion.div key={idx} variants={fadeUp} className="mb-12 md:mb-16 ml-8 md:ml-12 relative group">
                
                {/* El punto de la línea de tiempo */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#1A1528] border-2 border-[#C9AE71] group-hover:bg-[#C9AE71] group-hover:shadow-[0_0_15px_rgba(201,174,113,0.6)] transition-all duration-300 z-10"></div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl group-hover:bg-white/10 group-hover:border-[#C9AE71]/50 transition-all duration-300 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                  
                  <div className="flex-1">
                    {/* Fecha */}
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-5 h-5 text-[#C9AE71]" />
                      <span className="text-[#C9AE71] font-bold tracking-widest uppercase text-sm">{expo.fecha}</span>
                    </div>
                    
                    {/* Nombre del Evento */}
                    <h3 className="text-2xl md:text-3xl font-copperplate text-white mb-4 leading-tight group-hover:text-[#E8D399] transition-colors">
                      {expo.nombre}
                    </h3>
                    
                    {/* Ubicación */}
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-5 h-5 shrink-0" />
                      <span className="font-light text-lg">{expo.lugar}</span>
                    </div>
                  </div>

                  {/* Icono decorativo a la derecha */}
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-white/5 border border-white/10 items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    <Trophy className="w-8 h-8 text-white/30 group-hover:text-[#C9AE71] transition-colors" />
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 3. BANNER DE CIERRE Y VENTA DIRECTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#1A1528] to-black border-t border-white/5 relative overflow-hidden">
        {/* Adorno de fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9AE71]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Star className="w-12 h-12 text-[#C9AE71] mx-auto mb-8 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-copperplate text-white uppercase mb-8 leading-tight">
            Invertir en genética <br className="md:hidden" />reproductiva <span className="text-[#C9AE71] italic lowercase font-serif">multiplica</span>
          </h2>
          
          <div className="inline-block bg-white/5 border border-[#C9AE71]/30 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl mt-4">
            <h3 className="text-xl md:text-2xl text-white font-bold mb-4 uppercase tracking-wider">Venta Directa en Cabaña</h3>
            <p className="text-gray-400 text-lg md:text-xl font-light">
              Reproductores y Vientres <strong className="text-white font-normal">Angus, P. Hereford, Brangus y Braford.</strong>
            </p>
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400 text-sm md:text-base">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#C9AE71]"/> Ruta 65, Bonifacio (entre Daireaux y Guaminí)</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}