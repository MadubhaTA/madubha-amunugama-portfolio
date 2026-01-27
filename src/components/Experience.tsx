import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "./ui/motion";
import { Briefcase, Calendar, ArrowRight, Rocket, TrendingUp, Star, Zap } from "lucide-react";

const experiences = [
  {
    title: "UI/UX Intern",
    company: "QualitApps Asia (Pvt) Ltd",
    period: "June 2019 – Sept 2019",
    year: "2019",
    description: [
      "Learned front-end development fundamentals and design principles",
      "Supported senior engineers in building UI components",
    ],
    icon: Star,
    gradient: "from-lavender to-violet",
  },
  {
    title: "Associate UI/UX Engineer",
    company: "QualitApps Asia (Pvt) Ltd",
    period: "Sept 2019 – Oct 2021",
    year: "2019-21",
    description: [
      "Developed responsive UI components using Angular, SCSS, and Material Design",
      "Created design mockups and prototypes for client presentations",
    ],
    icon: TrendingUp,
    gradient: "from-violet to-indigo",
  },
  {
    title: "UI/UX Engineer",
    company: "QualitApps Asia (Pvt) Ltd",
    period: "Oct 2021 – Mar 2023",
    year: "2021-23",
    description: [
      "Created responsive, accessible UI components with HTML, SCSS, and Angular Material",
      "Created UX wireframes and prototypes in Figma and Adobe XD",
    ],
    icon: Zap,
    gradient: "from-indigo to-violet",
  },
  {
    title: "Senior UI/UX Engineer",
    company: "QualitApps Asia (Pvt) Ltd",
    period: "March 2023 – Present",
    year: "2023+",
    description: [
      "Leading UI/UX design and development for multiple enterprise level applications",
      "Developed projects using Vuetify and Tailwind CSS for modern, responsive interfaces",
    ],
    icon: Rocket,
    gradient: "from-violet to-lavender",
    isCurrent: true,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-gradient-to-br from-indigo via-violet to-lavender relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.1, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
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
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4 border border-white/30">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
              My Professional
              <span className="text-white/80"> Journey</span>
            </h2>
            <p className="text-white/70 text-lg">From intern to senior engineer — my growth story</p>
          </motion.div>

          {/* Journey Path - Horizontal Timeline */}
          <div className="relative">
            {/* Main connecting line */}
            <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-1 bg-white/20 rounded-full" />
            <motion.div 
              className="hidden lg:block absolute top-[60px] left-0 h-1 bg-gradient-to-r from-white via-white/80 to-white rounded-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ width: '100%' }}
            />

            {/* Journey Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={exp.title + exp.period}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline node */}
                    <motion.div 
                      className="relative flex justify-center mb-6 lg:mb-8"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3, type: "spring" }}
                    >
                      {/* Outer ring - pulsing for current */}
                      <motion.div 
                        className={`absolute w-20 h-20 rounded-full ${exp.isCurrent ? 'bg-white/30' : 'bg-white/10'}`}
                        animate={exp.isCurrent ? { 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.1, 0.3],
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      {/* Icon circle */}
                      <motion.div 
                        className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg border-4 border-white/30 z-10`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      
                      {/* Arrow to next (hidden on last item) */}
                      {index < experiences.length - 1 && (
                        <motion.div 
                          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-full items-center px-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                        >
                          <ArrowRight className="w-5 h-5 text-white/60" />
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Year badge */}
                    <motion.div 
                      className="text-center mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                    >
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${exp.isCurrent ? 'bg-white text-indigo' : 'bg-white/20 text-white'}`}>
                        {exp.year}
                      </span>
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 ${exp.isCurrent ? 'ring-2 ring-white/50 shadow-xl' : ''}`}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Current badge */}
                      {exp.isCurrent && (
                        <motion.div 
                          className="absolute -top-3 left-1/2 -translate-x-1/2"
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-indigo shadow-lg">
                            Current
                          </span>
                        </motion.div>
                      )}

                      {/* Title */}
                      <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                        {exp.title}
                      </h3>
                      
                      {/* Company */}
                      <div className="flex items-center gap-2 text-white/70 mb-3">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium truncate">{exp.company}</span>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 text-white/60 mb-4">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="text-xs">{exp.period}</span>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <motion.li 
                            key={i} 
                            className="text-white/70 text-xs flex gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 + 0.5 }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.gradient} shrink-0 mt-1.5`} />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Journey summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="text-white/90 font-medium">5+ Years</span>
              </div>
              <div className="w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-white" />
                <span className="text-white/90 font-medium">4 Roles</span>
              </div>
              <div className="w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-300" />
                <span className="text-white/90 font-medium">Continuous Growth</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
