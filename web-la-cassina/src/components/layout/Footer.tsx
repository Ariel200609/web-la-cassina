// src/components/layout/Footer.tsx
import { MapPin, Phone, Mail } from 'lucide-react';

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#1D1934] text-white pt-16 pb-8 border-t-[4px] border-[#ECD798] font-archivo">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        
        {/* COLUMNA 1: Branding y Resumen */}
        <div className="flex flex-col items-start">
          <span className="text-[10px] tracking-widest uppercase text-[#ECD798] mb-1 font-semibold">
            Estancias y Cabaña
          </span>
          <span className="text-3xl font-copperplate tracking-tight uppercase leading-none mb-1">
            La Cassina
          </span>
          <span className="text-xs italic font-serif text-[#ECD798] mb-6">
            Calidad de raza superior
          </span>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Más de 20 años de mejoramiento incesante. Genética cien por cien productiva adaptada a cualquier zona del país.
          </p>
        </div>

        {/* COLUMNA 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-[#ECD798] font-copperplate uppercase tracking-widest text-sm mb-6">
            Secciones
          </h4>
          <ul className="space-y-3 text-sm text-gray-300 font-medium">
            <li><a href="#inicio" className="hover:text-[#ECD798] transition-colors">Inicio</a></li>
            <li><a href="#la-cabana" className="hover:text-[#ECD798] transition-colors">La Cabaña</a></li>
            <li><a href="#remates" className="hover:text-[#ECD798] transition-colors">Remates 2026</a></li>
            <li><a href="#genetica" className="hover:text-[#ECD798] transition-colors">Genética Productiva</a></li>
          </ul>
        </div>

        {/* COLUMNA 3: Contacto Real */}
        <div>
          <h4 className="text-[#ECD798] font-copperplate uppercase tracking-widest text-sm mb-6">
            Contacto
          </h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3 group">
              <MapPin className="w-5 h-5 text-[#ECD798] shrink-0 group-hover:scale-110 transition-transform" />
              <span>Ruta 65, Guaminí<br/>Buenos Aires, Argentina</span>
            </li>
            <li className="flex items-center gap-3 group">
              <Phone className="w-5 h-5 text-[#ECD798] shrink-0 group-hover:scale-110 transition-transform" />
              <span>(02923) 564889</span>
            </li>
            <li className="flex items-center gap-3 group">
              <Mail className="w-5 h-5 text-[#ECD798] shrink-0 group-hover:scale-110 transition-transform" />
              <span>info@lacassina.com</span>
            </li>
          </ul>
        </div>

        {/* COLUMNA 4: Redes Sociales */}
        <div>
          <h4 className="text-[#ECD798] font-copperplate uppercase tracking-widest text-sm mb-6">
            Pasión Productiva
          </h4>
          <p className="text-sm text-gray-400 font-light mb-6">
            Seguinos en nuestras redes para ver el día a día en el campo y novedades de remates.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#ECD798] hover:text-[#1D1934] transition-all hover:scale-110 shadow-sm">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#ECD798] hover:text-[#1D1934] transition-all hover:scale-110 shadow-sm">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#ECD798] hover:text-[#1D1934] transition-all hover:scale-110 shadow-sm">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      {/* ÁREA LEGAL: Copyright y Términos */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light tracking-wide">
        <p>© 2026 La Cassina. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#ECD798] transition-colors">Términos y Condiciones</a>
          <a href="#" className="hover:text-[#ECD798] transition-colors">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}