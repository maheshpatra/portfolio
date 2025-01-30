"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import {
  SiReact,
  SiExpo,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
  SiGraphql,
  SiRedux,
  SiAndroid,
  SiApple
} from "react-icons/si"
import { useRef, useState } from "react"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from 'three'


const FluidAnimation = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    // Fluid effect (Basic moving color with noise)
    const geometry = new THREE.PlaneGeometry(5, 5, 100, 100)
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        void main() {
          vec3 newPosition = position.xyz;
          newPosition.z = sin(position.x * 0.5 + time) * 0.2;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      fragmentShader: `
        void main() {
          gl_FragColor = vec4(vec3(0.5 + 0.5 * sin(time)), 1.0);
        }
      `,
      uniforms: {
        time: { value: 1.0 }
      }
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    camera.position.z = 3

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      mesh.material.uniforms.time.value += 0.05
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
export function HeroSection() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-4">
       <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/bg.jpg')" }} // Replace with your image
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="relative w-48 h-48 mx-auto mb-4">
          <div className="relative w-48 h-48 mx-auto mb-4">
            {/* Gradient Shadow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(255, 0, 150, 0.5), rgba(0, 150, 255, 0.5))",
                filter: "blur(25px)",
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />

            {/* Rotating Border */}
            <motion.div
              className="absolute inset-0 border-4 border-transparent rounded-full"
              style={{
                background: "conic-gradient(from 180deg, #ff00ff, #00ffff, #ff00ff)",
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />

            {/* Floating Avatar */}
            <motion.img
              src="/placeholder.svg?height=180&width=180"
              alt="Mahesh Patra"
              className="rounded-full border-4 border-primary relative z-10"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2 text-gradient">Mahesh Patra</h1>
        <TypeAnimation
          sequence={["Passionate React Native Developer", 3000,  "Transforming Vision into Code", 3000,"Code, Create, Innovate", 3000,"Creating Seamless User Experiences",4000]}
          wrapper="h2"
          speed={50}
          repeat={Number.POSITIVE_INFINITY}
          className="text-2xl text-primary"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex space-x-4"
      >
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Download Resume</Button>
        <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Contact Me</Button>
      </motion.div>
      <motion.div
        className="flex space-x-6 mt-6 text-3xl text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <SiReact className="text-blue-400 hover:scale-110 transition-transform" />
        <SiTypescript className="text-blue-600 hover:scale-110 transition-transform" />
        <SiTailwindcss className="text-teal-400 hover:scale-110 transition-transform" />
        <SiJavascript className="text-yellow-400 hover:scale-110 transition-transform" />
        <SiExpo className="text-primary hover:scale-110 transition-transform" />
        <SiFirebase className="text-orange-400 hover:scale-110 transition-transform" />
        <SiRedux className="text-purple-500 hover:scale-110 transition-transform" />
        <SiAndroid className="text-green-500 hover:scale-110 transition-transform" />
        <SiApple className="text-gray-300 hover:scale-110 transition-transform" />
      </motion.div>

    </section>
  )
}

