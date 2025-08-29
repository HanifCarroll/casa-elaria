"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, use } from "react";
import PurchaseModal from "../../components/PurchaseModal";
import ImageLightbox from "../../components/ImageLightbox";
import { getProductBySlug, getAllProducts } from "@/lib/products";


export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const products = getAllProducts();

  if (!product) {
    notFound();
  }

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="pt-52 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-olive-primary/70">
            <Link
              href="/"
              className="hover:text-olive-primary transition-colors"
            >
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/productos"
              className="hover:text-olive-primary transition-colors"
            >
              Productos
            </Link>
            <span className="mx-2">/</span>
            <span className="text-olive-dark font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div
                className="aspect-square relative overflow-hidden rounded-lg bg-white cursor-pointer group"
                onClick={() => handleImageClick(0)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                  <div className="bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-6 h-6 text-olive-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Gallery thumbnails */}
              {product.gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square relative overflow-hidden rounded-md bg-white cursor-pointer group"
                      onClick={() => handleImageClick(index)}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover group-hover:opacity-80 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                        <div className="bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg
                            className="w-4 h-4 text-olive-dark"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-serif text-4xl font-light text-olive-dark mb-2">
                  {product.name}
                </h1>
                <p className="text-2xl font-medium text-olive-primary mb-4">
                  {product.price}
                </p>
                <p className="text-olive-primary/80 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="font-serif text-xl font-bold text-olive-dark mb-4">
                  Beneficios
                </h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-olive-light mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-olive-primary/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size */}
              <div>
                <h3 className="font-serif text-xl font-bold text-olive-dark mb-2">
                  Tamaño
                </h3>
                <p className="text-olive-primary/80">{product.size}</p>
              </div>

              {/* CTA */}
              <div className="space-y-4 pt-6">
                <button
                  onClick={handlePurchase}
                  className="w-full bg-olive-primary text-white py-4 px-8 rounded-md hover:bg-olive-dark transition-colors font-medium text-lg uppercase tracking-wider cursor-pointer"
                >
                  Agregar Al Carrito - {product.price}
                </button>
                <Link
                  href="/productos"
                  className="block w-full text-center border border-foreground text-foreground bg-white py-4 px-8 rounded-md hover:bg-cream transition-colors font-medium uppercase tracking-wider"
                >
                  Ver Otros Productos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div className="bg-white p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-olive-dark mb-4">
                  Ingredientes
                </h3>
                <p className="text-olive-primary/80 leading-relaxed">
                  {product.ingredients}
                </p>
              </div>

              {/* How to Use */}
              <div className="bg-white p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-olive-dark mb-4">
                  Modo de Uso
                </h3>
                <p className="text-olive-primary/80 leading-relaxed">
                  {product.howToUse}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-olive-dark mb-8 text-center">
            También Te Puede Interesar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 2)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-lg overflow-hidden border border-olive-primary/10 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-serif text-lg font-bold text-olive-dark">
                        {relatedProduct.name}
                      </h4>
                      <span className="text-olive-primary font-medium">
                        {relatedProduct.price}
                      </span>
                    </div>
                    <p className="text-olive-primary/80 text-sm mb-4">
                      {relatedProduct.shortDescription.slice(0, 100)}...
                    </p>
                    <Link
                      href={`/productos/${relatedProduct.slug}`}
                      className="inline-block bg-olive-primary text-white py-2 px-4 rounded-md hover:bg-olive-dark transition-colors text-sm font-medium"
                    >
                      Ver Producto
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
      />

      <ImageLightbox
        images={product.gallery}
        initialIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        alt={product.name}
      />
    </div>
  );
}
