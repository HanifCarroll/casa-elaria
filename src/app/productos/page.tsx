"use client";

import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "@/lib/products";


export default function ProductosPage() {
  const products = getAllProducts();

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Nuestros Productos"
        subtitle="Descubrí la línea completa de productos Casa Elaria, elaborados de la oliva sanjuanina y técnicas artesanales tradicionales."
      />

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                slug={product.slug}
                name={product.name}
                image={product.image}
                imagePosition={product.imagePosition}
                price={product.price}
                description={product.shortDescription}
                benefits={product.shortBenefits}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 bg-cream overflow-hidden">
        <div className="absolute inset-0 bg-[url('/brand-assets/Patrones/Trama-lechuzas.jpg')] opacity-5 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-olive-dark mb-4">
              Los Beneficios de la Oliva
            </h2>
            <p className="text-olive-primary/80 max-w-2xl mx-auto">
              Todos nuestros productos aprovechan las propiedades naturales de
              la oliva sanjuanina
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-olive-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-olive-primary"
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
              <h3 className="font-semibold text-olive-dark mb-2">
                Hidratación
              </h3>
              <p className="text-sm text-olive-primary/70">
                Humecta, suaviza y rellena la piel
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-olive-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-olive-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-olive-dark mb-2">Protección</h3>
              <p className="text-sm text-olive-primary/70">
                Protege contra rayos UV y radicales libres
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-olive-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-olive-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-olive-dark mb-2">Anti-Edad</h3>
              <p className="text-sm text-olive-primary/70">
                Reduce líneas de expresión y arrugas
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-olive-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-olive-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-olive-dark mb-2">Reparación</h3>
              <p className="text-sm text-olive-primary/70">
                Ayuda en la cicatrización y reduce irritaciones
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
