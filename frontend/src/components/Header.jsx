import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { toggleTheme } from '../store/themeSlice';
import { FaSun, FaMoon } from 'react-icons/fa';

function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <header className="fixed w-full top-0 z-50 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold"
        >
          Port<span className="text-primary">FOLIO</span>
        </motion.div>
        
        <div className="flex items-center gap-8">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>

          <a href="/resume.pdf" download>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90">
              Download Resume
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;