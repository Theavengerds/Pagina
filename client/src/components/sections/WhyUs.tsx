import { CheckCircle, Users, FileText, MessageSquare } from "lucide-react";

export function WhyUs() {
  const reasons = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Normativa y seguridad",
      description: "Diseñamos y calculamos bajo los más estrictos estándares de la normativa chilena vigente, garantizando seguridad."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Coordinación integral",
      description: "Aseguramos la compatibilidad entre arquitectura y especialidades para evitar retrasos y sobrecostos en obra."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Entregables claros",
      description: "Generamos memorias, planos y especificaciones técnicas detalladas y listas para tramitación o construcción."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Comunicación fluida",
      description: "Mantenemos informado al cliente en cada etapa del proyecto con reportes claros y respuesta oportuna."
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-200 tracking-wider uppercase mb-3">Por qué M&A</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ingeniería confiable para proyectos exitosos</h3>
            <p className="text-blue-100 text-lg mb-10 max-w-xl">
              Nos enfocamos en entregar soluciones técnicas precisas, optimizadas y normadas que faciliten la aprobación y construcción de su proyecto.
            </p>
            
            {/* Mini metrics - Placeholders */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-800/50">
              <div>
                <p className="text-3xl font-heading font-bold mb-1">+150</p>
                <p className="text-sm text-blue-200">Proyectos ejecutados</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold mb-1">+50</p>
                <p className="text-sm text-blue-200">Clientes confiables</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold mb-1">8</p>
                <p className="text-sm text-blue-200">Regiones atendidas</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white/10 border border-white/20 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h4 className="text-lg font-heading font-bold mb-2">{reason.title}</h4>
                <p className="text-blue-100 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}