// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeSection = useActiveSection(['inicio', 'la-cabana', 'remates', 'genetica', 'contacto']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > 50 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Enlaces de La Cassina
  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'La Cabaña', href: '#la-cabana', id: 'la-cabana' },
    { name: 'Remates', href: '#remates', id: 'remates' },
    { name: 'Genética', href: '#genetica', id: 'genetica' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 font-sans ${isScrolled ? 'bg-[#0f172a]/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO LA CASSINA CLÁSICO */}
        <a href="#inicio" onClick={scrollToTop} className="flex flex-col items-start group relative z-50">
          <span className={`text-[10px] md:text-xs font-semibold tracking-widest uppercase transition-colors duration-500 ${isScrolled ? 'text-gray-400' : 'text-white/80'}`}>Estancias y Cabaña</span>
          <span className={`text-2xl md:text-3xl font-bold tracking-tight uppercase leading-none my-0.5 transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-white'}`}>La Cassina</span>
          <span className={`text-[10px] md:text-sm italic font-serif transition-colors duration-500 ${isScrolled ? 'text-amber-500' : 'text-amber-400'}`}>Calidad de raza superior</span>
        </a>

        {/* LINKS DESKTOP */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`relative text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 group py-2 ${activeSection === link.id ? 'text-amber-500' : 'text-white/80 hover:text-white'}`}>
              {link.name}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-amber-500 transition-all duration-300 ease-out ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </a>
          ))}
          <a href="#remates" className="ml-2 relative overflow-hidden bg-white/5 border border-amber-500/50 hover:border-amber-500 text-amber-500 hover:text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(245,158,11,0)] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] active:scale-95 group">
            <span className="relative z-10">Catálogo 2026</span>
            <div className="absolute inset-0 bg-amber-500 w-0 group-hover:w-full transition-all duration-300 ease-out z-0" />
          </a>
        </div>

        {/* BOTÓN MENÚ MOBILE */}
        <button className="lg:hidden text-white p-2 relative z-50 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className="relative w-6 h-5">
            <span className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-2 w-full h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100'}`} />
            <span className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
          </div>
        </button>
      </div>

      {/* MENÚ MOBILE DESPLEGABLE */}
      <div className={`absolute top-0 left-0 w-full h-screen bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/5 transition-all duration-500 overflow-hidden lg:hidden flex flex-col justify-center items-center ${isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`text-2xl font-black uppercase tracking-widest transition-all duration-300 ${activeSection === link.id ? 'text-amber-500 scale-110' : 'text-white/60 hover:text-white hover:scale-105'}`}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};