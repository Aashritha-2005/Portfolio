import { Cpu, Brain, FlaskConical, Network, Wrench, Code2 } from 'lucide-react'
import FadeIn from './ui/FadeIn'
import GradientDivider from './ui/GradientDivider'

const skills = [
  {
    icon: Cpu,
    title: 'Computational & Analytical Foundations',
    items: [
      { label: 'Algorithms & Data Structures', bullets: ['Dynamic programming, graph algorithms, sorting/searching', 'Complexity analysis, algorithm design'] },
      { label: 'Linear Algebra & Calculus', bullets: ['Matrix operations, eigendecomposition, SVD', 'Gradient-based optimization, multivariate calculus'] },
      { label: 'Probability & Statistics', bullets: ['Bayesian inference, frequentist methods', 'Statistical testing, distribution modeling'] },
      { label: 'Signal Processing', bullets: ['Fourier transforms, wavelet analysis', 'Time-series analysis, spectral methods'] },
    ],
  },
  {
    icon: Brain,
    title: 'Intelligent Systems & Learning Methods',
    items: [
      { label: 'Deep Learning', bullets: ['CNNs, RNNs, Transformers, Vision Transformers', 'Training pipelines, transfer learning, fine-tuning'] },
      { label: 'Reinforcement Learning', bullets: ['Policy gradient, Q-learning, actor-critic methods', 'Gymnasium environments, reward shaping'] },
      { label: 'Federated Learning', bullets: ['Privacy-preserving distributed training', 'FedAvg, differential privacy, Flower framework'] },
      { label: 'NLP & Multimodal AI', bullets: ['LLMs, RAG pipelines, embedding models', 'HuggingFace ecosystem, prompt engineering'] },
    ],
  },
  {
    icon: FlaskConical,
    title: 'Systems, Experimentation & Evaluation',
    items: [
      { label: 'ML Evaluation', bullets: ['Cross-validation, ablation studies', 'Precision/recall, AUC-ROC, domain-specific metrics'] },
      { label: 'Experimental Design', bullets: ['Hypothesis-driven experimentation', 'Reproducibility, benchmarking, result analysis'] },
      { label: 'Physics-Informed ML', bullets: ['FEM simulation integration with neural networks', 'Zero-shot transfer learning for physical systems'] },
      { label: 'AI Safety & RAG', bullets: ['Retrieval-augmented generation pipelines', 'LangGraph, adversarial robustness, safe deployment'] },
    ],
  },
  {
    icon: Code2,
    title: 'Software Design & Development',
    items: [
      { label: 'Full-Stack Development', bullets: ['End-to-end apps with React, Node.js, FastAPI', 'Component-based UI, REST-connected backends'] },
      { label: 'REST API Design', bullets: ['Resource-oriented API structure, status codes', 'Express, FastAPI, request validation, middleware'] },
      { label: 'Database & Authentication', bullets: ['Schema design, Prisma ORM, PostgreSQL', 'JWT auth, role-based access control (RBAC)'] },
      { label: 'Software Architecture & DevOps', bullets: ['Modular design, separation of concerns, OOP', 'Git workflows, debugging, reproducible builds'] },
    ],
  },
]

const distributedCard = {
  icon: Network,
  title: 'Distributed, Scalable & Robust Systems',
  items: [
    { label: 'Distributed Computing', bullets: ['Federated architectures, client-server coordination', 'Asynchronous training, fault tolerance'] },
    { label: 'Scalable ML Pipelines', bullets: ['Batch processing, data loaders, memory efficiency', 'Model parallelism, mixed-precision training'] },
    { label: 'Computer Vision Systems', bullets: ['Object detection, image classification, segmentation', 'Real-time inference, AR integration'] },
    { label: 'Audio & Bio-Signal ML', bullets: ['Spectrogram analysis, Librosa, ResNet audio', 'Animal bioacoustics, species classification'] },
  ],
}

const toolingCols = [
  { label: 'Languages', items: ['Python', 'C', 'Java', 'SQL'] },
  { label: 'ML / Scientific', items: ['PyTorch', 'TensorFlow', 'HuggingFace', 'NumPy', 'SciPy', 'LangChain', 'ChromaDB', 'Matplotlib', 'Flower', 'Gymnasium', 'OpenCV', 'Librosa'] },
  { label: 'Engineering Tools', items: ['MATLAB', 'Abaqus', 'ANSYS', 'AutoCAD', 'Git', 'LaTeX', 'Jupyter'] },
  { label: 'Web & Backend', items: ['React', 'TypeScript', 'Next.js', 'FastAPI', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Vite', 'Tailwind CSS'] },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-center font-black text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}>
            Technical <span className="hero-heading">Strengths</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-center text-[#6b7280] mt-3 max-w-xl mx-auto">
            A deep technical foundation spanning theory, systems, and applied AI.
          </p>
          <GradientDivider />
        </FadeIn>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {skills.map((card, i) => {
            const Icon = card.icon
            return (
              <FadeIn key={card.title} delay={0.1 + i * 0.1}>
                <div className="bg-[#111827] border border-[#1e2a3a] rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-[#1a4fd6]/20">
                      <Icon size={20} className="text-cyan-400" />
                    </div>
                    <h3 className="font-bold text-[#D7E2EA] text-sm">{card.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {card.items.map((item) => (
                      <div key={item.label}>
                        <p className="text-cyan-400 text-[13px] font-semibold mb-1">{item.label}</p>
                        <ul className="space-y-1">
                          {item.bullets.map((b) => (
                            <li key={b} className="text-[#6b7280] text-base">• {b}</li>
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
            <div className="bg-[#111827] border border-[#1e2a3a] rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-[#1a4fd6]/20">
                  <Network size={20} className="text-cyan-400" />
                </div>
                <h3 className="font-bold text-[#D7E2EA] text-sm">{distributedCard.title}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {distributedCard.items.map((item) => (
                  <div key={item.label}>
                    <p className="text-cyan-400 text-[13px] font-semibold mb-1">{item.label}</p>
                    <ul className="space-y-1">
                      {item.bullets.map((b) => (
                        <li key={b} className="text-[#6b7280] text-base">• {b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Tooling — full width */}
          <FadeIn delay={0.6} className="md:col-span-2">
            <div className="bg-[#111827] border border-[#1e2a3a] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-[#1a4fd6]/20">
                  <Wrench size={20} className="text-cyan-400" />
                </div>
                <h3 className="font-bold text-[#D7E2EA] text-sm">Engineering & Research Tooling</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {toolingCols.map((col) => (
                  <div key={col.label}>
                    <p className="text-cyan-400 text-xs font-semibold mb-2">{col.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {col.items.map((item) => (
                        <span key={item} className="px-2 py-1 rounded text-xs bg-[#1e2a3a] text-[#D7E2EA]/70">
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
