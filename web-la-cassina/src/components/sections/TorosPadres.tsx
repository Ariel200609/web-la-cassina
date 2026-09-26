// src/components/sections/TorosPadres.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Ruler, Scale, Activity } from 'lucide-react';
import Footer from '../layout/Footer';

import DoubleWide from '../../assets/images/DoubleWide.png';
import Decreto from '../../assets/images/Decreto.png';
import Kyoto from '../../assets/images/Kyoto.png';
import Kundo from '../../assets/images/Kundo.png';
import Fundamentalista from '../../assets/images/Fundamentalista.png';
import Bandolero from '../../assets/images/Bandolero.png';
import Funcional from '../../assets/images/Funcional.png';
import Forjador from '../../assets/images/Forjador.png';
import Canonazo from '../../assets/images/Cañonazo.png';
import Midas from '../../assets/images/Midas.png';

// Datos extraídos del catálogo oficial de La Cassina
const padresData = [
  // ANGUS
  {
    id: 'double-wide',
    raza: 'Angus',
    nombre: 'Double Wide',
    registro: 'RP: SI 715D | HBA: 888456',
    descripcion: '"Consistencia americana. Un toro moderado con un crecimiento explosivo después del destete."',
    stats: [
      { label: 'PESO', valor: '990 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '42 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'FRAME', valor: '4', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Destacado en facilidad de parto y estructura. P365: 416 kg.',
    imagen: DoubleWide
  },
  {
    id: 'decreto',
    raza: 'Angus',
    nombre: 'Decreto',
    registro: 'RP: SI 651D | HBA: 877159',
    descripcion: '"El mejor hijo de Jet Stream. Equilibrio fenotípico y una línea genética de alta demanda."',
    stats: [
      { label: 'PESO', valor: '890 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '42 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.36 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Muy balanceado, ideal para quienes buscan corregir estructuras.',
    imagen: Decreto
  },
  {
    id: 'kyoto',
    raza: 'Angus',
    nombre: 'Kyoto',
    registro: 'RP: 1385 | HBA: 885200',
    descripcion: '"Apertura de sangre. Destacada estructura y un tren posterior que impresiona."',
    stats: [
      { label: 'PESO', valor: '810 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '42 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.30 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Facilidad de parto con excelente potencial de desarrollo.',
    imagen: Kyoto
  },
  {
    id: 'kundo',
    raza: 'Angus',
    nombre: 'Kundo',
    registro: 'RP: 1385 | HBA: 885200',
    descripcion: '"Apertura de sangre. Destacada estructura y un tren posterior que impresiona."',
    stats: [
      { label: 'PESO', valor: '810 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '42 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.30 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Facilidad de parto con excelente potencial de desarrollo.',
    imagen: Kundo
  },

  // POLLED HEREFORD
  {
    id: 'fundamentalista',
    raza: 'Polled Hereford',
    nombre: 'Fundamentalista',
    registro: 'RP: X3 | HBA: X 428300',
    descripcion: '"Sello racial original. Moderado, ancho y muy precoz. Ideal para vaquillonas."',
    stats: [
      { label: 'PESO', valor: '880 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '40 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'PN PROM.', valor: '25 kg', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Top 10% en Área Ojo de Bife (AOB). Carne de máxima calidad.',
    imagen: Fundamentalista
  },
  {
    id: 'bandolero',
    raza: 'Polled Hereford',
    nombre: 'Bandolero',
    registro: 'RP: X1000 | HBA: X 437643',
    descripcion: '"Potencia y masa muscular. Un mejorador por excelencia para rodeos comerciales."',
    stats: [
      { label: 'PESO', valor: '960 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '41 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.36 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Top 15% en Peso al Destete. Terneros con más kilos.',
    imagen: Bandolero
  },
  {
    id: 'funcional',
    raza: 'Polled Hereford',
    nombre: 'Funcional',
    registro: 'RP: X33 | HBA: X 434924',
    descripcion: '"Nobleza y adaptabilidad. El toro que todo productor necesita para trabajar en el campo."',
    stats: [
      { label: 'PESO', valor: '860 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '39 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.37 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Gran equilibrio visual y corrección de aplomos.',
    imagen: Funcional
  },

  // BRANGUS COLORADO
  {
    id: 'forjador',
    raza: 'Brangus Colorado',
    nombre: 'Forjador',
    registro: 'RP: 651 | HBA: 145069',
    descripcion: '"Líder carnicero. Colorado completo con crecimiento destacado en todas sus etapas."',
    stats: [
      { label: 'PESO', valor: '944 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '49 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.39 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Grasa Intramuscular (%GI) en el 1% superior de la raza.',
    imagen: Forjador
  },
  {
    id: 'canonazo',
    raza: 'Brangus Colorado',
    nombre: 'Cañonazo',
    registro: 'RP: 162 | HBA: 153039',
    descripcion: '"Capacidad reproductiva extrema. Un toro con una precocidad sexual difícil de igualar."',
    stats: [
      { label: 'PESO', valor: '760 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '50 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.35 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Muy destacado en índices de crecimiento y fertilidad.',
    imagen: Canonazo
  },    

  // BRAFORD
  {
    id: 'midas',
    raza: 'Braford',
    nombre: 'Midas',
    registro: 'RP: 1113 | HBA: 1043328',
    descripcion: '"El gigante de la cabaña. Máximo volumen y precocidad para producir kilos rápido."',
    stats: [
      { label: 'PESO', valor: '985 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '48 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'PESO DESTETE', valor: '295 kg', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Gran desempeño en desarrollo precoz.',
    imagen: Midas
  }
];

export default function TorosPadres() {
  const [razaActiva, setRazaActiva] = useState('Angus');
  const razas = ['Angus', 'Polled Hereford', 'Brangus Colorado', 'Braford'];

  const torosFiltrados = padresData.filter(toro => toro.raza === razaActiva);

  return (
    // Contenedor principal con flex col y altura mínima para anclar el footer
    <div className="min-h-screen bg-slate-50 font-archivo flex flex-col">
      
      {/* El <main> con flex-1 empuja el Footer hacia abajo. Agregamos pt-32 para el Navbar */}
      <main className="flex-1 w-full pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Encabezado */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-[0.2em] text-[#C9AE71] uppercase mb-2"
            >
              Programa Genético
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-[#1D1934] uppercase font-copperplate"
            >
              Toros Padres
            </motion.h1>
            <div className="w-16 h-1 bg-[#C9AE71] mx-auto mt-6 shadow-sm mb-8"></div>
            <p className="max-w-2xl mx-auto text-slate-600 font-light text-lg">
              Conoce a los reproductores de elite que fundamentan nuestro rodeo. Seleccionados bajo rigurosa presión genómica para garantizar rentabilidad y adaptación.
            </p>
          </div>

          {/* Pestañas de Navegación por Raza */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {razas.map((raza) => (
              <button
                key={raza}
                onClick={() => setRazaActiva(raza)}
                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  razaActiva === raza
                    ? 'bg-[#1D1934] text-white shadow-lg scale-105'
                    : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-[#1D1934] border border-slate-200'
                }`}
              >
                {raza}
              </button>
            ))}
          </div>

          {/* Grilla de Toros */}
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {torosFiltrados.map((toro, index) => (
                <motion.div
                  key={toro.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col sm:flex-row group"
                >
                  {/* Imagen del Toro */}
                  <div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden bg-slate-200 flex-shrink-0">
                    <img 
                      src={toro.imagen} 
                      alt={`Toro ${toro.nombre} - ${toro.raza}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#C9AE71] text-[#1D1934] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {toro.raza}
                    </div>
                  </div>

                  {/* Detalles del Toro */}
                  <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-copperplate text-[#1D1934] uppercase mb-1">{toro.nombre}</h3>
                    <p className="text-xs font-bold text-slate-400 tracking-widest mb-4">{toro.registro}</p>
                    
                    <p className="text-slate-600 font-light italic mb-6 text-sm border-l-2 border-[#C9AE71] pl-4 py-1">
                      {toro.descripcion}
                    </p>

                    {/* Estadísticas */}
                    <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-100">
                      {toro.stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            {stat.icon} {stat.label}
                          </span>
                          <span className="text-[#1D1934] font-black text-lg">{stat.valor}</span>
                        </div>
                      ))}
                    </div>

                    {/* Fortaleza Genética */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#C9AE71] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-bold text-[#1D1934] uppercase tracking-wider mb-1">Fortaleza Genética</span>
                        <p className="text-sm text-slate-600 font-medium leading-snug">{toro.fortaleza}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </main>

      {/* Footer anclado al final */}
      <Footer />
      
    </div>
  );
}