const highlights = [
  { icon: '⚡', title: 'Full Stack', desc: 'Spring Boot + React/Next.js end-to-end' },
  { icon: '🏗️', title: 'Architecture', desc: 'Scalable system design & best practices' },
  { icon: '🤖', title: 'AI & LLMs', desc: 'LLM integration, agentic coding & AI-driven tools' },
  { icon: '☁️', title: 'Cloud & DevOps', desc: 'AWS, Docker & enterprise infrastructure' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50/80 dark:bg-slate-900/40 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          The developer behind the code
        </h2>
        <div className="w-10 h-1 bg-violet-600 dark:bg-violet-400 rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            My career spans the full software lifecycle covering RESTful API architecture, high-level system design, and reactive frontend development. I have built and maintained enterprise platforms within the OutSystems ecosystem, where I led the identification and end-to-end remediation of a critical VAPT (Vulnerability Assessment and Penetration Testing) finding in a production environment. I have since expanded into modern Java and JavaScript stacks while keeping security foundational to every delivery. I leverage LLMs and agentic engineering workflows to accelerate development cycles, from automated grading engines to analytics dashboards, making AI a dependable accelerator at every stage of the engineering process. I also design and enforce Role-Based Access Control across production systems. I do my best work where complexity demands a precise, maintainable solution.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {highlights.map(h => (
              <div
                key={h.title}
                className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-violet-300 dark:hover:border-violet-700 hover:-translate-y-1 transition-all cursor-default"
              >
                <div className="text-2xl mb-3">{h.icon}</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{h.title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
