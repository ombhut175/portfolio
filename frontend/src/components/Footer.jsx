import {SOCIAL_MEDIA_LINKS} from "../utils/array_const.js";

function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            Port<span className="text-primary">FOLIO</span>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm md:text-base px-2">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About Me</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Social Links */}
          <div className="flex gap-6">
            {SOCIAL_MEDIA_LINKS.map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                className="text-xl hover:text-primary transition-colors hover:scale-125 transform duration-300"
                aria-label={`Social media link ${index + 1}`}
              >
                <Icon />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;