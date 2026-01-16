import { motion } from 'framer-motion'

const Experience = ({ darkMode = true }) => {
  const experiences = [
    {
      title: 'Frontend Engineering Intern ',
      company: 'Rex Health (Remote)',
      period: 'June 2025 – September 2025',
      description: 'Developed and maintained the marketing website of the company using technologies like React, TypeScript and tailwindcss. Collaborated with design teams to implement pixel-perfect UIs',
      achievements: [
        'Maintained and enhanced the company’s application UI using React and JavaScript.',
        'Debugged and resolved UI inconsistencies, layout issues, and component rendering bugs.',
        'Implemented responsive, visually consistent designs with Tailwind CSS across device sizes.',
        'Refactored existing screens under supervision to improve readability, maintainability, and adherence to design standards.'

      ]
    },
    {
      title: 'Frontend Engineering Intern ',
      company: 'Codveda (Remote)',
      period: 'September 2025 – October 2025',
      description: 'Focused on creating engaging user interfaces and improving user experience. Worked closely with UX designers to translate designs into functional components.',
      achievements: [
        'Built responsive web interfaces using HTML, CSS, and JavaScript for mobile, tablet, and desktop.',
        'Developed interactive UI features including form validation, real-time feedback, and dynamic DOM updates.',
        'Created reusable React components, applying state management and single-page navigation concepts.',
        'Integrated REST APIs, handling loading and error states for reliable data rendering.',
        'Refined UI and code quality based on feedback, focusing on clarity, responsiveness, and consistency'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>Experience</h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>My professional journey</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-lg p-6 border ${
                darkMode 
                  ? 'bg-gray-900 border-gray-800'
                  : 'bg-white border-gray-200'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>{exp.title}</h3>
                  <p className={`${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{exp.company}</p>
                </div>
                <span className={`text-sm mt-2 md:mt-0 ${
                  darkMode ? 'text-gray-500' : 'text-gray-400'
                }`}>{exp.period}</span>
              </div>

              <p className={`mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>{exp.description}</p>

              <div>
                <h4 className={`text-sm font-semibold mb-2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Key Achievements:</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li className={`text-sm flex items-start ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <span className={`mr-2 ${
                        darkMode ? 'text-gray-500' : 'text-gray-400'
                      }`}>•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience