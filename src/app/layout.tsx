import "../styles/globals.css"
import { Inter } from "next/font/google"
import Header from "./components/header"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Aura Network",
  description: "Pioneering the future of gaming and esports",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./styles/globals.css" />
      </head>
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

