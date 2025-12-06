import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Mail, MapPin, Github, Linkedin, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-sm text-muted-foreground mb-4 font-mono"
          >
            04 — Contact
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left column */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl font-semibold mb-6"
              >
                Let's work together
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground mb-8"
              >
                Have a project in mind? I'd love to hear about it. Send me a message 
                and I'll get back to you as soon as possible.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {personalInfo.email}
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  {personalInfo.location}
                </div>
              </motion.div>

              {/* Social links - Prominent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 mt-8"
              >
                {personalInfo.social.github && (
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 px-6 py-3 rounded-md border-2 border-border bg-card text-foreground font-medium hover:bg-secondary hover:border-accent/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Github className="w-5 h-5" />
                    <span>View on GitHub</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
                {personalInfo.social.linkedin && (
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </motion.div>
            </div>

            {/* Right column - Extra info instead of form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="rounded-xl border border-border bg-background/60 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    How I can help
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Building modern React / Next.js frontends</li>
                  <li>• Designing clean UI with Tailwind & Framer Motion</li>
                  <li>• Integrating APIs and crafting smooth UX flows</li>
                </ul>
              </div>

              <div className="rounded-xl border border-dashed border-border bg-background/40 p-5">
                <p className="text-sm text-muted-foreground mb-3">
                  Prefer chatting directly? Reach out via{" "}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    email
                  </a>{" "}
                  or connect with me on GitHub and LinkedIn using the buttons below.
                </p>
                <p className="text-xs text-muted-foreground">
                  I usually reply within <span className="font-medium text-foreground">24–48 hours</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
