"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const milestones = [
  { year: 2018, title: "Started my journey", description: "Phonex Global Soft Pvt Ltd – Junior App Developer Developed MedPhox, a healthcare and medicine order app, with a focus on both iOS and Android platforms. Implemented key features such as prescription uploads, order tracking, and secure payment integration across both platforms. Integrated APIs for real-time data syncing, ensuring smooth functionality and user experience on both iOS and Android." },
  { year: 2019, title: "Acuity Software Services Pvt Ltd – Frontend Developer", description: "Customized web and mobile apps to meet client-specific requirements. Built responsive and interactive UIs using React and React Native. Collaborated with clients and teams for requirement gathering and timely delivery. Optimized performance and maintained scalable codebases for future updates." },
  { year: 2020, title: "Finafid Technologies Pvt Ltd – Full Stack Developer", description: "Developed a cross-platform e-commerce app with dynamic product listings and responsive UI using React Native. Integrated Razorpay for secure payments with real-time order confirmation updates.Implemented real-time notifications and live updates using Socket.IO" }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gradient">About Me</h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto text-center">
          I'm Mahesh Patra, React Native Developer with 4 years of experience building high-performance iOS and Android
apps. Proficient in React Native, Socket.IO, Node.js, and Tailwind CSS, with expertise in ecommerce, chat platforms, payment gateways (Razorpay, PayU Money), and real-time updates.
Skilled in state management, API integration, and performance optimization. Experienced in AWS
deployment (PM2) and scalable architecture design, delivering user-focused mobile solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{milestone.year}</h3>
                  <h4 className="text-lg font-medium mb-2">{milestone.title}</h4>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

