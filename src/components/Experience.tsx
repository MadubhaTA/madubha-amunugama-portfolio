import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "./ui/motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior UI/UX Engineer",
    company: "QualitApps Asia (Pvt) Ltd",
    period: "March 2023 – Present",
    description: [
      "Leading UI/UX design and development for multiple enterprise level applications",
      "Conduct code reviews, guide refactoring initiatives, and mentor team members",
      "Designing interfaces for Leave Approval System and AI Chatbot Platform",
    ],
  },
  {
    title: "UI/UX Engineer",
    company: "QualitApps Asia (Pvt) Ltd",
    period: "Oct 2021 – Mar 2023",
    description: [
      "Created responsive, accessible UI components with HTML, SCSS, and Angular Material",
      "Created UX wireframes and prototypes in Figma and Adobe XD",
      "Improved user experience consistency through reusable UI components",
    ],
  },
  {
    title: "Associate UI/UX Engineer",
    company: "QualitApps Asia (Pvt) Ltd",
    period: "Sept 2019 – Oct 2021",
    description: [
      "Developed responsive UI components using Angular, SCSS, and Material Design",
      "Assisted in implementing dynamic, responsive front-end components",
      "Created design mockups and prototypes for client presentations",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
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
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My Professional
              <span className="text-gradient"> Journey</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.period}
                variants={fadeUpVariants}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-glow -translate-x-1/2 mt-2" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    className="glass rounded-2xl p-6 hover:shadow-card transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
