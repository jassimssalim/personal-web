import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
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
    <div className="relative min-h-screen transition-colors duration-300">
      <Particles />
      <div className="relative z-[1]">
        <Navbar dark={dark} onToggle={toggle} />
        <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <Sidebar />
            <div id="overview" className="flex-1 min-w-0 flex flex-col gap-6">
              <About />
              <Projects />
              <Experience />
              <Skills />
              <div className="grid md:grid-cols-2 gap-4">
                <Certifications />
                <Education />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
