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
    <section id="contacto" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-slate-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Contacto</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-slate-900 leading-tight">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-slate-600 text-lg mb-10 max-w-md">
              Cuéntanos tu necesidad y nuestro equipo técnico te contactará a la brevedad para asesorarte.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:contacto@myasingenieria.cl" className="text-lg font-medium hover:text-primary transition-colors text-slate-900">
                    contacto@myasingenieria.cl
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">WhatsApp</p>
                  <a href="#" className="text-lg font-medium hover:text-primary transition-colors text-slate-900">
                    +56 9 1234 5678
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mr-5 shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Ubicación</p>
                  <p className="text-lg font-medium text-slate-900">
                    Santiago, Chile.<br/>
                    <span className="text-sm font-normal text-slate-500">Proyectos a nivel nacional.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border border-slate-100 relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Nombre y apellido *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Empresa</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900"
                      placeholder="Opcional"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900"
                      placeholder="+56 9"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Ciudad / Región</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900"
                      placeholder="Ej. Valparaíso"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Tipo de proyecto *</label>
                    <select 
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900 appearance-none"
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
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Mensaje *</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900 resize-none"
                    placeholder="Describa su requerimiento..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-lg transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed text-lg shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-[0.99]"
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