import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = ({ darkMode = true }) => {
  const projects = [
    {
      title: "FOOD DELIVERY MOBILE APP",
      description:
        "Built a polished, TypeScript-first food-delivery mobile prototype using Expo (React Native) demonstrating end-to-end app design: reusable, typed UI components, responsive layouts, and client-side state management for smooth user interaction.",
      technologies: [
        "TypeScript",
        "Expo (React Native)",
        "NativeWind (Tailwind)",
        "Zustand/Context",
      ],
      githubUrl: "https://github.com/kikiolaoluwa09/food-delivery-app-",
      // liveUrl: "https://ecommerce-demo.netlify.app",
    },
    {
      title: "HABIT TRACKING MOBILE APP",
      description:
        "Built a TypeScript-first habit-tracking mobile prototype demonstrating end-to-end app design: reusable, typed components, predictable state management, and persistent storage for habits and completion data.",
      technologies: [
        "TypeScript",
        "React Native ",
        "Context-based state management",
        "Modular folder structure",
      ],
      githubUrl: "https://github.com/kikiolaoluwa09/Habit-Tracking-App",
      // liveUrl: "https://taskmanager-demo.netlify.app",
    },
    {
      title: "FULLSTACK THREADS CLONE (SOCIAL FEED MOBILE APP)",
      description:
        "Built a mobile clone of a social feed platform using React Native and TypeScript with Supabase backend. Developed reusable UI components, responsive layouts, and thread-style feed interactions, demonstrating component structuring, state management, and mobile-first design principles.",
      technologies: [
        "TypeScript",
        "React Native",
        "Supabase",
        "Nativewind",
        "Context/Zustand for state",
      ],
      githubUrl: " https://github.com/kikiolaoluwa09/threads-clone",
      // liveUrl: "https://weather-dashboard-demo.netlify.app",
    },
    {
      title: "NETFLIX-STYLE STREAMING WEB UI",
      description:
        "Built a responsive Netflix-style streaming UI using React and Vite, focused on modern, component-driven development. Developed modular UI components (media cards, hero banners) and implemented a clear folder structure with tooling for clean code and fast builds.",
      technologies: ["React", "VIte", "JavaScript", "HTML", "CSS", "ESLint"],
      githubUrl: "https://github.com/kikiolaoluwa09/Netflix-Clone-Reactjs",
    },
    {
      title: "REX HEALTH MARKETING WEBSITE",
      description:
        "Built a responsive marketing website for a health-care startup, collaborated with senior developers using Javascript React, tailwindcss and other react libraries",
      technologies: ["React", "VIte", "JavaScript", "HTML", "TailwindCSS",  "React Libraries"],
      // githubUrl: "https://github.com/kikiolaoluwa09/Netflix-Clone-Reactjs",
       liveUrl: "https://myrexhealth.com/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-6">
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
              darkMode ? "from-white to-gray-300" : "from-gray-900 to-gray-600"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <motion.p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Some of my recent work
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, _index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateX: 5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.3,
                },
              }}
              whileTap={{ scale: 0.98 }}
              className={`group relative backdrop-blur-sm rounded-xl p-6 border transition-all duration-500 overflow-hidden ${
                darkMode
                  ? "bg-gray-900/50 border-gray-800/50 hover:border-gray-700/70"
                  : "bg-white/50 border-gray-200/50 hover:border-gray-300/70"
              }`}
            >
              {/* Background gradient */}
              <motion.div
                className={`absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  darkMode
                    ? "from-gray-800/10 via-transparent to-gray-700/10"
                    : "from-gray-200/10 via-transparent to-gray-300/10"
                }`}
                initial={false}
              />

              {/* Hover glow effect */}
              <motion.div
                className={`absolute -inset-1 bg-linear-to-r rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10 ${
                  darkMode
                    ? "from-gray-700/20 via-gray-600/10 to-gray-700/20"
                    : "from-gray-300/20 via-gray-400/10 to-gray-300/20"
                }`}
                initial={false}
              />

              <motion.div
                className="relative z-10"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.h3
                  className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                    darkMode
                      ? "group-hover:text-white"
                      : "group-hover:text-gray-900"
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                    darkMode
                      ? "text-gray-400 group-hover:text-gray-300"
                      : "text-gray-600 group-hover:text-gray-700"
                  }`}
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: { delay: techIndex * 0.1 },
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(75, 85, 99, 0.8)",
                      }}
                      className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                        darkMode
                          ? "bg-gray-800/70 text-gray-300 hover:text-white"
                          : "bg-gray-200/70 text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.a
                    whileHover={{
                      scale: 1.1,
                      x: -2,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                      darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.1,
                      x: 2,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                      darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
