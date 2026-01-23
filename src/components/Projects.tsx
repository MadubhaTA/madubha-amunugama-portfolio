import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, scaleInVariants } from "./ui/motion";
import { ExternalLink, Bot, CalendarDays, LayoutDashboard, Palette } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot Platform",
    description: "Led design and front-end architecture for chatbot management UI, including admin backoffice and analytics workflows.",
    tags: ["Vue.js", "Tailwind CSS", "TypeScript"],
    icon: Bot,
    color: "from-indigo to-violet",
  },
  {
    title: "Leave Management System",
    description: "Designed and developed comprehensive leave approval interfaces for enterprise user bases with intuitive workflows.",
    tags: ["Angular", "SCSS", "Material UI"],
    icon: CalendarDays,
    color: "from-violet to-lavender",
  },
  {
    title: "Enterprise Dashboard",
    description: "Architected modular Angular front-end frameworks supporting multiple enterprise platforms with improved scalability.",
    tags: ["Angular", "Bootstrap", "RxJS"],
    icon: LayoutDashboard,
    color: "from-lavender to-indigo-light",
  },
  {
    title: "Design System",
    description: "Led team adoption of reusable design systems and coding standards, improving front-end consistency across products.",
    tags: ["Figma", "Design Tokens", "Components"],
    icon: Palette,
    color: "from-indigo-light to-indigo",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
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
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Featured
              <span className="text-gradient"> Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of enterprise-level applications I've designed and developed
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  variants={scaleInVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full glass rounded-2xl p-8 hover:shadow-card transition-all duration-300 relative overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-glow`}>
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <motion.div
                      className="flex items-center gap-2 text-primary font-medium text-sm cursor-pointer"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
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
