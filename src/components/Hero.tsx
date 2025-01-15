import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <span className="text-sm uppercase tracking-widest mb-4 block text-muted-foreground">
          Welcome to my portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Creating Digital Experiences That Matter
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm a passionate developer focused on building beautiful, functional, and user-centered digital experiences.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
};