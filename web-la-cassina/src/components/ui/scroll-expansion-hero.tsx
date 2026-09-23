
// src/components/ui/scroll-expansion-hero.tsx

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
  type WheelEvent,
} from "react";
import { motion } from "framer-motion";

interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = "video",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] =
    useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  // ---------------------------------------------------------
  // RESET DEL COMPONENTE
  // ---------------------------------------------------------

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  // ---------------------------------------------------------
  // SCROLL PRINCIPAL
  // ---------------------------------------------------------

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      // Determinamos si el hero está visible
      const heroVisible =
        rect.top <= window.innerHeight && rect.bottom >= 0;

      if (!heroVisible) return;

      // -----------------------------------------------------
      // HERO YA EXPANDIDO
      // -----------------------------------------------------

      if (mediaFullyExpanded) {
        // Si estamos arriba de todo y hacemos scroll hacia arriba,
        // volvemos a contraer el hero.
        if (e.deltaY < 0 && window.scrollY <= 5) {
          e.preventDefault();

          setMediaFullyExpanded(false);
          setShowContent(false);
          setScrollProgress(0);

          window.scrollTo({
            top: 0,
            behavior: "auto",
          });
        }

        // IMPORTANTE:
        // Si está expandido, NO bloqueamos el scroll normal.
        return;
      }

      // -----------------------------------------------------
      // HERO TODAVÍA NO EXPANDIDO
      // -----------------------------------------------------

      // Solo interceptamos el scroll cuando estamos realmente
      // en la parte superior de la página.
      if (window.scrollY <= 5) {
        e.preventDefault();

        const scrollDelta = e.deltaY * 0.0009;

        setScrollProgress((currentProgress) => {
          const newProgress = Math.min(
            Math.max(currentProgress + scrollDelta, 0),
            1
          );

          if (newProgress >= 1) {
            setMediaFullyExpanded(true);
            setShowContent(true);
          } else if (newProgress < 0.75) {
            setShowContent(false);
          }

          return newProgress;
        });
      }
    };

    window.addEventListener(
      "wheel",
      handleWheel as unknown as EventListener,
      { passive: false }
    );

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel as unknown as EventListener
      );
    };
  }, [mediaFullyExpanded]);

  // ---------------------------------------------------------
  // TOUCH / MOBILE
  // ---------------------------------------------------------

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      // Si ya está expandido, dejamos que el navegador
      // controle normalmente el scroll.
      if (mediaFullyExpanded) {
        return;
      }

      // Solo controlamos la animación si estamos arriba.
      if (window.scrollY <= 5) {
        e.preventDefault();

        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;

        setScrollProgress((currentProgress) => {
          const newProgress = Math.min(
            Math.max(currentProgress + scrollDelta, 0),
            1
          );

          if (newProgress >= 1) {
            setMediaFullyExpanded(true);
            setShowContent(true);
          } else if (newProgress < 0.75) {
            setShowContent(false);
          }

          return newProgress;
        });

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    window.addEventListener(
      "touchstart",
      handleTouchStart as unknown as EventListener,
      { passive: false }
    );

    window.addEventListener(
      "touchmove",
      handleTouchMove as unknown as EventListener,
      { passive: false }
    );

    window.addEventListener(
      "touchend",
      handleTouchEnd as EventListener
    );

    return () => {
      window.removeEventListener(
        "touchstart",
        handleTouchStart as unknown as EventListener
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove as unknown as EventListener
      );

      window.removeEventListener(
        "touchend",
        handleTouchEnd as EventListener
      );
    };
  }, [mediaFullyExpanded, touchStartY]);

  // ---------------------------------------------------------
  // RESPONSIVE
  // ---------------------------------------------------------

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // ---------------------------------------------------------
  // DIMENSIONES DE LA ANIMACIÓN
  // ---------------------------------------------------------

  const mediaWidth =
    300 + scrollProgress * (isMobileState ? 650 : 1250);

  const mediaHeight =
    400 + scrollProgress * (isMobileState ? 200 : 400);

  const textTranslateX =
    scrollProgress * (isMobileState ? 180 : 150);

  // ---------------------------------------------------------
  // TÍTULO
  // ---------------------------------------------------------

  const firstWord = title ? title.split(" ")[0] : "";

  const restOfTitle = title
    ? title.split(" ").slice(1).join(" ")
    : "";

  // ---------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------

  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden bg-[#1A1528]"
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* -------------------------------------------------
              FONDO
          ------------------------------------------------- */}

          <motion.div
            className="absolute inset-0 z-0 h-full bg-[#1A1528]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImageSrc}
              alt="Background"
              className="w-screen h-screen object-cover object-center opacity-40 mix-blend-overlay"
            />

            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">

            {/* -------------------------------------------------
                HERO
            ------------------------------------------------- */}

            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* MEDIA QUE SE EXPANDE */}

              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl overflow-hidden"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "100vw",
                  maxHeight: "100vh",
                  boxShadow:
                    "0px 0px 50px rgba(0, 0, 0, 0.4)",
                }}
              >
                {mediaType === "video" ? (
                  <div className="relative w-full h-full pointer-events-none">

                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />

                    <motion.div
                      className="absolute inset-0 bg-black/30"
                      initial={{ opacity: 0.7 }}
                      animate={{
                        opacity:
                          0.5 - scrollProgress * 0.3,
                      }}
                      transition={{ duration: 0.2 }}
                    />

                  </div>
                ) : (
                  <div className="relative w-full h-full pointer-events-none">

                    <img
                      src={mediaSrc}
                      alt={title || "Media content"}
                      className="w-full h-full object-cover"
                    />

                    <motion.div
                      className="absolute inset-0 bg-black/50"
                      initial={{ opacity: 0.7 }}
                      animate={{
                        opacity:
                          0.7 - scrollProgress * 0.3,
                      }}
                      transition={{ duration: 0.2 }}
                    />

                  </div>
                )}

                {/* TEXTOS DEL HERO */}

                <div className="absolute inset-x-0 bottom-8 flex flex-col items-center text-center z-10 transition-none">

                  {date && (
                    <p
                      className="text-2xl font-copperplate tracking-widest text-[#E8D399] uppercase drop-shadow-md"
                      style={{
                        transform: `translateX(-${textTranslateX}vw)`,
                      }}
                    >
                      {date}
                    </p>
                  )}

                  {scrollToExpand && (
                    <p
                      className="text-white/80 font-light text-sm mt-4 uppercase animate-pulse"
                      style={{
                        transform: `translateX(${textTranslateX}vw)`,
                      }}
                    >
                      {scrollToExpand}
                    </p>
                  )}

                </div>
              </div>

              {/* -------------------------------------------------
                  TÍTULO
              ------------------------------------------------- */}

              <div
                className={`flex items-center justify-center text-center gap-2 md:gap-4 w-full relative z-10 transition-none flex-col ${
                  textBlend
                    ? "mix-blend-difference"
                    : "mix-blend-normal"
                }`}
              >

                <motion.h2
                  className="text-5xl md:text-7xl lg:text-[7rem] font-copperplate text-white drop-shadow-2xl uppercase tracking-widest"
                  style={{
                    transform: `translateX(-${textTranslateX}vw)`,
                  }}
                >
                  {firstWord}
                </motion.h2>

                <motion.h2
                  className="text-5xl md:text-7xl lg:text-[7rem] font-copperplate text-[#E8D399] drop-shadow-2xl uppercase tracking-widest"
                  style={{
                    transform: `translateX(${textTranslateX}vw)`,
                  }}
                >
                  {restOfTitle}
                </motion.h2>

              </div>
            </div>

            {/* -------------------------------------------------
                CONTENIDO
            ------------------------------------------------- */}

            <motion.section
              className="flex flex-col w-full bg-slate-50 relative z-20"
              initial={{ opacity: 0 }}
              animate={{
                opacity: showContent ? 1 : 0,
              }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
