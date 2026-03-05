import aboutImg from "../../assets/images/about-us.png";
import { Download } from "lucide-react";

export function AboutUs() {
  return (
    <section id="nosotros" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-[4/3]">
              <img 
                src={aboutImg} 
                alt="Equipo Marquez & Aguirre" 
                className="w-full h-full object-cover"
              />
              {/* Overlay elements for design polish */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl inline-block">
                  <p className="font-heading font-bold text-primary text-xl">Ingeniería en Chile</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Sobre Nosotros</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Compromiso técnico y profesional
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                En <strong>Marquez & Aguirre Ingeniería</strong> somos un equipo de profesionales dedicados a brindar soluciones integrales en el ámbito de la ingeniería y gestión de permisos para proyectos constructivos e inmobiliarios en Chile.
              </p>
              <p>
                Nuestra experiencia nos permite entender que el éxito de un proyecto radica en la correcta coordinación de especialidades desde etapas tempranas, previniendo conflictos en obra y agilizando las aprobaciones normativas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-border mb-8 shadow-sm">
              <h4 className="font-heading font-bold text-foreground mb-4">Nuestro Enfoque Multidisciplinario</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Ingeniería Estructural", "Ingeniería Sanitaria", "Proyectos Eléctricos", "Gestión de Permisos", "Coordinación BIM", "Asesoría Técnica"].map(item => (
                  <li key={item} className="flex items-center text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <button disabled className="inline-flex items-center px-6 py-3 bg-secondary text-muted-foreground rounded-md font-medium border border-border cursor-not-allowed opacity-80">
              <Download className="w-4 h-4 mr-2" />
              Descargar Dossier (Próximamente)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}