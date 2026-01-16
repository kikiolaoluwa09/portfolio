import { motion } from "framer-motion";
import { Mail, Download, Linkedin } from "lucide-react";
import image from "../assets/profile.jpg";

const Hero = ({ darkMode = true }) => {
  const handleResumeDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = "/Adeniran Kikiolaoluwa Victor's Resume.pdf";
      link.download = "Adeniran_Kikiolaoluwa_Victor_Resume.pdf";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      window.open("/Adeniran Kikiolaoluwa Victor's Resume.pdf", "_blank");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        className={`absolute inset-0 bg-linear-to-br ${
          darkMode
            ? "from-gray-900/20 via-transparent to-gray-800/20"
            : "from-gray-100/20 via-transparent to-gray-200/20"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10"
      >
        {/* Left content section */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Hi,I'm
              <motion.span
                className={`bg-linear-to-r bg-clip-text text-transparent inline-block ${
                  darkMode
                    ? "from-white via-gray-200 to-gray-400"
                    : "from-gray-900 via-gray-700 to-gray-500"
                }`}
                whileHover={{
                  backgroundPosition: ["0%", "100%"],
                  transition: { duration: 1 },
                }}
                style={{ backgroundSize: "200%" }}
              >
                Kikiolaoluwa Adeniran
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-base lg:text-lg leading-relaxed mx-auto lg:mx-0 max-w-xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Frontend / Mobile Development Intern experienced in building
            responsive mobile and web interfaces with React and React Native.
            Delivered production-ready projects including a React Native Food
            Delivery App, expense tracker, and React-based Netflix clone,
            showcasing strong component architecture, state management, and UI
            polish. Effective at debugging UI issues, refactoring for
            maintainability, and shipping clean, user-first mobile experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
              href="mailto:kikola0409@gmail.com"
              className={`group relative px-5 py-2.5 rounded-lg transition-all duration-300 overflow-hidden ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative flex items-center gap-2 text-sm">
                <Mail size={16} />
                Email
              </span>
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
              href="mailto:adeniran.kikiolaoluwa victor"
              className={`group relative px-5 py-2.5 rounded-lg transition-all duration-300 overflow-hidden ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-green-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative flex items-center gap-2 text-sm">
                <Mail size={16} />
                Alt Email
              </span>
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/kikiolaoluwa-adeniran-bb1b91336/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-5 py-2.5 rounded-lg transition-all duration-300 overflow-hidden ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative flex items-center gap-2 text-sm">
                <Linkedin size={16} />
                LinkedIn
              </span>
            </motion.a>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className={`group relative px-5 py-2.5 rounded-lg transition-all duration-300 overflow-hidden ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <motion.div
                className="absolute inset-0 bg-gradien  t-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative flex items-center gap-2 text-sm">
                <Download size={16} />
                Resume
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right image section */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center order-1 lg:order-2"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: [0, -2, 2, 0],
              transition: { duration: 0.6 },
            }}
            className={`relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-112 rounded-2xl overflow-hidden shadow-2xl ${
              darkMode
                ? "bg-black"
                : "bg-linear-to-br from-gray-100 to-gray-300"
            }`}
          >
            {/* Animated background */}
            <motion.div
              className={`absolute inset-0 ${
                darkMode
                  ? "bg-linear-to-br from-gray-600/20 to-gray-800/20"
                  : "bg-linear-to-br from-gray-200/20 to-gray-400/20"
              }`}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Image container */}
            <div className="w-full h-full flex items-center justify-center relative z-10 p-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="w-full h-full"
              >
                <motion.img
                  src={image}
                  alt="Kikiolaoluwa Adeniran"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </div>

            {/* Subtle glow effect */}
            <motion.div
              className={`absolute -inset-2 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                darkMode
                  ? "bg-linear-to-r from-gray-700/30 to-gray-600/30"
                  : "bg-linear-to-r from-gray-300/30 to-gray-400/30"
              }`}
              initial={false}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
