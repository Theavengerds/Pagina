import aboutImg from "../../assets/images/about-us.png";
import { Download } from "lucide-react";

export function AboutUs() {
  const logoUrl = "https://res.cloudinary.com/dlimdjyod/image/upload/v1772682467/MA_ingenieria_logo_opcion1_transparente_n7ydyf.png";

  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-[4/3] group">
              <img 
                src={aboutImg} 
                alt="Equipo Marquez & Aguirre" 
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl border border-slate-200 shadow-xl">
                  <img src={logoUrl} alt="M&A Logo" className="h-10 mb-2" />
                  <p className="font-heading font-bold text-primary text-xl uppercase tracking-tighter">Líderes en Ingeniería</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Sobre Nosotros</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Compromiso técnico y profesional
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 mb-10">
              <p>
                En <strong>Marquez & Aguirre Ingeniería</strong> somos un equipo de expertos dedicados a brindar soluciones técnicas precisas en el ámbito de la ingeniería y gestión de permisos.
              </p>
              <p>
                Nuestra experiencia en el mercado chileno nos permite optimizar procesos y garantizar el cumplimiento normativo en cada entrega.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-10 shadow-sm">
              <h4 className="font-heading font-bold text-slate-900 mb-6 text-xl">Especialidades Core</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Estructural", "Sanitaria", "Eléctrica", "Permisos", "BIM", "Asesoría"].map(item => (
                  <li key={item} className="flex items-center text-slate-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <button disabled className="inline-flex items-center px-8 py-4 bg-slate-100 text-slate-400 rounded-lg font-medium border border-slate-200 cursor-not-allowed transition-all">
              <Download className="w-5 h-5 mr-3" />
              Descargar Dossier (Próximamente)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}