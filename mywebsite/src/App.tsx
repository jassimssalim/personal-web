import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
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
          <Skills />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
