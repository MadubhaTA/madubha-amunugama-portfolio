import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "./ui/motion";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";

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
    gradient: "from-indigo via-violet to-lavender",
    bgGradient: "from-indigo/20 to-violet/10",
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
    gradient: "from-violet via-lavender to-indigo-light",
    bgGradient: "from-violet/20 to-lavender/10",
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
    gradient: "from-lavender via-indigo-light to-indigo",
    bgGradient: "from-lavender/20 to-indigo/10",
  },
  {
    title: "UI/UX Intern",
    company: "QualitApps Asia (Pvt) Ltd",
    period: "June 2019 – Sept 2019",
    description: [
      "Mentored junior developers, providing code reviews, UX feedback, and technical guidance to elevate overall engineering quality",
      "Learned front-end development fundamentals and design principles",
      "Supported senior engineers in building UI components",
    ],
    gradient: "from-indigo via-lavender to-violet",
    bgGradient: "from-indigo/20 to-lavender/10",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-gradient-to-br from-indigo/15 via-violet/10 to-lavender/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
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
            <span className="inline-block px-4 py-2 rounded-full bg-white/80 text-indigo text-sm font-medium mb-4 shadow-sm">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My Professional
              <span className="text-gradient"> Journey</span>
            </h2>
          </motion.div>

          {/* Experience Cards - Horizontal Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.period}
                variants={fadeUpVariants}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <motion.div
                  className={`h-full bg-white rounded-3xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-lavender/20 relative overflow-hidden`}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${exp.gradient}`} />
                  
                  {/* Hover background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Period badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${exp.bgGradient}`}>
                        <Calendar className="w-4 h-4 text-indigo" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-gradient transition-all">
                      {exp.title}
                    </h3>
                    
                    {/* Company */}
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-2">
                          <ArrowRight className="w-4 h-4 text-violet shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
