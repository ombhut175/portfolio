import { motion } from 'framer-motion';
import {  FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Hero() {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <section className="min-h-screen pt-20 flex items-center">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
          >
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-2"
            >
              Hi I am
            </motion.h2>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold mb-4"
            >
              Om Bhut
              <br />
              <span className="text-primary">Full Stack Developer</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg capitalize"
            >
              a passionate Full-Stack Developer specializing in the MERN stack, with a strong grasp of modern development tools and frameworks
            </motion.p>

            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors shadow-lg"
                onClick={scrollToContact}
            >
              Reach Out To Me
            </motion.button>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-6 mt-8"
            >
              {[
                { Icon: FaTwitter, link: 'https://x.com/Om_Bhut1725?t=SBv3J4S8C-ER0BNPtQuFHA&s=08' },
                { Icon: FaInstagram, link: 'https://www.instagram.com/reactivcoderz/?igsh=MWp5MHNnNDBkNWtoNw%3D%3D#' },
                { Icon: FaLinkedin, link: 'https://www.linkedin.com/in/om-bhut-ab93972b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
              ].map(({ Icon, link }, index) => (
                  <motion.a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: '#FF6B00' }}
                      className="text-2xl hover:text-primary transition-colors"
                  >
                    <Icon />
                  </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative float-animation"
          >
            <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl">
              <img
                  src="/photos/img1.jpg"
                  alt="Om Bhut"
                  className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
  );
}

export default Hero;