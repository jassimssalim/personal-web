import { FlaskConical } from 'lucide-react'
import { expertiseAreas, skillCategories } from '../data'
import ContributionGraph from './ContributionGraph'

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex items-center gap-2 mb-3">
        <FlaskConical size={16} className="text-fg-muted" />
        <h2 className="text-base font-semibold text-fg-default">Skills</h2>
        <span className="text-sm text-fg-muted">technologies & tools</span>
      </div>

      <div className="flex flex-col gap-4">
        <ContributionGraph />

        {/* Core expertise */}
        <div>
          <p className="text-sm font-semibold text-fg-default mb-3">Core expertise</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseAreas.map(area => (
              <div key={area.title} className="rounded-md border border-border-default bg-canvas p-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl leading-none">{area.icon}</span>
                  <span className="bg-neutral-muted rounded-full px-2 py-0.5 text-xs font-medium text-fg-default whitespace-nowrap">
                    {area.years}y · {area.level}
                  </span>
                </div>
                <div className="text-sm font-semibold text-fg-default leading-snug">{area.title}</div>
                <div className="text-xs text-fg-muted leading-relaxed mt-0.5">{area.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* All technologies as topic pills */}
        <div className="grid sm:grid-cols-2 gap-4">
          {skillCategories.map(cat => (
            <div key={cat.name} className="rounded-md border border-border-default bg-canvas p-4">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-sm font-semibold text-fg-default">{cat.name}</h3>
                <span className="bg-neutral-muted rounded-full px-2 py-0.5 text-xs font-medium text-fg-default">
                  {cat.skills.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="bg-accent-subtle text-accent rounded-full px-2.5 py-0.5 text-xs font-medium"
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
