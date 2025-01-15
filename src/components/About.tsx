import { motion } from "framer-motion";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="section-padding relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 -z-10" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.span
          variants={itemVariants}
          className="text-sm uppercase tracking-widest mb-4 block text-accent"
        >
          About Me
        </motion.span>
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary"
        >
          Passionate About Creating
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <p className="text-muted-foreground">
              With a deep passion for clean code and user-centric design, I create digital solutions that make a difference. My approach combines technical expertise with creative problem-solving.
            </p>
            <p className="text-muted-foreground">
              I specialize in building responsive web applications that provide exceptional user experiences across all devices.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 space-y-4 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
              Core Values
            </h3>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 10 }}
                className="flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary" />
                <span>Clean & Efficient Code</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                className="flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary" />
                <span>User-Centered Design</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                className="flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary" />
                <span>Continuous Learning</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};