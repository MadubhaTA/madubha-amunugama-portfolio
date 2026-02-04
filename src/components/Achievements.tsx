import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "./ui/motion";
import { Trophy, Zap, Users, Code2, Target, Rocket } from "lucide-react";

const achievements = [
  {
    text: "Designed and implemented responsive UI frameworks using Vuetify, Tailwind CSS, SCSS and Bootstrap, improving frontend performance and design consistency.",
    icon: Code2,
    color: "from-indigo to-violet",
  },
  {
    text: "Architected and implemented modular Angular frontend frameworks supporting multiple enterprise platforms improving scalability and reducing redundancy across products.",
    icon: Rocket,
    color: "from-violet to-lavender",
  },
  {
    text: "Owned full lifecycle of complex UI features (design → development → deployment) for AI Chatbot and Leave Management systems serving large user bases.",
    icon: Target,
    color: "from-lavender to-indigo",
  },
  {
    text: "Played a key role in sprint planning and execution deadlines and projects milestones.",
    icon: Zap,
    color: "from-indigo to-violet",
  },
  {
    text: "Led team adoption of reusable design systems and coding standards, improving front-end consistency and reducing maintenance overhead.",
    icon: Trophy,
    color: "from-violet to-lavender",
  },
  {
    text: "Mentored junior developers, providing code reviews, UX feedback, and technical guidance to elevate overall engineering quality.",
    icon: Users,
    color: "from-lavender to-indigo",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 md:py-32 bg-gradient-to-br from-violet/10 via-indigo/5 to-lavender/10">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          {/* Section header */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-indigo/10 text-indigo text-sm font-medium mb-4 border border-indigo/20">
              Achievements
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Key
              <span className="text-gradient"> Achievements</span>
            </h2>
          </motion.div>

          {/* Achievements grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <div className="h-full bg-white rounded-xl p-6 border border-lavender/30 shadow-card hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${achievement.color}`} />
                    
                    <div className="flex gap-4 pl-3">
                      {/* Icon */}
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shrink-0`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* Content */}
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {achievement.text}
                      </p>
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

export default Achievements;
