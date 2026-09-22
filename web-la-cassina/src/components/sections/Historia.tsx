// src/components/sections/Historia.tsx
import { motion } from 'framer-motion';

export default function Historia() {
  // Hitos exactos de la línea de tiempo corporativa
  const hitos = [
    { year: "2000", title: "Fundación de La Cassina" },
    { year: "2005", title: "Premio Gran venta de reproductores" },
    { year: "2008", title: "Introducción razas Hereford, Braford y Brangus" },
    { year: "2015", title: "Primeros toros exportados" },
    { year: "2017", title: "Tecnología avanzada en genética" },
    { year: "2018", title: "Liderazgo en mercado Angus" },
    { year: "2019", title: "Calidad Agropecuaria" },
    { year: "2025", title: "25 aniversario" },
  ];

  return (
    <main className="pt-32 pb-24 bg-white text-slate-900 font-archivo overflow-hidden min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#ECD798] uppercase mb-2">
            Nuestros Inicios
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-[#1D1934] uppercase font-copperplate">
            Historia
          </h1>
          <div className="w-16 h-1 bg-[#ECD798] mx-auto mt-6 shadow-sm"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna Izquierda: El relato institucional */}
          <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg lg:sticky lg:top-40">
            <motion.p 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              El proyecto La Cassina comenzó con una decisión de vida tomada por la familia que decidió migrar desde lo urbano a lo rural en 1995. Ese cambio radical fue impulsado por una vieja aspiración: iniciar un emprendimiento agrícola ganadero de envergadura en la Provincia de Buenos Aires, sustentado en la convicción profunda de la potencia del campo para el desarrollo de Argentina.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }}
            >
              Poco después nos propusimos fundar una cabaña que fuera líder en excelencia genética. A ese proyecto integral lo llamamos Estancias y Cabaña La Cassina.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }}
            >
              Treinta y un años transcurrieron desde aquel día en que comenzamos de cero. En el camino aprendimos, formamos un equipo profesional y nos expandimos. En 1998 iniciamos nuestra cabaña, donde hoy criamos las cuatro razas emblemáticas de nuestro país y producimos animales puros en las distintas categorías. Nuestra obsesión es perfeccionar la genética hasta lograr un animal productivo que se adapte a nuestro campo y garantice la más alta rentabilidad al productor ganadero.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.3 }} 
              className="bg-slate-50 p-8 border-l-4 border-[#ECD798] mt-8 rounded-r-xl shadow-sm"
            >
              <p className="font-medium text-[#1D1934] m-0">
                En 2026 gestionamos más de ocho mil hectáreas, en las cuales integramos una agricultura, basada en las buenas prácticas agrícolas para cuidar la tierra, con una ganadería de altísima calidad, cuya piedra angular es nuestro programa genético.
              </p>
            </motion.div>
          </div>

          {/* Columna Derecha: Línea de Tiempo Animada al Scroll */}
          <div className="relative border-l-2 border-[#ECD798]/40 pl-10 space-y-12 py-4 ml-4 md:ml-0 mt-10 lg:mt-0">
            {hitos.map((hito, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group"
              >
                {/* Punto interactivo en la línea de tiempo */}
                <div className="absolute -left-[49px] top-1.5 w-4 h-4 rounded-full bg-[#1D1934] border-2 border-[#ECD798] group-hover:scale-125 transition-transform shadow-[0_0_0_4px_white]"></div>
                
                <span className="block text-3xl font-black text-[#ECD798] mb-1 font-copperplate group-hover:text-[#1D1934] transition-colors">
                  {hito.year}
                </span>
                <p className="text-base font-semibold text-slate-700">
                  {hito.title}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}