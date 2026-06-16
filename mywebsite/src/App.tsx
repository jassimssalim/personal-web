import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Footer from './components/Footer'
import Particles from './components/Particles'
import { useTheme } from './hooks/useTheme'

function App() {
  const { dark, toggle } = useTheme()

  return (
    <div className="relative bg-white dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      <Particles />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar dark={dark} onToggle={toggle} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
              <Certifications />
              <Education />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
