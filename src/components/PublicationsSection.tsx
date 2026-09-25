import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import FadeIn from './ui/FadeIn'
import GradientDivider from './ui/GradientDivider'
const btnGradient = 'linear-gradient(123deg, #0a1f2e 7%, #0e7490 52%, #06b6d4 100%)'
const btnShadow = 'inset 0 1px 0 rgba(255,255,255,0.14), 0 4px 24px rgba(6,182,212,0.28)'

function PublicationCard({ index, total }: { index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1 - (total - 1 - index) * 0.03, 1])

  return (
    <div ref={cardRef} className="relative">
      <motion.div
        style={{ scale }}
        className="glass-panel rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-7 sm:p-8 md:p-10 overflow-auto"
      >
        {/* Row 1 — metadata bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-5">
          {/* Ghost number */}
          <span
            className="font-black leading-none select-none"
            style={{
              fontSize: 'clamp(4rem, 10vw, 140px)',
              color: 'rgba(255, 219, 179, 0.12)',
            }}
          >
            01
          </span>

          {/* Journal pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="warm-chip rounded-full px-4 py-1 text-[17px] font-medium">
              Springer Nature · 2026
            </span>
            <span className="warm-chip rounded-full px-4 py-1 text-[17px] font-medium">
              The Journal of Supercomputing
            </span>
          </div>

          {/* Status pill */}
          <span className="bg-[#0d2a1a]/80 text-[#4ade80] border border-[#4ade80]/30 rounded-full px-5 py-2 text-[17px] font-semibold">
            Published
          </span>
        </div>

        {/* Row 2 — title */}
        <FadeIn delay={0.2} y={30}>
          <h3
            className="font-black text-[#F5F1EA] leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(calc(1.4rem - 2px), calc(3.5vw - 2px), calc(2.8rem - 2px))' }}
          >
            Integrated Finite Element-Based Digital Twin Model and Scalable Computational Feature Transfer Framework for Structural Dynamics and Damage Detection
          </h3>
        </FadeIn>

        {/* Row 3 — abstract bullets */}
        <ul className="mb-6 space-y-3">
          <li className="flex gap-2 font-medium leading-relaxed text-[#F5F1EA]" style={{ fontSize: 'clamp(1.0625rem, 1.9vw, 1.325rem)' }}>
            <span className="text-[#d39a63] flex-shrink-0">•</span>
            <span>Physics-informed digital twin fusing finite element simulations with deep neural networks for real-time structural health monitoring across complex engineering structures.</span>
          </li>
          <li className="flex gap-2 font-medium leading-relaxed text-[#F5F1EA]" style={{ fontSize: 'clamp(1.0625rem, 1.9vw, 1.325rem)' }}>
            <span className="text-[#d39a63] flex-shrink-0">•</span>
            <span>Scalable computational feature transfer enabling zero-shot generalization across unseen structural configurations — achieving AUC up to 0.99 on benchmark damage detection tasks.</span>
          </li>
          <li className="flex gap-2 font-medium leading-relaxed text-[#F5F1EA]" style={{ fontSize: 'clamp(1.0625rem, 1.9vw, 1.325rem)' }}>
            <span className="text-[#d39a63] flex-shrink-0">•</span>
            <span>Proposed framework reduces reliance on large labeled structural datasets, making the approach viable for real-world deployments where data is scarce or costly to acquire.</span>
          </li>
        </ul>

        {/* Impact row */}
        <div className="flex flex-wrap gap-4 mb-6">
          {[
            { metric: 'AUC 0.99', label: 'damage detection accuracy' },
            { metric: 'Zero-shot', label: 'cross-structure generalization' },
            { metric: 'FEM + DNN', label: 'hybrid modelling approach' },
            { metric: 'Springer Nature', label: 'peer-reviewed publication' },
          ].map((s) => (
            <div key={s.metric} className="flex flex-col px-5 py-3 rounded-2xl border border-[#d39a63]/15 bg-[#d39a63]/5">
              <span className="text-[#d39a63] font-black text-lg leading-none">{s.metric}</span>
              <span className="text-[#C8C0B6] text-xs mt-1 uppercase tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Row 4 — details grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
          {[
            { label: 'Role', value: 'Co-author', valueClass: 'font-semibold text-[#F5F1EA] text-base' },
            { label: 'Journal', value: 'The Journal of Supercomputing', valueClass: 'font-semibold text-[#F5F1EA] text-sm' },
            { label: 'Volume', value: 'Vol. 82, Article 440', valueClass: 'font-semibold text-[#F5F1EA] text-base' },
            { label: 'DOI', value: '10.1007/s11227-026-08578-3', valueClass: 'font-semibold text-[#d39a63] text-sm break-all' },
            { label: 'Year', value: '2026', valueClass: 'font-semibold text-[#F5F1EA] text-base' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-sm uppercase tracking-widest text-[#C8C0B6] mb-1">{item.label}</p>
              <p className={item.valueClass}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Row 5 — bottom bar */}
        <div className="flex justify-between items-center pt-5 border-t border-[#d39a63]/10">
          {/* Decorative quote */}
          <span
            className="font-black text-[#d39a63] select-none relative"
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
      className="atmospheric-section atmosphere-structured relative z-10 px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-16"
    >
      {/* Decorative background orb */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none z-0 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, rgba(179,104,54,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-[84vw] max-w-[1320px] mx-auto">
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

        <div className="mt-8 flex flex-col gap-6">
          <PublicationCard index={0} total={1} />
        </div>
      </div>
    </section>
  )
}
