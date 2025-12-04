import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    toast({
      title: "Message sent",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

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

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex gap-4 mt-8"
              >
                {Object.entries(personalInfo.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                    aria-label={platform}
                  >
                    {platform === "github" && <Github className="w-5 h-5" />}
                    {platform === "linkedin" && <Linkedin className="w-5 h-5" />}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right column - Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-colors"
                placeholder="Your name"
                required
              />

              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-colors"
                placeholder="you@example.com"
                required
              />

              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-colors min-h-[150px] resize-none"
                placeholder="Tell me about your project..."
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                ) : (
                  <>
                    Send message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};
