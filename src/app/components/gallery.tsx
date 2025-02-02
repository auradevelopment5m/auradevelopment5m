"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { DiscIcon as Discord, Store, Youtube, Coffee } from "lucide-react"

const paidItems = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aura-printers-OilBAUb5AsKKUN55QrzA3eittrYSJS.png",
    alt: "Aura Printers - The Ultimate RP Enhancer",
    title: "Aura Printers",
    description: "The Ultimate RP Enhancer",
    url: "https://auradevelopment.tebex.io/package/6651172",
    preview: "https://www.youtube.com/embed/QGaGqQn2kEM",
    aspectRatio: "aspect-[16/9]",
    className: "lg:col-span-2 lg:col-start-2",
  },
]

const freeItems = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aW7C0JysLV-Y6ift5V4HqGfuPztC8oUaO7Kdqz049.png",
    alt: "Aura Applications - Easy Setup, Standalone, Configurable",
    title: "Aura Applications",
    description: "Free Resource",
    url: "https://github.com/zlexif/aura-applications",
    preview: "https://www.youtube.com/embed/dnY1j-1eS_I",
    aspectRatio: "aspect-[16/9]",
    className: "lg:col-span-2 lg:col-start-2",
  },
]

const links = [
  {
    href: "https://discord.gg/BFkm24SApz",
    icon: <Discord className="text-[#7289da]" />,
    text: "Aura Development Discord",
  },
  {
    href: "https://discord.gg/GNw7PmY8Cz",
    icon: <Discord className="text-[#7289da]" />,
    text: "Aura City Roleplay Discord",
  },
  { href: "https://ko-fi.com/auradevelopment", icon: <Coffee className="text-[#29abe0]" />, text: "Ko-fi" },
  { href: "https://auradevelopment.tebex.io", icon: <Store className="text-[#43bdfe]" />, text: "Tebex Store" },
  {
    href: "https://www.youtube.com/@aura_development",
    icon: <Youtube className="text-[#ff0000]" />,
    text: "YouTube Channel",
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activePreview, setActivePreview] = useState<string | null>(null)

  const renderItems = (items: typeof paidItems, index: number) => (
    <div key={index} className="space-y-8">
      {items.map((item, itemIndex) => (
        <motion.div
          key={itemIndex}
          className={`group relative overflow-hidden rounded-lg bg-zinc-900 ${item.className}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: itemIndex * 0.2 }}
        >
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
            <div className={`${item.aspectRatio} overflow-hidden`}>
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{item.description}</p>
              <Button
                variant="secondary"
                size="sm"
                onClick={(e) => {
                  e.preventDefault()
                  setActivePreview(item.preview)
                }}
                className="bg-white/10 hover:bg-white/20 text-white"
              >
                Watch Preview
              </Button>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  )

  return (
    <section className="relative py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl text-white"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Works
        </motion.h2>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Paid Resources</h3>
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-4">{renderItems(paidItems, 0)}</div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Free Resources</h3>
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-4">{renderItems(freeItems, 1)}</div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-white text-center">Connect With Us</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-full transition-colors duration-300"
              >
                {link.icon}
                <span>{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {activePreview && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-zinc-900 rounded-lg max-w-4xl w-full p-4">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={activePreview}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <Button onClick={() => setActivePreview(null)} className="mt-4 bg-white/10 hover:bg-white/20 text-white">
              Close Preview
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}

