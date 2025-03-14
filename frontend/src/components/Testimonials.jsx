import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      name: 'John Doe',
      role: 'CEO at TechCorp',
      text: 'Working with Fawzi was an absolute pleasure. His attention to detail and creative approach to UI/UX design transformed our product.',
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      name: 'Jane Smith',
      role: 'Product Designer',
      text: 'Exceptional talent in creating user-centered designs. The results exceeded our expectations and user engagement improved significantly.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear what my clients have to say about their experience working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-primary">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;