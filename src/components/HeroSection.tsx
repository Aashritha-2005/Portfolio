import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeIn from './ui/FadeIn'
import Magnet from './ui/Magnet'
import { ExploreButton } from './ui/Buttons'

const PORTRAIT_URL = 'https://i.postimg.cc/cLbNVKqP/Whats-App-Image-2025-11-06-at-16-06-14.jpg'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 pb-16 bg-[#0C0C0C]">
      <div className="relative z-10 max-w-[55%] sm:max-w-[60%]">
        <FadeIn delay={0.1} y={40}>
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none mt-0 sm:mt-0 md:-mt-6"
              style={{ fontSize: 'clamp(4rem, 12vw, 9.5rem)', wordBreak: 'keep-all', whiteSpace: 'nowrap' }}
            >
              Hi, i&apos;m Aashritha
               <br />
              <span className="inline-block ml-32">Mallampati</span>
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} y={20}>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-[#D7E2EA]/30 text-[#D7E2EA]/80">AI/ML Developer</span>
            <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-[#D7E2EA]/30 text-[#D7E2EA]/80">Data Scientist</span>
            <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-[#D7E2EA]/30 text-[#D7E2EA]/80">Software Developer</span>
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">Research Enthusiast</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <p className="mt-4 text-[#6b7280] text-2xl max-w-md">
            Exploring intelligence through code, creativity, and curiosity.
          </p>
          <div className="mt-6">
            <ExploreButton onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore My Work
            </ExploreButton>
          </div>
        </FadeIn>
      </div>

      {/* Portrait — visible on all screen sizes */}
      <FadeIn delay={0.6} y={30} className="absolute right-[8%] top-1/2 -translate-y-1/2">
        <Magnet>
          <div className="relative">
            <div
              className="w-[180px] sm:w-[260px] md:w-[360px] lg:w-[420px] aspect-square rounded-full border-4 border-[#1a4fd6]/40 overflow-hidden"
              style={{
                boxShadow: '0 0 60px rgba(26,79,214,0.35)',
                backgroundImage: `url(${PORTRAIT_URL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                background: `url(${PORTRAIT_URL}) center/cover no-repeat, radial-gradient(circle, #1a4fd6 0%, #5b21b6 60%, #0C0C0C 100%)`,
              }}
            >
            </div>
            <div className="absolute -top-4 -right-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
              Available for hire
            </div>
          </div>
        </Magnet>
      </FadeIn>

      {/* Scroll arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#1a4fd6]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  )
}
