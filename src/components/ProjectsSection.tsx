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
      'Physics-informed loss function combines PDE residuals with data-driven objectives, enabling zero-shot transfer across unseen structural configurations',
      'FEM simulation pipeline in MATLAB/Abaqus generates labelled training data; model achieves 94% damage localisation accuracy on unseen geometries',
      'Benchmarked against classical SHM methods — AUC up to 0.99 on benchmark damage detection tasks',
    ],
    tech: ['PyTorch', 'NumPy', 'SciPy', 'MATLAB', 'Abaqus'],
    gradient: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 40%, #c2610f 100%)',
    github: 'https://github.com/Aashritha-2005/Finite-Element-Model-Based-Neural-Twin-for-Structural-Dynamics-and-SHM',
  },
  {
    title: 'SessionZERO — Memory Layer for AI Coding Agents',
    category: 'Agents / Memory',
    desc: "A trust-weighted memory layer for AI coding agents that scores and labels stored context by reliability before it's reused in a session.",
    contributions: [
      'Architected a production backend retrieving top 10 semantic matches per query across 5 commit-based memory types via 6 FastAPI REST endpoints',
      'Trust-scoring system achieves 0.97 confidence on valid decisions vs. 0.31 on outdated ones — distinguishing superseded agent context at query time',
      'Deployed to Railway via GitHub Actions CI/CD with a 28-test suite covering endpoint behaviour, auth, and validation; Ruff linting on every push',
    ],
    tech: ['Python', 'FastAPI', 'Knowledge Graph APIs', 'PyTest', 'GitHub Actions'],
    gradient: 'linear-gradient(135deg, #0a1f0e 0%, #14532d 40%, #c2610f 100%)',
    github: 'https://github.com/Aashritha-2005/SessionZERO-agentMemory',
  },
  {
    title: 'RAG Video Analytics Chatbot',
    category: 'RAG · Video Analytics',
    desc: 'Full-stack app that compares a YouTube video and Instagram Reel with transcript-aware analytics — extracts metadata, computes engagement rates, and lets you chat with video content via a Groq-powered RAG pipeline.',
    contributions: [
      'FastAPI backend processes 500-token transcript chunks with 50-token overlap, retrieving top 6 chunks per query across 20 embedding calls per workflow',
      'End-to-end RAG pipeline: ChromaDB vector indexing + LangChain + Groq LLM inference, returning grounded cited responses over streaming REST endpoints',
      'React/TypeScript frontend deployed on Vercel — URL submission, side-by-side performance comparison, and real-time Q&A across 2 video sources',
    ],
    tech: ['FastAPI', 'LangChain', 'ChromaDB', 'Groq', 'HuggingFace', 'React', 'TypeScript', 'Vite'],
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #4a1d6e 40%, #c2610f 100%)',
    github: 'https://github.com/Aashritha-2005/RAG-Video-Analytics',
  },
  {
    title: 'TaskFlow',
    category: 'Full Stack · Productivity',
    desc: 'Full-stack project management app where teams create projects, assign tasks, track progress, and manage members — with role-based access control, JWT authentication, and a real-time dashboard.',
    contributions: [
      'Shipped a 17-endpoint REST API with Node.js/Express, JWT authentication, and role-based access control (Admins vs Members)',
      'Automated PostgreSQL schema migrations through Prisma across 4 core data models with validation checks on every release',
      'Built a responsive React/TypeScript frontend with 5 reusable components integrating REST API calls for projects, tasks, and dashboards',
    ],
    tech: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'React 18', 'Vite', 'Tailwind CSS', 'JWT'],
    gradient: 'linear-gradient(135deg, #1a1500 0%, #854d0e 40%, #d97706 100%)',
    github: 'https://github.com/Aashritha-2005/TaskManager',
  },
  {
    title: 'RLBenchKit',
    category: 'RL Systems & Evaluation',
    desc: 'Modular reinforcement learning benchmarking toolkit for systematically evaluating policy gradient and value-based algorithms across diverse Gymnasium environments.',
    contributions: [
      'Implements PPO, A2C, DQN, and SAC with a unified Python config system and reproducible random seeds across all runs',
      'Experiment tracker logs reward curves, episode lengths, and gradient norms — exportable for cross-algorithm comparison',
      'Supports parallel environment rollouts via Gymnasium vectorised wrappers, delivering 4× faster evaluation throughput',
    ],
    tech: ['PyTorch', 'Gymnasium'],
    gradient: 'linear-gradient(135deg, #001a1a 0%, #0f766e 40%, #c2610f 100%)',
    github: 'https://github.com/Aashritha-2005/rl-benchkit',
  },
  {
    title: 'Federated Learning with Flower & ALBERT',
    category: 'FL / Distributed',
    desc: 'Privacy-preserving distributed NLP training using the Flower federated learning framework with ALBERT as the base model.',
    contributions: [
      'Built distributed federated learning with Flower and PyTorch, coordinating ALBERT fine-tuning across 5+ simulated clients over 50+ federated rounds',
      'Customised FedAvg for an ALBERT model (~12M parameters), aggregating client updates and evaluation metrics without centralising any training data',
      'Implemented differential privacy — per-sample gradient clipping and Gaussian noise — achieving <2% accuracy drop vs centralised fine-tuning at ε=8',
    ],
    tech: ['Flower', 'ALBERT', 'HuggingFace', 'PyTorch'],
    gradient: 'linear-gradient(135deg, #1a0a1a 0%, #9d174d 40%, #c2610f 100%)',
    github: 'https://github.com/Aashritha-2005/federated-fine-tuning-with-flower-distributed-computing',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.97, 1, 1])

  return (
    <div
      ref={cardRef}
      className="sticky h-[85vh]"
      style={{ top: `calc(5rem + ${index * 24}px)`, zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale }}
        className="h-full rounded-[40px] border-2 border-[#3b2a22] overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left gradient panel with number */}
        <div
          className="relative md:flex-[0_0_28%] min-h-[200px] md:min-h-full flex-shrink-0 overflow-hidden"
          style={{ background: project.gradient }}
        >
          <span className="project-index-number">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Content panel */}
        <div className="project-card-panel flex-1 p-8 md:p-12 flex flex-col justify-center overflow-auto">
          <span className="text-sm font-semibold text-[#F5F2ED] uppercase tracking-widest mb-2">
            {project.category}
          </span>

          <h3 className="text-[32px] md:text-[38px] font-bold text-[#F5F2ED] mb-3 leading-tight">
            {project.title}
          </h3>

          <p className="text-lg text-[#E8E3DC] leading-relaxed">
            {project.desc}
          </p>

          <p className="text-sm font-semibold text-[#F5F2ED] uppercase tracking-widest mt-4 mb-2">
            Key Contributions
          </p>
          <ul className="space-y-1.5">
            {project.contributions.map((c, i) => (
              <li key={i} className="flex gap-2 text-base text-[#E8E3DC] leading-relaxed">
                <span className="text-[#c58f5e] flex-shrink-0">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span key={t} className="warm-chip px-3 py-1 rounded-full text-[15px]">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <ViewCodeButton href={project.github} />
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
      className="atmosphere-lines relative z-10 py-24 px-6 md:px-16"
    >
      <div className="max-w-[1220px] mx-auto">
        <FadeIn>
          <h2 className="text-center font-black text-[#F5F1EA]" style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}>
            Featured <span className="hero-heading">Projects</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-center text-[#E8E3DC] mt-3 max-w-3xl mx-auto">
            A selection of projects spanning ML research, distributed systems, and applied AI.
          </p>
          <GradientDivider />
        </FadeIn>

        <div className="mt-16 flex flex-col">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
