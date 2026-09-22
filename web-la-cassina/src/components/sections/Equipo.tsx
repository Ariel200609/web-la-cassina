// src/components/sections/Equipo.tsx
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Tractor, Truck, Home } from 'lucide-react';
import Footer from '../layout/Footer';
import presidente from '../../assets/images/cassini.png'

export default function Equipo() {
  const directorio = [
    { nombre: "Dr. Roque Luis Cassini", cargo: "Presidente", iniciales: "RC" },
    { nombre: "Patricia Cassini", cargo: "Directora de Cabaña", iniciales: "PC" },
    { nombre: "Dr. Ernesto Cassini", cargo: "Director de Agricultura", iniciales: "EC" },
    { nombre: "Roque Diego Cassini", cargo: "Director de Sistemas", iniciales: "RDC" },
    { nombre: "Dra. Carolina Cassini", cargo: "Asesora Legal", iniciales: "CC" },
  ];

  const asesores = [
    { nombre: "Dr. Baltazar Beltran", cargo: "Genetista" },
    { nombre: "Dr. Pablo Clausen", cargo: "Veterinario" },
    { nombre: "Ing. Cesar Chiapara", cargo: "Asesor Agronómico" },
    { nombre: "Dr. Guillermo Spinelli", cargo: "Veterinario" },
    { nombre: "Ing. Ignacio Ledesma Arocena", cargo: "Asesor" },
    { nombre: "Dr. Gustavo Peri", cargo: "Estudio Contable" },
  ];

  return (
    // flex-1 asegura que el componente ocupe todo el espacio y empuje el footer abajo
    <main className="bg-slate-50 text-slate-900 font-archivo min-h-screen flex flex-col">
      
      {/* HERO BANNER EQUIPO */}
      <div className="relative w-full h-[40vh] min-h-[400px] flex items-center justify-center mt-[72px] md:mt-20">
        <img 
          src={presidente} 
          alt="Equipo La Cassina" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-[#1D1934]/70"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-[#ECD798] uppercase mb-4 shadow-sm">
            El factor humano
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase font-copperplate drop-shadow-lg">
            Nuestro Equipo
          </h1>
          <div className="w-20 h-1 bg-[#ECD798] mx-auto mt-6"></div>
        </motion.div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 w-full relative z-20 -mt-16 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* SECCIÓN DIRECTORIO */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border-t-4 border-[#ECD798]">
            <h3 className="text-3xl font-black text-[#1D1934] uppercase font-copperplate text-center mb-10">Directorio</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {directorio.map((persona, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-[#ECD798]/50 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#1D1934] flex items-center justify-center text-[#ECD798] font-black text-lg group-hover:scale-110 transition-transform shadow-md">
                    {persona.iniciales}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1D1934] leading-tight">{persona.nombre}</h4>
                    <p className="text-sm text-slate-500">{persona.cargo}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SECCIÓN ASESORES & STAFF */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Equipo de Asesores */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1D1934] p-8 md:p-10 rounded-2xl shadow-lg text-white"
            >
              <div className="flex items-center gap-4 mb-8">
                <Users className="text-[#ECD798] w-8 h-8" />
                <h3 className="text-2xl font-black text-[#ECD798] uppercase font-copperplate">Equipo de Asesores</h3>
              </div>
              <ul className="space-y-4">
                {asesores.map((asesor, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0">
                    <span className="font-semibold text-white">{asesor.nombre}</span>
                    <span className="text-sm text-gray-400 text-right">{asesor.cargo}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Staff Administrativo */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100"
            >
               <div className="flex items-center gap-4 mb-8">
                <Home className="text-[#1D1934] w-8 h-8" />
                <h3 className="text-2xl font-black text-[#1D1934] uppercase font-copperplate">Staff & Administración</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                <li className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="font-bold">Felipe del Rio</span> <span className="text-sm text-slate-500">Encargado general</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="font-bold">Mariano Medrano</span> <span className="text-sm text-slate-500">Encargado Administración</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="font-bold">Ivonne Ledesma</span> <span className="text-sm text-slate-500">Tesorera</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="font-bold">Gisela Achaval</span> <span className="text-sm text-slate-500">Adm. Campo</span>
                </li>
                <li className="flex justify-between items-center pb-3">
                  <span className="font-bold">A. Duarte / C. Sánchez</span> <span className="text-sm text-slate-500">Asistentes</span>
                </li>
              </ul>
            </motion.div>

          </div>

          {/* ÁREAS OPERATIVAS (Agrupadas en 3 columnas) */}
          <div className="text-center mb-10">
             <h3 className="text-3xl font-black text-[#1D1934] uppercase font-copperplate inline-block border-b-4 border-[#ECD798] pb-2">Áreas Operativas</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Cabaña y Ganadería */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <ShieldCheck className="text-[#ECD798] w-8 h-8 mb-4" />
              <h4 className="font-bold text-lg text-[#1D1934] mb-4 uppercase">Cabaña & Ganadería</h4>
              <div className="text-sm text-slate-600 space-y-3">
                <p><strong>Ernesto Ganduglia</strong> - Encargado Ganadería</p>
                <p><strong>Manuel Dorazio</strong> - Asesor Cabaña</p>
                <p><strong>Jorge Sarda / Adrián Meza</strong> - Cabañeros PC</p>
                <p><strong>Roberto Rodriguez</strong> - Encargado Cabañero PP</p>
                <p><strong>Edgar V. Isnardo</strong> - Cabañero</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="font-semibold text-slate-800 mb-2">Personal de a caballo:</p>
                  <p className="text-xs text-slate-500 leading-relaxed">Miguel A. Maciel, Daniel Capurro, Jose E. Moyano, Daniel H. Sosa, Ramon A. González, Lucas R. Piedrabuena, Matias N. Sandoval.</p>
                </div>
              </div>
            </motion.div>

            {/* Agricultura */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <Tractor className="text-[#ECD798] w-8 h-8 mb-4" />
              <h4 className="font-bold text-lg text-[#1D1934] mb-4 uppercase">Agricultura & Herramientas</h4>
              <div className="text-sm text-slate-600 space-y-3">
                <p><strong>Juan Emanuel Arias</strong><br/>Encargado de Agricultura</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="font-semibold text-slate-800 mb-2">Herramientas:</p>
                  <p>Juan Gómez</p>
                  <p>Claudio Jose Ramirez</p>
                  <p>Alberto Antonio Rolón</p>
                </div>
              </div>
            </motion.div>

            {/* Logística y Mantenimiento */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <Truck className="text-[#ECD798] w-8 h-8 mb-4" />
              <h4 className="font-bold text-lg text-[#1D1934] mb-4 uppercase">Logística & Parque</h4>
              <div className="text-sm text-slate-600 space-y-3">
                <p><strong>Racionadores:</strong><br/>Jose E. Ruiz, Lucas D. Diaz</p>
                <p><strong>Camioneros:</strong><br/>Daniel González, Omar Ruiz</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="font-semibold text-slate-800 mb-1">Maestranza y Parque:</p>
                  <p className="text-xs text-slate-500">Dario R. Rolon Espíndola, Lilian P. Del Valle, Marciano Rolón Espíndola</p>
                </div>
                <div className="mt-2 pt-2">
                  <p><strong>Cocinero:</strong> Horacio De la Fuente</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}