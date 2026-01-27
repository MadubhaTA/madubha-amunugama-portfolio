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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  variants={scaleInVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full rounded-2xl p-6 hover:shadow-card transition-all duration-300 relative overflow-hidden border border-border bg-white">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 shadow-glow`}>
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-display font-semibold mb-4 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => {
                        const tagColors = [
                          "bg-indigo/20 text-indigo-dark",
                          "bg-violet/20 text-violet",
                          "bg-lavender/30 text-indigo",
                        ];
                        return (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[tagIndex % tagColors.length]}`}
                          >
                            {tag}
                          </span>
                        );
                      })}
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
