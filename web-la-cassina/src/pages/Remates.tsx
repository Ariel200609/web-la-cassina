import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Download, 
  BadgePercent, 
  Truck, 
  CreditCard, 
  ChevronRight, 
  PlayCircle,
  FileText
} from 'lucide-react';

//layout
import Footer from '../components/layout/Footer';


//img
import HeroRemate from '../assets/images/HeroDeRemates.png';
import Colorado from '../assets/images/colorado.png';
import hereford from '../assets/images/TORO-HEREFORD.png';
import animales from '../assets/images/programaGenetico.png'


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

  // Datos extraídos del catálogo
  const condicionesComerciales = [
    { icon: <BadgePercent/>, titulo: "9% Descuento", desc: "Por pago en efectivo" },
    { icon: <CreditCard/>, titulo: "90 Días Libres", desc: "O 5 cuotas sin interés (Índice MAG)" },
    { icon: <Truck/>, titulo: "Flete Gratis", desc: "Para toros hasta 500 km" },
    { icon: <FileText/>, titulo: "Financiación", desc: "Tarjetas Macro Agro, Banco Provincia, Galicia" }
  ];

  const torosDestacados = [
    { nombre: "Cassina Neo Arman", rp: "2420C", raza: "Angus Negro", desc: "Hijo de Neo. Destacado por su precocidad, facilidad de engorde y gran área de ojo de bife.", img: HeroRemate },
    { nombre: "Cassina Cacique Rafael", rp: "2320N", raza: "Angus Colorado", desc: "Toro equilibrado, bajo peso al nacer. En el 1% superior de la raza en grasa intramuscular.", img: Colorado },
    { nombre: "Cassina Fundamentalista Inca", rp: "X808", raza: "Polled Hereford", desc: "Apto para vaquillonas. Excepcional pureza racial y capacidad de engrasamiento.", img: hereford }
  ];

  const giraRemates = [
    { ciudad: "Cañuelas", tipo: "Remate de Elite (MAG)", consignatario: "Pedro Noel Irey" },
    { ciudad: "Trenque Lauquen", tipo: "Remate Anual", consignatario: "Colombo y Colombo" },
    { ciudad: "Daireaux", tipo: "Remate Anual", consignatario: "Monasterio Tattersall" },
    { ciudad: "9 de Julio", tipo: "Remate Especial", consignatario: "Consignataria Melicura" },
    { ciudad: "Maipú", tipo: "Remate Anual", consignatario: "Colombo y Colombo" }
  ];

  return (
    <main className="w-full bg-[#1A1528] font-archivo selection:bg-[#C9AE71] selection:text-[#1A1528] overflow-hidden">
      
      {/* 1. HERO SPECTACULAR */}
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

      {/* 2. EL REMATE PRINCIPAL (ESTILO GLASSMORPHISM) */}
      <section className="relative z-20 -mt-32 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
          >
            {/* Info del Remate */}
            <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <span className="text-[#C9AE71] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Evento Destacado</span>
              <h2 className="text-4xl md:text-5xl font-copperplate text-white uppercase mb-6 leading-tight">
                11º Remate <br/> de Invierno
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-[#C9AE71]/20 flex items-center justify-center shrink-0">
                    <Calendar className="text-[#C9AE71] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Jueves 16 de Julio | 14:00 hs</p>
                    <p className="text-sm">Previo Almuerzo - Cabañas Invitadas</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-[#C9AE71]/20 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#C9AE71] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Bonifacio, PBA</p>
                    <p className="text-sm">La Cabaña, Ruta 65, km 403 (Transmite Clic Rural)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#C9AE71] hover:bg-[#E8D399] text-[#1A1528] font-bold uppercase tracking-widest py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 group">
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  Descargar Catálogo
                </button>
                <button className="bg-transparent border border-white/30 hover:border-white text-white font-bold uppercase tracking-widest py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Ver Streaming
                </button>
              </div>
            </div>

            {/* Imagen del Remate */}
            <div className="w-full lg:w-1/2 relative min-h-[400px]">
              <img 
                src={animales} 
                alt="Remate Bonifacio" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay gradiente para que no corte abrupto */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1528]/80 lg:from-[#1A1528] via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 right-6 bg-[#1A1528]/80 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <p className="text-white font-copperplate text-xl">Más de 340</p>
                <p className="text-[#C9AE71] text-sm uppercase tracking-widest">Animales a la venta</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CONDICIONES COMERCIALES */}
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

      {/* 4. ADELANTO DEL CATÁLOGO (TARJETAS INTERACTIVAS) */}
      <section className="py-24 px-4 bg-[#1A1528]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-copperplate text-white uppercase">Adelanto del Catálogo</h2>
            <div className="w-24 h-1.5 bg-[#C9AE71] mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
              Conocé algunos de los Toros Padres de Pedigree que encabezan nuestras ventas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                
                {/* Degradado oscuro base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1528] via-[#1A1528]/40 to-transparent"></div>
                
                {/* Overlay que se revela al hover */}
                <div className="absolute inset-0 bg-[#C9AE71]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center">
                  <h4 className="text-[#1A1528] font-copperplate text-2xl mb-4">{toro.nombre}</h4>
                  <p className="text-[#1A1528]/80 font-medium mb-6">{toro.desc}</p>
                  <span className="inline-block border-2 border-[#1A1528] text-[#1A1528] font-bold uppercase tracking-widest text-xs py-2 px-6 rounded-full">
                    RP: {toro.rp}
                  </span>
                </div>

                {/* Info base visible */}
                <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 group-hover:translate-y-full">
                  <span className="text-[#C9AE71] text-xs font-bold tracking-widest uppercase mb-2 block">{toro.raza}</span>
                  <h3 className="text-2xl font-bold text-white leading-tight">{toro.nombre}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GIRA DE REMATES (LISTA MODERNA) */}
      <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
        {/* Adorno de fondo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C9AE71]/10 skew-x-12 translate-x-1/2"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-copperplate text-[#1A1528] uppercase">Gira de Remates</h2>
            <div className="w-24 h-1.5 bg-[#C9AE71] mt-6 rounded-full"></div>
          </div>

          <div className="flex flex-col gap-4">
            {giraRemates.map((gira, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#C9AE71] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#1A1528] text-[#C9AE71] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#1A1528]">{gira.ciudad}</h4>
                    <p className="text-slate-500 font-medium">{gira.tipo}</p>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 md:text-right flex items-center md:justify-end gap-4">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Consigna</p>
                    <p className="text-slate-700 font-semibold">{gira.consignatario}</p>
                  </div>
                  <ChevronRight className="text-slate-300 group-hover:text-[#C9AE71] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}