import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const projects = [
  {
    id: 1,
    title: "E-commerce App",
    description: "A full-featured e-commerce mobile app built with React Native",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React Native", "Redux", "Node.js"],
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "A responsive web dashboard for social media analytics",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "D3.js", "Express"],
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "A cross-platform mobile app for tracking workouts and nutrition",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React Native", "GraphQL", "MongoDB"],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/projects/${project.id}`}>
                  <motion.button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

