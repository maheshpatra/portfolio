"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "A React Native app for managing tasks and projects",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React Native", "Redux", "Firebase"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A weather app using React and OpenWeatherMap API",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "API Integration", "Styled Components"],
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState("All")
  const tags = ["All", ...new Set(projects.flatMap((project) => project.tags))]

  const filteredProjects =
    selectedTag === "All" ? projects : projects.filter((project) => project.tags.includes(selectedTag))

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gradient">Projects Showcase</h2>
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {tags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button
                variant={selectedTag === tag ? "default" : "outline"}
                onClick={() => setSelectedTag(tag)}
                className="text-sm"
              >
                {tag}
              </Button>
            </motion.div>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden group">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  <CardContent className="p-6">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover mb-4 rounded transition-transform group-hover:scale-105"
                    />
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="mb-4 text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>
                      <Button asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

