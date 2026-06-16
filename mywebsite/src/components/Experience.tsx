import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { experiences, type ExperienceEntry } from '../data'

function RoleCard({ exp }: { exp: ExperienceEntry }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const project = exp.projects[activeIdx]

  return (
    <div className="relative">
      <div className="absolute -left-8 top-6 w-3 h-3 rounded-full bg-violet-600 dark:bg-violet-400 border-2 border-white dark:border-slate-950 ring-2 ring-violet-500/30" />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-md hover:shadow-violet-500/5 transition-all overflow-hidden">
        {/* Role header */}
        <div className="flex flex-wrap items-start justify-between gap-3 px-6 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.company}</h3>
            <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mt-0.5">
              {exp.role} · {exp.type}
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-400 dark:text-slate-500">
              <MapPin size={11} />
              {exp.location}
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-500/20 whitespace-nowrap">
              {exp.period}
            </span>
            {exp.current && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/20">
                Current
              </span>
            )}
          </div>
        </div>

        {/* Project tabs — only shown when there are multiple projects */}
        {exp.projects.length > 1 && (
          <div className="flex flex-wrap gap-2 px-6 pt-4">
            {exp.projects.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                  i === activeIdx
                    ? 'bg-violet-600 text-white border-violet-600 shadow-sm shadow-violet-500/20'
                    : 'bg-transparent text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-violet-400 dark:hover:border-violet-600 hover:text-violet-600 dark:hover:text-violet-400'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        )}

        {/* Active project content */}
        <div className="px-6 py-5">
          {exp.projects.length === 1 && (
            <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2">{exp.projects[0].name}</p>
          )}
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 mb-4">
            {project.domain}
          </span>
          <ul className="space-y-2.5 list-none p-0 m-0">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                <span className="text-violet-500 font-bold mt-0.5 shrink-0">–</span>
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
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3">Work History</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Where I've Worked</h2>
        <div className="w-10 h-1 bg-violet-600 dark:bg-violet-400 rounded-full mb-12" />

        <div className="relative pl-8">
          <div className="absolute left-[5px] top-3 bottom-3 w-px bg-gradient-to-b from-violet-500 via-violet-300 to-slate-200 dark:via-violet-700 dark:to-slate-700" />
          <div className="flex flex-col gap-8">
            {experiences.map(exp => (
              <RoleCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
