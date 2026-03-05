import { Building, Droplets, Zap, Car, FileCheck, ClipboardList, Hammer, ArrowRight } from "lucide-react";
import servicesData from "../../data/services.json";

const iconMap: Record<string, React.ReactNode> = {
  building: <Building className="w-8 h-8" />,
  droplets: <Droplets className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
  car: <Car className="w-8 h-8" />,
  "file-check": <FileCheck className="w-8 h-8" />,
  "clipboard-list": <ClipboardList className="w-8 h-8" />,
  hammer: <Hammer className="w-8 h-8" />
};

export function Services() {
  const handleConsultar = (serviceId: string) => {
    // We will pass this to the contact form via URL hash or state
    // For simple implementation, scroll to contact and we could use a query param
    window.location.hash = `#contacto?service=${serviceId}`;
  };

  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Nuestras Especialidades</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Servicios Integrales de Ingeniería</h3>
          <p className="text-muted-foreground text-lg">
            Abarcamos todas las disciplinas necesarias para el desarrollo y legalización de su proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="bg-card border border-white/5 p-8 rounded-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 group hover:border-primary/50 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="text-primary mb-6 bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                {iconMap[service.icon]}
              </div>
              
              <h4 className="text-xl font-heading font-bold text-foreground mb-4">{service.title}</h4>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleConsultar(service.id)}
                className="mt-auto flex items-center text-primary font-semibold hover:text-primary/80 group/btn"
              >
                Consultar 
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}