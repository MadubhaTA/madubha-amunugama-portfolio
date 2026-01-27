import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, scaleInVariants } from "./ui/motion";
import { ExternalLink, Bot, CalendarDays, LayoutDashboard, Palette } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot Platform",
    tags: ["Vue.js", "Tailwind CSS", "TypeScript"],
    icon: Bot,
    color: "from-indigo to-violet",
  },
  {
    title: "Leave Management System",
    tags: ["Angular", "SCSS", "Material UI"],
    icon: CalendarDays,
    color: "from-violet to-lavender",
  },
  {
    title: "Hotel & Motel Management System",
    tags: ["Bootstrap", "Angular"],
    icon: LayoutDashboard,
    color: "from-lavender to-indigo-light",
  },
  {
    title: "AI Chat for Projects Estimation",
    tags: ["Vue", "Tailwind CSS"],
    icon: Bot,
    color: "from-indigo-light to-indigo",
  },
  {
    title: "Dental Work Management System",
    tags: ["Bootstrap", "Angular"],
    icon: Palette,
    color: "from-indigo to-violet",
  },
  {
    title: "Institute Management System",
    tags: ["Vue", "Tailwind CSS"],
    icon: LayoutDashboard,
    color: "from-violet to-lavender",
  },
  {
    title: "Recruitment for Sports Sector",
    tags: ["Vue", "Vuetify"],
    icon: CalendarDays,
    color: "from-lavender to-indigo-light",
  },
];

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
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-primary-foreground text-sm font-medium mb-4">
              Projects
            </span>
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
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/20 text-primary-foreground border border-white/30 hover:bg-white/30 transition-colors"
                >
                  {skill}
                </span>
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
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="h-full rounded-2xl p-6 transition-all duration-500 relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl">
                    {/* Animated gradient background */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 0.2 }}
                    />
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-700" />
                    
                    <div className="relative z-10 flex items-start gap-5">
                      {/* Animated Icon */}
                      <motion.div 
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        {/* Title */}
                        <motion.h3 
                          className="text-xl font-display font-semibold mb-3 text-primary-foreground group-hover:text-white transition-colors duration-300"
                        >
                          {project.title}
                        </motion.h3>

                        {/* Tags with stagger animation */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.08 + tagIndex * 0.1 }}
                              className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-default"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
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
