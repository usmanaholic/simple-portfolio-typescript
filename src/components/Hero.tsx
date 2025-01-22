import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

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
    <div className="absolute inset-0 bg-[linear-gradient(102.3deg,rgba(147,39,143,0.05)_5.9%,rgba(234,172,232,0.05)_64%)]" />
  </div>
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="text-center max-w-4xl mx-auto relative"
  >
    <motion.span
      variants={itemVariants}
      className="text-sm tracking-widest mb-4 block text-accent"
    >
      Hi, I'm Usman! (The guy your code warned you about.)
    </motion.span>
    <motion.h1
      variants={itemVariants}
      className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent"
    >
      Turning Coffee into Code (and sometimes Bugs)
    </motion.h1>
    <motion.p
      variants={itemVariants}
      className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
    >
      I’m not just a developer; I’m a professional Googler, a bug whisperer, and a proud owner of 999+ open browser tabs. Let’s make your digital dreams come true… or at least mildly functional.
    </motion.p>
    <motion.div
      variants={itemVariants}
      className="flex gap-4 justify-center"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gradient-to-r from-accent to-primary text-white rounded-full font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
        onClick={() => window.open('https://github.com/usmanaholic', '_blank')}
      >
        Stalk My Code
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-accent/20 rounded-full font-medium hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
        onClick={() => window.location.href = '#contact'}
      >
        Conatct me
      </motion.button>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-6 h-6 text-accent" />
      </motion.div>
    </motion.div>
  </motion.div>
</section>

  );
};