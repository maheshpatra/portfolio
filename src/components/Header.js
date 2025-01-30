import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import { Sun, Moon } from "react-feather"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white dark:bg-gray-900">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Mpatra
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          {["Home", "Skills", "Projects", "Blog", "Contact"].map((item) => (
            <Link key={item} to={`/#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
              {item}
            </Link>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
            {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 mr-4">
            {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 dark:text-gray-300 focus:outline-none"
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
        <div className="md:hidden bg-white dark:bg-gray-800 py-2">
          {["Home", "Skills", "Projects", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/#${item.toLowerCase()}`}
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header

