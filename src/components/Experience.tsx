import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "./ui/motion";
import { Briefcase, Calendar, Rocket, TrendingUp, Star, Zap, ChevronDown } from "lucide-react";

const experiences = [
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
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-gradient-to-br from-indigo/10 via-violet/5 to-lavender/15 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-indigo/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-violet/10 rounded-full blur-3xl"
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
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-indigo/10 text-indigo text-sm font-medium mb-4 border border-indigo/20">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              My Professional
              <span className="text-gradient"> Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg">From intern to senior engineer — my growth story</p>
          </motion.div>

          {/* Journey summary - NOW AT TOP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-4 md:gap-6 px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo/10 via-violet/10 to-lavender/10 backdrop-blur-sm border border-indigo/20 shadow-lg">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-indigo" />
                <span className="text-foreground font-semibold">6+ Years</span>
              </div>
              <div className="w-px h-6 bg-indigo/20" />
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-violet" />
                <span className="text-foreground font-semibold">4 Roles</span>
              </div>
              <div className="w-px h-6 bg-indigo/20" />
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-lavender" />
                <span className="text-foreground font-semibold">Continuous Growth</span>
              </div>
            </div>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Main vertical connecting line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo/30 via-violet/30 to-lavender/30" />
            <motion.div 
              className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-indigo via-violet to-lavender origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ height: '100%' }}
            />

            {/* Journey Steps */}
            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={exp.title + exp.period}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`relative flex items-start gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline node - Center */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring" }}
                        className="relative"
                      >
                        {/* Outer ring - pulsing for current */}
                        {exp.isCurrent && (
                          <motion.div 
                            className="absolute -inset-2 rounded-full bg-indigo/30"
                            animate={{ 
                              scale: [1, 1.3, 1],
                              opacity: [0.3, 0.1, 0.3],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        )}
                        {/* Icon circle */}
                        <motion.div 
                          className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg border-4 border-white`}
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                      </motion.div>
                      
                      {/* Arrow down (hidden on last item) */}
                      {index < experiences.length - 1 && (
                        <motion.div 
                          className="flex justify-center mt-2"
                          initial={{ opacity: 0, y: -5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                        >
                          <ChevronDown className="w-5 h-5 text-indigo/40" />
                        </motion.div>
                      )}
                    </div>

                    {/* Card - Alternating sides on desktop */}
                    <div className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                      <motion.div
                        className={`group relative bg-white rounded-2xl p-6 border border-lavender/30 shadow-card hover:shadow-lg transition-all duration-500 ${exp.isCurrent ? 'ring-2 ring-indigo/30 shadow-lg' : ''}`}
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Gradient accent bar */}
                        <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${exp.gradient}`} />
                        
                        {/* Current badge */}
                        {exp.isCurrent && (
                          <motion.div 
                            className="absolute -top-3 right-4"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-indigo to-violet text-white shadow-lg">
                              Current
                            </span>
                          </motion.div>
                        )}

                        {/* Year badge */}
                        <div className="mb-3">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${exp.isCurrent ? 'bg-indigo/10 text-indigo' : 'bg-lavender/20 text-violet'}`}>
                            {exp.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                          {exp.title}
                        </h3>
                        
                        {/* Company */}
                        <div className="flex items-center gap-2 text-muted-foreground mb-3">
                          <Briefcase className="w-4 h-4 text-indigo" />
                          <span className="text-sm font-medium">{exp.company}</span>
                        </div>

                        {/* Period */}
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                          <Calendar className="w-4 h-4 text-violet" />
                          <span className="text-sm">{exp.period}</span>
                        </div>

                        {/* Description */}
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <motion.li 
                              key={i} 
                              className="text-muted-foreground text-sm flex gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 + 0.3 }}
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient} shrink-0 mt-1.5`} />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Empty space for the other side on desktop */}
                    <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;