import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  MapPin, 
  Download, 
  BadgePercent, 
  Truck, 
  CreditCard,
  PlayCircle,
  FileText,
  Dna,
  Info
} from 'lucide-react';

// Layout
import Footer from '../components/layout/Footer';

// Imágenes
import HeroRemate from '../assets/images/HeroDeRemates.webp';
import animales from '../assets/images/programaGenetico.webp';

import Alfonso from '../assets/images/Alfonso.png';
import Baqueano from '../assets/images/Baqueano.png';
import Kundo from '../assets/images/Kundo.png';
import Botija from '../assets/images/Botija.png';

export default function Remates() {
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
      transition: { staggerChildren: 0.2 }
    }
  };

  // CONDICIONES COMERCIALES
  const condicionesComerciales = [
    { icon: <CreditCard/>, titulo: "90 Días Libres", desc: "+ 90 días al 3% de interés mensual" },
    { icon: <BadgePercent/>, titulo: "5 Cuotas", desc: "Con índice MAG al 31/01/27 ó 31/03/27" },
    { icon: <Truck/>, titulo: "Flete Gratis", desc: "Para toros hasta 500 km" },
    { icon: <FileText/>, titulo: "Financiación", desc: "Tarjetas Macro Agro, Banco Provincia, Galicia" }
  ];

  // TOROS PADRES DEL REMATE CON INFORMACIÓN GENÉTICA PARA EL HOVER
  const torosDestacados = [
    { 
      nombre: "Alfonso", 
      rp: "17", 
      raza: "Angus", 
      desc: "Excelente estructura, buena musculatura y capacidad de engrasamiento. Sus crías promedian 32 kilos al nacer.", 
      img: Alfonso,
      hoverInfo: {
        pedigree: { padre: "La Segunda 11216 Aristóteles", madre: "Mayaco 252 M136 M47" },
        deps: [
          { caracteristica: 'P. Nacer', valor: '-0.7' },
          { caracteristica: 'P. Destete', valor: '0.1' },
          { caracteristica: 'Leche', valor: '4.8' },
          { caracteristica: 'P. Final', valor: '16.2' },
          { caracteristica: 'CE', valor: '0.9' }
        ]
      }
    },
    { 
      nombre: "Baqueano", 
      rp: "833", 
      raza: "Angus", 
      desc: "Destacada producción caracterizada por bajo peso al nacer, mucha clase y desarrollo. Extrema facilidad de parto.", 
      img: Baqueano,
      hoverInfo: {
        pedigree: { padre: "DOBLEHACHE 505 Sergio", madre: "DOBLEHACHE 398" },
        deps: [
          { caracteristica: 'P. Nacer', valor: '-0.5' },
          { caracteristica: 'P. Destete', valor: '16.4' },
          { caracteristica: 'P. Final', valor: '49.9' },
          { caracteristica: 'CE', valor: '1.9' },
          { caracteristica: 'AOB', valor: '2.7' }
        ]
      }
    },
    { 
      nombre: "Kundo", 
      rp: "1281", 
      raza: "Angus Colorado", 
      desc: "Moderado, profundo. Bajo peso con muy buen potencial de desarrollo. Engrasamiento y masas musculares destacadas.", 
      img: Kundo,
      hoverInfo: {
        pedigree: { padre: "Esencial 37 Arquimedes T/E", madre: "Esencial Suyai" },
        deps: null // Solo mostramos pedigree porque no hay DEPs específicos provistos
      }
    },
    { 
      nombre: "Botija", 
      rp: "1025", 
      raza: "Angus Colorado", 
      desc: "De color rojo intenso e impactante tren posterior. Mucha facilidad de parto y llamativa curva de crecimiento final.", 
      img: Botija,
      hoverInfo: {
        pedigree: { padre: "Esencial 37 Arquimedes T/E", madre: "Esencial Suyai" },
        deps: [
          { caracteristica: 'P. Nacer', valor: '-1.0' },
          { caracteristica: 'P. Destete', valor: '10.6' },
          { caracteristica: 'Leche', valor: '2.9' },
          { caracteristica: 'P. Final', valor: '51.0' },
          { caracteristica: 'AOB', valor: '3.0' }
        ]
      }
    }
  ];

  // GIRA DE REMATES
  const giraRemates = [
    { ciudad: "Cacharí", fecha: "07 de Octubre", tipo: "Remate Destacado", consignatario: "La Cassina", pdf: "/catalogos/catalogo-cachari.pdf" },
    { ciudad: "Cañuelas", fecha: "01 de Agosto", tipo: "Remate de Elite (MAG)", consignatario: "Pedro Noel Irey", pdf: "/catalogos/catalogo-canuelas.pdf" },
    { ciudad: "9 de Julio", fecha: "A confirmar", tipo: "Remate Especial", consignatario: "Consignataria Melicura", pdf: "/catalogos/catalogo-9dejulio.pdf" },
    { ciudad: "Daireaux", fecha: "10 de Julio", tipo: "Remate Anual", consignatario: "Monasterio Tattersall", pdf: "/catalogos/catalogo-daireaux.pdf" },
    { ciudad: "Maipú", fecha: "A confirmar", tipo: "Remate Anual", consignatario: "Colombo y Colombo", pdf: "/catalogos/catalogo-maipu.pdf" },
    { ciudad: "Trenque Lauquen", fecha: "21 de Agosto", tipo: "Remate Anual", consignatario: "Colombo y Colombo", pdf: "/catalogos/catalogo-trenquelauquen.pdf" },
    { ciudad: "Hasenkamp", fecha: "A confirmar", tipo: "Remate", consignatario: "Consignataria", pdf: "/catalogos/catalogo-hasenkamp.pdf" }
  ];

  return (
    <main className="w-full bg-[#1A1528] font-archivo selection:bg-[#C9AE71] selection:text-[#1A1528] overflow-hidden">
      
      <Helmet>
        <title>Remates Angus y Hereford | La Cassina</title>
        <meta name="description" content="Próximos remates Angus y Hereford en Cacharí, Cañuelas, 9 de Julio, Daireaux y más. Descubre los mejores reproductores y genética de La Cassina." />
      </Helmet>
      
      {/* HERO SPECTACULAR */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={HeroRemate} 
            alt="Remates La Cassina" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1528]/80 via-[#1A1528]/50 to-[#1A1528]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-5xl"
        >
          <h1 className="text-6xl md:text-8xl font-copperplate text-white uppercase tracking-widest drop-shadow-2xl mb-6">
            Remates
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
            El momento donde nuestra <strong>pasión productiva</strong> y años de selección genética se encuentran con su campo.
          </p>
        </motion.div>
      </section>

      {/* EL REMATE PRINCIPAL (CACHARÍ) */}
      <section className="relative z-20 -mt-32 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
          >
            <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <span className="text-[#C9AE71] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Evento Destacado</span>
              
              <h2 className="text-4xl md:text-5xl font-copperplate text-white uppercase mb-6 leading-tight">
                Remate <br/> Cacharí
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-[#C9AE71]/20 flex items-center justify-center shrink-0">
                    <Calendar className="text-[#C9AE71] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">7 de Octubre | 14:00 hs</p>
                    <p className="text-sm">Almuerzo previo - Cabañas Invitadas</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-[#C9AE71]/20 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#C9AE71] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Cacharí, PBA</p>
                    <p className="text-sm">Predio Ferial (Transmite Clic Rural)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/catalogos/catalogo-cachari.pdf" 
                  download="Catalogo_LaCassina_Remate_Cachari.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C9AE71] hover:bg-[#E8D399] text-[#1A1528] font-bold uppercase tracking-widest py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                >
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  Descargar Catálogo
                </a>
                <a 
                  href="https://www.lacassina.clicrural.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-white/30 hover:border-white text-white font-bold uppercase tracking-widest py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <PlayCircle className="w-5 h-5" />
                  Ver Streaming
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative min-h-[400px]">
              <img 
                src={animales} 
                alt="Remate Cacharí" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1528]/80 lg:from-[#1A1528] via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONDICIONES COMERCIALES */}
      <section className="py-12 border-y border-white/5 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {condicionesComerciales.map((cond, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-[#1A1528] border border-[#C9AE71]/30 rounded-2xl flex items-center justify-center text-[#C9AE71] mb-6 group-hover:scale-110 group-hover:bg-[#C9AE71] group-hover:text-[#1A1528] transition-all duration-300 shadow-lg">
                  {cond.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{cond.titulo}</h4>
                <p className="text-gray-400 text-sm font-light">{cond.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TOROS PADRES DEL CATÁLOGO (CON HOVER DE INFO GENÉTICA) */}
      <section className="py-24 px-4 bg-[#1A1528]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-copperplate text-white uppercase">Adelanto del Catálogo</h2>
            <div className="w-24 h-1.5 bg-[#C9AE71] mx-auto mt-6 rounded-full"></div>
            
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
              Conocé los Toros Padres de Pedigree de los reproductores que encabezan el remate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {torosDestacados.map((toro, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-[450px]"
              >
                <img src={toro.img} alt={toro.nombre} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1528] via-[#1A1528]/40 to-transparent"></div>

                {/* Ícono indicador (palpita levemente para invitar a pasar el mouse) */}
                <div className="absolute top-4 right-4 bg-[#1A1528]/80 backdrop-blur-sm p-2 rounded-full z-20 group-hover:opacity-0 transition-opacity duration-300 shadow-lg border border-[#C9AE71]/30">
                  <Info className="w-5 h-5 text-[#C9AE71]" />
                </div>
                
                {/* PANEL OVERLAY CON INFO GENÉTICA AL HACER HOVER */}
                <div className="absolute inset-0 bg-[#1D1934]/95 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex flex-col justify-center p-6 text-center translate-y-4 group-hover:translate-y-0 z-30">
                  <h4 className="text-[#C9AE71] font-bold text-sm uppercase tracking-widest mb-4 border-b border-[#C9AE71]/30 pb-2 flex items-center justify-center gap-2">
                    <Dna className="w-4 h-4" /> Genética
                  </h4>
                  
                  {/* Pedigree */}
                  <div className="mb-4">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">Pedigree</span>
                    <ul className="text-xs space-y-1 text-slate-200">
                      <li><strong className="text-white">Padre:</strong> {toro.hoverInfo.pedigree.padre}</li>
                      <li><strong className="text-white">Madre:</strong> {toro.hoverInfo.pedigree.madre}</li>
                    </ul>
                  </div>

                  {/* DEPs */}
                  {toro.hoverInfo.deps && (
                    <div className="mt-2">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-2">DEPs Destacados</span>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px]">
                        {toro.hoverInfo.deps.map((dep, i) => (
                          <div key={i} className="flex justify-between border-b border-white/10 pb-0.5">
                            <span className="text-slate-300">{dep.caracteristica}:</span>
                            <strong className="text-[#C9AE71]">{dep.valor}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Descripción breve (visible si sobra espacio) */}
                  <p className="text-xs text-slate-400 font-light mt-4 italic line-clamp-3">
                    {toro.desc}
                  </p>
                </div>

                {/* Banner inferior fijo con Nombre y RP */}
                <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 group-hover:translate-y-full z-20">
                  <span className="text-[#C9AE71] text-xs font-bold tracking-widest uppercase mb-2 block">{toro.raza}</span>
                  <h3 className="text-2xl font-bold text-white leading-tight mb-2">{toro.nombre}</h3>
                  <span className="inline-block border border-white/20 text-white/80 font-bold uppercase tracking-widest text-[10px] py-1 px-3 rounded-full">
                    RP: {toro.rp}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GIRA DE REMATES */}
      <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C9AE71]/10 skew-x-12 translate-x-1/2"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-copperplate text-[#1A1528] uppercase">Gira de Remates</h2>
            <div className="w-24 h-1.5 bg-[#C9AE71] mt-6 rounded-full"></div>
            <p className="mt-4 text-slate-500 font-medium">Seleccioná tu zona para descargar el catálogo interactivo.</p>
          </div>

          <div className="flex flex-col gap-4">
            {giraRemates.map((gira, idx) => (
              <motion.a 
                key={idx}
                href={gira.pdf}
                download={`Catalogo_LaCassina_${gira.ciudad.replace(/\s+/g, '')}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#C9AE71] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#1A1528] text-[#C9AE71] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#C9AE71] group-hover:text-[#1A1528] transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#1A1528]">{gira.ciudad}</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 text-[#C9AE71] font-bold text-sm">
                        <Calendar className="w-4 h-4" /> {gira.fecha}
                      </span>
                      <span className="text-slate-300 text-sm">|</span>
                      <p className="text-slate-500 font-medium text-sm">{gira.tipo}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 md:text-right flex items-center md:justify-end gap-6">
                  <div className="hidden sm:block">
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Consigna</p>
                    <p className="text-slate-700 font-semibold">{gira.consignatario}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-[#C9AE71] group-hover:border-[#C9AE71] transition-all duration-300">
                    <Download className="text-slate-400 group-hover:text-[#1A1528] w-5 h-5 transition-colors" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}