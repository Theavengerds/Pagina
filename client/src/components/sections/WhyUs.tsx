import { CheckCircle, Users, FileText, MessageSquare } from "lucide-react";

export function WhyUs() {
  const reasons = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Normativa y seguridad",
      description: "Diseñamos y calculamos bajo los más estrictos estándares de la normativa chilena vigente."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Coordinación integral",
      description: "Aseguramos la compatibilidad entre arquitectura y especialidades para evitar retrasos."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Entregables claros",
      description: "Memorias y planos detallados listos para tramitación o construcción inmediata."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Comunicación fluida",
      description: "Mantenemos informado al cliente en cada etapa con reportes de avance claros."
    }
  ];

  return (
    <section className="py-24 bg-white relative border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Excelencia Técnica</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-slate-900 leading-tight">Ingeniería confiable para proyectos exitosos</h3>
            <p className="text-slate-600 text-lg mb-10 max-w-xl">
              Nos enfocamos en entregar soluciones técnicas precisas, optimizadas y normadas que faciliten la aprobación y construcción de su proyecto.
            </p>
            
            {/* Mini metrics */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-200">
              <div>
                <p className="text-4xl font-heading font-bold mb-1 text-primary">+150</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Proyectos</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold mb-1 text-primary">+50</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Clientes</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold mb-1 text-primary">8</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Regiones</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-primary shadow-sm">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-heading font-bold mb-3 text-slate-900">{reason.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}