"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DiscIcon as Discord } from "lucide-react"

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-zinc-900 py-20">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl text-white">Get in Touch</h2>
          <p className="mb-8 text-gray-400">
            Join our community or reach out directly to connect with the Aura Network team.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-md flex flex-col items-center space-y-4"
        >
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => window.open("https://discord.gg/BFkm24SApz", "_blank")}
          >
            <Discord className="mr-2 h-4 w-4" /> Join Our Discord
          </Button>
          <p className="text-white">or</p>
          <div className="bg-zinc-800 p-4 rounded-lg text-center w-full">
            <p className="text-white mb-2">Add us on Discord</p>
            <p className="text-xl font-semibold text-blue-400">auradevelopment5m</p>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0 opacity-30">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {Array.from({ length: 50 }).map((_, i) => (
            <line key={i} x1={i * 2} y1="0" x2={i * 2} y2="100" stroke="white" strokeWidth="0.1" />
          ))}
        </svg>
      </div>
    </section>
  )
}

