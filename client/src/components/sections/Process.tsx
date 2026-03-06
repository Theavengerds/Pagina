import { Search, PenTool, Layout, FileSearch, Building2 } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Levantamiento y alcance",
      description: "Evaluamos las necesidades iniciales y definimos el alcance técnico y normativo."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Antecedentes y coordinación",
      description: "Recopilación de información base y alineamiento con arquitectura."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Ingeniería y desarrollo",
      description: "Cálculo, diseño y elaboración de planos, memorias y especificaciones."
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "Revisión y ajustes",
      description: "Validación interna y con el cliente para asegurar compatibilidad total."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Tramitación y cierre",
      description: "Apoyo en el proceso de aprobación municipal o ante entidades competentes."
    }
  ];

  return (
    <section id="proceso" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Metodología</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Proceso de Trabajo</h3>
          <p className="text-slate-600 text-lg">
            Un enfoque estructurado que garantiza la calidad y cumplimiento normativo en cada etapa.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500 shadow-sm relative">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-lg font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}