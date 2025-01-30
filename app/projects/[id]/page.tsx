'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'E-commerce App',
    description: 'A full-featured e-commerce mobile app built with React Native',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['React Native', 'Redux', 'Node.js'],
    fullDescription: 'This e-commerce app provides a seamless shopping experience for users. It includes features such as product browsing, cart management, user authentication, and secure checkout process. The app is built with React Native for cross-platform compatibility, uses Redux for state management, and connects to a Node.js backend.',
    challenges: 'One of the main challenges was implementing a real-time inventory system to prevent overselling. We solved this by using WebSockets to update product availability instantly across all connected devices.',
    outcome: 'The app has been successfully launched on both iOS and Android platforms, receiving positive feedback for its intuitive interface and smooth performance. It has significantly increased sales for our client and improved customer satisfaction scores.',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'A responsive web dashboard for social media analytics',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['React', 'D3.js', 'Express'],
    fullDescription: 'This social media dashboard provides comprehensive analytics for multiple social media platforms. It offers real-time data visualization, custom report generation, and predictive analytics for social media performance.',
    challenges: 'The main challenge was handling and visualizing large amounts of real-time data without affecting the dashboard\'s performance. We overcame this by implementing efficient data processing on the backend and using D3.js for smooth, interactive visualizations on the frontend.',
    outcome: 'The dashboard has become an essential tool for our client\'s marketing team, leading to more data-driven decision making and a 30% improvement in their social media engagement rates.',
  },
  {
    id: 3,
    title: 'Fitness Tracker',
    description: 'A cross-platform mobile app for tracking workouts and nutrition',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['React Native', 'GraphQL', 'MongoDB'],
    fullDescription: 'This fitness tracker app allows users to log workouts, track nutrition, set fitness goals, and view progress over time. It includes features like custom workout plans, integration with wearable devices, and social sharing capabilities.',
    challenges: 'A significant challenge was ensuring data accuracy when integrating with various wearable devices. We developed a robust data normalization system and implemented extensive testing to ensure consistent and accurate fitness tracking across all supported devices.',
    outcome: 'The app has gained a dedicated user base, with over 100,000 downloads in the first month. Users have reported increased motivation and adherence to their fitness routines, with an average 40% increase in workout frequency among active users.',
  },
]

export default function ProjectDetail() {
  const params = useParams()
  const project = projects.find(p => p.id === Number(params.id))

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white"
    >
      <div className="container mx-auto px-6 py-12">
        <Link href="/#projects">
          <motion.button
            className="mb-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Projects
          </motion.button>
        </Link>
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </motion.h1>
        <motion.div
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">{project.fullDescription}</p>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Challenges and Outcomes</h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Challenges</h3>
              <p className="text-gray-300">{project.challenges}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Outcome</h3>
              <p className="text-gray-300">{project.outcome}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

