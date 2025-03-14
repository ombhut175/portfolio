import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      image: "/projects/ecommerce.png",
      title: 'Fully Functional Ecommerce Site',
      category: 'Full Stack Development',
      link: 'https://github.com/ombhut175/AdaaEcommerce'
    },
    {
      image: "/projects/urlShortner.png",
      title: 'Url Shortner',
      category: 'Full Stack Development',
      link: 'https://github.com/ombhut175/ShortUrl'
    }
  ];

  return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">My Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Showcasing some of my best work in Full Stack Development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="project-card group relative overflow-hidden rounded-xl shadow-lg"
                  >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-300">{project.category}</p>
                      </div>
                    </div>
                  </motion.div>
                </a>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Projects;