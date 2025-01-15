import { motion } from "framer-motion";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-50" />
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto relative"
      >
        <motion.span
          variants={itemVariants}
          className="text-sm uppercase tracking-widest mb-4 block text-accent"
        >
          Welcome to my portfolio
        </motion.span>
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary"
        >
          Creating Digital Experiences That Matter
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          I'm a passionate developer focused on building beautiful, functional, and user-centered digital experiences.
        </motion.p>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-accent to-primary text-white rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl">
            View My Work
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};