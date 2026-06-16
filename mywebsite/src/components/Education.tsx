import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react'
import { education, certifications } from '../data'

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3">Background</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Education & Certifications</h2>
        <div className="w-10 h-1 bg-violet-600 dark:bg-violet-400 rounded-full mb-12" />

        <div className="grid md:grid-cols-5 gap-5">
          {education.map(edu => (
            <div
              key={edu.school}
              className="md:col-span-3 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-violet-300 dark:hover:border-violet-700 hover:-translate-y-0.5 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-5">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{edu.school}</h3>
              <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-5">{edu.degree}</p>
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Calendar size={12} className="text-violet-500 shrink-0" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin size={12} className="text-violet-500 shrink-0" />
                  {edu.location}
                </span>
              </div>
            </div>
          ))}

          <div className="md:col-span-2 flex flex-col gap-5">
            {certifications.map(cert => (
              <div
                key={cert.name}
                className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-violet-300 dark:hover:border-violet-700 hover:-translate-y-0.5 transition-all"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-500/20 mb-4">
                  <Award size={12} />
                  {cert.year}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-2">{cert.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Issued by {cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
