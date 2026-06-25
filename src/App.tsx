import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SkillsSection from './components/Skills'
import EducationSection from './components/Education'
import ProjectsSection from './components/Projects'
import AchievementsSection from './components/Achievements'
import VisionSection from './components/Vision'
import BlogSection from './components/Blog'
import ContactSection from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'
import BlogDetail from './pages/BlogDetail'

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[#FAF8F5]">
      <div className="text-center">
        <div className="h-12 w-12 mx-auto rounded-full border-2 border-[#C9A84C]/30 border-t-[#4A5D23] animate-spin" />
        <p className="mt-4 font-mono text-xs text-[#4A4A4A]">Loading</p>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <AchievementsSection />
      <VisionSection />
      <BlogSection />
      <ContactSection />
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') { setIsLoading(false); return }
    const timer = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      <AnimatePresence>
        {isLoading && location.pathname === '/' && <LoadingScreen />}
      </AnimatePresence>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
