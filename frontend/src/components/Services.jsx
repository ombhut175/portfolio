import { motion } from 'framer-motion';
import {FaDatabase, FaProjectDiagram, FaShieldAlt} from 'react-icons/fa';
import {FaCloud, FaServer} from "react-icons/fa6";

function Services() {
  const services = [
        {
          icon: <FaServer />,
          title: 'Backend Development',
          description: 'Building scalable and high-performance backend systems using Node.js and Express.',
        },
        {
          icon: <FaDatabase />,
          title: 'Database Management',
          description: 'Efficiently managing MongoDB and SQL databases for optimized data storage and retrieval.',
        },
        {
          icon: <FaProjectDiagram />,
          title: 'API Development',
          description: 'Designing and implementing RESTful API\'s.',
        },
        {
          icon: <FaShieldAlt />,
          title: 'Authentication & Security',
          description: 'Implementing secure authentication, authorization, and data protection strategies.',
        },
        {
          icon: <FaCloud />,
          title: 'Cloud Deployment',
          description: 'Deploying applications on cloud platforms with microservices architecture.',
        }
      ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Providing comprehensive design solutions to help your business stand out
            in the digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="service-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <motion.div 
                className="text-4xl text-primary mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;