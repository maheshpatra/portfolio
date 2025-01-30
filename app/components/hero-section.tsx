"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export function HeroSection() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <img
          src="/placeholder.svg?height=200&width=200"
          alt="Mahesh Patra"
          className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-primary"
        />
        <h1 className="text-4xl font-bold mb-2 text-gradient">Mahesh Patra</h1>
        <TypeAnimation
          sequence={["Full Stack Developer", 2000, "React Enthusiast", 2000, "Problem Solver", 2000]}
          wrapper="h2"
          speed={50}
          repeat={Number.POSITIVE_INFINITY}
          className="text-2xl text-primary"
        />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
        <Button className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90">Download Resume</Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex space-x-4"
      >
        <a href="#" className="text-2xl hover:text-primary transition-colors">
          <FaGithub />
        </a>
        <a href="#" className="text-2xl hover:text-primary transition-colors">
          <FaLinkedin />
        </a>
        <a href="#" className="text-2xl hover:text-primary transition-colors">
          <FaTwitter />
        </a>
      </motion.div>
    </section>
  )
}

