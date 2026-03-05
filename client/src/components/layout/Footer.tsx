import { Building } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-white/70 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4 text-white">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center font-heading font-bold">
                M&A
              </div>
              <span className="font-heading font-semibold text-lg">
                Marquez & Aguirre Ingeniería
              </span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed mb-6">
              Diseñamos, calculamos y tramitamos con foco en seguridad, normativa y plazos. Atendemos proyectos en todo Chile.
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