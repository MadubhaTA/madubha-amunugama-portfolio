import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "./ui/motion";
import { Button } from "./ui/button";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "madubhaamunugama@gmail.com",
    href: "mailto:madubhaamunugama@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 71 309 3834",
    href: "tel:+94713093834",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/madubha-amunugama-398594174",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kadawatha, Sri Lanka",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-violet/15 via-lavender/10 to-indigo/15 relative overflow-hidden">
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
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Work
              <span className="text-gradient"> Together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6 mb-12"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 flex items-center gap-4 hover:shadow-card transition-all duration-300 group border border-lavender/20 shadow-sm"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-lavender/20 shadow-card">
              <h3 className="text-2xl font-display font-semibold mb-4">
                Ready to start your next project?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Whether you need a complete frontend solution or UI/UX expertise, I'm here to help bring your vision to life.
              </p>
              <a href="mailto:madubhaamunugama@gmail.com">
                <Button size="lg" variant="hero">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Me an Email
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
