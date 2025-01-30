"use client"

import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import CustomCursor from "./components/CustomCursor"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

