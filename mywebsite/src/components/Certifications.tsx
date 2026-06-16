import { Award } from 'lucide-react'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="px-6">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3">Credentials</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Certifications</h2>
        <div className="w-10 h-1 bg-violet-600 dark:bg-violet-400 rounded-full mb-12" />

        <div className="flex flex-col gap-5">
          {certifications.map(cert => (
            <div
              key={cert.name}
              className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-violet-300 dark:hover:border-violet-700 hover:-translate-y-0.5 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4">
                <Award size={20} />
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-500/20 mb-3">
                {cert.year}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-2">{cert.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Issued by {cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
