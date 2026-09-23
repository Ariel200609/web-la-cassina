// src/pages/ProgramaGenetico.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dna, Activity, CheckCircle, ShieldCheck, TrendingDown, Target, Award, Users, LineChart} from 'lucide-react';
import ScrollExpandMedia from '../components/ui/scroll-expansion-hero';
import Footer from '../components/layout/Footer';

// ASSETS
import heroProgramaGenetico from '../assets/images/HeroProgramaGenetico.png';
import animales2 from '../assets/images/programaGenetico.png';
import equipo from '../assets/images/elEquipo.png';
import dron from '../assets/videos/dron.mp4';
import logoLaCassina from '../assets/images/logotiposinfondo.png'; // <--- IMPORTAMOS EL LOGO TRANSPARENTE

export default function ProgramaGenetico() {
  const pasos = [
    { icon: <Target className="w-8 h-8 text-[#C9AE71]" />, titulo: "1. Identificación de rasgos", desc: "Selección de características deseables: producción de carne, fertilidad, adaptación al medio, habilidad materna y facilidad de parto." },
    { icon: <Dna className="w-8 h-8 text-[#C9AE71]" />, titulo: "2. Evaluación genética", desc: "Uso de datos de selección genómica y registros exhaustivos para su evaluación genética de forma precisa y objetiva." },
    { icon: <Activity className="w-8 h-8 text-[#C9AE71]" />, titulo: "3. Selección y Reproducción", desc: "Selección de los mejores animales para perpetuar sus características a través del apareamiento e inseminación artificial." },
    { icon: <ShieldCheck className="w-8 h-8 text-[#C9AE71]" />, titulo: "4. Evaluación sanitaria", desc: "Programa de nutrición y sanidad riguroso. La genética necesita esa excelente compañía para funcionar de manera óptima." },
    { icon: <TrendingDown className="w-8 h-8 text-[#C9AE71]" />, titulo: "5. Presión en la selección", desc: "Descarte estricto y riguroso de los animales inferiores o que no respondan a las exigencias de nuestro modelo." }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="w-full bg-slate-50 font-archivo">
      
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={animales2}
        bgImageSrc={heroProgramaGenetico}
        title="Programa Genético"
        logoBottomSrc={logoLaCassina} // <--- PASAMOS EL LOGO ACÁ EN LUGAR DEL TEXTO "date"
        scrollToExpand="Deslizá para expandir"
      >
        
        <div className="w-full pb-0">
          
          <div className="bg-white/5 py-12">
            <div className="max-w-4xl mx-auto px-4">
               <motion.div 
                 variants={fadeUp}
                 initial="hidden"
                 whileInView="show"
                 className="text-lg md:text-xl text-slate-700 font-archivo font-light leading-relaxed border-l-4 border-[#C9AE71] pl-6 text-left bg-white p-8 rounded-r-2xl shadow-xl border-y border-r border-slate-100"
               >
                 <p className="mb-4 text-slate-800">
                   <strong className="font-semibold tracking-wide uppercase text-sm block mb-2 text-[#C9AE71]">Visión Productiva</strong>
                   Comenzó hacia principios de este siglo con la visión de que la ganadería argentina necesitaba maximizar la rentabilidad del productor como premisa esencial.
                 </p>
                 <p className="text-slate-600">
                   Las claves para lograrlo fueron la perseverancia, el profesionalismo, la gestión ordenada y la alianza con centros de inseminación de altísima calidad.
                 </p>
               </motion.div>
            </div>
          </div>

          <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-copperplate text-[#1A1528] uppercase">Nuestro Proceso</h2>
              <div className="w-24 h-1.5 bg-[#C9AE71] mx-auto mt-6 rounded-full"></div>
              <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
                Un proceso sistemático, planificado y auditado para asegurar el progreso genético continuo en cada una de nuestras razas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pasos.map((paso, index) => (
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#C9AE71] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="w-16 h-16 bg-[#1A1528] rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-500 shadow-lg">
                    {paso.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1528] mb-4 group-hover:text-[#C9AE71] transition-colors">{paso.titulo}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{paso.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-24 bg-[#1A1528] text-white relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C9AE71] rounded-full blur-[150px] opacity-20"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <span className="text-[#C9AE71] uppercase tracking-widest text-sm font-bold mb-4 block">Experiencia y Dedicación</span>
                <h2 className="text-4xl md:text-5xl font-copperplate text-white uppercase mb-8 leading-tight">El Equipo <br/>y la Historia</h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed font-light text-lg">
                  <strong>Patricia Cassini</strong> es la responsable de la gestión integral del programa genético. Junto a <strong>Baltasar Beltrán</strong>, nuestro reconocido genetista a cargo desde hace un cuarto de siglo, lideran a un equipo de excelencia.
                </p>
                <p className="text-gray-300 mb-10 leading-relaxed font-light text-lg">
                  Hoy somos una de las cabañas con mayor influencia de <strong>genética OCC (EE.UU.)</strong> en Argentina, garantizando reproductores de frame moderado y adaptación total.
                </p>
                
                <div className="space-y-5 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-[#C9AE71] shrink-0 mt-1" />
                    <p><strong className="text-white">Angus:</strong> Fuerte influencia OCC (Líder, Jockey), Prototype y Referente.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-[#C9AE71] shrink-0 mt-1" />
                    <p><strong className="text-white">Hereford:</strong> Líneas de excepcional mérito como Alabama y Felton 480.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-[#C9AE71] shrink-0 mt-1" />
                    <p><strong className="text-white">Sintéticas:</strong> Braford y Brangus diseñados para el norte (Houston, Tres Cruces).</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                 <div className="absolute inset-0 bg-[#C9AE71] rounded-2xl transform translate-x-4 translate-y-4 opacity-50"></div>
                 <img src={equipo} alt="Equipo Genética La Cassina" className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[600px]" />
              </div>
            </div>
          </section>

          <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center group cursor-pointer bg-[#1A1528]">
            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
              <video 
                src={dron}
                autoPlay
                muted
                loop
                playsInline
                webkit-playsinline="true"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[#1A1528]/40 group-hover:bg-[#1A1528]/20 transition-colors duration-500"></div>
            </div>
          </section>

          <section className="py-24 px-4 max-w-7xl mx-auto bg-slate-50">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-copperplate text-[#1A1528] uppercase">Perfil Genético</h2>
              <div className="w-24 h-1.5 bg-[#C9AE71] mx-auto mt-6 rounded-full"></div>
              <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
                Posicionado como la opción ideal para sistemas que priorizan la <strong>eficiencia de los vientres</strong> y la <strong>seguridad al parto</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Award/>, title: "Facilidad de Parto (Peso al Nacer)", desc: "Genéticamente superiores. Un DEP de <strong>-0,34</strong> indica mayor capacidad para terneros livianos, minimizando riesgos de distocia. (Peso real: 34,16 kg)." },
                { icon: <Activity/>, title: "Fertilidad Sobresaliente", desc: "DEP positivo. El promedio de la circunferencia escrotal es de <strong>38,67 cm</strong>, superando al promedio nacional para machos PP (37,2 cm)." },
                { icon: <LineChart/>, title: "Crecimiento y Altura Moderada", desc: "Sincronizamos tamaño y sistema pastoril. Evitamos animales excesivamente altos que tarden en terminarse, buscando funcionalidad." },
                { icon: <Users/>, title: "Aptitud Materna y Calidad de Res", desc: "Superando la media nacional en leche. El fácil engrasamiento otorga excelente calidad de <i>marbling</i> (terneza y sabor) en el Área de Ojo de Bife." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-xl flex items-start gap-6 hover:shadow-2xl transition-shadow duration-300 border border-slate-100">
                  <div className="w-14 h-14 bg-[#1A1528] rounded-full flex items-center justify-center text-[#C9AE71] shrink-0 shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1528] mb-3">{item.title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </ScrollExpandMedia>
      <Footer />
    </div>
  );
}