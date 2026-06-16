import { MapPin, Phone, Download } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaRegEnvelopeOpen, FaEnvelope } from 'react-icons/fa'
import { personal } from '../data'
import resumeUrl from '../assets/resume/Mohammed Salim, Jassim S..pdf?url'

const socials = [
  { href: personal.github, icon: FaGithub, label: 'GitHub', external: true },
  { href: personal.linkedin, icon: FaLinkedinIn, label: 'LinkedIn', external: true },
  { href: `mailto:${personal.email}`, icon: FaEnvelope, label: 'Email', external: false },
]

const stats = [
  { num: '5+', label: 'Years Experience' },
  { num: '15+', label: 'Industry Apps Delivered' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-700px h-700px bg-violet-500/8 dark:bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-450px h-450px bg-purple-500/6 dark:bg-purple-500/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-sm font-medium bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-violet-700 dark:text-violet-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-7xl sm:text-8xl lg:text-[96px] font-black leading-none tracking-tight mb-6 text-slate-900 dark:text-white">
          Jassim<br />
          <span className="bg-linear-to-r from-violet-600 to-purple-500 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
            S. Mohammed
          </span><br />
          Salim
        </h1>

        {/* Tagline */}
        <p className="text-lg font-medium text-slate-500 dark:text-slate-400 mb-5 tracking-wide">
          Engineering & delivering production software — from API to UI
        </p>

        {/* Summary */}
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-8">
          I design and ship production-grade software — robust Spring Boot APIs, seamless React and Next.js frontends, OutSystems enterprise platforms, and AI-driven tools powered by LLMs that support real business decisions. Five years in, still building what scales.
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-5 mb-8 text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-violet-500 dark:text-violet-400" />
            {personal.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={14} className="text-violet-500 dark:text-violet-400" />
            {personal.phone}
          </span>
           <span className="flex items-center gap-1.5">
            <FaRegEnvelopeOpen size={14} className="text-violet-500 dark:text-violet-400" />
            {personal.email}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="#experience"
            className="px-6 py-3 text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/25 no-underline"
          >
            View Experience
          </a>
          <a
            href={resumeUrl}
            download="Jassim_Mohammed_Salim_Resume.pdf"
            className="px-6 py-3 text-sm font-semibold border border-violet-300 dark:border-violet-600 text-violet-700 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 rounded-xl hover:bg-violet-100 dark:hover:bg-violet-500/20 transition-all hover:-translate-y-0.5 no-underline flex items-center gap-2"
          >
            <Download size={15} />
            Download CV
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="px-6 py-3 text-sm font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:border-violet-400 dark:hover:border-violet-600 hover:text-violet-600 dark:hover:text-violet-400 transition-all hover:-translate-y-0.5 no-underline"
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-3 mb-16">
          {socials.map(({ href, icon: Icon, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-violet-400 dark:hover:border-violet-600 hover:text-violet-600 dark:hover:text-violet-400 hover:-translate-y-0.5 transition-all no-underline"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 pt-8 border-t border-slate-200 dark:border-slate-800">
          {stats.map(({ num, label }) => (
            <div key={label}>
              <div className="text-4xl font-black text-violet-600 dark:text-violet-400 tracking-tight leading-none mb-1">
                {num}
              </div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
