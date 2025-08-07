import Image from "next/image";
import PageHeader from "../components/PageHeader";

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-white">
      
      <PageHeader
        title="Quiénes Somos"
        subtitle="En Casa Elaria creamos productos que cuidan la piel y al mismo tiempo promueven un consumo consciente, combinando belleza, bienestar y responsabilidad."
      />

      {/* Main Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-3xl font-bold text-olive-dark mb-6">
                Nuestra Historia
              </h2>
              <div className="prose prose-lg text-olive-primary/80 space-y-4">
                <p>
                  Nuestra propuesta nace del deseo de ofrecer una experiencia sensorial basada en los 
                  principios del triple impacto y la economía circular. Usamos como base el poder nutritivo 
                  de la oliva sanjuanina, reutilizando con respeto lo que la naturaleza nos brinda.
                </p>
                <p>
                  Cada fórmula está pensada para personas que valoran la trazabilidad, la calidad natural 
                  y el origen argentino de lo que eligen. <strong>100% natural, 100% argentino, 100% con propósito.</strong>
                </p>
                <p>
                  Porque creemos que regalar bienestar es una de las formas más hermosas de cuidar a 
                  quienes más querés. Y también, al planeta.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-4/3 relative overflow-hidden rounded-lg">
                <Image
                  src="/product-assets/all-products/productos y packaging.png"
                  alt="Casa Elaria - Productos y packaging"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-olive-dark mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-olive-primary/80 max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos en Casa Elaria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl border border-olive-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-olive-primary/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-olive-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-olive-dark mb-3">Conexión con la Naturaleza</h3>
              <p className="text-olive-primary/80">
                Respetamos y aprovechamos los recursos naturales que nos brinda la tierra sanjuanina.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-olive-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-olive-primary/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-olive-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-olive-dark mb-3">Sofisticación</h3>
              <p className="text-olive-primary/80">
                Creamos productos elegantes que combinan tradición artesanal con diseño contemporáneo.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-olive-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-olive-primary/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-olive-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-olive-dark mb-3">Producción Consciente</h3>
              <p className="text-olive-primary/80">
                Triple impacto: cuidamos el planeta, las personas y generamos valor económico sustentable.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-olive-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-olive-primary/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-olive-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-olive-dark mb-3">Identidad Local</h3>
              <p className="text-olive-primary/80">
                Orgullosos de nuestro origen argentino con proyección global y compromiso territorial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* San Juan Origin */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-4/3 relative overflow-hidden rounded-lg">
                <Image
                  src="/brand-assets/Mockups/CasaElaria_MockUps_Packaging_botella-jabon-liquido.jpg"
                  alt="San Juan - Tierra de olivos"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl font-bold text-olive-dark mb-6">
                San Juan: Nuestra Tierra
              </h2>
              <div className="prose prose-lg text-olive-primary/80 space-y-4">
                <p>
                  Nuestros productos provienen de San Juan, Argentina, una región emergente e 
                  importante para la producción olivícola, comparable a lo que Provenza representa 
                  para la lavanda.
                </p>
                <p>
                  Esta tierra seca y soleada, con sus días cálidos y noches frescas, crea las 
                  condiciones perfectas para que los olivos desarrollen aceites de calidad excepcional, 
                  ricos en antioxidantes y nutrientes.
                </p>
                <p>
                  Es un punto de orgullo y distinción que va más allá de una simple etiqueta 
                  "100% argentino". Es el reconocimiento a un terroir único que aporta carácter 
                  y personalidad a cada uno de nuestros productos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy */}
      <section className="py-16 bg-olive-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-olive-dark mb-6">
            Economía Circular
          </h2>
          <p className="text-lg text-olive-primary/80 max-w-3xl mx-auto mb-12">
            Revalorizamos los recursos naturales transformando residuos de la industria olivícola 
            (carozos, aceites no extra vírgenes) en productos cosméticos de alta calidad.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-olive-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-olive-dark mb-2">Recolección</h3>
              <p className="text-sm text-olive-primary/80">
                Rescatamos subproductos de la industria olivícola que tradicionalmente se descartan
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-olive-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-olive-dark mb-2">Transformación</h3>
              <p className="text-sm text-olive-primary/80">
                Procesamos estos materiales con técnicas artesanales para crear productos únicos
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-olive-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-olive-dark mb-2">Valor</h3>
              <p className="text-sm text-olive-primary/80">
                Creamos productos de alta calidad que cuidan tu piel y el medio ambiente
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}