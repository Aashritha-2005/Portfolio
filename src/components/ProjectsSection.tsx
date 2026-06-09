import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import FadeIn from './ui/FadeIn'
import GradientDivider from './ui/GradientDivider'
import { ViewCodeButton } from './ui/Buttons'

type Project = {
  title: string
  category: string
  desc: string
  contributions: string[]
  tech: string[]
  gradient: string
  github: string
}

const projects: Project[] = [
  {
    title: 'Neural Twin for Structural Dynamics & SHM',
    category: 'ML + Physics',
    desc: 'Physics-informed neural twin integrating FEM simulation with deep learning for real-time structural health monitoring.',
    contributions: [
      'Physics-informed loss combines PDE residuals with data-driven objectives for zero-shot transfer across structural configurations',
      'FEM simulation pipeline in MATLAB/Abaqus generates labelled training data for interpretable damage detection',
      'Benchmarked against classical SHM methods — neural twin achieves 94% damage localisation accuracy on unseen geometries',
    ],
    tech: ['PyTorch', 'NumPy', 'SciPy', 'MATLAB', 'Abaqus'],
    gradient: 'linear-gradient(135deg, #0c1a4e 0%, #1a4fd6 50%, #0ea5e9 100%)',
    github: 'https://github.com/Aashritha-2005/Finite-Element-Model-Based-Neural-Twin-for-Structural-Dynamics-and-SHM',
  },
  {
    title: 'HireScript',
    category: 'AI · Automation',
    desc: 'Converts a resume and job description into a complete, ATS-optimized application package — tailored resume, live deployed project, cover letter, and recruiter outreach — in under five minutes.',
    contributions: [
      'GPT-4o extracts JD keywords and rebuilds resume bullets in exact job-description language with zero fabrication',
      'OpenAI Codex generates a functional, stack-specific project auto-deployed to a live URL via Vercel API',
      'Three-layer pipeline: ATS resume engine → live project generator → outreach copy package',
    ],
    tech: ['GPT-4o', 'OpenAI Codex', 'Next.js', 'pdf-lib', 'Vercel API', 'Node.js'],
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    github: 'https://github.com/Aashritha-2005/HireScript',
  },
  {
    title: 'RAG Video Analytics Chatbot',
    category: 'RAG · Video Analytics',
    desc: 'Full-stack app that compares a YouTube video and Instagram Reel with transcript-aware analytics — extracts metadata, computes engagement rates, and lets you chat with video content via a Groq-powered RAG pipeline.',
    contributions: [
      'Embeds transcript chunks in ChromaDB with HuggingFace BGE embeddings for semantic retrieval',
      'Streaming chat responses with citations powered by LangChain + Groq LLM backend',
      'React frontend for URL submission, side-by-side performance comparison, and follow-up Q&A',
    ],
    tech: ['FastAPI', 'LangChain', 'ChromaDB', 'Groq', 'HuggingFace', 'React', 'TypeScript', 'Vite'],
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    github: 'https://github.com/Aashritha-2005/RAG-Video-Analytics',
  },
  {
    title: 'TaskFlow',
    category: 'Full Stack · Productivity',
    desc: 'Full-stack project management app where teams create projects, assign tasks, track progress, and manage members — with role-based access control, JWT authentication, and a real-time dashboard.',
    contributions: [
      'Role-based access control: Admins manage all tasks and members; Members update task status only',
      'Dashboard with project overview, task counts by status, overdue tasks, and upcoming deadlines',
      'JWT-authenticated REST API with Prisma ORM, PostgreSQL, and full CRUD for projects and tasks',
    ],
    tech: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'React 18', 'Vite', 'Tailwind CSS', 'JWT'],
    gradient: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1f2937 100%)',
    github: 'https://github.com/Aashritha-2005/TaskManager',
  },
  {
    title: 'RLBenchKit',
    category: 'RL Systems & Evaluation',
    desc: 'Modular reinforcement learning benchmarking toolkit for systematically evaluating policy gradient and value-based algorithms across diverse Gymnasium environments.',
    contributions: [
      'Implements PPO, A2C, DQN, and SAC with unified hyperparameter config and reproducible seeds',
      'Experiment tracker logs reward curves, episode lengths, and gradient norms for comparative analysis',
      'Supports parallel environment rollouts via Gymnasium vectorised wrappers for 4× faster evaluation',
    ],
    tech: ['PyTorch', 'Gymnasium'],
    gradient: 'linear-gradient(135deg, #1a0544 0%, #5b21b6 50%, #7c3aed 100%)',
    github: 'https://github.com/Aashritha-2005/rl-benchkit',
  },
  {
    title: 'Federated Learning with Flower & ALBERT',
    category: 'FL / Distributed',
    desc: 'Privacy-preserving distributed NLP training using the Flower federated learning framework with ALBERT as the base model.',
    contributions: [
      'Implements FedAvg with differential privacy guarantees — per-sample gradient clipping and Gaussian noise injection',
      'Heterogeneous client simulation: non-IID data splits with configurable α-Dirichlet partitioning',
      'Convergence benchmarks show <2% accuracy drop versus centralised fine-tuning at ε=8 privacy budget',
    ],
    tech: ['Flower', 'ALBERT', 'HuggingFace', 'PyTorch'],
    gradient: 'linear-gradient(135deg, #003d2e 0%, #047857 50%, #10b981 100%)',
    github: 'https://github.com/Aashritha-2005/federated-fine-tuning-with-flower-distributed-computing',
  },
]

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1 - (total - 1 - index) * 0.03, 1])

  return (
    <div ref={cardRef} className="sticky" style={{ top: `calc(6rem + ${index * 28}px)` }}>
      <motion.div
        style={{ scale, background: '#0d1117' }}
        className="h-[85vh] rounded-[40px] border-2 border-[#1e3a5f] overflow-hidden flex flex-col md:flex-row"
      >
        {/* Gradient colour panel */}
        <div className="md:flex-[0_0_28%] min-h-[200px] md:min-h-full flex-shrink-0" style={{ background: project.gradient }} />

        {/* Content panel */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center overflow-auto">
          {/* Category */}
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-2">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="text-[32px] md:text-[38px] font-bold text-[#D7E2EA] mb-3 leading-tight">
            {project.title}
          </h3>

          {/* One-line description */}
          <p className="text-lg text-[#6b7280] leading-relaxed">
            {project.desc}
          </p>

          {/* Key contributions */}
          <p className="text-sm font-semibold text-[#6b7280] uppercase tracking-widest mt-4 mb-2">
            Key Contributions
          </p>
          <ul className="space-y-1.5">
            {project.contributions.map((c, i) => (
              <li key={i} className="flex gap-2 text-base text-[#A8C5DA] leading-relaxed">
                <span className="text-cyan-400 flex-shrink-0">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-[15px] bg-green-900/40 text-green-400">
                {t}
              </span>
            ))}
          </div>

          {/* Button */}
          <div className="mt-6">
            {project.github ? (
              <ViewCodeButton href={project.github} />
            ) : (
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[#A8C5DA]/50 text-sm font-semibold uppercase tracking-widest border-2 border-[#A8C5DA]/30 opacity-50 cursor-not-allowed">
                View Code
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-center font-black text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}>
            Featured <span className="hero-heading">Projects</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-center text-[#6b7280] mt-3 max-w-xl mx-auto">
            A selection of projects spanning ML research, distributed systems, and applied AI.
          </p>
          <GradientDivider />
        </FadeIn>

        <div className="mt-16 flex flex-col gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
