import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ProjectDetail from "./components/ProjectDetail"
import BlogPost from "./components/BlogPost"
import CustomCursor from "./components/CustomCursor"
import { ThemeProvider } from "./context/ThemeContext"
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <CustomCursor />
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Skills />
                  <Projects />
                  <Blog />
                  <Contact />
                </>
              }
            />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

