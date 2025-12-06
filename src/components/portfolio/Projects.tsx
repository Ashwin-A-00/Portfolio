import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Github, ChevronDown } from "lucide-react";
import { projectsData } from "@/data/portfolioData";

const ProjectCard = ({ 
  project, 
  index, 
  isExpanded, 
  onToggle
}: { 
  project: typeof projectsData[0]; 
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        layout
        className={`block rounded-lg border border-border bg-card transition-all duration-300 cursor-pointer ${
          isExpanded 
            ? "shadow-lg shadow-accent/10 border-accent/30" 
            : "hover:bg-secondary/50 hover:shadow-md"
        }`}
        onClick={onToggle}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">{project.subtitle}</p>
              <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-accent transition-colors">
                {project.title}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-4 flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </div>

          <motion.p
            layout
            className="text-muted-foreground mb-6 leading-relaxed"
          >
            {project.description}
          </motion.p>

          <motion.div
            layout
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6"
          >
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, isExpanded ? project.tech.length : 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
              {!isExpanded && project.tech.length > 3 && (
                <span className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{project.metrics}</span>
              <span>{project.year}</span>
            </div>
          </motion.div>

          {/* Project Links - Always Visible */}
          <div 
            className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Live Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-center gap-2 px-6 py-3 rounded-md border-2 border-border bg-card text-foreground font-medium hover:bg-secondary hover:border-accent/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-border mt-4">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">All Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm rounded-md bg-accent/10 text-accent border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-md bg-secondary/50 border border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-semibold text-foreground">Metrics:</span> {project.metrics}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Year:</span> {project.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.article>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const featuredProjects = projectsData.filter(p => p.featured);

  const handleToggle = (projectId: number) => {
    setExpandedId(expandedId === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                className="text-sm text-muted-foreground mb-4 font-mono"
              >
                02 — Work
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl font-semibold"
              >
                Selected Projects
              </motion.h2>
            </div>
            <motion.a
              href="https://github.com/Ashwin-A-00"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="hidden sm:flex items-center gap-2 text-foreground font-medium hover:text-accent transition-all duration-200"
            >
              <Github className="w-5 h-5" />
              <span>View all on GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Projects grid */}
          <div className="space-y-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                isExpanded={expandedId === project.id}
                onToggle={() => handleToggle(project.id)}
              />
            ))}
          </div>

          {/* View more link for mobile */}
          <motion.a
            href="https://github.com/Ashwin-A-00"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="sm:hidden flex items-center justify-center gap-2 mt-8 text-foreground font-medium hover:text-accent transition-all duration-200"
          >
            <Github className="w-5 h-5" />
            <span>View all on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
