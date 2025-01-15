import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="section-padding bg-secondary" id="about">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <span className="text-sm uppercase tracking-widest mb-4 block text-muted-foreground">
          About Me
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Passionate About Creating
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              With a deep passion for clean code and user-centric design, I create digital solutions that make a difference. My approach combines technical expertise with creative problem-solving.
            </p>
            <p className="text-muted-foreground">
              I specialize in building responsive web applications that provide exceptional user experiences across all devices.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="font-semibold text-xl">Core Values</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Clean & Efficient Code</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>User-Centered Design</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Continuous Learning</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};