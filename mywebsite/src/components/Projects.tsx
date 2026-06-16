import { FaGithub } from 'react-icons/fa'
import { personalProjects } from '../data'
import { personal } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50/80 dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3">Personal Work</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Side Projects</h2>
        <div className="w-10 h-1 bg-violet-600 dark:bg-violet-400 rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {personalProjects.map(project => (
            <div
              key={project.name}
              className="flex flex-col p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-md hover:shadow-violet-500/5 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.name}</h3>
                  <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 mt-0.5 block">{project.type}</span>
                </div>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-violet-400 dark:hover:border-violet-600 hover:text-violet-600 dark:hover:text-violet-400 transition-all no-underline shrink-0"
                >
                  <FaGithub size={16} />
                </a>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{project.description}</p>

              <ul className="space-y-2 list-none p-0 m-0 mb-5 flex-1">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="text-violet-500 font-bold mt-0.5 shrink-0">–</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 rounded-lg"
                  >
                    {t}
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
