import { useState } from 'react'
import {
  Sun,
  Moon,
  BookOpen,
  Briefcase,
  FolderGit2,
  FlaskConical,
  BadgeCheck,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { personal, experiences, personalProjects, certifications, education } from '../data'

interface NavbarProps {
  dark: boolean
  onToggle: () => void
}

interface Tab {
  href: string
  label: string
  icon: LucideIcon
  count?: number
}

const tabs: Tab[] = [
  { href: '#overview', label: 'Overview', icon: BookOpen },
  { href: '#experience', label: 'Experience', icon: Briefcase, count: experiences.length },
  { href: '#projects', label: 'Projects', icon: FolderGit2, count: personalProjects.length },
  { href: '#skills', label: 'Skills', icon: FlaskConical },
  { href: '#certifications', label: 'Certifications', icon: BadgeCheck, count: certifications.length },
  { href: '#education', label: 'Education', icon: GraduationCap, count: education.length },
]

export default function Navbar({ dark, onToggle }: NavbarProps) {
  const [active, setActive] = useState('#overview')

  const goTo = (href: string) => {
    if (href === '#overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
    window.history.pushState({}, '', '/')
    setActive(href)
  }

  return (
    <nav className="sticky top-0 z-50">
      {/* Header row */}
      <div className="bg-canvas-subtle border-b border-border-default h-14 px-4 sm:px-6 flex items-center justify-between">
        <a
          href="/"
          onClick={e => { e.preventDefault(); goTo('#overview') }}
          className="flex items-center gap-2 no-underline text-fg-default"
        >
          <FaGithub size={30} />
          <span className="font-mono font-semibold text-sm">{personal.initials.toLowerCase()}</span>
          <span className="text-fg-muted text-sm hidden sm:inline">/ portfolio</span>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggle}
            aria-label="Toggle theme"
            className="p-1.5 rounded-md border border-border-default text-fg-muted hover:bg-neutral-muted transition-colors"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={`mailto:${personal.email}`}
            className="px-3 py-1 text-sm font-medium bg-canvas-subtle border border-border-default rounded-md text-fg-default hover:bg-neutral-muted transition-colors no-underline"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Tab bar */}
      <div className="bg-canvas border-b border-border-default overflow-x-auto">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex">
          {tabs.map(tab => {
            const Icon = tab.icon
            const isActive = active === tab.href
            return (
              <a
                key={tab.href}
                href={tab.href}
                onClick={e => { e.preventDefault(); goTo(tab.href) }}
                className={`flex items-center gap-2 px-3 py-2.5 text-sm whitespace-nowrap border-b-2 no-underline transition-colors ${
                  isActive
                    ? 'border-tab-active font-semibold text-fg-default'
                    : 'border-transparent text-fg-muted hover:text-fg-default'
                }`}
              >
                <Icon size={16} className="text-fg-muted shrink-0" />
                {tab.label}
                {tab.count !== undefined && (
                  <span className="bg-neutral-muted rounded-full px-2 py-0.5 text-xs font-medium text-fg-default">
                    {tab.count}
                  </span>
                )}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
