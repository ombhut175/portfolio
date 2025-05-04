import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaJava, 
  FaGitAlt, 
  FaGithub,
  FaMicrosoft,
  FaFileUpload,
  FaBox,
    FaPaw
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiGoogleanalytics,
  SiPassport,
  SiCloudinary, SiNextdotjs, SiTypescript, SiFlutter, SiDart,SiSwr
} from 'react-icons/si';

const skillsData = [
  {
    title: 'MERN Stack',
    icons: [
      { Icon: FaReact, color: '#61DAFB', darkColor: '#61DAFB', name: 'React' },
      { Icon: SiNextdotjs, color: '#000000', darkColor: '#FFFFFF', name: 'Next.js' },
      { Icon: SiExpress, color: '#000000', darkColor: '#FFFFFF', name: 'Express' },
      { Icon: SiMongodb, color: '#47A248', darkColor: '#47A248', name: 'MongoDB' },
      { Icon: FaNodeJs, color: '#339933', darkColor: '#339933', name: 'Node.js' }
    ],
    description: 'Full-stack web development'
  },
  {
    title: 'Cross-Platform Development',
    icons: [
      { Icon: SiFlutter, color: '#02569B', darkColor: '#02569B', name: 'Flutter' },
    ],
    description: 'Building mobile applications with Flutter and Dart'
  },
  {
    title: 'Database',
    icons: [
      { Icon: FaMicrosoft, color: '#00A4EF', darkColor: '#00A4EF', name: 'MSSQL' },
      { Icon: FaDatabase, color: '#336791', darkColor: '#336791', name: 'SQL' },
    ],
    description: 'Database management & querying'
  },
  {
    title: 'Programming',
    icons: [
      { Icon: FaJava, color: '#007396', darkColor: '#007396', name: 'Java' },
      { Icon: SiTypescript, color: '#3178C6', darkColor: '#3178C6', name: 'TypeScript' },
      { Icon: SiDart, color: '#02569B', darkColor: '#02569B', name: 'Dart' }
    ],
    description: 'DSA, Problem solving & Cross-platform development'
  },
  {
    title: 'Version Control',
    icons: [
      { Icon: FaGitAlt, color: '#F05032', darkColor: '#F05032', name: 'Git' },
      { Icon: FaGithub, color: '#181717', darkColor: '#FFFFFF', name: 'GitHub' }
    ],
    description: 'Source control & collaboration'
  }
];

const toolsData = {
  title: 'Development Tools',
  icons: [
    { Icon: SiRedux, color: '#764ABC', darkColor: '#764ABC', name: 'Redux Toolkit' },
    { Icon: FaPaw, color: '#FF7EDB', darkColor: '#FF7EDB', name: 'Zustand' },
    { Icon: SiSwr, color: '#000000', darkColor: '#FFFFFF', name: 'SWR' },
    { Icon: FaFileUpload, color: '#FF6B00', darkColor: '#FF6B00', name: 'Multer' },
    { Icon: SiCloudinary, color: '#3448C5', darkColor: '#3448C5', name: 'Cloudinary' },
    { Icon: SiPassport, color: '#34E27A', darkColor: '#34E27A', name: 'Passport OAuth' },
    { Icon: SiSocketdotio, color: '#010101', darkColor: '#FFFFFF', name: 'Socket.IO' },
    { Icon: SiTailwindcss, color: '#38B2AC', darkColor: '#38B2AC', name: 'Tailwind CSS' },
    { Icon: SiGoogleanalytics, color: '#E37400', darkColor: '#E37400', name: 'Google Analytics' }
  ],
  description: 'Essential tools and libraries for modern web development'
};

function SkillCard({ skill, index }) {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
      <div className="flex flex-wrap gap-4 mb-4 justify-center">
        {skill.icons.map(({ Icon, color, darkColor, name }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <Icon 
              className="text-4xl mb-1 transition-colors" 
              style={{ color: darkMode ? darkColor : color }}
            />
            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
    </motion.div>
  );
}

function ToolsSection() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg group"
    >
      <h3 className="text-xl font-bold mb-6 text-center">{toolsData.title}</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-6">
        {toolsData.icons.map(({ Icon, color, darkColor, name }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
            whileHover={{ scale: 1.15, rotate: 360 }}
            className="flex flex-col items-center"
          >
            <Icon 
              className="text-3xl mb-2 transition-all duration-300" 
              style={{ color: darkMode ? darkColor : color }}
            />
            <span className="text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-center">
        {toolsData.description}
      </p>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Expertise in modern technologies and development practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>

        <ToolsSection />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl"
        >
          <h3 className="text-xl font-bold mb-4 text-center">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Data Structures',
              'Algorithms',
              'Problem Solving',
              'API Design',
              'Database Design',
              'System Architecture'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-3 bg-white dark:bg-gray-700 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
