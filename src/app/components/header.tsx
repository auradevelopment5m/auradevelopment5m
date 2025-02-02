"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Newspaper } from "lucide-react"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-zinc-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Aura Network
        </Link>
        <nav>
          <Button variant={pathname === "/news" ? "default" : "outline"} asChild>
            <Link href="/news" className="flex items-center">
              <Newspaper className="mr-2 h-4 w-4" />
              News Feed
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

