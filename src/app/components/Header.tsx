"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  
  const isHomePage = pathname === "/";
  const isAtTop = scrollY < 100;
  const shouldUseTransparent = isHomePage && isAtTop;
  const shouldUseWhite = !shouldUseTransparent && isVisible;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrollY(currentScrollY);
      
      // Header visibility logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        shouldUseWhite ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-8">
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 py-4">
            <Image
              src={shouldUseTransparent 
                ? "/brand-assets/Logo/Imagotipo/CasaElaria_Branding_imagotipo-w.png"
                : "/brand-assets/Logo/Imagotipo/CasaElaria_Branding_imagotipo-b.png"
              }
              alt="Casa Elaria"
              width={700}
              height={210}
              priority
              className="h-14 sm:h-18 lg:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <button className={`transition-colors ${
              shouldUseTransparent ? 'text-white/80 hover:text-white' : 'text-olive-dark/80 hover:text-olive-dark'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className={`transition-colors ${
              shouldUseTransparent ? 'text-white/80 hover:text-white' : 'text-olive-dark/80 hover:text-olive-dark'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className={`transition-colors ${
              shouldUseTransparent ? 'text-white/80 hover:text-white' : 'text-olive-dark/80 hover:text-olive-dark'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden transition-colors ml-auto ${
              shouldUseTransparent ? 'text-white/80 hover:text-white' : 'text-olive-dark/80 hover:text-olive-dark'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className={`hidden md:flex justify-center space-x-12 lg:space-x-16 py-4 ${
          shouldUseTransparent ? 'border-t border-white/10' : 'border-t border-olive-primary/10'
        }`}>
          <Link href="/" className={`font-medium tracking-wider text-base transition-colors ${
            shouldUseTransparent ? 'text-white/90 hover:text-white' : 'text-olive-dark/90 hover:text-olive-dark'
          }`}>
            Inicio
          </Link>
          <Link href="/productos" className={`font-medium tracking-wider text-base transition-colors ${
            shouldUseTransparent ? 'text-white/90 hover:text-white' : 'text-olive-dark/90 hover:text-olive-dark'
          }`}>
            Productos
          </Link>
          <Link href="/quienes-somos" className={`font-medium tracking-wider text-base transition-colors ${
            shouldUseTransparent ? 'text-white/90 hover:text-white' : 'text-olive-dark/90 hover:text-olive-dark'
          }`}>
            Quiénes Somos
          </Link>
          <Link href="/contacto" className={`font-medium tracking-wider text-base transition-colors ${
            shouldUseTransparent ? 'text-white/90 hover:text-white' : 'text-olive-dark/90 hover:text-olive-dark'
          }`}>
            Contacto
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-sm ${
            shouldUseTransparent ? 'bg-black/90' : 'bg-white/95 shadow-lg'
          }`}>
            <div className="flex flex-col space-y-4 p-6">
              <Link 
                href="/" 
                className={`font-medium tracking-wider text-base transition-colors ${
                  shouldUseTransparent ? 'text-white/90 hover:text-white' : 'text-olive-dark/90 hover:text-olive-dark'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/productos" 
                className={`font-medium tracking-wider text-base transition-colors ${
                  shouldUseTransparent ? 'text-white/90 hover:text-white' : 'text-olive-dark/90 hover:text-olive-dark'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <Link 
                href="/quienes-somos" 
                className={`font-medium tracking-wider text-base transition-colors ${
                  shouldUseTransparent ? 'text-white/90 hover:text-white' : 'text-olive-dark/90 hover:text-olive-dark'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Quiénes Somos
              </Link>
              <Link 
                href="/contacto" 
                className={`font-medium tracking-wider text-base transition-colors ${
                  shouldUseTransparent ? 'text-white/90 hover:text-white' : 'text-olive-dark/90 hover:text-olive-dark'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className={`flex space-x-6 pt-4 ${
                shouldUseTransparent ? 'border-t border-white/10' : 'border-t border-olive-primary/10'
              }`}>
                <button className={`transition-colors ${
                  shouldUseTransparent ? 'text-white/80 hover:text-white' : 'text-olive-dark/80 hover:text-olive-dark'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className={`transition-colors ${
                  shouldUseTransparent ? 'text-white/80 hover:text-white' : 'text-olive-dark/80 hover:text-olive-dark'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                <button className={`transition-colors ${
                  shouldUseTransparent ? 'text-white/80 hover:text-white' : 'text-olive-dark/80 hover:text-olive-dark'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}