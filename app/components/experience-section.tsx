"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    company: "Current Company",
    position: "Lead Developer",
    duration: "Jan 2023 - Present",
    description: "Leading a team of developers in building innovative web applications using React and Node.js.",
  },
  {
    company: "Innovative Startup",
    position: "Full Stack Developer",
    duration: "Jun 2021 - Dec 2022",
    description:
      "Developed and maintained multiple web and mobile applications using React, React Native, and Node.js.",
  },
  {
    company: "Tech Corp",
    position: "Junior Developer",
    duration: "May 2019 - May 2021",
    description: "Assisted in the development of web applications and gained experience in front-end technologies.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{exp.company}</h3>
                  <h4 className="text-lg font-medium mb-2">{exp.position}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                  <p>{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

