import Hero from "./components/hero"
import Gallery from "./components/gallery"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <Hero />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

