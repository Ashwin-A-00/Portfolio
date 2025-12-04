import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData, aboutData } from "@/data/portfolioData";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-sm text-muted-foreground mb-4 font-mono"
          >
            03 — Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-semibold mb-12"
          >
            Where I've Worked
          </motion.h2>

          {/* Experience list */}
          <div className="space-y-0 relative before:absolute before:inset-y-8 before:left-[10px] sm:before:left-[120px] before:w-px before:bg-border/70">
            {experienceData.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative py-8 pl-10 sm:pl-0 border-t border-border first:border-t-0"
              >
                {/* Timeline node */}
                <div className="absolute left-3 sm:left-[118px] top-10 -translate-x-1/2">
                  <motion.span
                    className="block w-2.5 h-2.5 rounded-full bg-accent/80 ring-4 ring-accent/10"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  />
                </div>

                <div className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-8 rounded-xl bg-card/60 group-hover:bg-card transition-colors duration-200 px-4 sm:px-6 py-5">
                  {/* Duration */}
                  <div className="flex flex-col justify-between gap-2">
                    <span className="inline-flex w-fit items-center rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-mono uppercase tracking-wide text-muted-foreground group-hover:border-accent/60 group-hover:text-foreground transition-colors">
                      {item.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      {item.role}
                      <span className="text-muted-foreground font-normal"> @ {item.company}</span>
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      {item.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, y: 4 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.35 + index * 0.1 + i * 0.04 }}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/80 group-hover:bg-accent transition-colors" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-16 border-t border-border"
          >
            <h3 className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              Education
            </h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {aboutData.education.map((edu, index) => (
                <div key={index}>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-muted-foreground">{edu.school}</p>
                  <p className="text-sm text-muted-foreground font-mono">{edu.year}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
