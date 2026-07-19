import { Award, BadgeCheck } from 'lucide-react'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <section id="certifications" className="rounded-md border border-border-default bg-canvas">
      <div className="px-4 py-3 border-b border-border-default flex items-center gap-2">
        <BadgeCheck size={16} className="text-fg-muted" />
        <h2 className="text-sm font-semibold text-fg-default">Certifications</h2>
        <span className="bg-neutral-muted rounded-full px-2 py-0.5 text-xs font-medium text-fg-default">
          {certifications.length}
        </span>
      </div>

      {certifications.map(cert => (
        <div key={cert.name} className="p-4 flex gap-3">
          <div className="w-9 h-9 rounded-full bg-accent-subtle text-accent grid place-items-center shrink-0">
            <Award size={17} />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-fg-default leading-snug">{cert.name}</h3>
            <p className="text-xs text-fg-muted mt-1">
              Issued by {cert.issuer}
              <span className="mx-1.5">·</span>
              <span className="font-mono">{cert.year}</span>
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
