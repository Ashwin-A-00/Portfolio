import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";

export const Hero = () => {
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Try to find profile photo with different extensions
    const baseName = "/profile-photo";
    const extensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"];
    
    let currentIndex = 0;
    const tryLoadImage = (index: number) => {
      if (index >= extensions.length) {
        setImageError(true);
        return;
      }
      
      const img = new Image();
      const url = `${baseName}${extensions[index]}`;
      
      img.onload = () => {
        setProfileImageUrl(url);
        setImageError(false);
      };
      
      img.onerror = () => {
        tryLoadImage(index + 1);
      };
      
      img.src = url;
    };
    
    tryLoadImage(0);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient orb - subtle */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex-shrink-0 order-first lg:order-last"
          >
            <motion.div
              className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Outer animated circle around profile (black in light mode, white in dark mode) */}
              <div className="absolute -inset-6 sm:-inset-7 lg:-inset-8 rounded-full border-2 border-black dark:border-white" />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border bg-muted">
                {profileImageUrl && !imageError ? (
                  <img 
                    src={profileImageUrl} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-background">
                    <svg className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 text-muted-foreground/30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Decorative ring */}
              <motion.div
                className="absolute -inset-2 rounded-full border border-border/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8 justify-center lg:justify-start"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">{personalInfo.availability}</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Role with typing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 h-10"
            >
              <TypeAnimation
                sequence={personalInfo.roles.flatMap(role => [role, 3000])}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
              >
                View my work
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-12 mt-16 pt-8 border-t border-border justify-center lg:justify-start"
            >
              {[
                { value: "10+", label: "Projects Completed" },
                { value: "3+", label: "Internships" },
                { value: "50+", label: "Interactive Components Built" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-semibold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};
