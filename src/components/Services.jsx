import { motion } from 'framer-motion'
import { Monitor, Smartphone } from 'lucide-react'
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa'
import { SiJavascript, SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const Services = ({ darkMode = true }) => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications with seamless user experiences using Expo and React Native.'
    }
  ]

  const techStack = [
    { label: 'React Native', Icon: TbBrandReactNative },
    { label: 'React.js', Icon: FaReact },
    { label: 'JavaScript', Icon: SiJavascript },
    { label: 'TypeScript', Icon: SiTypescript },
    { label: 'Tailwind CSS', Icon: SiTailwindcss },
    { label: 'Supabase', Icon: SiSupabase },
    { label: 'HTML', Icon: FaHtml5 },
    { label: 'CSS', Icon: FaCss3Alt },
    { label: 'Git', Icon: FaGitAlt },
    { label: 'GitHub', Icon: FaGithub }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            className={`text-3xl lg:text-4xl font-bold mb-4 bg-linear-to-r bg-clip-text text-transparent ${
              darkMode 
                ? 'from-white to-gray-300'
                : 'from-gray-900 to-gray-600'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Services
          </motion.h2>
          <motion.p
            className={`text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            What I offer
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, _index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
              className={`group relative backdrop-blur-sm rounded-xl p-8 border transition-all duration-500 overflow-hidden cursor-pointer ${
                darkMode 
                  ? 'bg-gray-900/50 border-gray-800/50 hover:border-gray-700/70'
                  : 'bg-white/50 border-gray-200/50 hover:border-gray-300/70'
              }`}
            >
              {/* Background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  darkMode 
                    ? 'from-gray-800/20 to-transparent'
                    : 'from-gray-200/20 to-transparent'
                }`}
                initial={false}
                whileHover={{ scale: 1.1 }}
              />

              <motion.div
                className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-linear-to-br from-gray-800 to-gray-900 group-hover:shadow-gray-800/50'
                    : 'bg-linear-to-br from-gray-100 to-gray-200 group-hover:shadow-gray-400/50'
                } group-hover:shadow-lg`}
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                <service.icon
                  size={32}
                  className={`transition-colors duration-300 ${
                    darkMode 
                      ? 'text-gray-300 group-hover:text-white'
                      : 'text-gray-600 group-hover:text-gray-900'
                  }`}
                />
              </motion.div>

              <motion.h3
                className={`text-xl font-semibold mb-4 relative z-10 transition-colors duration-300 ${
                  darkMode 
                    ? 'group-hover:text-white'
                    : 'group-hover:text-gray-900'
                }`}
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {service.title}
              </motion.h3>

              <motion.p
                className={`leading-relaxed relative z-10 transition-colors duration-300 ${
                  darkMode 
                    ? 'text-gray-400 group-hover:text-gray-300'
                    : 'text-gray-600 group-hover:text-gray-700'
                }`}
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {service.description}
              </motion.p>

              {/* Subtle glow effect */}
              <motion.div
                className="absolute -inset-1 bg-linear-to-r from-gray-700/20 to-gray-600/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 text-center"
        >
          <h3
            className={`text-lg font-semibold mb-5 ${
              darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}
          >
            Tech Stack
          </h3>

          <div className="flex flex-wrap justify-center gap-3 cursor-pointer">
            {techStack.map(({ label, Icon }) => (
              <motion.div
                key={label}
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm transition-colors duration-300 ${
                  darkMode
                    ? 'bg-gray-900/40 border-gray-800/50 text-gray-300 hover:text-white'
                    : 'bg-white/50 border-gray-200/60 text-gray-700 hover:text-gray-900'
                }`}
              >
                <Icon className="text-[18px]" aria-hidden="true" />
                <span className="text-sm font-medium">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services