import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { About } from './sections/About'
import { Achievements } from './sections/Achievements'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Mindset } from './sections/Mindset'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Stats } from './sections/Stats'
import { Vision } from './sections/Vision'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 850)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        <LoadingScreen isLoading={isLoading} />
      </AnimatePresence>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mindset />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <Stats />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
