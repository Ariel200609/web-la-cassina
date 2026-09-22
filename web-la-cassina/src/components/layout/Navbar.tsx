// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/images/logotiposinfondo.png';


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const menuData = [
    {
      title: "I. Estancias y Cabaña",
      id: "estancias",
      links: ["Historia", "Establecimiento", "Socios estratégicos", "Equipo"]
    },
    {
      title: "II. Genética Productiva",
      id: "genetica",
      links: ["Programa Genético", "Toros Padres campaña 2026", "Indicadores"]
    },
    {
      title: "III. Remates y Expo",
      id: "remates",
      links: ["Calendario", "Catálogo de cada remate"]
    },
    {
      title: "IV. Pasión productiva",
      id: "pasion",
      links: ["RRSS", "Reels", "Prensa"]
    }
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-archivo ${
          isScrolled 
            ? 'bg-[#1D1934]/95 backdrop-blur-md h-16 md:h-20 shadow-2xl border-b border-white/5' 
            : 'bg-[#1D1934] md:bg-transparent h-20 md:h-[82px]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
          
          {/* LOGO: Ahora centrado verticalmente gracias al h-full del contenedor */}
          <a 
        href="#inicio" 
        onClick={scrollToTop} 
        className="flex items-center justify-center group relative z-50 h-full overflow-hidden"
      >
        <img 
          src={logo} 
          alt="La Cassina" 
          className={`w-auto object-contain transition-all duration-500 ${
            isScrolled 
              ? 'h-10 md:h-12' 
              : 'h-12 md:h-14'
          } group-hover:opacity-80`} 
        />
      </a>

          {/* BOTÓN HAMBURGUESA */}
          <button 
            className="text-[#ECD798] p-2 relative z-50 focus:outline-none hover:scale-110 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* OVERLAY OSCURO */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* MENÚ LATERAL (SLIDE DESDE LA DERECHA) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full md:w-[400px] bg-[#1D1934] shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-50 overflow-y-auto pt-24 pb-10 px-6 border-l border-[#ECD798]/20"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-[#ECD798] hover:scale-110 transition-transform"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col gap-4 mt-8">
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
                              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-gray-300 hover:text-[#ECD798] text-sm font-medium transition-colors"
                            >
                              {idx + 1}. {link}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <a 
                href="#contacto" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#1D1934] bg-[#ECD798] text-center text-sm font-bold uppercase tracking-widest py-4 mt-8 rounded-lg hover:bg-white transition-colors"
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