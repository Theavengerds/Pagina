import { useState, useEffect } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  // Parse URL hash for pre-selected service
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("?service=")) {
      const serviceId = hash.split("?service=")[1];
      if (serviceId) {
        // Map service ID to readable name for select
        const serviceMap: Record<string, string> = {
          "estructural": "Estructural",
          "sanitaria": "Sanitaria",
          "electrica": "Eléctrica",
          "imiv": "IMIV",
          "permisos": "Permisos",
          "regularizaciones": "Regularización",
          "obras-menores": "Obras menores"
        };
        if (serviceMap[serviceId]) {
          setSelectedService(serviceMap[serviceId]);
        }
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensaje enviado",
        description: "En modo desarrollo: Falta configurar el destinatario final (ej. EmailJS/Formspree).",
      });
      (e.target as HTMLFormElement).reset();
      setSelectedService("");
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold text-blue-200 tracking-wider uppercase mb-3">Contacto</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-blue-100 text-lg mb-10 max-w-md">
              Cuéntanos tu necesidad y nuestro equipo técnico te contactará a la brevedad para asesorarte.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">Email</p>
                  <a href="mailto:contacto@myasingenieria.cl" className="text-lg font-medium hover:text-blue-200 transition-colors">
                    contacto@myasingenieria.cl
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">Teléfono / WhatsApp</p>
                  <a href="#" className="text-lg font-medium hover:text-blue-200 transition-colors">
                    +56 9 1234 5678
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">Ubicación</p>
                  <p className="text-lg font-medium">
                    Santiago, Chile.<br/>
                    <span className="text-sm font-normal text-blue-100">Atendemos proyectos a nivel nacional.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-foreground">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Nombre y apellido *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Empresa <span className="text-muted-foreground font-normal">(opcional)</span></label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Nombre de empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Teléfono <span className="text-muted-foreground font-normal">(opcional)</span></label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="+56 9 0000 0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Ciudad / Región</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Ej. Valparaíso"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Tipo de proyecto *</label>
                    <select 
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                    >
                      <option value="" disabled>Seleccione una opción</option>
                      <option value="Estructural">Ingeniería Estructural</option>
                      <option value="Sanitaria">Ingeniería Sanitaria</option>
                      <option value="Eléctrica">Ingeniería Eléctrica (TE1)</option>
                      <option value="IMIV">IMIV</option>
                      <option value="Permisos">Permisos de Edificación</option>
                      <option value="Regularización">Regularización</option>
                      <option value="Obras menores">Obras menores</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Mensaje *</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                    placeholder="Describa brevemente su requerimiento..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 rounded-md transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>Enviar mensaje <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}