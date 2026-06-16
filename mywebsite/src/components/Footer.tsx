import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { personal } from '../data'

const links = [
  { href: personal.github, icon: FaGithub, label: 'GitHub', external: true },
  { href: personal.linkedin, icon: FaLinkedinIn, label: 'LinkedIn', external: true },
  { href: `mailto:${personal.email}`, icon: FaEnvelope, label: 'Email', external: false },
]

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
        <div>
          <div className="text-xl font-black tracking-tight text-slate-900 dark:text-white mb-1">
            {personal.initials}<span className="text-violet-600 dark:text-violet-400">.</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} {personal.name}. Built with React & Vite.
          </p>
        </div>

        <div className="flex gap-3">
          {links.map(({ href, icon: Icon, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-600 dark:hover:text-violet-400 hover:-translate-y-0.5 transition-all no-underline"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
