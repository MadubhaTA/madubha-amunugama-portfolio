import { motion, type Easing } from "framer-motion";
import { fadeUpVariants, staggerContainer, scaleInVariants } from "./ui/motion";
import { Hotel, MessageCircle, CalendarDays, Heart, GraduationCap, Trophy } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot Platform",
    icon: MessageCircle,
    color: "from-indigo to-violet",
  },
  {
    title: "Leave Management System",
    icon: CalendarDays,
    color: "from-violet to-lavender",
  },
  {
    title: "Hotel & Motel Management System",
    icon: Hotel,
    color: "from-lavender to-indigo-light",
  },
  {
    title: "AI Chat for Projects Estimation",
    icon: MessageCircle,
    color: "from-indigo-light to-indigo",
  },
  {
    title: "Dental Work Management System",
    icon: Heart,
    color: "from-indigo to-violet",
  },
  {
    title: "Institute Management System",
    icon: GraduationCap,
    color: "from-violet to-lavender",
  },
  {
    title: "Recruitment for Sports Sector",
    icon: Trophy,
    color: "from-lavender to-indigo-light",
  },
];

const easeInOut: Easing = "easeInOut";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};

const glowAnimation = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-primary">
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
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-white/20 text-primary-foreground text-sm font-medium mb-4"
            >
              Projects
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary-foreground">
              Featured
              <span className="text-white/80"> Work</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              A selection of enterprise-level applications I've designed and developed
            </p>
          </motion.div>

          {/* Skills showcase */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-lg font-display font-semibold mb-4 text-primary-foreground">
              Technical Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Bootstrap",
                "Angular Material",
                "Angular Bootstrap",
                "HTML/CSS/SCSS",
                "Responsive Web Development",
                "Figma",
                "Adobe XD",
                "Photoshop CC",
                "Illustrator CC",
                "Cross-browser Testing",
                "Mobile Responsiveness",
                "WordPress Theme Development",
                "Agile Development",
                "Jira",
                "Azure DevOps",
                "AngularJS",
                "Mobile App Design",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/20 text-primary-foreground border border-white/30 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  variants={scaleInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" } 
                  }}
                  className="group cursor-pointer"
                >
                  <div className="h-full rounded-2xl p-8 transition-all duration-500 relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10">
                    {/* Animated gradient background */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                    
                    {/* Floating particles effect */}
                    <motion.div 
                      className="absolute top-4 right-4 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/15 transition-all duration-700"
                      variants={glowAnimation}
                      initial="initial"
                      animate="animate"
                    />
                    <motion.div 
                      className="absolute bottom-4 left-4 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-700"
                      variants={glowAnimation}
                      initial="initial"
                      animate="animate"
                      style={{ animationDelay: "1s" }}
                    />
                    
                    <div className="relative z-10 flex flex-col items-center text-center gap-6">
                      {/* Animated Icon with floating effect */}
                      <motion.div 
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg shadow-indigo/30`}
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                        whileHover={{ 
                          rotate: [0, -15, 15, -10, 10, 0], 
                          scale: 1.15,
                          transition: { duration: 0.6 }
                        }}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <motion.div
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </motion.div>
                      </motion.div>

                      {/* Title with underline animation */}
                      <motion.h3 
                        className="text-xl font-display font-semibold text-primary-foreground group-hover:text-white transition-colors duration-300 relative"
                      >
                        {project.title}
                        <motion.span 
                          className="absolute -bottom-2 left-1/2 h-0.5 bg-white/60 rounded-full"
                          initial={{ width: 0, x: "-50%" }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.h3>
                    </div>

                    {/* Corner accent */}
                    <motion.div 
                      className="absolute top-0 right-0 w-24 h-24 overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${project.color} opacity-20 rotate-45 group-hover:opacity-40 transition-opacity duration-500`} />
                    </motion.div>

                    {/* Bottom shine effect on hover */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
