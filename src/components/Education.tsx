import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "./ui/motion";
import { GraduationCap, Award, BookOpen, Medal } from "lucide-react";

const education = [
  {
    degree: "BSc (Hons) in Computing",
    grade: "Second Upper Class",
    institution: "University of Coventry (UK), in collaboration with NIBM, Sri Lanka",
    year: "2021",
    icon: GraduationCap,
  },
  {
    degree: "Higher National Diploma in Software Engineering",
    institution: "NIBM, Sri Lanka",
    year: "2019",
    icon: Award,
  },
  {
    degree: "Diploma in Computer System Designing",
    institution: "NIBM, Sri Lanka",
    year: "2018",
    icon: BookOpen,
  },
  {
    degree: "Certificate in Computer Science",
    institution: "NIBM, Sri Lanka",
    year: "2017",
    icon: Medal,
  },
  {
    degree: "G.C.E Advanced Level - Maths Stream",
    institution: "Viharamahadevi Balika Vidyalaya, Kiribathgoda",
    year: "2015",
    icon: BookOpen,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-gradient-to-br from-lavender/10 via-background to-indigo/5 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-[0.12] bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/images/education-bg.png')" }}
      />
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
            <span className="inline-block px-4 py-2 rounded-full bg-lavender/20 text-violet text-sm font-medium mb-4 border border-lavender/30">
              Education
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Academic
              <span className="text-gradient"> Background</span>
            </h2>
          </motion.div>

          {/* Education cards */}
          <div className="space-y-4">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-5 border border-lavender/30 shadow-card hover:shadow-lg transition-all duration-300 flex items-center gap-4">
                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo to-violet flex items-center justify-center shrink-0"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display font-semibold text-foreground group-hover:text-gradient transition-all">
                            {edu.degree}
                          </h3>
                          {edu.grade && (
                            <span className="inline-block px-2 py-0.5 rounded-full bg-indigo/10 text-indigo text-xs font-medium mt-1">
                              {edu.grade}
                            </span>
                          )}
                          <p className="text-sm text-muted-foreground mt-1">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-lavender/20 text-violet text-sm font-bold shrink-0">
                          {edu.year}
                        </span>
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

export default Education;
