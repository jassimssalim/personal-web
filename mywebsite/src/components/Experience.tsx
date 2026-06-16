import { MapPin } from 'lucide-react'
import { experiences } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3">Work History</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Where I've Worked</h2>
        <div className="w-10 h-1 bg-violet-600 dark:bg-violet-400 rounded-full mb-12" />

        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="absolute left-[5px] top-3 bottom-3 w-px bg-gradient-to-b from-violet-500 via-violet-300 to-slate-200 dark:via-violet-700 dark:to-slate-700" />

          <div className="flex flex-col gap-8">
            {experiences.map(exp => (
              <div key={exp.id} className="relative">
                {/* Dot */}
                <div className="absolute -left-8 top-5 w-3 h-3 rounded-full bg-violet-600 dark:bg-violet-400 border-2 border-white dark:border-slate-950 ring-2 ring-violet-500 dark:ring-violet-500" />

                <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-md hover:shadow-violet-500/5 hover:-translate-y-0.5 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.company}</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-500/20 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-2">
                    {exp.role} · {exp.type}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 dark:text-slate-500 mb-5">
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      {exp.location}
                    </span>
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/20 font-semibold">
                        Current
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2 list-none p-0 m-0">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <span className="text-violet-500 font-bold mt-0.5 shrink-0">–</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
