import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : 'light'}`}>
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        {/*<Testimonials />*/}
        {/*<Contact />*/}
      </main>
      <Footer />
    </div>
  );
}

export default App;