// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/images/logotiposinfondo.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSideMenuOpen]);

  // Transformamos los links para que acepten rutas exactas (href)
  const menuData = [
    {
      title: "I. Estancias y Cabaña",
      id: "estancias",
      links: [
        { name: "Historia", href: "/la-cabana" }, // < -- Ruta a la página independiente
        { name: "Establecimiento", href: "/establecimiento" }, 
        { name: "Equipo", href: "/equipo" },  // <-- Link corregido al equipo
      ]
    },
    {
      title: "II. Genética Productiva",
      id: "genetica",
      links: [
        { name: "Programa Genético", href: "/#programa-genetico" }, 
        { name: "Toros Padres campaña 2026", href: "/#toros-padres" }, 
        { name: "Indicadores", href: "/#indicadores" }
      ]
    },
    {
      title: "III. Remates y Expo",
      id: "remates",
      links: [
        { name: "Calendario", href: "/#calendario" }, 
        { name: "Catálogo de cada remate", href: "/#catalogo" }
      ]
    },
    {
      title: "IV. Pasión productiva",
      id: "pasion",
      links: [
        { name: "RRSS", href: "/#rrss" }, 
        { name: "Reels", href: "/#reels" }, 
        { name: "Prensa", href: "/#prensa" }
      ]
    }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-500 font-archivo ${
          isScrolled 
            ? 'bg-[#1D1934]/95 backdrop-blur-md py-3 md:py-4 shadow-2xl border-b border-white/5' 
            : 'bg-[#1D1934] md:bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO: Ahora apunta a "/" (Inicio) */}
          <a href="/" className="flex items-center justify-center group relative z-50">
            <img 
              src={logo} 
              alt="La Cassina" 
              className={`h-10 md:h-14 w-auto object-contain transition-all duration-500 ${
                isScrolled ? 'scale-95' : 'scale-100'
              } group-hover:opacity-80`} 
            />
          </a>

          {/* BOTÓN HAMBURGUESA */}
          <button 
            className="text-[#ECD798] p-2 relative z-50 focus:outline-none hover:scale-110 transition-transform"
            onClick={() => setIsSideMenuOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isSideMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSideMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSideMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-[#1D1934] shadow-[-20px_0_40px_rgba(0,0,0,0.5)] z-[60] overflow-y-auto pt-8 pb-10 px-6 border-l border-[#ECD798]/20"
          >
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setIsSideMenuOpen(false)}
                className="text-[#ECD798] hover:scale-110 transition-transform p-2"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {menuData.map((seccion) => (
                <div key={seccion.id} className="border-b border-white/10 pb-4">
                  <button 
                    onClick={() => toggleSubmenu(seccion.id)}
                    className="w-full flex justify-between items-center text-left text-white text-base md:text-lg font-bold uppercase tracking-wider py-2 hover:text-[#ECD798] transition-colors"
                  >
                    {seccion.title}
                    <ChevronDown className={`transition-transform duration-300 text-[#ECD798] ${activeMenu === seccion.id ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeMenu === seccion.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-3 pt-3 pl-4 border-l-2 border-[#ECD798]/30 ml-2">
                          {seccion.links.map((link, idx) => (
                            <a 
                              key={idx} 
                              href={link.href} /* <-- Ahora usa el href mapeado */
                              onClick={() => setIsSideMenuOpen(false)}
                              className="text-gray-300 hover:text-[#ECD798] text-sm font-medium transition-colors"
                            >
                              {idx + 1}. {link.name}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <a 
                href="/#contacto" 
                onClick={() => setIsSideMenuOpen(false)}
                className="text-[#1D1934] bg-[#ECD798] text-center text-sm font-bold uppercase tracking-widest py-4 mt-8 rounded-lg hover:bg-white transition-colors block"
              >
                V. Contacto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}