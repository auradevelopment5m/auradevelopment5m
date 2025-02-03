"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Newspaper, AlertCircle } from "lucide-react"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-zinc-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Aura Network
        </Link>
        <nav className="flex gap-2">
          <Button variant={pathname === "/news" ? "default" : "outline"} asChild>
            <Link href="/news" className="flex items-center">
              <Newspaper className="mr-2 h-4 w-4" />
              News Feed
            </Link>
          </Button>
          <Button variant={pathname === "/rules" ? "default" : "outline"} asChild>
            <Link href="/rules" className="flex items-center">
              <AlertCircle className="mr-2 h-4 w-4" />
              Rules
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

