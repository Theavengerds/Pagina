import { useState } from "react";
import projectsData from "../../data/projects.json";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MapPin, Calendar, Wrench } from "lucide-react";

// In a real scenario we'd import the actual generated images
import project1Img from "../../assets/images/project-1.png";
import project2Img from "../../assets/images/project-2.png";

const imageMap: Record<string, string> = {
  "project-1": project1Img,
  "project-2": project2Img
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="proyectos" className="py-24 bg-slate-50 border-y border-slate-200 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Portafolio</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Proyectos Destacados</h3>
            <p className="text-slate-600 text-lg">
              Conozca algunos de los casos donde hemos aplicado nuestra experiencia y metodologías de trabajo.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-xl bg-white border border-slate-200 cursor-pointer hover:shadow-2xl transition-all duration-500 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className={`relative w-full ${index === 0 ? "h-64 md:h-[400px]" : "h-64"} overflow-hidden bg-slate-100`}>
                {/* Fallback image if mapping fails */}
                <img 
                  src={imageMap[project.image] || project1Img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-40" />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-semibold text-lg border-2 border-white/30 px-8 py-3 rounded-full">
                    Ver detalle
                  </span>
                </div>
              </div>
              
              <div className="p-6 text-foreground">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 border border-slate-200 rounded-md text-slate-600 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    {project.discipline}
                  </span>
                </div>
                <h4 className={`font-heading font-bold ${index === 0 ? "text-2xl" : "text-xl"} mb-2 group-hover:text-primary transition-colors`}>
                  {project.title}
                </h4>
                <div className="flex items-center text-slate-500 text-sm">
                  <MapPin className="w-4 h-4 mr-1 text-primary" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl p-0 overflow-hidden bg-white border-0 text-foreground">
            <div className="h-64 sm:h-80 relative">
              <img 
                src={imageMap[selectedProject.image] || project1Img} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <Badge className="bg-primary hover:bg-primary/90 mb-3 border-0">{selectedProject.discipline}</Badge>
                <DialogTitle className="text-3xl font-heading text-white">{selectedProject.title}</DialogTitle>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-lg font-bold font-heading mb-2 text-slate-900">Alcance del proyecto</h4>
                    <p className="text-slate-600">{selectedProject.scope}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold font-heading mb-2 text-slate-900">Desafío y Solución</h4>
                    <p className="text-slate-600">{selectedProject.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold font-heading mb-3 text-slate-900">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-fit space-y-6">
                  <div>
                    <div className="flex items-center text-sm font-medium text-slate-500 mb-1">
                      <MapPin className="w-4 h-4 mr-2 text-primary" /> Ubicación
                    </div>
                    <p className="font-medium text-slate-900">{selectedProject.location}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-sm font-medium text-slate-500 mb-1">
                      <Calendar className="w-4 h-4 mr-2 text-primary" /> Año
                    </div>
                    <p className="font-medium text-slate-900">{selectedProject.year}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-sm font-medium text-slate-500 mb-1">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Entregables
                    </div>
                    <p className="font-medium text-slate-900 text-sm">{selectedProject.deliverables}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-sm font-medium text-slate-500 mb-2">
                      <Wrench className="w-4 h-4 mr-2 text-primary" /> Herramientas
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map(tool => (
                        <span key={tool} className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
                <a 
                  href={`#contacto?project=${selectedProject.id}`}
                  onClick={() => setSelectedProject(null)}
                  className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
                >
                  Quiero un proyecto similar
                </a>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}