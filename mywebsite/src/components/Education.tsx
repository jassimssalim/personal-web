import { Calendar, GraduationCap, MapPin } from 'lucide-react'
import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="rounded-md border border-border-default bg-canvas">
      <div className="px-4 py-3 border-b border-border-default flex items-center gap-2">
        <GraduationCap size={16} className="text-fg-muted" />
        <h2 className="text-sm font-semibold text-fg-default">Education</h2>
        <span className="bg-neutral-muted rounded-full px-2 py-0.5 text-xs font-medium text-fg-default">
          {education.length}
        </span>
      </div>

      {education.map(edu => (
        <div key={edu.school} className="p-4">
          <h3 className="text-sm font-semibold text-fg-default">{edu.school}</h3>
          <p className="text-sm text-fg-default mt-0.5">{edu.degree}</p>
          <div className="flex flex-col gap-1.5 mt-2">
            <span className="flex items-center gap-1.5 text-xs text-fg-muted">
              <Calendar size={12} className="shrink-0" />
              {edu.period}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-fg-muted">
              <MapPin size={12} className="shrink-0" />
              {edu.location}
            </span>
          </div>
        </div>
      ))}
    </section>
  )
}
