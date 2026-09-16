// src/components/sections/Cabana.tsx
import { motion } from 'framer-motion';
import { MapPin, Tractor, ShieldCheck, Award } from 'lucide-react';

export default function Cabana() {
  return (
    <section id="la-cabana" className="py-24 bg-slate-50 relative overflow-hidden font-archivo">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Encabezado de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-brand-gold-dark uppercase mb-2">
            Nuestra Historia
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-navy uppercase tracking-tighter">
            La Cabaña
          </h3>
          <div className="w-16 h-1 bg-brand-gold mx-auto mt-6 shadow-sm"></div>
        </motion.div>

        {/* Dos columnas de información */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Textos Históricos */}
          <div className="text-slate-600 font-light leading-relaxed text-lg">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              Corrían los últimos años de la década del 90 y nacía nuestra Cabaña con un plantel de vacas adquiridas en el remate liquidación final de la Cabaña Gure Echea[cite: 6].
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              Mucha agua ha corrido debajo del puente desde entonces, y de la mano de nuestro grupo de asesores hemos mejorado y adaptado nuestros rodeos. En 1999 se incorporó la raza Hereford y Polled Hereford, comenzando una evolución genética ininterrumpida[cite: 6].
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <a href="#contacto" className="inline-flex items-center gap-2 border-b-2 border-brand-gold-dark text-brand-navy font-bold uppercase tracking-wider pb-1 hover:text-brand-gold-dark transition-colors">
                Contactanos para saber más
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </motion.div>
          </div>

          {/* Columna Derecha: Tarjetas de Capacidad Productiva */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Tarjeta 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 border-t-4 border-brand-navy shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <MapPin className="text-brand-gold-dark w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl text-brand-navy mb-2 font-black tracking-tight">10.000</div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Hectáreas</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Superficie en explotación distribuida en cinco establecimientos de excelencia agropecuaria[cite: 6].
              </p>
            </motion.div>

            {/* Tarjeta 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 border-t-4 border-brand-navy shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <Tractor className="text-brand-gold-dark w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl text-brand-navy mb-2 font-black tracking-tight">4.500</div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Has. Agricultura</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Destinadas al cultivo de trigo, cebada, avena, maíz, soja y girasol[cite: 6].
              </p>
            </motion.div>

            {/* Tarjeta 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 border-t-4 border-brand-navy shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <ShieldCheck className="text-brand-gold-dark w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl text-brand-navy mb-2 font-black tracking-tight">7.500</div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Animales</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Rodeo íntegramente orientado a la ganadería de cría e invernada[cite: 6].
              </p>
            </motion.div>

            {/* Tarjeta 4 - Tarjeta Invertida Premium */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-brand-navy p-8 text-white shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-[#110e20] z-0"></div>
              <div className="relative z-10">
                <Award className="text-brand-gold w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl mb-2 font-black tracking-tight text-brand-gold">4</div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-brand-gold-dark">Razas</h4>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  Angus, Hereford, Brangus y Braford. Planteles Puros de Pedigree, Controlados y Registrados[cite: 6].
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}