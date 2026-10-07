import About from './components/About'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Impact from './components/Impact'
import Leadership from './components/Leadership'
import Nav from './components/Nav'
import Partners from './components/Partners'
import Sectors from './components/Sectors'
import Values from './components/Values'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-black font-sans">
      <Nav />
      <main>
        <Hero />
        <About />
        <Values />
        <Sectors />
        <Impact />
        <Approach />
        <Leadership />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
