import { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolioData";

export const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left - Copyright */}
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </div>

            {/* Center - Navigation */}
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right - Social - Prominent */}
            <div className="flex items-center gap-3">
              {personalInfo.social.github && (
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-card text-foreground hover:bg-secondary hover:border-accent/50 transition-all duration-200 hover:scale-[1.05]"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium hidden sm:inline">GitHub</span>
                </a>
              )}
              {personalInfo.social.linkedin && (
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 hover:scale-[1.05]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-medium hidden sm:inline">LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-md bg-foreground text-background transition-all duration-300 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
