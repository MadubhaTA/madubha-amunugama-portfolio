import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "./ui/motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-gradient-to-br from-violet/5 via-background to-lavender/10">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Professional
              <span className="text-gradient"> Summary</span>
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 border border-lavender/30 shadow-card"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Results-driven Senior Frontend Engineer with <strong className="text-foreground">6+ years of experience</strong> designing, 
              architecting, and delivering scalable, high-performance web applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Specialized in <strong className="text-foreground">Tailwind CSS, Vuetify, Vue, SCSS, Bootstrap, TypeScript</strong>, and modern UI/UX principles, 
              with a strong foundation in component-driven architecture and responsive design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Adept at solving complex technical challenges, mentoring peers, and driving frontend best practices 
              in enterprise-grade environments. Passionate about building maintainable systems that blend 
              elegant code with empathetic user experiences.
            </p>
            
            <div className="flex flex-wrap gap-8 pt-4 border-t border-lavender/30">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <h3 className="text-4xl font-display font-bold text-gradient">6+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <h3 className="text-4xl font-display font-bold text-gradient">10+</h3>
                <p className="text-muted-foreground">Projects Delivered</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <h3 className="text-4xl font-display font-bold text-gradient">4+</h3>
                <p className="text-muted-foreground">Roles Progressed</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
