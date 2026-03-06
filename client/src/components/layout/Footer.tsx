import { Building } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://res.cloudinary.com/dlimdjyod/image/upload/v1772682467/MA_ingenieria_logo_opcion1_transparente_n7ydyf.png";

  return (
    <footer className="bg-slate-900 text-white/50 py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6 text-white">
              <img src={logoUrl} alt="M&A Logo" className="h-12 brightness-0 invert" />
              <span className="font-heading font-semibold text-xl tracking-tight">
                Marquez & Aguirre Ingeniería
              </span>
            </div>
            <p className="text-base max-w-md leading-relaxed mb-8">
              Expertos en ingeniería estructural, sanitaria y eléctrica. Comprometidos con la seguridad, normativa y plazos de cada proyecto en Chile.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Políticas de privacidad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {currentYear} Marquez & Aguirre Ingeniería. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}