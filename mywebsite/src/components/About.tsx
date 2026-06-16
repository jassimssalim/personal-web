const highlights = [
  { icon: '⚡', title: 'Full Stack', desc: 'Spring Boot + React/Next.js end-to-end' },
  { icon: '🏗️', title: 'Architecture', desc: 'Scalable system design & best practices' },
  { icon: '🤖', title: 'AI & LLMs', desc: 'LLM integration, prompt engineering & AI-driven tools' },
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
            My career spans the full software lifecycle — RESTful API architecture, high-level system design, reactive frontend development, and CI/CD pipeline management. I've built enterprise platforms deep in the OutSystems ecosystem and transitioned seamlessly into modern Java and JavaScript stacks. I integrate Large Language Models into real workflows — from AI grading engines to analytics tools — and treat LLMs as practical development accelerators. Security is never an afterthought: I've led VAPT remediations and implemented Role-Based Access Control across production systems. I'm at my best when complexity meets a clean solution.
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
