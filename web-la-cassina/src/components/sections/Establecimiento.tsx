// src/components/sections/Establecimiento.tsx
import { motion } from 'framer-motion';
import { Tractor, Leaf, ShieldCheck, Database, Award } from 'lucide-react';
import videoDron from '../../assets/videos/dron.mp4';
import Footer from '../layout/Footer';
import establecimiento from '../../assets/images/establecimiento.png'; 
import campo from '../../assets/images/campo.png'; 

export default function Establecimiento() {
  return (
    <main className="bg-slate-50 text-slate-900 font-archivo overflow-hidden min-h-screen">
      
      {/* BLOQUE 1: HERO CON VIDEO DE FONDO PROTAGONISTA */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center mt-[72px] md:mt-20">
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoDron} type="video/mp4" />
        </video>
        
        {/* Capa oscura transparente para que el video se vea claro pero el texto resalte */}
        <div className="absolute inset-0 bg-[#1D1934]/60"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-[#ECD798] uppercase mb-4 shadow-sm">
            Magnitud y Sustentabilidad
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase font-copperplate drop-shadow-lg">
            El Establecimiento
          </h1>
          <div className="w-20 h-1 bg-[#ECD798] mx-auto mt-6"></div>
        </motion.div>
      </div>

      {/* BLOQUE 2: AGRICULTURA Y GANADERÍA */}
      <div className="container mx-auto px-6 max-w-7xl py-20 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-[#ECD798]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <Tractor className="text-[#1D1934] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D1934]">Agricultura</h3>
            </div>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              La Cassina tiene una superficie en explotación de aproximadamente <strong className="text-slate-900">10.000 hectáreas</strong> distribuidas en cinco establecimientos; 4.500 se destinan a la agricultura, con cultivos de trigo, cebada, avena, maíz, soja y girasol, además de cultivos menores como centeno, triticale forrajero y sorgo.
            </p>
            <div className="flex items-start gap-3 bg-green-50/50 p-4 rounded-lg border border-green-100">
              <Leaf className="text-green-600 w-6 h-6 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                Nuestro manejo de la tierra se ciñe a las buenas prácticas agrícolas (BPA) protegiendo al medio ambiente y aplicando en forma racional los insumos.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-[#1D1934]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <ShieldCheck className="text-[#ECD798] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D1934]">Ganadería</h3>
            </div>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              El resto de la superficie está orientada a la ganadería de cría y de invernada (razas Angus, Hereford, Brangus y Braford). La Cassina cuenta con un rodeo de aproximadamente <strong className="text-slate-900">7500 animales</strong>, entre vacas de cría y hacienda en proceso de engorde.
            </p>
            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <Award className="text-[#1D1934] w-6 h-6 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                El rodeo de cría está conformado en su totalidad por animales Puros de Pedigree, Puros Controlados y Registrados.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* BLOQUE 3: EL CORAZÓN DE LA CASSINA */}
      <div className="bg-[#1D1934] text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ECD798] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-black text-[#ECD798] uppercase font-copperplate leading-tight mb-8">
                  La Cabaña es el corazón de La Cassina
                </h2>
                <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
                  <p>
                    Nuestra cabaña es líder en excelencia genética. El objetivo es el desarrollo de un animal <strong className="text-white">100% Productivo</strong> lo que significa rusticidad y plasticidad para adaptarse al campo argentino, gran facilidad de parto, rápido crecimiento y desarrollo, fertilidad probada, aptitud carnicera y terneza materna.
                  </p>
                  <p>
                    Nos hemos propuesto la mejora continua de nuestros planteles de pedigree, mediante la incorporación de genética avanzada sin arriesgar nunca la consistencia que nos ha caracterizado desde el comienzo. Solo incorporamos pocos y muy probados padres y no estamos de acuerdo con las aventuras genéticas.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-5 backdrop-blur-sm"
              >
                <Database className="text-[#ECD798] w-8 h-8 shrink-0 mt-1" />
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong className="text-white block mb-1 text-base uppercase tracking-wider">Base de Datos Confiable</strong>
                  Nuestra base de datos genética permite acceder a información verificable y clara sobre nuestros reproductores y madres, garantizando al productor que nuestros animales transmitirán su mérito genético con altísima confiabilidad.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src= {establecimiento}
                alt="Toro de La Cassina" 
                className="rounded-xl w-full h-48 md:h-64 object-cover shadow-2xl"
              />
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                src= {campo}   
                alt="Ganadería en el campo" 
                className="rounded-xl w-full h-48 md:h-64 object-cover shadow-2xl mt-8 md:mt-12"
              />
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}