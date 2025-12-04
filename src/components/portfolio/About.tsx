import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutData, skillsData } from "@/data/portfolioData";

// Skill icons mapping using simple-icons CDN
// NOTE: Keys are matched to the exact text in `skillsData` so icons always appear.
const skillIcons: Record<string, string> = {
  // Core technologies (exact matches for `skillsData.technical`)
  "React.js / Next.js": "https://cdn.simpleicons.org/react/61DAFB",
  "JavaScript / TypeScript": "https://cdn.simpleicons.org/javascript/F7DF1E",
  "Python": "https://cdn.simpleicons.org/python/3776AB",
  "HTML / CSS / Tailwind": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Node.js / Express": "https://cdn.simpleicons.org/nodedotjs/339933",
  "MongoDB / Firebase": "https://cdn.simpleicons.org/mongodb/47A248",

  // Individual techs (fallbacks if you change names later)
  "React": "https://cdn.simpleicons.org/react/61DAFB",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/000000",
  "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
  "JavaScript": "https://cdn.simpleicons.org/javascript/F7DF1E",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "CSS": "https://cdn.simpleicons.org/css3/1572B6",
  "HTML": "https://cdn.simpleicons.org/html5/E34F26",

  // Tools & platforms (exact matches for `skillsData.tools`)
  "Git & GitHub": "https://cdn.simpleicons.org/git/F05032",
  // Official Visual Studio Code logo
  "VS Code": "https://cdn.simpleicons.org/visualstudiocode/007ACC",
  "Figma": "https://cdn.simpleicons.org/figma/F24E1E",
  "Framer Motion": "https://cdn.simpleicons.org/framer/0055FF",
  "Vercel": "https://cdn.simpleicons.org/vercel/000000",
  "Postman": "https://cdn.simpleicons.org/postman/FF6C37",

  // Other common tech (future‑proofing)
  "Vue.js": "https://cdn.simpleicons.org/vuedotjs/4FC08D",
  "Angular": "https://cdn.simpleicons.org/angular/DD0031",
  "Git": "https://cdn.simpleicons.org/git/F05032",
  "Docker": "https://cdn.simpleicons.org/docker/2496ED",
  "AWS": "https://cdn.simpleicons.org/amazonwebservices/232F3E",
  "Firebase": "https://cdn.simpleicons.org/firebase/FFCA28",
  "MongoDB": "https://cdn.simpleicons.org/mongodb/47A248",
  "PostgreSQL": "https://cdn.simpleicons.org/postgresql/4169E1",
  "GraphQL": "https://cdn.simpleicons.org/graphql/E10098",
  "Redux": "https://cdn.simpleicons.org/redux/764ABC",
  "GitHub": "https://cdn.simpleicons.org/github/181717",
  "Netlify": "https://cdn.simpleicons.org/netlify/00C7B7",
  "Sass": "https://cdn.simpleicons.org/sass/CC6699",
  "Webpack": "https://cdn.simpleicons.org/webpack/8DD6F9",
  "Vite": "https://cdn.simpleicons.org/vite/646CFF",
  "Jest": "https://cdn.simpleicons.org/jest/C21325",
  "Cypress": "https://cdn.simpleicons.org/cypress/17202C",
  "Storybook": "https://cdn.simpleicons.org/storybook/FF4785",
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-sm text-muted-foreground mb-4 font-mono"
          >
            01 — About
          </motion.p>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left column - Skills with logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              {/* Technical skills */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                  {skillsData.technical.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2 + index * 0.05 }}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center p-2.5 transition-all duration-300 group-hover:bg-accent/10 group-hover:scale-110">
                        <img
                          src={skillIcons[skill.name] || `https://cdn.simpleicons.org/code/888888`}
                          alt={skill.name}
                          className="w-full h-full object-contain dark:invert-0"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground text-center group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
                  Tools & Platforms
                </h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                  {skillsData.tools
                    .filter((tool) => tool !== "VS Code")
                    .map((tool, index) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 + index * 0.03 }}
                        className="flex flex-col items-center gap-2 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center p-2.5 transition-all duration-300 group-hover:bg-accent/10 group-hover:scale-110">
                          <img
                            src={skillIcons[tool] || `https://cdn.simpleicons.org/code/888888`}
                            alt={tool}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-xs text-muted-foreground text-center group-hover:text-foreground transition-colors">
                          {tool}
                        </span>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>

            {/* Right column - Bio */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl font-medium leading-relaxed"
              >
                {aboutData.summary}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground leading-relaxed"
              >
                {aboutData.details}
              </motion.p>
            </div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border"
          >
            {aboutData.values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="space-y-2"
              >
                <h4 className="font-medium">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
