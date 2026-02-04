import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "./ui/motion";
import { 
  Palette, 
  Code, 
  Wrench, 
  Heart,
  Lightbulb,
  Users,
  Clock,
  RefreshCw,
  MessageCircle,
  Brain
} from "lucide-react";

const technicalTools = {
  design: {
    title: "Design Tools",
    icon: Palette,
    tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Stitch", "Lovable"],
    color: "from-violet to-lavender",
  },
  frontend: {
    title: "Frontend Technologies",
    icon: Code,
    tools: ["HTML", "CSS/SCSS", "Vuetify", "Vue", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "Angular Material"],
    color: "from-indigo to-violet",
  },
  other: {
    title: "Other Tools",
    icon: Wrench,
    tools: ["Azure DevOps", "Jira", "Visual Studio Code", "WordPress", "Visual Studio", "Git", "GitHub Actions"],
    color: "from-lavender to-indigo",
  },
};

const softSkills = [
  { name: "Leadership & Mentorship", icon: Users },
  { name: "Analytical Problem Solving", icon: Brain },
  { name: "Flexibility", icon: RefreshCw },
  { name: "Collaboration & Communication", icon: MessageCircle },
  { name: "Creativity", icon: Lightbulb },
  { name: "Design Thinking", icon: Palette },
  { name: "Time Planning & Execution", icon: Clock },
  { name: "Agile Delivery", icon: RefreshCw },
];

const coreCompetencies = [
  "Tailwind CSS",
  "Vue",
  "Vuetify",
  "Angular",
  "HTML",
  "UI/UX Design Systems",
  "CSS / SCSS",
  "Component Architecture",
  "Bootstrap",
  "Performance Optimization",
  "Angular Material",
  "Git / GitHub Actions",
  "Responsive & Accessible Design",
  "Azure DevOps",
  "Figma",
  "Jira - Agile / Scrum",
  "Adobe XD",
  "Mentoring & Code Reviews",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-to-br from-indigo/5 via-background to-violet/10">
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
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-violet/10 text-violet text-sm font-medium mb-4 border border-violet/20">
              Skills & Tools
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Technical
              <span className="text-gradient"> Expertise</span>
            </h2>
          </motion.div>

          {/* Core Competencies */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h3 className="text-xl font-display font-semibold mb-6 text-center">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {coreCompetencies.map((skill, index) => {
                const colors = [
                  "bg-indigo text-white",
                  "bg-violet text-white",
                  "bg-lavender text-foreground",
                  "bg-primary text-white",
                ];
                return (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm cursor-default ${colors[index % colors.length]}`}
                  >
                    {skill}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* Technical Tools */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-xl font-display font-semibold mb-6 text-center">
              Technical Tools & Platforms
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.values(technicalTools).map((category, catIndex) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 border border-lavender/30 shadow-card hover:shadow-lg transition-all"
                  >
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-display font-semibold text-foreground">
                        {category.title}
                      </h4>
                    </div>
                    
                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, index) => (
                        <motion.span
                          key={tool}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1.5 rounded-full text-xs font-medium bg-lavender/20 text-foreground border border-lavender/30"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-display font-semibold mb-6 text-center">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="bg-white rounded-xl p-4 border border-lavender/30 shadow-sm hover:shadow-card transition-all text-center group cursor-default"
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo/20 to-violet/20 flex items-center justify-center mx-auto mb-3"
                      whileHover={{ rotate: 10 }}
                    >
                      <Icon className="w-5 h-5 text-indigo group-hover:text-violet transition-colors" />
                    </motion.div>
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
