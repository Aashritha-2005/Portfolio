import { useState, useEffect, useRef } from 'react'
import { Award, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import FadeIn from './ui/FadeIn'
import GradientDivider from './ui/GradientDivider'

const btnGradient = 'linear-gradient(123deg, #0c1a4e 7%, #1a4fd6 37%, #0ea5e9 72%, #38bdf8 100%)'
const btnShadow = 'inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 24px rgba(26,79,214,0.3)'

const CARD_WIDTH = 400
const GAP = 24

const baseCerts = [
  {
    title: 'Summer of AI Internship',
    issuer: 'VISWAM.AI & Swecha',
    category: 'Internship',
    description: null,
    link: 'https://drive.google.com/file/d/11Yy7Wf39lSBlxMWpGtK5i5pGNKQM0nKz/view',
  },
  {
    title: 'TATA Cybersecurity Analyst Micro-Internship',
    issuer: 'Tata Consultancy Services',
    category: 'Internship',
    description: null,
    link: 'https://drive.google.com/file/d/1-ppAVTe2TRfSXTPxUVnTt15RqCOzcsHm/view',
  },
  {
    title: 'Machine Learning Foundations (Python & scikit-learn)',
    issuer: 'Model training, validation, and evaluation',
    category: 'Certification',
    description:
      'Model training, validation, and evaluation using Python and scikit-learn, including classical ML algorithms, cross-validation, and performance metrics.',
    link: 'https://drive.google.com/file/d/1fT8fvnN1j1xDVlW7eNf5h0ybeTP4qvAq/view',
  },
]

// Triple array for infinite loop illusion
const certs = [...baseCerts, ...baseCerts, ...baseCerts]

export default function CertificationsSection() {
  const [currentIndex, setCurrentIndex] = useState(baseCerts.length) // start at middle set
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function goTo(index: number, transition = true) {
    setIsTransitioning(transition)
    setCurrentIndex(index)
  }

  function goNext() {
    goTo(currentIndex + 1)
  }

  function goPrev() {
    goTo(currentIndex - 1)
  }

  // After a no-transition jump, re-enable transition
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true)
      })
      return () => cancelAnimationFrame(raf)
    }
  }, [isTransitioning])

  // When we reach beyond the last set or before the first set, silently reset
  useEffect(() => {
    if (currentIndex >= baseCerts.length * 2) {
      const timer = setTimeout(() => goTo(baseCerts.length, false), 800)
      return () => clearTimeout(timer)
    }
    if (currentIndex < baseCerts.length) {
      const timer = setTimeout(() => goTo(baseCerts.length * 2 - 1, false), 800)
      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  // Auto-advance every 3 seconds
  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 3000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered])

  return (
    <section
      id="certifications"
      className="bg-[#F8FAFC] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 pb-20 overflow-hidden"
    >
      {/* Heading row */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10 mb-12">
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none text-center"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            Certificates
          </h2>
          <GradientDivider />
        </FadeIn>
        <FadeIn delay={0.15} y={20}>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="#1a4fd6" stroke="#1a4fd6" />
            ))}
            <span className="text-sm font-medium text-gray-500 ml-1">Verified · 3 credentials</span>
          </div>
        </FadeIn>
      </div>

      {/* Navigation row */}
      <div className="max-w-[1248px] mx-auto px-5 sm:px-8 md:px-10 flex justify-end gap-3 mb-6">
        <button
          onClick={goPrev}
          className="w-12 h-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center cursor-pointer hover:border-[#1a4fd6]/40 hover:bg-[#f0f4ff] transition-all duration-200"
          aria-label="Previous"
        >
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
        <button
          onClick={goNext}
          className="w-12 h-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center cursor-pointer hover:border-[#1a4fd6]/40 hover:bg-[#f0f4ff] transition-all duration-200"
          aria-label="Next"
        >
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Carousel */}
      <div
        className="overflow-hidden max-w-[1248px] mx-auto px-5 sm:px-8 md:px-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{
            gap: GAP,
            transform: `translateX(-${currentIndex * (CARD_WIDTH + GAP)}px)`,
            transition: isTransitioning ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
        >
          {certs.map((cert, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100 px-8 py-10 flex flex-col gap-4"
              style={{ width: CARD_WIDTH }}
            >
              {/* Row 1 — icon + pill */}
              <div className="flex items-center justify-between">
                <Award size={40} className="text-[#1a4fd6]" />
                <span className="bg-[#f0f4ff] text-[#1a4fd6] border border-[#1a4fd6]/20 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide">
                  {cert.category}
                </span>
              </div>

              {/* Row 2 — title */}
              <h3
                className="font-bold text-[#0d1117] leading-snug"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
              >
                {cert.title}
              </h3>

              {/* Row 3 — issuer */}
              <p className="text-sm text-gray-500 font-medium">{cert.issuer}</p>

              {/* Row 4 — description (cert 3 only) */}
              {cert.description && (
                <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
              )}

              {/* Row 5 — button */}
              <div className="mt-auto pt-4">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-90"
                  style={{ background: btnGradient, boxShadow: btnShadow }}
                >
                  ↗ View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing aesthetic line */}
      <FadeIn delay={0.3}>
        <p className="mt-16 text-center text-sm text-gray-400 tracking-widest uppercase">
          Continuously learning · building · researching
        </p>
      </FadeIn>
    </section>
  )
}
