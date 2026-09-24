// src/pages/Contacto.tsx
import { motion } from 'framer-motion';
import { MapPin, Phone, Printer, Send, Navigation, Plane } from 'lucide-react';
import Footer from '../components/layout/Footer';

// Iconos SVG personalizados
const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export default function Contacto() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 font-archivo flex flex-col">
      
      <main className="flex-1 max-w-7xl mx-auto px-4 lg:px-8 w-full pb-20">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#C9AE71] uppercase mb-2">
            Estamos a su disposición
          </h2>
          <h1 className="text-4xl md:text-5xl font-copperplate font-bold text-[#1A1528] mb-4 uppercase tracking-widest">
            Contacto
          </h1>
          <div className="w-24 h-1 bg-[#C9AE71] mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light">
            Déjenos su mensaje para consultas comerciales, ventas particulares o visitas a nuestra cabaña.
          </p>
        </motion.div>

        {/* NUEVA GRILLA: 12 Columnas en PC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* COLUMNA IZQUIERDA: Formulario (Ocupa 4/12 y es Pegajoso/Sticky) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 h-fit lg:sticky lg:top-32"
          >
            <h3 className="text-2xl font-copperplate font-bold text-[#1A1528] mb-8 uppercase text-center lg:text-left">
              Envíenos su consulta
            </h3>
            <form className="space-y-6">
              {/* En PC se apilan, en Tablet se ponen lado a lado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">Nombre y Apellido *</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:border-[#C9AE71] focus:ring-1 focus:ring-[#C9AE71] transition-all" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">Teléfono *</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:border-[#C9AE71] focus:ring-1 focus:ring-[#C9AE71] transition-all" required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:border-[#C9AE71] focus:ring-1 focus:ring-[#C9AE71] transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Mensaje *</label>
                <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:border-[#C9AE71] focus:ring-1 focus:ring-[#C9AE71] transition-all resize-none" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#1A1528] hover:bg-[#2a2342] text-white font-bold uppercase tracking-widest py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group mt-2">
                <span>Enviar Mensaje</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* COLUMNA DERECHA: Información y Mapas (Ocupa 8/12) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8 flex flex-col gap-8"
          >
            
            {/* Lado a Lado en PC */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* TARJETA 1: Estancia y Cabaña */}
              <div className="bg-[#1A1528] text-white p-8 rounded-2xl shadow-lg border-l-4 border-[#C9AE71] flex flex-col h-full">
                <div className="mb-6 flex-1">
                  <h4 className="text-xl font-copperplate font-bold text-[#C9AE71] tracking-widest uppercase mb-1">
                    Estancia y Cabaña
                  </h4>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 block mb-6">Ventas Particulares</span>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#C9AE71] shrink-0 mt-1" />
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Ruta 65 entre Daireaux y Guaminí (B64639XAD)<br />
                        Bonifacio, Prov. de Buenos Aires.
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-[#C9AE71] shrink-0" />
                      <p className="text-sm text-gray-300">Cel.: (02923) 564889</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Navigation className="w-5 h-5 text-[#C9AE71] shrink-0" />
                      <p className="text-[13px] text-gray-300 font-medium">GPS: 36° 49' 52.4" S / 62° 17' 25.1" W</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <Plane className="w-5 h-5 text-[#C9AE71] shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-300">Pista: 02-200 de 900m</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full h-48 bg-slate-800 rounded-lg overflow-hidden relative shadow-inner mt-4 shrink-0">
                  <iframe 
                    src="https://maps.google.com/maps?q=-36.831222,-62.290306&t=k&z=12&ie=UTF8&iwloc=&output=embed" 
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Estancia La Cassina"
                  ></iframe>
                </div>
              </div>

              {/* TARJETA 2: Oficina CABA */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 flex flex-col h-full">
                <div className="mb-6 flex-1">
                  <h4 className="text-xl font-copperplate font-bold text-[#1A1528] tracking-widest uppercase mb-1">
                    Oficina CABA
                  </h4>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 block mb-6">Administración</span>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#1A1528] shrink-0 mt-1" />
                      <p className="text-sm text-slate-600 leading-relaxed">
                        25 de mayo 596, Piso "5" (CP 1002ABL)<br />
                        Ciudad Autónoma de Buenos Aires
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-[#1A1528] shrink-0" />
                      <p className="text-sm text-slate-600">Tel.: (011) 5555 6726</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Printer className="w-5 h-5 text-[#1A1528] shrink-0" />
                      <p className="text-sm text-slate-600">Fax: (011) 5555 6788</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full h-48 bg-slate-100 rounded-lg overflow-hidden relative shadow-inner mt-4 shrink-0">
                  <iframe 
                    src="https://maps.google.com/maps?q=25+de+mayo+596,+CABA&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Oficina CABA"
                  ></iframe>
                </div>
              </div>

            </div>

            {/* ACCESO A REDES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
               <a href="https://instagram.com/lacassina" target="_blank" rel="noreferrer" className="flex items-center justify-center p-5 bg-gradient-to-r from-[#1A1528] to-[#2a2342] rounded-2xl shadow-lg group cursor-pointer hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 text-white">
                  <Instagram className="w-7 h-7 text-[#C9AE71] group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-[#C9AE71]">Síguenos en</span>
                    <span className="text-lg font-light leading-tight">Instagram</span>
                  </div>
                </div>
              </a>

              <a href="https://www.youtube.com/@estancialacassina" target="_blank" rel="noreferrer" className="flex items-center justify-center p-5 bg-gradient-to-r from-red-700 to-red-900 rounded-2xl shadow-lg group cursor-pointer hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 text-white">
                  <Youtube className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-white">Suscríbete en</span>
                    <span className="text-lg font-light leading-tight">YouTube</span>
                  </div>
                </div>
              </a>
            </div>

          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}