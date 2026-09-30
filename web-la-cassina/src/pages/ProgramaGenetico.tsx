// src/pages/ProgramaGenetico.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dna, Activity, ShieldCheck, TrendingDown, Target, Award, Users, LineChart, Download, ChevronRight } from 'lucide-react';
import Footer from '../components/layout/Footer';

// ASSETS (Asegurate de tener estas imágenes o reemplazá las rutas)
import heroProgramaGenetico from '../assets/images/programaGenetico.png'; 

import Angus from '../assets/images/Kundo.png';
import Kyoto from '../assets/images/Kyoto.png';
import Kundo from '../assets/images/Kundo.png';

export default function ProgramaGenetico() {
  const pasos = [
    { icon: <Target className="w-8 h-8 text-[#ECD798]" />, titulo: "1. Identificación de rasgos", desc: "Selección de características deseables: producción de carne, fertilidad, adaptación al medio, habilidad materna y facilidad de parto." },
    { icon: <Dna className="w-8 h-8 text-[#ECD798]" />, titulo: "2. Evaluación genética", desc: "Uso de datos de selección genómica y registros exhaustivos para su evaluación genética de forma precisa y objetiva." },
    { icon: <Activity className="w-8 h-8 text-[#ECD798]" />, titulo: "3. Selección y Reproducción", desc: "Selección de los mejores animales para perpetuar sus características a través del apareamiento e inseminación artificial." },
    { icon: <ShieldCheck className="w-8 h-8 text-[#ECD798]" />, titulo: "4. Evaluación sanitaria", desc: "Programa de nutrición y sanidad riguroso. La genética necesita esa excelente compañía para funcionar de manera óptima." },
    { icon: <TrendingDown className="w-8 h-8 text-[#ECD798]" />, titulo: "5. Presión en la selección", desc: "Descarte estricto y riguroso de los animales inferiores o que no respondan a las exigencias de nuestro modelo." }
  ];

  const torosPadres = [
    { nombre: "Decreto", raza: "Angus", frame: "Moderado", img: Angus },
    { nombre: "Kyoto", raza: "Angus", frame: "Moderado", img: Kyoto },
    { nombre: "Kundo", raza: "Hereford", frame: "Moderado", img: Kundo }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-slate-50 font-archivo flex flex-col min-h-screen">
      
      {/* 1. HERO TRADICIONAL CON BOTÓN DE DESCARGA */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1D1934] z-0">
          <img 
            src={heroProgramaGenetico} 
            alt="Programa Genético La Cassina" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D1934] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-copperplate text-white uppercase tracking-widest drop-shadow-2xl mb-8"
          >
            Programa <br className="md:hidden" />
            <span className="text-[#ECD798]">Genético</span>
          </motion.h1>

          <motion.div 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto border-l-4 border-[#ECD798] pl-6 text-left bg-white/5 p-6 rounded-r-lg backdrop-blur-sm"
          >
            <p className="mb-4">
              <strong className="text-white font-medium">Nuestra búsqueda de construir un rodeo con genética productiva</strong> comenzó con la visión de maximizar la rentabilidad del productor ganadero como premisa esencial.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <a 
              href="/catalogos/programa-genetico.pdf" 
              download="Programa_Genetico_LaCassina.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ECD798] hover:bg-white text-[#1D1934] font-bold uppercase tracking-widest py-4 px-8 rounded transition-colors flex items-center justify-center gap-3 shadow-xl"
            >
              <Download className="w-5 h-5" />
              Descargar Programa
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. TOROS PADRES CAMPAÑA 2026 */}
      <section className="py-24 bg-[#1D1934] relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-[#ECD798] uppercase tracking-widest text-sm font-bold mb-4 block">Campaña 2026</span>
              <h2 className="text-4xl md:text-5xl font-copperplate text-white uppercase leading-tight">Toros Padres</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-[#ECD798] hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
              Ver Catálogo Completo <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {torosPadres.map((toro, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl bg-slate-800 cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={toro.img} alt={toro.nombre} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1934] via-[#1D1934]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="text-[#ECD798] text-xs font-bold tracking-widest uppercase mb-1 block">{toro.raza}</span>
                  <h3 className="text-3xl font-copperplate text-white uppercase">{toro.nombre}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NUESTRO PROCESO (5 Pasos) */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-copperplate text-[#1D1934] uppercase">Metodología</h2>
          <div className="w-24 h-1 bg-[#ECD798] mx-auto mt-6"></div>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
            Un proceso sistemático, planificado y auditado para asegurar el progreso genético continuo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pasos.map((paso, index) => (
            <div key={index} className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#ECD798] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-[#1D1934] rounded-lg flex items-center justify-center mb-6 shadow-md">
                {paso.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1D1934] mb-4">{paso.titulo}</h3>
              <p className="text-slate-600 font-light">{paso.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PERFIL GENÉTICO */}
      <section className="py-24 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-copperplate text-[#1D1934] uppercase">Perfil Genético</h2>
            <div className="w-24 h-1 bg-[#ECD798] mx-auto mt-6"></div>
            <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
              Opción ideal para sistemas que priorizan la eficiencia de los vientres y la seguridad al parto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Award/>, title: "Facilidad de Parto (Peso al Nacer)", desc: "Genéticamente superiores. Un DEP de <strong>-0,34</strong> indica mayor capacidad para terneros livianos, minimizando riesgos de distocia." },
              { icon: <Activity/>, title: "Fertilidad Sobresaliente", desc: "DEP positivo. El promedio de la circunferencia escrotal es de <strong>38,67 cm</strong>, superando al promedio nacional para machos PP." },
              { icon: <LineChart/>, title: "Crecimiento y Altura Moderada", desc: "Sincronizamos tamaño y sistema pastoril. Evitamos animales excesivamente altos que tarden en terminarse." },
              { icon: <Users/>, title: "Aptitud Materna y Calidad de Res", desc: "Superando la media nacional en leche. El fácil engrasamiento otorga excelente calidad de <i>marbling</i> en el Área de Ojo de Bife." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md flex items-start gap-6 border border-slate-100">
                <div className="w-14 h-14 bg-[#1D1934] rounded-full flex items-center justify-center text-[#ECD798] shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1D1934] mb-3">{item.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}