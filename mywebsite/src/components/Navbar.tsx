import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { personal } from '../data'

interface NavbarProps {
  dark: boolean
  onToggle: () => void
}

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
]

export default function Navbar({ dark, onToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 py-3'
        : 'py-5'
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
          {personal.initials}<span className="text-violet-600 dark:text-violet-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 list-none">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={onToggle}
              aria-label="Toggle theme"
              className="ml-1 p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </li>
          <li>
            <a
              href={`mailto:${personal.email}`}
              className="ml-2 px-4 py-2 text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors no-underline"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex md:hidden items-center gap-2">
          <button onClick={onToggle} aria-label="Toggle theme" className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button onClick={() => setOpen(o => !o)} aria-label="Toggle menu" className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
          <ul className="max-w-5xl mx-auto px-6 py-3 flex flex-col gap-1 list-none">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${personal.email}`}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 rounded-lg transition-all no-underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
