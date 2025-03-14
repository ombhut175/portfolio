import { motion } from 'framer-motion';

function About() {
  const skills = [
        { name: 'Backend Development', progress: 95 },
        { name: 'API Development (REST)', progress: 90 },
        { name: 'Database Management (MongoDB, SQL)', progress: 90 },
        { name: 'Server-Side Optimization', progress: 85 },
        { name: 'Authentication & Security', progress: 85 },
        { name: 'Microservices & Cloud Deployment', progress: 80 }
      ]
  ;

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop"
                alt="About Me"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <div>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold mb-6"
            >
              About Me
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 mb-8"
            >
              A passionate Full-Stack Developer specializing in the MERN stack, with a strong grasp of modern development tools and frameworks
            </motion.p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;