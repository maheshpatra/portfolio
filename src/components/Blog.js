import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const blogPosts = [
  {
    id: 1,
    title: "The Future of React Native",
    excerpt: "Exploring the upcoming features and improvements in React Native",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-06-01",
  },
  {
    id: 2,
    title: "Optimizing Performance in React Applications",
    excerpt: "Tips and tricks to boost the performance of your React apps",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-05-15",
  },
  {
    id: 3,
    title: "Building Scalable Backend Services for Mobile Apps",
    excerpt: "Best practices for creating robust backend services for mobile applications",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-04-30",
  },
]

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link to={`/blog/${post.id}`}>
                    <motion.button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

