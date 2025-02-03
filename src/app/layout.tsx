import "@/app/styles/globals.css" // Update the import path
import { Inter } from "next/font/google"
import Header from "./components/header"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

