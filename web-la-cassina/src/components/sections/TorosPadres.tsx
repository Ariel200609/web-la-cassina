// src/components/sections/TorosPadres.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Ruler, Scale, Activity } from 'lucide-react';
import Footer from '../layout/Footer';

// Importación de imágenes dinámicas
import Apache from '../assets/images/Apache.png';
import Alfonso from '../assets/images/Alfonso.png';
import Aparicio from '../assets/images/Aparicio.png';
import Bandolero from '../assets/images/Bandolero.png';
import Baqueano from '../assets/images/Baqueano.png';
import Botija from '../assets/images/Botija.png';
import Cacique from '../assets/images/Cacique.png';
import Centinela from '../assets/images/Centinela.png';
import Decreto from '../assets/images/Decreto.png';
import DoubleWide from '../assets/images/DoubleWide.png';
import Kundo from '../assets/images/Kundo.png';
import Kyoto from '../assets/images/Kyoto.png';
import Mayaco473 from '../assets/images/Mayaco473.png';
import Parana from '../assets/images/Parana.png';
import Pimienta from '../assets/images/Pimienta.png';
import Vasco from '../assets/images/Vasco.png';

// Datos de los 16 toros actualizados
const padresData = [
  {
    id: 'apache',
    raza: 'Angus Colorado',
    nombre: 'Apache',
    registro: 'RP: 363 | HBA: 787859',
    descripcion: '"Moderado, extremadamente ancho y profundo en combinación con un destacado tren posterior y alta precocidad sexual."',
    stats: [
      { label: 'PESO', valor: '980 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '41 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.38 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'De pedigree muy atractivo, con líneas de sangre de alto impacto.',
    imagen: Apache
  },
  {
    id: 'alfonso',
    raza: 'Angus',
    nombre: 'Alfonso',
    registro: 'RP: 17 | HBA: 842934',
    descripcion: '"Toro muy prolijo, de excelente estructura, buena musculatura y capacidad de engrasamiento. De tamaño moderado."',
    stats: [
      { label: 'PESO', valor: '940 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '40 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.36 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Sus crías promedian 32 kilos al nacer, ideal para vaquillonas de 18 meses.',
    imagen: Alfonso
  },
  {
    id: 'aparicio',
    raza: 'Angus',
    nombre: 'Aparicio',
    registro: 'RP: 1552 | HBA: 854013',
    descripcion: '"De tamaño intermedio con un buen volumen y excelente proyección de DEPs en bajo peso al nacer."',
    stats: [
      { label: 'PESO', valor: '720 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '39 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.29 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Alternativa ideal para buscar precocidad y buen desarrollo posterior.',
    imagen: Aparicio
  },
  {
    id: 'bandolero',
    raza: 'Polled Hereford',
    nombre: 'Bandolero',
    registro: 'RP: X472 | HBA: 431172',
    descripcion: '"Muy moderado, de buen color, profundo, buena pigmentación y excelente desplazamiento."',
    stats: [
      { label: 'PESO', valor: '960 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '41 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.36 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Alternativa probada para refrescar sangres. Sin problemas de parto.',
    imagen: Bandolero
  },
  {
    id: 'baqueano',
    raza: 'Angus',
    nombre: 'Baqueano',
    registro: 'RP: 833 | HBA: 867948',
    descripcion: '"Destacada producción caracterizada por bajo peso al nacer, mucha clase y desarrollo."',
    stats: [
      { label: 'PESO', valor: '930 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '42 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.36 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Extrema facilidad de parto, pedigree muy sólido (OCC Paxton y Conhelo).',
    imagen: Baqueano
  },
  {
    id: 'botija',
    raza: 'Angus Colorado',
    nombre: 'Botija',
    registro: 'RP: 1025 | HBA: 877505',
    descripcion: '"De color rojo intenso, impactante tren posterior y excelente calidad seminal."',
    stats: [
      { label: 'PESO', valor: '910 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '43 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.35 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Mucha facilidad de parto y una llamativa curva de crecimiento final.',
    imagen: Botija
  },
  {
    id: 'cacique',
    raza: 'Angus Colorado',
    nombre: 'Cacique',
    registro: 'RP: 1461 | HBA: 823280',
    descripcion: '"Frame moderado a bajo con exuberantes masas musculares, profundidad sobresaliente y aplomos perfectos."',
    stats: [
      { label: 'P. NACER', valor: '36 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE DEP', valor: '+1.1', icon: <Activity className="w-4 h-4" /> },
      { label: 'AOB DEP', valor: '+1.0', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Moderado peso al nacer y facilidad de engorde, ideal para pastoril.',
    imagen: Cacique
  },
  {
    id: 'centinela',
    raza: 'Polled Hereford',
    nombre: 'Centinela',
    registro: 'RP: X902 | HBA: 439060',
    descripcion: '"Moderado, muy balanceado y correcto en todas sus líneas, de color rojo cereza y buena pigmentación."',
    stats: [
      { label: 'PESO', valor: '930 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '41 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.35 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Combina pureza racial, engrasamiento, musculatura y crecimiento.',
    imagen: Centinela
  },
  {
    id: 'decreto',
    raza: 'Angus',
    nombre: 'Decreto',
    registro: 'RP: SI 651D | HBA: 877159',
    descripcion: '"Considerado por Tim Ohlde como el mejor hijo de Jet Stream. Extremadamente profundo y balanceado."',
    stats: [
      { label: 'PESO', valor: '890 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '42 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.36 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Excelentes números en bajo peso al nacer y crecimiento.',
    imagen: Decreto
  },
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
    id: 'kundo',
    raza: 'Angus Colorado',
    nombre: 'Kundo',
    registro: 'RP: 1281 | HBA: 883688',
    descripcion: '"Moderado, profundo, de engrosamiento y masas musculares destacadas con un fenotipo muy atractivo."',
    stats: [
      { label: 'PESO', valor: '830 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '42 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.33 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Bajo peso con muy buen potencial de desarrollo.',
    imagen: Kundo
  },
  {
    id: 'kyoto',
    raza: 'Angus',
    nombre: 'Kyoto',
    registro: 'RP: 1385 | HBA: 885200',
    descripcion: '"Con líneas altamente consolidadas, es un toro de muy buena estructura y destacado tren posterior."',
    stats: [
      { label: 'PESO', valor: '810 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '42 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.30 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Facilidad de parto con buen potencial de desarrollo (apertura de sangre).',
    imagen: Kyoto
  },
  {
    id: 'mayaco',
    raza: 'Angus',
    nombre: 'Mayaco 473',
    registro: 'RP: 473 | HBA: 822273',
    descripcion: '"Posee un balance perfecto entre musculatura y engrasamiento. Correcto en todas sus líneas y equilibrado."',
    stats: [
      { label: 'PESO', valor: '910 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '41 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.35 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Bajo peso al nacer y tamaño moderado, ideal para uniformar rodeos.',
    imagen: Mayaco473
  },
  {
    id: 'parana',
    raza: 'Brangus Colorado',
    nombre: 'Parana',
    registro: 'RP: 9058 | HBA: 785150',
    descripcion: '"De pelo fino, gran capacidad de engorde, excelente cabeza en combinación con un buen biotipo pastoril."',
    stats: [
      { label: 'PESO', valor: '950 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '40 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.37 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Facilidad de parto probada en vaquillonas de 15 meses y excelente fertilidad.',
    imagen: Parana
  },
  {
    id: 'pimienta',
    raza: 'Angus',
    nombre: 'Pimienta',
    registro: 'RP: 1680 | HBA: 862304',
    descripcion: '"De moderado peso al nacer, excelente circunferencia escrotal y calidad seminal con gran potencial de crecimiento."',
    stats: [
      { label: 'PESO', valor: '850 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'CE', valor: '43 cm', icon: <Activity className="w-4 h-4" /> },
      { label: 'ALTURA', valor: '1.34 m', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Muy sólido genéticamente. Buen tamaño y destacadas masas musculares.',
    imagen: Pimienta
  },
  {
    id: 'vasco',
    raza: 'Polled Hereford',
    nombre: 'Vasco',
    registro: 'RP: X31 | HBA: 439895',
    descripcion: '"Combina líneas genéticas probadas y consistentes con su biotipo pastoril y productivo."',
    stats: [
      { label: 'PESO COL.', valor: '745 kg', icon: <Scale className="w-4 h-4" /> },
      { label: 'P. DEST.', valor: '+13 DEP', icon: <Activity className="w-4 h-4" /> },
      { label: 'P. AÑO', valor: '+20 DEP', icon: <Ruler className="w-4 h-4" /> }
    ],
    fortaleza: 'Crías precoces que se desarrollan rápidamente. Productor de bajo PN.',
    imagen: Vasco
  }
];

export default function TorosPadres() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(padresData.length / itemsPerPage);

  // Lógica de Paginación
  const indexOfLastBull = currentPage * itemsPerPage;
  const indexOfFirstBull = indexOfLastBull - itemsPerPage;
  const currentBulls = padresData.slice(indexOfFirstBull, indexOfLastBull);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scrollear suavemente hacia arriba al cambiar de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-archivo flex flex-col">
      <main className="flex-1 w-full pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Encabezado */}
          <div className="text-center mb-12">
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

          {/* Controles de Paginación */}
          <div className="flex justify-center items-center gap-3 mb-16">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold transition-all duration-300 ${
                  currentPage === number
                    ? 'bg-[#1D1934] text-white shadow-lg scale-110'
                    : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-[#1D1934] border border-slate-200'
                }`}
              >
                {number}
              </button>
            ))}
          </div>

          {/* Grilla de Toros */}
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {currentBulls.map((toro, index) => (
                <motion.div
                  key={toro.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
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
          
          {/* Controles de Paginación Inferiores */}
          <div className="flex justify-center items-center gap-3 mt-16">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={`bottom-${number}`}
                onClick={() => handlePageChange(number)}
                className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                  currentPage === number
                    ? 'bg-[#1D1934] text-white shadow-md scale-110'
                    : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-[#1D1934] border border-slate-200'
                }`}
              >
                {number}
              </button>
            ))}
          </div>

        </div>
      </main>

      {/* Footer anclado al final */}
      <Footer />
      
    </div>
  );
}