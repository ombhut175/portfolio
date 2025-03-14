import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Design Together</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to start your next project? Get in touch and let's create something amazing together.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <form className="space-y-6">
            <motion.div whileHover={{ scale: 1.02 }}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-all duration-300"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-all duration-300"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-all duration-300"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;