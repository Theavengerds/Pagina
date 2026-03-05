import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground mb-6 leading-tight">
            Marquez & Aguirre <br />
            <span className="text-primary">Ingeniería</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-4 max-w-3xl mx-auto">
            Ingeniería y permisos para proyectos en Chile
          </h2>
          
          <p className="text-lg md:text-xl text-foreground mb-10 max-w-2xl mx-auto">
            Diseñamos, calculamos y tramitamos con foco en seguridad, normativa y plazos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="#contacto" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium text-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              Solicitar cotización
            </a>
            <a 
              href="#servicios" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-foreground border border-input rounded-md font-medium text-lg hover:bg-secondary hover:border-border transition-all"
            >
              Ver servicios
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["Estructural", "Sanitaria", "Eléctrica (TE1)", "IMIV", "Permisos y regularizaciones"].map((chip) => (
              <span key={chip} className="px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full border border-border">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#servicios" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-medium mb-2 uppercase tracking-wider">Descubrir</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}