"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, use } from "react";
import PurchaseModal from "../../components/PurchaseModal";
import ImageLightbox from "../../components/ImageLightbox";

const products = [
  {
    id: 1,
    slug: "jabon-liquido",
    name: "Jabón Líquido",
    price: "$8.500",
    image: "/brand-assets/Mockups/CasaElaria_MockUps_Packaging_botella-jabon-liquido.jpg",
    gallery: [
      "/brand-assets/Mockups/CasaElaria_MockUps_Packaging_botella-jabon-liquido.jpg",
      "/product-assets/jabon-barra/Jabon 2.png",
      "/product-assets/jabon-barra/Jabon 3.png"
    ],
    description: "Nuestro Jabón Líquido combina la suavidad de la limpieza tradicional con los beneficios nutritivos del aceite de oliva sanjuanino. Formulado especialmente para el cuidado diario, respeta el pH natural de tu piel mientras la limpia profundamente.",
    benefits: [
      "Hidratación profunda sin sensación grasa",
      "Apto para todo tipo de piel, incluyendo piel sensible",
      "Formulación 100% natural y vegana",
      "Libre de sulfatos y parabenos",
      "Enriquecido con antioxidantes naturales"
    ],
    ingredients: "Aceite de oliva virgen extra, agua destilada, hidróxido de potasio, glicerina vegetal, aceites esenciales naturales.",
    howToUse: "Aplicar una pequeña cantidad en las manos húmedas, generar espuma suave y aplicar sobre la piel. Enjuagar con agua tibia. Para mejores resultados, usar diariamente.",
    size: "250ml"
  },
  {
    id: 2,
    slug: "shower-oil",
    name: "Shower Oil",
    price: "$12.000",
    image: "/product-assets/shower-oil/Shower oil.png",
    gallery: ["/product-assets/shower-oil/Shower oil.png"],
    description: "Una experiencia de baño transformadora que convierte tu rutina diaria en un ritual de bienestar. Nuestro Shower Oil nutre intensamente la piel mientras la limpia, dejándola sedosa y perfumada.",
    benefits: [
      "Nutrición intensa para piel muy seca",
      "Experiencia sensorial única y relajante",
      "Textura sedosa que se absorbe rápidamente",
      "Aroma natural y envolvente",
      "No deja sensación oleosa en la piel"
    ],
    ingredients: "Aceite de oliva virgen extra, aceites vegetales seleccionados, vitamina E, extractos botánicos, aceites esenciales.",
    howToUse: "Aplicar sobre la piel húmeda durante la ducha, masajear suavemente y enjuagar. El aceite se emulsiona en contacto con el agua para una limpieza perfecta.",
    size: "200ml"
  },
  {
    id: 3,
    slug: "jabon-en-barra",
    name: "Jabón en Barra",
    price: "$4.500",
    image: "/product-assets/jabon-barra/Jabon 2.png",
    gallery: ["/product-assets/jabon-barra/Jabon 2.png"],
    description: "Elaborado siguiendo técnicas artesanales tradicionales, nuestro Jabón en Barra representa la esencia pura del cuidado natural. Cada barra es única y contiene toda la riqueza del aceite de oliva sanjuanino.",
    benefits: [
      "Elaboración 100% artesanal y tradicional",
      "Larga duración y rendimiento superior",
      "Proceso de saponificación en frío",
      "Origen completamente sustentable",
      "Envase biodegradable"
    ],
    ingredients: "Aceite de oliva virgen extra, agua, hidróxido de sodio, glicerina natural, sal marina, hierbas aromáticas.",
    howToUse: "Humedecer la barra y frotar suavemente sobre la piel hasta generar espuma cremosa. Masajear y enjuagar con agua. Conservar en lugar seco entre usos.",
    size: "100g"
  }
];

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { slug } = use(params);
  const product = products.find(p => p.slug === slug);

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
            <Link href="/" className="hover:text-olive-primary transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/productos" className="hover:text-olive-primary transition-colors">Productos</Link>
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
                    <svg className="w-6 h-6 text-olive-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
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
                          <svg className="w-4 h-4 text-olive-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
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
                <h1 className="font-serif text-4xl font-light text-olive-dark mb-2">{product.name}</h1>
                <p className="text-2xl font-medium text-olive-primary mb-4">{product.price}</p>
                <p className="text-olive-primary/80 leading-relaxed">{product.description}</p>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="font-serif text-xl font-bold text-olive-dark mb-4">Beneficios</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-olive-light mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-olive-primary/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size */}
              <div>
                <h3 className="font-serif text-xl font-bold text-olive-dark mb-2">Tamaño</h3>
                <p className="text-olive-primary/80">{product.size}</p>
              </div>

              {/* CTA */}
              <div className="space-y-4 pt-6">
                <button 
                  onClick={handlePurchase}
                  className="w-full bg-olive-primary text-white py-4 px-8 rounded-md hover:bg-olive-dark transition-colors font-medium text-lg cursor-pointer"
                >
                  Comprar - {product.price}
                </button>
                <Link 
                  href="/productos"
                  className="block w-full text-center bg-olive-primary/10 text-olive-dark py-4 px-8 rounded-md hover:bg-olive-primary/20 transition-colors font-medium"
                >
                  Ver Otros Productos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 bg-olive-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div className="bg-white p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-olive-dark mb-4">Ingredientes</h3>
                <p className="text-olive-primary/80 leading-relaxed">{product.ingredients}</p>
              </div>

              {/* How to Use */}
              <div className="bg-white p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-olive-dark mb-4">Modo de Uso</h3>
                <p className="text-olive-primary/80 leading-relaxed">{product.howToUse}</p>
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
            {products.filter(p => p.id !== product.id).slice(0, 2).map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
                    <h4 className="font-serif text-lg font-bold text-olive-dark">{relatedProduct.name}</h4>
                    <span className="text-olive-primary font-medium">{relatedProduct.price}</span>
                  </div>
                  <p className="text-olive-primary/80 text-sm mb-4">{relatedProduct.description.slice(0, 100)}...</p>
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