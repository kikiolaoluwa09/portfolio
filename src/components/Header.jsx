import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'

const Header = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  const navItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' }
  ], [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode 
            ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/90 shadow-lg'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-lg'
          : darkMode
            ? 'bg-black/50 backdrop-blur-sm border-b border-transparent'
            : 'bg-white/50 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`text-xl font-bold cursor-pointer bg-linear-to-r ${
            darkMode 
              ? 'from-white to-gray-300' 
              : 'from-gray-900 to-gray-600'
          } bg-clip-text text-transparent`}
          onClick={() => scrollToSection('home')}
        >
          Kuks
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? darkMode ? 'text-white' : 'text-gray-900'
                  : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-lg -z-10 ${
                    darkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'
                  }`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors duration-300 ${
              darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-200/50'
            }`}
          >
            <motion.div
              initial={false}
              animate={{ rotate: darkMode ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
              darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-200/50'
            }`}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`md:hidden overflow-hidden backdrop-blur-md border-t transition-colors duration-300 ${
          darkMode 
            ? 'bg-black/95 border-gray-800/50' 
            : 'bg-white/95 border-gray-200/50'
        }`}
      >
        <div className="px-6 py-4 space-y-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : -20
              }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? darkMode 
                    ? 'text-white bg-gray-800/50'
                    : 'text-gray-900 bg-gray-200/50'
                  : darkMode
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/30'
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Header