"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import ThemeToggle from "./ThemeToggle"
import { Link as ScrollLink } from "react-scroll"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"])
  const headerBackgroundDark = useTransform(scrollY, [0, 100], ["rgba(17, 24, 39, 0)", "rgba(17, 24, 39, 1)"])

  return (
    <motion.header
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: headerBackground,
        "@media (prefers-color-scheme: dark)": {
          backgroundColor: headerBackgroundDark,
        },
      }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Mpatra
        </motion.div>
        <div className="hidden md:flex space-x-6 items-center">
          {["Home", "Skills", "Projects", "Blog", "Contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition-colors"
            >
              <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {item}
              </motion.span>
            </ScrollLink>
          ))}
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-4 text-gray-600 dark:text-gray-300 focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-800 py-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {["Home", "Skills", "Projects", "Blog", "Contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </ScrollLink>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header

