import "./styles/globals.css"
import { Inter } from "next/font/google"
import Header from "./components/header"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
  fallback: ["system-ui", "arial"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

