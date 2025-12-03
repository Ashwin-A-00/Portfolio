import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projectsData } from "@/data/portfolioData";

const ProjectCard = ({ project, index }: { project: typeof projectsData[0]; index: number }) => {
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
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 sm:p-8 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{project.subtitle}</p>
            <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-accent transition-colors">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{project.metrics}</span>
            <span>{project.year}</span>
          </div>
        </div>
      </a>
    </motion.article>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projectsData.filter(p => p.featured);

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
              className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              View all on GitHub
            </motion.a>
          </div>

          {/* Projects grid */}
          <div className="space-y-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View more link for mobile */}
          <motion.a
            href="https://github.com/Ashwin-A-00"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="sm:hidden flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            View all on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};
