import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex items-center px-4 sm:px-6 md:px-20 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        >
          <p>
            I'm Siddiqat Abdulkareem — a passionate <strong>frontend developer</strong> who believes in building clean, accessible, and user-focused digital experiences. Whether I’m writing code, managing content, or strategizing community engagement, I always aim to create work that resonates.
          </p>

          <p>
            I'm currently the <strong>Community & Content Manager at Novatify Technologies</strong>, where I foster tech communities, drive meaningful engagement, and create content that helps others grow. I also write <strong>technical articles</strong> and documentation aimed at simplifying complex topics for developers and beginners.
          </p>

          <p>
            Beyond my role in tech, I’m the voice behind <strong>"Fragments of Growth"</strong>, a podcast that dives into self-reflection, growth, and the small shifts that shape who we become. Each episode is an honest conversation about values, purpose, and personal evolution — and I love creating that space.
          </p>

          <p>
            I'm driven by a love for storytelling, a deep respect for clarity, and the desire to make technology and personal development feel more human and attainable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
