import { MapPin, Phone, Download } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa'
import { personal } from '../data'
import resumeUrl from '../assets/resume/Mohammed Salim, Jassim S..pdf?url'

const socials = [
  { href: personal.github, icon: FaGithub, label: 'GitHub', external: true },
  { href: personal.linkedin, icon: FaLinkedinIn, label: 'LinkedIn', external: true },
  { href: `mailto:${personal.email}`, icon: FaEnvelope, label: 'Email', external: false },
]

const stats = [
  { num: '5', label: 'Years Experience' },
  { num: '15+', label: 'Industry Apps Delivered' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-violet-500/8 dark:bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-purple-500/6 dark:bg-purple-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-6 w-full">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full text-xs sm:text-sm font-medium bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-violet-700 dark:text-violet-400 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-[52px] leading-[1.05] sm:text-7xl lg:text-[96px] font-black tracking-tight mb-5 sm:mb-6 text-slate-900 dark:text-white">
          Jassim<br />
          <span className="bg-gradient-to-r from-violet-600 to-purple-500 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
            S. Mohammed
          </span><br />
          Salim
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg font-medium text-slate-500 dark:text-slate-400 mb-4 sm:mb-5 tracking-wide">
          Full-stack software engineer delivering production systems from API to UI
        </p>

        {/* Summary */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-6 sm:mb-8">
          I design and ship production-grade software including robust Spring Boot APIs, React and Next.js frontends, OutSystems enterprise platforms, and AI-powered tools built on LLMs to drive real business outcomes. Five years of industry experience delivering scalable, maintainable systems.
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 sm:gap-5 mb-6 sm:mb-8 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-violet-500 dark:text-violet-400 shrink-0" />
            {personal.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={13} className="text-violet-500 dark:text-violet-400 shrink-0" />
            {personal.phone}
          </span>
          <span className="flex items-center gap-1.5">
            <FaEnvelopeOpen size={13} className="text-violet-500 dark:text-violet-400 shrink-0" />
            {personal.email}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
          <a
            href="#experience"
            className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/25 no-underline"
          >
            View Experience
          </a>
          <a
            href={resumeUrl}
            download="Jassim_Mohammed_Salim_Resume.pdf"
            className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold border border-violet-300 dark:border-violet-600 text-violet-700 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 rounded-xl hover:bg-violet-100 dark:hover:bg-violet-500/20 transition-all hover:-translate-y-0.5 no-underline flex items-center gap-2"
          >
            <Download size={14} />
            Download CV
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:border-violet-400 dark:hover:border-violet-600 hover:text-violet-600 dark:hover:text-violet-400 transition-all hover:-translate-y-0.5 no-underline"
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-2 sm:gap-3 mb-10 sm:mb-16">
          {socials.map(({ href, icon: Icon, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-violet-400 dark:hover:border-violet-600 hover:text-violet-600 dark:hover:text-violet-400 hover:-translate-y-0.5 transition-all no-underline"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 sm:gap-10 pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800">
          {stats.map(({ num, label }) => (
            <div key={label}>
              <div className="text-3xl sm:text-4xl font-black text-violet-600 dark:text-violet-400 tracking-tight leading-none mb-1">
                {num}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
