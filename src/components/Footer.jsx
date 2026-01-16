import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Heart } from 'lucide-react'

const Footer = ({ darkMode = true }) => {
  return (
    <footer className={`py-12 px-6 border-t ${
      darkMode ? 'border-gray-800' : 'border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className={`text-2xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>Let's Connect</h3>
          <p className={`mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>I'm always open to discussing new opportunities and interesting projects.</p>

          <div className="flex justify-center gap-6 mb-8">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:kikola0409@gmail.com"
              className={`p-3 rounded-full transition-colors ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:adeniran.kikiolaoluwa0409@gmail.com"
              className={`p-3 rounded-full transition-colors ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <Mail size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/kikiolaoluwa09"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/kikiolaoluwa-adeniran-bb1b91336/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <Linkedin size={20} />
            </motion.a>
          </div>

          <div className={`flex items-center justify-center gap-2 text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>by Kikiolaoluwa Adeniran</span>
          </div>

          <p className={`text-xs mt-4 ${
            darkMode ? 'text-gray-600' : 'text-gray-500'
          }`}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer