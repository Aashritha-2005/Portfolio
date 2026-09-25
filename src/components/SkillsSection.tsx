import { Cpu, Brain, FlaskConical, Network, Wrench, Code2 } from 'lucide-react'
import FadeIn from './ui/FadeIn'
import GradientDivider from './ui/GradientDivider'

const skills = [
  {
    icon: Code2,
    title: 'Full-Stack & Backend Engineering',
    items: [
      { label: 'Backend & APIs', bullets: ['Node.js, Express, FastAPI — REST API design', 'JWT auth, RBAC, request validation, middleware'] },
      { label: 'Frontend', bullets: ['React, TypeScript — component-based UI', 'State management, REST API integration, responsive design'] },
      { label: 'Databases', bullets: ['PostgreSQL, SQL, Prisma ORM', 'Schema design, migrations, query optimization'] },
      { label: 'Testing & DevOps', bullets: ['Pytest, unit & integration testing, CI/CD', 'GitHub Actions, Docker, Railway, Linux'] },
    ],
  },
  {
    icon: Brain,
    title: 'AI Systems & Applied ML',
    items: [
      { label: 'LLMs & RAG', bullets: ['RAG pipelines, LangChain, LangGraph', 'ChromaDB, FAISS, prompt engineering, Groq'] },
      { label: 'Deep Learning', bullets: ['PyTorch — CNNs, Transformers, fine-tuning', 'Training pipelines, transfer learning'] },
      { label: 'AI Agents', bullets: ['Multi-agent workflows, memory layers', 'Semantic retrieval, trust scoring, embeddings'] },
      { label: 'Federated & Distributed ML', bullets: ['Flower framework, FedAvg, differential privacy', 'Non-IID data, client-server coordination'] },
    ],
  },
  {
    icon: Cpu,
    title: 'CS Foundations',
    items: [
      { label: 'Algorithms & Data Structures', bullets: ['Dynamic programming, graph algorithms', 'Complexity analysis, OOP design patterns'] },
      { label: 'Systems', bullets: ['Operating Systems, Computer Networks', 'Computer Architecture, Database Systems'] },
      { label: 'Mathematics', bullets: ['Linear algebra, probability, statistics', 'Gradient-based optimization, Bayesian inference'] },
      { label: 'Languages', bullets: ['Python, TypeScript, JavaScript, Java, C', 'SQL, shell scripting'] },
    ],
  },
  {
    icon: FlaskConical,
    title: 'Data & Scalable Pipelines',
    items: [
      { label: 'Large-Scale Processing', bullets: ['FAISS cosine similarity on 100K+ records', 'Batch processing, Sentence-Transformer embeddings'] },
      { label: 'Optimal Transport', bullets: ['Sinkhorn algorithm for fine-grained matching', 'Rule-based scoring across disqualification signals'] },
      { label: 'ML Evaluation', bullets: ['Cross-validation, ablation studies', 'Precision/recall, AUC-ROC, benchmarking'] },
      { label: 'Physics-Informed ML', bullets: ['FEM simulation + neural network integration', 'Zero-shot transfer for structural systems'] },
    ],
  },
]

const distributedCard = {
  icon: Network,
  title: 'Production Engineering & Open-Source Experience',
  items: [
    { label: 'CI/CD & Deployment', bullets: ['GitHub Actions pipelines, Ruff linting', 'Railway, Vercel, Docker-based deployments'] },
    { label: 'Open-Source Contribution', bullets: ['Debugged fixes in 8-contributor Python/ML pipeline', 'Agile workflows, dependency integration, production stability'] },
    { label: 'API Architecture', bullets: ['17-endpoint REST API shipped to production', 'Streaming endpoints, validation, error handling'] },
    { label: 'Agile & Collaboration', bullets: ['Technical trade-off analysis, spec writing', 'Translating requirements into testable deliverables'] },
  ],
}

const toolingCols = [
  { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'SQL'] },
  { label: 'Backend & APIs', items: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'JWT', 'Prisma', 'PostgreSQL'] },
  { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'] },
  { label: 'AI / ML', items: ['PyTorch', 'HuggingFace', 'LangChain', 'LangGraph', 'ChromaDB', 'FAISS', 'Sentence Transformers', 'Flower', 'NumPy', 'SciPy'] },
  { label: 'DevOps & Testing', items: ['GitHub Actions', 'Docker', 'Railway', 'Vercel', 'Pytest', 'CI/CD', 'Git', 'Linux'] },
  { label: 'Tools', items: ['MATLAB', 'Abaqus', 'Jupyter', 'LaTeX'] },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="atmospheric-section atmosphere-lines py-24 px-6 md:px-16"
    >
      <div className="w-[84vw] max-w-[1360px] mx-auto">
        <FadeIn>
          <h2 className="text-center font-black text-[#F5F1EA]" style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}>
            Technical <span className="hero-heading">Strengths</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-center text-[#E8E3DC] mt-3 max-w-3xl mx-auto">
            Full-stack engineering, backend systems, and AI — built, tested, and shipped.
          </p>
          <GradientDivider />
        </FadeIn>

        <div className="mt-14 grid md:grid-cols-2 gap-8 lg:gap-10">
          {skills.map((card, i) => {
            const Icon = card.icon
            return (
              <FadeIn key={card.title} delay={0.1 + i * 0.1}>
                <div className="glass-panel-soft rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-[#8f4f27]/25 border border-[#d39a63]/15">
                      <Icon size={20} className="text-[#60a5fa]" />
                    </div>
                    <h3 className="font-bold text-[#F5F1EA] text-sm">{card.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-5 lg:gap-7">
                    {card.items.map((item) => (
                      <div key={item.label}>
                        <p className="text-[#d39a63] text-[13px] font-semibold mb-1">{item.label}</p>
                        <ul className="space-y-1">
                          {item.bullets.map((b) => (
                            <li key={b} className="text-[#E8E3DC] text-base">• {b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          })}

          {/* Distributed — full width */}
          <FadeIn delay={0.5} className="md:col-span-2">
            <div className="glass-panel-soft rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-[#8f4f27]/25 border border-[#d39a63]/15">
                  <Network size={20} className="text-[#60a5fa]" />
                </div>
                <h3 className="font-bold text-[#F5F1EA] text-sm">{distributedCard.title}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 lg:gap-8">
                {distributedCard.items.map((item) => (
                  <div key={item.label}>
                    <p className="text-[#d39a63] text-[13px] font-semibold mb-1">{item.label}</p>
                    <ul className="space-y-1">
                      {item.bullets.map((b) => (
                        <li key={b} className="text-[#E8E3DC] text-base">• {b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Tooling — full width */}
          <FadeIn delay={0.6} className="md:col-span-2">
            <div className="glass-panel-soft rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-[#8f4f27]/25 border border-[#d39a63]/15">
                  <Wrench size={20} className="text-[#60a5fa]" />
                </div>
                <h3 className="font-bold text-[#F5F1EA] text-sm">Engineering & Research Tooling</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-9">
                {toolingCols.map((col) => (
                  <div key={col.label}>
                    <p className="text-[#d39a63] text-xs font-semibold mb-2">{col.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {col.items.map((item) => (
                        <span key={item} className="px-2 py-1 rounded text-xs warm-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
