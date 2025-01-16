import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Globe } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with attention to detail.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications with React Native.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Optimizing websites for better search engine visibility and performance.",
  },
];

export const Services = () => {
  return (
    <section className="section-padding relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 -z-10" />
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest mb-4 block text-accent"
        >
          What I Do
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary"
        >
          My Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-xl bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};