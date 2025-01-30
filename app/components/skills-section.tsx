"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FaReact, FaNodeJs, FaAws, FaPython, FaDocker, FaGitAlt } from "react-icons/fa"
import { SiTypescript, SiMongodb, SiPostgresql, SiRedux, SiGraphql, SiTailwindcss } from "react-icons/si"

const skills = [
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "MongoDB", icon: SiMongodb },
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: FaDocker },
  { name: "Python", icon: FaPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redux", icon: SiRedux },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Git", icon: FaGitAlt },
  { name: "Tailwind CSS", icon: SiTailwindcss },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gradient">Skills & Tech Stack</h2>
        <div className="relative">
          <div className="flex space-x-8 animate-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className="w-32 h-32 bg-card/50 backdrop-blur-sm border-primary/10 flex items-center justify-center">
                  <CardContent className="p-4 text-center">
                    <skill.icon className="text-4xl mb-2 text-primary mx-auto" />
                    <h3 className="text-sm font-medium">{skill.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

