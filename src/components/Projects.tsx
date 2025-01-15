import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and TypeScript",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Two",
    description: "Responsive e-commerce platform with seamless user experience",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Project Three",
    description: "Mobile-first web application with real-time features",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Firebase", "Redux"],
  },
];

export const Projects = () => {
  return (
    <section className="section-padding relative overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10" />
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest mb-4 block text-accent"
        >
          Featured Work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary"
        >
          Latest Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-48 overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-accent/10 to-primary/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};