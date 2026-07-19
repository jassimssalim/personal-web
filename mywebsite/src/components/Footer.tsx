import { FaGithub } from 'react-icons/fa'
import { personal } from '../data'

const links = [
  { href: personal.github, label: 'GitHub', external: true },
  { href: personal.linkedin, label: 'LinkedIn', external: true },
  { href: `mailto:${personal.email}`, label: 'Email', external: false },
]

export default function Footer() {
  return (
    <footer className="border-t border-border-default py-8 mt-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-fg-muted">
          <FaGithub size={20} />
          <span>© {new Date().getFullYear()} {personal.name}</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs">
          {links.map(({ href, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="text-accent hover:underline no-underline"
            >
              {label}
            </a>
          ))}
          <span className="text-fg-muted">Built with React & Vite</span>
        </div>
      </div>
    </footer>
  )
}
