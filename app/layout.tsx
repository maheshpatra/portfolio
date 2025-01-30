import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/navigation"
import { Providers } from "./providers"
import { ParticleBackground } from "./components/particle-background"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mahesh Patra - Portfolio",
  description: "Personal portfolio of Mahesh Patra, showcasing my work as a Full Stack Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ParticleBackground />
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  )
}

