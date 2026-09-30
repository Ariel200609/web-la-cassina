// src/components/sections/Historia.tsx
import { motion } from "framer-motion";
import Footer from "../layout/Footer";
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
          1. HERO LIMPIO (La imagen de campo se ve completa)
      ========================================================= */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={campo}
          alt="Campo La Cassina"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Solo un gradiente muy sutil abajo para fusionar con el fondo claro de la web */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F7F3] to-transparent pointer-events-none" />
      </section>

      {/* =========================================================
          2. RELATO HISTÓRICO (Debajo de la imagen)
      ========================================================= */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-[#B69B4A]" />
            <span className="text-[#B69B4A] text-sm md:text-base tracking-[0.35em] uppercase font-bold">
              Desde 1995
            </span>
            <span className="w-12 h-px bg-[#B69B4A]" />
          </div>
          
          <h1 className="font-copperplate uppercase text-4xl md:text-5xl lg:text-6xl text-[#1D1934] mb-12">
            Nuestra Historia
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-600 font-light leading-relaxed text-lg text-left space-y-6"
        >
          <p>
            El proyecto La Cassina comenzó con una decisión de vida tomada por la familia que decidió migrar desde lo urbano a lo rural en 1995. Ese cambio radical fue impulsado por una vieja aspiración: iniciar un emprendimiento agrícola ganadero de envergadura en la Provincia de Buenos Aires, sustentado en la convicción profunda de la potencia del campo para el desarrollo de Argentina.
          </p>
          <p>
            Poco después nos propusimos fundar una cabaña que fuera líder en excelencia genética. A ese proyecto integral lo llamamos Estancias y Cabaña La Cassina.
          </p>
          <p>
            Treinta y un años transcurrieron desde aquel día en que comenzamos de cero. En el camino aprendimos, formamos un equipo profesional y nos expandimos. En 1998 iniciamos nuestra cabaña, donde hoy criamos las cuatro razas emblemáticas de nuestro país y producimos animales puros en las distintas categorías. Nuestra obsesión es perfeccionar la genética hasta lograr un animal productivo que se adapte a nuestro campo y garantice la más alta rentabilidad al productor ganadero.
          </p>
          <div className="bg-white p-8 border-l-4 border-[#B69B4A] mt-8 shadow-sm">
            <p className="font-medium text-[#1D1934] m-0">
              En 2026 gestionamos más de ocho mil hectáreas, en las cuales integramos una agricultura, basada en las buenas prácticas agrícolas para cuidar la tierra, con una ganadería de altísima calidad, cuya piedra angular es nuestro programa genético.
            </p>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          3. LÍNEA DE TIEMPO INTERACTIVA AL SCROLL
      ========================================================= */}
      <section className="max-w-5xl mx-auto px-6 py-20 w-full flex-1">
        
        <div className="text-center mb-20">
          <h2 className="font-copperplate uppercase text-3xl md:text-4xl text-[#1D1934]">
            Hitos que nos definieron
          </h2>
          <div className="w-16 h-1 bg-[#B69B4A] mx-auto mt-6"></div>
        </div>

        <div className="relative">
          {/* Línea vertical central (Dorada) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-[#B69B4A]/30 transform md:-translate-x-1/2 rounded-full" />

          {hitos.map((hito, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={hito.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center justify-between mb-12 md:mb-16 ${
                  isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Punto indicador */}
                <div className="absolute left-[20px] md:left-1/2 w-5 h-5 bg-[#1D1934] border-4 border-[#B69B4A] rounded-full transform -translate-x-1/2 z-10 shadow-md" />

                {/* Tarjeta de información */}
                <div className={`ml-14 md:ml-0 w-full md:w-[45%] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300 group">
                    <span className="text-4xl md:text-5xl font-copperplate text-[#B69B4A] block mb-3 transition-colors duration-300 group-hover:text-[#1D1934]">
                      {hito.year}
                    </span>
                    <h3 className="text-xl font-bold text-[#1D1934] mb-2 uppercase tracking-wide">
                      {hito.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-light">
                      {hito.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          4. SECCIÓN FINAL 25 ANIVERSARIO
      ========================================================= */}
      <section className="bg-[#1D1934] py-20 flex justify-center items-center relative overflow-hidden mt-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B69B4A]/5 rounded-full blur-3xl pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <img 
            src={logoAniversario} 
            alt="25 Aniversario La Cassina" 
            className="w-56 md:w-72 mx-auto object-contain drop-shadow-2xl"
          />
          <p className="text-[#B69B4A] text-xs md:text-sm tracking-[0.3em] uppercase mt-6 font-light text-center">
            Pasión por la Genética Productiva
          </p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}