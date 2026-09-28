import { Download, Users, MapPin, Mail, Smartphone, Link } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { personal } from '../data'
import resumeUrl from '../assets/resume/Mohammed Salim, Jassim S..pdf?url'
import profileImg from '../assets/images/jsms_profile.png'

const username = personal.github.split('/').pop()

export default function Sidebar() {
  return (
    <aside className="lg:w-[296px] lg:shrink-0">
      <div className="flex flex-row lg:flex-col items-center lg:items-stretch gap-4 lg:gap-0">
        {/* Avatar */}
        <div className="relative w-24 sm:w-32 lg:w-full shrink-0 lg:mb-4">
          <div className="aspect-square w-full rounded-full border border-border-default bg-canvas-subtle overflow-hidden">
            {/* scale crops the dark frame baked into the source image */}
            <img
              src={profileImg}
              alt={personal.name}
              className="w-full h-full object-cover scale-[1.14]"
            />
          </div>
          <div className="absolute bottom-0 right-0 lg:bottom-6 lg:right-6 rounded-full border border-border-default bg-canvas p-1.5 lg:p-2">
            <span className="block w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-success animate-pulse" />
          </div>
        </div>

        {/* Identity */}
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl font-semibold leading-tight text-fg-default">
            {personal.name}
          </h1>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg sm:text-xl font-light text-fg-muted hover:text-accent hover:underline no-underline"
          >
            @{username}
          </a>
          <p className="text-sm text-fg-muted mt-0.5">{personal.title}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
      

        {/* Bio */}
        <p className="text-sm text-fg-default leading-relaxed">
          Full-stack software engineer delivering production systems from API to UI
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <a
            href={resumeUrl}
            download="Jassim_Mohammed_Salim_Resume.pdf"
            className="flex items-center justify-center gap-2 w-full bg-success-emphasis text-white rounded-md py-1.5 text-sm font-semibold hover:brightness-110 transition-all no-underline"
          >
            <Download size={14} />
            Download CV
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center justify-center gap-2 w-full bg-canvas-subtle border border-border-default text-fg-default rounded-md py-1.5 text-sm font-semibold hover:bg-neutral-muted transition-colors no-underline"
          >
            Get in Touch
          </a>
        </div>

        {/* Follower-style stats */}
        <div className="flex items-center gap-1.5 text-sm text-fg-muted">
          <Users size={15} className="shrink-0" />
          <span>
            <b className="text-fg-default font-semibold">5</b> years experience
            <span className="mx-1">·</span>
            <b className="text-fg-default font-semibold">15+</b> industry apps
          </span>
        </div>

        {/* Vitals */}
        <ul className="flex flex-col gap-2 text-sm list-none p-0 m-0">
          <li className="flex items-center gap-2 text-fg-default">
            <MapPin size={16} className="text-fg-muted shrink-0" />
            {personal.location}
          </li>
          <li className="flex items-center gap-2">
            <Mail size={16} className="text-fg-muted shrink-0" />
            <a href={`mailto:${personal.email}`} className="text-fg-default hover:text-accent hover:underline no-underline truncate">
              {personal.email}
            </a>
          </li>
          <li className="flex items-center gap-2 text-fg-default">
            <Smartphone size={16} className="text-fg-muted shrink-0" />
            {personal.phone}
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedinIn size={15} className="text-fg-muted shrink-0" />
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline no-underline truncate"
            >
              linkedin.com/in/{username}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaGithub size={15} className="text-fg-muted shrink-0" />
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline no-underline truncate"
            >
              github.com/{username}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Link size={16} className="text-fg-muted shrink-0" />
            <a
              href={resumeUrl}
              download="Jassim_Mohammed_Salim_Resume.pdf"
              className="text-accent hover:underline no-underline"
            >
              resume.pdf
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
