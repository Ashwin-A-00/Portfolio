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

            {/* Right - Social */}
            <div className="flex items-center gap-3">
              {Object.entries(personalInfo.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  aria-label={platform}
                >
                  {platform === "github" && <Github className="w-4 h-4" />}
                  {platform === "linkedin" && <Linkedin className="w-4 h-4" />}
                </a>
              ))}
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
