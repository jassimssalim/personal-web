import { expertiseAreas, skillCategories } from '../data'

const colorMap: Record<string, {
  badge: string
  border: string
  hoverBorder: string
  glow: string
}> = {
  violet: {
    badge: 'bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300',
    border: 'border-violet-200 dark:border-violet-700/60',
    hoverBorder: 'hover:border-violet-400 dark:hover:border-violet-500',
    glow: 'hover:shadow-violet-500/10',
  },
  blue: {
    badge: 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300',
    border: 'border-blue-200 dark:border-blue-700/60',
    hoverBorder: 'hover:border-blue-400 dark:hover:border-blue-500',
    glow: 'hover:shadow-blue-500/10',
  },
  cyan: {
    badge: 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300',
    border: 'border-cyan-200 dark:border-cyan-700/60',
    hoverBorder: 'hover:border-cyan-400 dark:hover:border-cyan-500',
    glow: 'hover:shadow-cyan-500/10',
  },
  emerald: {
    badge: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-200 dark:border-emerald-700/60',
    hoverBorder: 'hover:border-emerald-400 dark:hover:border-emerald-500',
    glow: 'hover:shadow-emerald-500/10',
  },
  sky: {
    badge: 'bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300',
    border: 'border-sky-200 dark:border-sky-700/60',
    hoverBorder: 'hover:border-sky-400 dark:hover:border-sky-500',
    glow: 'hover:shadow-sky-500/10',
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3">
          Technical Skills
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Technologies & Tools
        </h2>
        <div className="w-10 h-1 bg-violet-600 dark:bg-violet-400 rounded-full mb-12" />

        {/* Core Expertise */}
        <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5">
          Core Expertise
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {expertiseAreas.map(area => {
            const c = colorMap[area.color]
            return (
              <div
                key={area.title}
                className={`p-5 bg-white dark:bg-slate-900 border ${c.border} ${c.hoverBorder} rounded-2xl hover:-translate-y-1 hover:shadow-lg ${c.glow} transition-all duration-200 cursor-default`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl leading-none">{area.icon}</span>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${c.badge}`}>
                    {area.years}y exp
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5 leading-snug">
                  {area.title}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {area.subtitle}
                </div>
              </div>
            )
          })}
        </div>

        {/* All Technologies */}
        <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5">
          All Technologies I Used for the past 5 years
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {skillCategories.map(cat => (
            <div
              key={cat.name}
              className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-violet-300 dark:hover:border-violet-700 transition-all"
            >
              <h3 className="text-xs font-bold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-4">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-600 dark:hover:text-violet-400 hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
