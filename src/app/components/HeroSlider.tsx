"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/product-assets/all-products/productos y packaging.png",
    title: "Regalá consciencia, belleza y cuidado",
    subtitle:
      "Productos de cuidado personal derivados de la oliva sanjuanina. 100% natural, 100% argentino, 100% con propósito.",
    cta: "DESCUBRÍ NUESTROS PRODUCTOS",
    link: "/productos",
  },
  {
    id: 2,
    image: "/product-assets/shower-oil/Shower oil.png",
    title: "Experiencia sensorial única",
    subtitle:
      "Nuestro Aceite limpiador para ducha transforma tu baño en un ritual de bienestar con el poder nutritivo de la oliva.",
    cta: "CONOCÉ ACEITE LIMPIADOR",
    link: "/productos",
  },
  {
    id: 3,
    image: "/product-assets/jabon-barra/Caja de jabones.png",
    title: "Tradición artesanal argentina",
    subtitle:
      "Jabones elaborados con técnicas tradicionales y lo mejor de la oliva de San Juan.",
    cta: "VER COLECCIÓN",
    link: "/productos",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={{
          nextEl: ".hero-swiper-button-next",
          prevEl: ".hero-swiper-button-prev",
        }}
        pagination={{
          el: ".hero-swiper-pagination",
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className={`object-cover ${
                    slide.id === 1
                      ? "object-center"
                      : slide.id === 3
                      ? "object-center"
                      : "object-bottom"
                  }`}
                  priority={slide.id === 1}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
              </div>

              <div className="relative z-20 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="flex items-center justify-center min-h-full">
                    <div className="text-center">
                      <div className="max-w-4xl mx-auto">
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-none mb-4 lg:mb-6">
                          {slide.title}
                        </h1>
                        <p className="text-base sm:text-lg text-white/90 mb-6 lg:mb-8 font-light tracking-wide leading-relaxed px-4 lg:px-0">
                          {slide.subtitle}
                        </p>
                        <Link
                          href={slide.link}
                          className="inline-block bg-white text-olive-dark px-8 sm:px-12 py-4 sm:py-5 text-xs sm:text-sm font-medium tracking-widest uppercase hover:bg-white/90 transition-colors border border-foreground"
                        >
                          {slide.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button className="hero-swiper-button-prev absolute left-6 lg:left-12 top-1/2 transform -translate-y-1/2 z-30 text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hidden sm:flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20">
        <svg
          className="w-6 h-6 lg:w-8 lg:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button className="hero-swiper-button-next absolute right-6 lg:right-12 top-1/2 transform -translate-y-1/2 z-30 text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hidden sm:flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20">
        <svg
          className="w-6 h-6 lg:w-8 lg:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Custom Pagination */}
      <div className="hero-swiper-pagination absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2"></div>

      <style jsx global>{`
        .hero-swiper-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .hero-swiper-pagination .swiper-pagination-bullet-active {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
