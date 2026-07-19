import { Pin, FolderGit2 } from 'lucide-react'
import { personalProjects, personal } from '../data'

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  React: '#61dafb',
  'React Native': '#61dafb',
  Expo: '#9ca3af',
  'Spring Boot': '#6db33f',
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="flex items-center gap-2 mb-3">
        <Pin size={16} className="text-fg-muted" />
        <h2 className="text-base font-semibold text-fg-default">Pinned</h2>
        <span className="text-sm text-fg-muted">personal projects</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {personalProjects.map(project => (
          <div
            key={project.name}
            className="rounded-md border border-border-default bg-canvas p-4 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-2">
              <FolderGit2 size={16} className="text-fg-muted shrink-0" />
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-accent hover:underline no-underline truncate"
              >
                {project.name}
              </a>
              <span className="text-xs text-fg-muted border border-border-default rounded-full px-1.5 py-px shrink-0">
                Public
              </span>
            </div>

            <p className="text-xs text-fg-muted leading-relaxed mb-3">{project.description}</p>

            <ul className="list-none p-0 m-0 mb-4 space-y-1.5 flex-1">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-xs text-fg-muted leading-relaxed">
                  <span className="font-mono text-accent shrink-0">-</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-fg-muted">
              <span className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: languageColors[project.tech[0]] ?? '#8b949e' }}
                />
                {project.tech[0]}
              </span>
              {project.tech.slice(1).map(t => (
                <span
                  key={t}
                  className="bg-accent-subtle text-accent rounded-full px-2.5 py-0.5 font-medium"
                >
                  {t}
                </span>
              ))}
              <span className="text-done font-medium">{project.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
