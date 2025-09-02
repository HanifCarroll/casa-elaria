import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-olive-dark text-white border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/brand-assets/Logo/Logotipo/CasaElaria_Branding_logotipo-w.png"
              alt="Casa Elaria"
              width={250}
              height={50}
              className="h-8 w-auto mb-4"
            />
            <p className="text-white/80 mb-4 max-w-md">
              Regalá consciencia, belleza y cuidado. Porque creemos que regalar
              bienestar es una de las formas más hermosas de cuidar a quienes
              más querés. Y también, al planeta.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/quienes-somos"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/casa_elaria"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2025 Casa Elaria. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
