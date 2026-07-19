import { useState } from 'react'
import { Briefcase, MapPin } from 'lucide-react'
import { experiences, type ExperienceEntry } from '../data'

function RoleCard({ exp, first }: { exp: ExperienceEntry; first: boolean }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const project = exp.projects[activeIdx]

  return (
    <div className="relative">
      {/* commit node */}
      <div
        className={`absolute -left-8 top-5 w-4 h-4 rounded-full bg-canvas border-2 ${
          first ? 'border-accent' : 'border-border-default'
        }`}
      />

      <div className="rounded-md border border-border-default bg-canvas overflow-hidden">
        {/* Role header */}
        <div className="bg-canvas-subtle border-b border-border-default px-4 py-3 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-fg-default">{exp.company}</h3>
            <p className="text-sm text-accent mt-0.5">
              {exp.role} · {exp.type}
            </p>
            <div className="flex items-center gap-1.5 mt-1.5 text-xs text-fg-muted">
              <MapPin size={12} className="shrink-0" />
              {exp.location}
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <span className="font-mono text-xs text-fg-muted border border-border-default rounded-full px-2.5 py-0.5 whitespace-nowrap">
              {exp.period}
            </span>
            {exp.current && (
              <span className="text-xs font-medium text-success border border-success rounded-full px-2 py-px">
                Current
              </span>
            )}
          </div>
        </div>

        {/* Project tabs — UnderlineNav, only when there are multiple projects */}
        {exp.projects.length > 1 && (
          <div className="border-b border-border-default flex overflow-x-auto px-2">
            {exp.projects.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`px-3 py-2 text-sm whitespace-nowrap border-b-2 transition-colors ${
                  i === activeIdx
                    ? 'font-semibold border-tab-active text-fg-default'
                    : 'border-transparent text-fg-muted hover:text-fg-default'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        )}

        {/* Active project content */}
        <div className="px-4 py-4">
          {exp.projects.length === 1 && (
            <p className="text-sm font-semibold text-fg-default mb-2">{exp.projects[0].name}</p>
          )}
          <span className="inline-flex font-mono text-xs bg-neutral-muted text-fg-muted rounded px-1.5 py-0.5 mb-3">
            {project.domain}
          </span>
          <ul className="space-y-2 list-none p-0 m-0">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-fg-default leading-relaxed">
                <span className="font-mono text-fg-muted shrink-0">-</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="flex items-center gap-2 mb-3">
        <Briefcase size={16} className="text-fg-muted" />
        <h2 className="text-base font-semibold text-fg-default">Experience</h2>
        <span className="bg-neutral-muted rounded-full px-2 py-0.5 text-xs font-medium text-fg-default">
          {experiences.length}
        </span>
      </div>

      <div className="relative pl-8">
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border-default" />
        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <RoleCard key={exp.id} exp={exp} first={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
