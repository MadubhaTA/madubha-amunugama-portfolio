import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "./ui/motion";

const skills = [
  { name: "Tailwind CSS", category: "Styling" },
  { name: "TypeScript", category: "Language" },
  { name: "Vue.js", category: "Framework" },
  { name: "Angular", category: "Framework" },
  { name: "Figma", category: "Design" },
  { name: "SCSS", category: "Styling" },
  { name: "JavaScript", category: "Language" },
  { name: "Bootstrap", category: "Styling" },
  { name: "Adobe XD", category: "Design" },
  { name: "Git", category: "Tools" },
  { name: "Vuetify", category: "UI Library" },
  { name: "Angular Material", category: "UI Library" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Passionate about creating
              <span className="text-gradient"> beautiful experiences</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Description */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Results-driven Senior Frontend Engineer with expertise in designing, 
                architecting, and delivering scalable, high-performance web applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Specialized in modern UI/UX principles with a strong foundation in 
                component-driven architecture and responsive design. I'm passionate about 
                building maintainable systems that blend elegant code with empathetic user experiences.
              </p>
              <div className="flex gap-8 pt-4">
                <div>
                  <h3 className="text-4xl font-display font-bold text-gradient">5+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-4xl font-display font-bold text-gradient">10+</h3>
                  <p className="text-muted-foreground">Projects Delivered</p>
                </div>
              </div>
            </motion.div>

            {/* Right column - Skills */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-indigo/20 via-lavender-light to-violet/20 rounded-2xl p-8 border border-lavender/40 shadow-card">
                <h3 className="text-xl font-display font-semibold mb-6">
                  Core Competencies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => {
                    const colors = [
                      "bg-gradient-to-r from-indigo to-violet text-white",
                      "bg-gradient-to-r from-violet to-lavender text-white",
                      "bg-gradient-to-r from-lavender to-indigo-light text-foreground",
                      "bg-gradient-to-r from-indigo-light to-indigo text-white",
                    ];
                    return (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform cursor-default ${colors[index % colors.length]}`}
                      >
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
