// src/components/sections/Historia.tsx
import { motion } from "framer-motion";
import Footer from "../layout/Footer";
import logo from "../../assets/images/logotiposinfondo.png";
import campo from "../../assets/images/campo.png";
import logoAniversario from "../../assets/images/25aniversariologo.png";

export default function Historia() {
  const hitos = [
    {
      year: "1995",
      title: "El comienzo",
      description: "La familia inicia su camino desde lo urbano hacia el ámbito rural, con la visión de desarrollar un emprendimiento agrícola ganadero.",
    },
    {
      year: "1998",
      title: "Nace La Cassina",
      description: "Comienza el proyecto de cabaña orientado a la excelencia genética y a la producción de animales de alta calidad.",
    },
    {
      year: "2000",
      title: "Fundación",
      description: "La Cassina consolida su identidad y comienza una nueva etapa de crecimiento.",
    },
    {
      year: "2005",
      title: "Reconocimiento",
      description: "Premio por gran venta de reproductores, reafirmando el camino elegido.",
    },
    {
      year: "2008",
      title: "Nuevas razas",
      description: "Se incorporan Hereford, Braford y Brangus al programa productivo.",
    },
    {
      year: "2015",
      title: "Exportación",
      description: "Primeros toros exportados y expansión del reconocimiento genético.",
    },
    {
      year: "2017",
      title: "Genética avanzada",
      description: "La tecnología y la selección genética pasan a ocupar un rol central.",
    },
    {
      year: "2018",
      title: "Mercado Angus",
      description: "La Cassina consolida su presencia y liderazgo dentro del mercado Angus.",
    },
    {
      year: "2019",
      title: "Calidad agropecuaria",
      description: "Se profundiza el modelo productivo basado en calidad y buenas prácticas.",
    },
    {
      year: "2025",
      title: "25 años",
      description: "Una historia de crecimiento, trabajo y evolución genética.",
    },
  ];

  return (
    <main className="bg-[#F8F7F3] text-[#1D1934] font-archivo overflow-hidden flex flex-col min-h-screen">
      
      {/* =========================================================
          HERO HISTORIA
      ========================================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src={campo}
          alt="Campo La Cassina"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#1D1934]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11101d] via-transparent to-transparent opacity-80" />

        <div className="relative z-10 w-full text-center px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <img 
              src={logo} 
              alt="Logo La Cassina" 
              className="h-20 md:h-24 object-contain mb-8 drop-shadow-lg"
            />

            <span className="inline-flex items-center gap-3 text-[#ECD798] text-xs md:text-sm tracking-[0.35em] uppercase font-bold mb-6">
              <span className="w-10 h-px bg-[#ECD798]" />
              Desde 1995
              <span className="w-10 h-px bg-[#ECD798]" />
            </span>

            <h2 className="font-copperplate uppercase text-4xl md:text-5xl lg:text-6xl mt-2 text-white drop-shadow-md">
              Una historia que sigue creciendo
            </h2>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          LÍNEA DE TIEMPO INTERACTIVA
      ========================================================= */}
      <section className="bg-[#F8F7F3] py-24 md:py-32 overflow-hidden flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[#B69B4A] text-xs tracking-[0.3em] uppercase font-bold">
              Nuestra evolución
            </p>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mt-4">
              <h2 className="font-copperplate uppercase text-4xl md:text-5xl">
                Hitos que nos
                <br />
                <span className="text-[#B69B4A]">definieron.</span>
              </h2>

              <p className="max-w-md text-slate-500 leading-7">
                Cada etapa fue construyendo la identidad y el modelo productivo que hoy define a La Cassina.
              </p>
            </div>
          </motion.div>

          {/* Timeline Desktop (Grilla con líneas unidas y hover) */}
          <div className="hidden md:grid grid-cols-5 gap-y-20 gap-x-8 mt-12 relative">
            {hitos.map((hito, index) => (
              <motion.div
                key={hito.year}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                className="relative pt-10 group cursor-pointer"
              >
                {/* Línea conectora (No se dibuja en el último ítem de la fila) */}
                {(index + 1) % 5 !== 0 && index !== hitos.length - 1 && (
                  <div className="absolute top-[13px] left-[17px] w-[calc(100%+2rem)] h-[2px] bg-[#1D1934]/15 group-hover:bg-[#ECD798] transition-colors duration-300 z-0" />
                )}

                {/* Puntito Interactivo */}
                <div className="absolute top-[5px] left-0 w-[17px] h-[17px] rounded-full bg-[#1D1934] border-4 border-[#F8F7F3] ring-1 ring-[#ECD798] z-10 transition-all duration-300 group-hover:bg-[#ECD798] group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(236,215,152,0.8)]" />
                
                <span className="block font-copperplate text-2xl text-[#1D1934] mb-2 group-hover:text-[#B69B4A] transition-colors">{hito.year}</span>
                <h3 className="font-bold text-[#B69B4A] mb-2">{hito.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed pr-2 group-hover:text-slate-700 transition-colors">{hito.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline Mobile (Lista Vertical con hover) */}
          <div className="relative block md:hidden mt-10 border-l-2 border-[#1D1934]/15 pl-6 space-y-12">
            {hitos.map((hito, index) => (
              <motion.div
                key={hito.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer"
              >
                {/* Puntito Interactivo Mobile */}
                <div className="absolute -left-[33px] top-1 w-[17px] h-[17px] rounded-full bg-[#1D1934] border-4 border-[#F8F7F3] ring-1 ring-[#ECD798] transition-all duration-300 group-hover:bg-[#ECD798] group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(236,215,152,0.8)]" />
                
                <span className="block font-copperplate text-2xl text-[#1D1934] mb-1 group-hover:text-[#B69B4A] transition-colors">{hito.year}</span>
                <h3 className="font-bold text-[#B69B4A] mb-2">{hito.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{hito.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          CIERRE ANIVERSARIO (Diseño compacto y elegante)
      ========================================================= */}
      <section className="bg-[#1D1934] py-12 md:py-16 border-t-[3px] border-[#ECD798]/30 flex justify-center items-center relative overflow-hidden">
        {/* Luz de fondo sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ECD798]/10 via-[#1D1934]/0 to-transparent pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full px-6 flex flex-col items-center"
        >
          <img 
            src={logoAniversario} 
            alt="25 Aniversario La Cassina" 
            className="w-48 md:w-56 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
          <p className="text-[#ECD798] text-xs md:text-sm tracking-[0.3em] uppercase mt-6 font-light text-center">
            Pasión por la Genética Productiva
          </p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}