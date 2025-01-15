import { motion } from "framer-motion";

export const Contact = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="section-padding relative overflow-hidden" id="contact">
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
          Get in Touch
        </motion.span>
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary"
        >
          Let's Connect
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="glass rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Your name"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  placeholder="Your email"
                />
              </motion.div>
            </div>
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all h-32"
                placeholder="Your message"
              ></textarea>
            </motion.div>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-accent to-primary text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};