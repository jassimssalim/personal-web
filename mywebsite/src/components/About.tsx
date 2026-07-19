import { BookOpen } from 'lucide-react'
import { personal } from '../data'

const highlights = [
  { icon: '⚡', title: 'Full Stack', desc: 'Spring Boot + React/Next.js end-to-end' },
  { icon: '🏗️', title: 'Architecture', desc: 'Scalable system design & best practices' },
  { icon: '🤖', title: 'AI & LLMs', desc: 'LLM integration, agentic coding & AI-driven tools' },
  { icon: '☁️', title: 'Cloud & DevOps', desc: 'AWS, Docker & enterprise infrastructure' },
]

export default function About() {
  return (
    <section id="about" className="rounded-md border border-border-default bg-canvas">
      <div className="px-4 py-3 border-b border-border-muted flex items-center gap-2 font-mono text-xs text-fg-muted">
        <BookOpen size={14} />
        {personal.initials} <span className="text-fg-default">/</span> README.md
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-fg-default pb-2 border-b border-border-muted mb-4">
          The developer behind the code
        </h2>

        <p className="text-sm text-fg-default leading-relaxed mb-4">
          I design and ship production-grade software including robust Spring Boot APIs, React and Next.js frontends, OutSystems enterprise platforms, and AI-powered tools built on LLMs to drive real business outcomes. Five years of industry experience delivering scalable, maintainable systems.
        </p>

        <p className="text-sm text-fg-default leading-relaxed mb-5">
          My career spans the full software lifecycle covering RESTful API architecture, high-level system design, and reactive frontend development. I have built and maintained enterprise platforms within the OutSystems ecosystem, where I led the identification and end-to-end remediation of a critical VAPT (Vulnerability Assessment and Penetration Testing) finding in a production environment. I have since expanded into modern Java and JavaScript stacks while keeping security foundational to every delivery. I leverage LLMs and agentic engineering workflows to accelerate development cycles, from automated grading engines to analytics dashboards, making AI a dependable accelerator at every stage of the engineering process. I also design and enforce Role-Based Access Control across production systems. I do my best work where complexity demands a precise, maintainable solution. I pick up new technologies, frameworks, and domains quickly — adapting fast is one of the core strengths I bring to every team.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {highlights.map(h => (
            <div
              key={h.title}
              className="rounded-md border border-border-default bg-canvas-subtle p-3"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl leading-none">{h.icon}</span>
                <span className="text-sm font-semibold text-fg-default">{h.title}</span>
              </div>
              <div className="text-xs text-fg-muted leading-relaxed">{h.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
