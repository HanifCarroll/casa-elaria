"use client";

import HeroSlider from "./components/HeroSlider";
import ProductCard from "./components/ProductCard";
import { getAllProducts } from "@/lib/products";

export default function Home() {
  const products = getAllProducts();

  return (
    <div className="min-h-screen">
      <HeroSlider />

      {/* Products Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-dark mb-4">
              Nuestros Productos
            </h2>
            <p className="text-lg text-olive-primary/80 max-w-2xl mx-auto mb-8">
              Una experiencia sensorial completa basada en los principios del
              triple impacto y la economía circular.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                slug={product.slug}
                name={product.name}
                price={product.price}
                image={product.image}
                imagePosition={product.imagePosition}
                description={product.shortDescription}
              />
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="relative py-24 bg-cream overflow-hidden">
        <div className="absolute inset-0 bg-[url('/brand-assets/Patrones/Trama-pajaros.jpg')] opacity-5 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive-dark mb-4">
              El poder nutritivo de la oliva sanjuanina
            </h2>
            <p className="text-lg text-olive-primary/80 max-w-2xl mx-auto">
              Creamos productos que cuidan la piel y al mismo tiempo promueven
              un consumo consciente, combinando belleza, bienestar y
              responsabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white border border-olive-primary/10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-olive-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-olive-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-olive-dark mb-4">
                100% Natural
              </h3>
              <p className="text-olive-primary/80">
                Ingredientes naturales derivados de la oliva, sin químicos
                dañinos. Cuidamos tu piel respetando su naturaleza.
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-olive-primary/10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-olive-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-olive-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-olive-dark mb-4">
                Origen Argentino
              </h3>
              <p className="text-olive-primary/80">
                Productos de San Juan, Argentina. Apoyamos la industria local y
                celebramos la calidad de nuestros recursos naturales.
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-olive-primary/10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-olive-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-olive-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-olive-dark mb-4">
                Packaging Reutilizable
              </h3>
              <p className="text-olive-primary/80">
                En lugar de envases efímeros, diseñamos cajas metálicas
                reutilizables: objetos hermosos, duraderos y funcionales que
                podés conservar y usar en tu día a día.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
