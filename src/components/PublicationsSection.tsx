import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import FadeIn from './ui/FadeIn'
import GradientDivider from './ui/GradientDivider'
const btnGradient = 'linear-gradient(123deg, #0c1a4e 7%, #1a4fd6 37%, #0ea5e9 72%, #38bdf8 100%)'
const btnShadow = 'inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 24px rgba(26,79,214,0.3)'

function PublicationCard({ index, total }: { index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1 - (total - 1 - index) * 0.03, 1])

  return (
    <div ref={cardRef} className="h-[85vh] relative">
      <motion.div
        style={{ scale, top: `calc(6rem + ${index * 28}px)` }}
        className="sticky bg-white border-2 border-[#38bdf8] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-8 sm:p-10 md:p-14 shadow-[0_8px_60px_rgba(26,79,214,0.08)] overflow-auto max-h-[85vh]"
      >
        {/* Row 1 — metadata bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          {/* Ghost number */}
          <span
            className="font-black leading-none select-none"
            style={{
              fontSize: 'clamp(4rem, 10vw, 140px)',
              color: 'rgba(0,0,0,0.12)',
            }}
          >
            01
          </span>

          {/* Journal pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="bg-[#f0f4ff] text-[#1a4fd6] border border-[#1a4fd6]/20 rounded-full px-4 py-1 text-[17px] font-medium">
              Springer Nature · 2026
            </span>
            <span className="bg-[#f8f0ff] text-[#7c3aed] border border-[#7c3aed]/20 rounded-full px-4 py-1 text-[17px] font-medium">
              The Journal of Supercomputing
            </span>
          </div>

          {/* Status pill */}
          <span className="bg-green-50 text-green-700 border border-green-200 rounded-full px-5 py-2 text-[17px] font-semibold">
            Published
          </span>
        </div>

        {/* Row 2 — title */}
        <FadeIn delay={0.2} y={30}>
          <h3
            className="font-black text-[#0d1117] leading-tight tracking-tight mb-8"
            style={{ fontSize: 'clamp(calc(1.4rem - 2px), calc(3.5vw - 2px), calc(2.8rem - 2px))' }}
          >
            Integrated Finite Element-Based Digital Twin Model and Scalable Computational Feature Transfer Framework for Structural Dynamics and Damage Detection
          </h3>
        </FadeIn>

        {/* Row 3 — abstract bullets */}
        <ul className="mb-8 max-w-4xl space-y-2">
          <li className="flex gap-2 font-medium leading-relaxed text-[#374151]" style={{ fontSize: 'clamp(1.0625rem, 1.9vw, 1.325rem)' }}>
            <span className="text-cyan-500 flex-shrink-0">•</span>
            <span>Physics-informed digital twin fusing finite element simulations with deep neural networks for real-time structural health monitoring.</span>
          </li>
          <li className="flex gap-2 font-medium leading-relaxed text-[#374151]" style={{ fontSize: 'clamp(1.0625rem, 1.9vw, 1.325rem)' }}>
            <span className="text-cyan-500 flex-shrink-0">•</span>
            <span>Scalable computational feature transfer for zero-shot generalization across structural configurations, achieving AUC up to 0.99 on benchmark damage detection tasks.</span>
          </li>
        </ul>

        {/* Row 4 — details grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Role', value: 'Co-author', valueClass: 'font-semibold text-gray-900 text-base' },
            { label: 'Volume', value: 'Vol. 82, Article 440', valueClass: 'font-semibold text-gray-900 text-base' },
            { label: 'DOI', value: '10.1007/s11227-026-08578-3', valueClass: 'font-semibold text-[#1a4fd6] text-sm' },
            { label: 'Year', value: '2026', valueClass: 'font-semibold text-gray-900 text-base' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
              <p className={item.valueClass}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Row 5 — bottom bar */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-100">
          {/* Decorative quote */}
          <span
            className="font-black text-[#1a4fd6] select-none relative"
            style={{ fontSize: 120, opacity: 0.08, lineHeight: 0, top: 16 }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* View Publication button */}
          <a
            href="https://doi.org/10.1007/s11227-026-08578-3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium text-sm uppercase tracking-widest transition-opacity hover:opacity-90 outline outline-2 outline-offset-[-3px] outline-white/20"
            style={{ background: btnGradient, boxShadow: btnShadow }}
          >
            ↗ View Publication
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default function PublicationsSection() {
  return (
    <section
      id="publications"
      className="relative bg-[#dce8f5] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative background orb */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none z-0 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, rgba(26,79,214,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none text-center"
            style={{ fontSize: 'clamp(calc(3rem - 2px), calc(10vw - 2px), 118px)' }}
          >
            Research{' '}
            <br className="hidden sm:block" />
            Publications
          </h2>
          <GradientDivider />
        </FadeIn>

        <div className="mt-16 flex flex-col gap-6">
          <PublicationCard index={0} total={1} />
        </div>
      </div>
    </section>
  )
}
