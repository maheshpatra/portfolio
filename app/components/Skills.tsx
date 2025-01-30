"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "React Native", icon: "📱" },
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Redux", icon: "🔄" },
  { name: "GraphQL", icon: "🔍" },
  { name: "Node.js", icon: "🟩" },
  { name: "Express", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center flex flex-col items-center justify-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 },
              }}
            >
              <motion.span
                className="text-4xl mb-2"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {skill.icon}
              </motion.span>
              <span className="text-lg font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

