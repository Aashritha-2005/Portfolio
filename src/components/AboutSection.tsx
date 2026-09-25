import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './ui/FadeIn'
import AnimatedText from './ui/AnimatedText'
import { ContactButton } from './ui/Buttons'

const ABOUT_TEXT =
  "I'm Aashritha Lakshmi Mallampati — a CS undergrad at BITS Pilani who takes ideas from design to deployment. I write production-grade code in Python, TypeScript, and Java, and I care deeply about clean architecture, real test coverage, and engineering discipline. I thrive at the intersection of full-stack development and AI — and I bring both research rigour and practical execution to every team I join."

type YearEvent = {
  month?: string
  title: string
  desc?: string
  tag: string
  tagColor: string
  dotColor: string
}

type YearGroup = {
  year: string
  yearColor: string
  events: YearEvent[]
}

const yearGroups: YearGroup[] = [
  {
    year: '2021',
    yearColor: '#06b6d4',
    events: [
      {
        title: 'Class X — 10 CGPA',
        desc: 'Secured top score in secondary school.',
        tag: 'Education',
        tagColor: 'text-[#67e8f9] border-[#06b6d4]/30',
        dotColor: '#06b6d4',
      },
    ],
  },
  {
    year: '2023',
    yearColor: '#06b6d4',
    events: [
      {
        title: 'Class XII — 95.8%',
        desc: 'PCM — cracked JEE, earned BITS Pilani seat.',
        tag: 'Education',
        tagColor: 'text-[#67e8f9] border-[#06b6d4]/30',
        dotColor: '#06b6d4',
      },
      {
        title: 'B.E. CS — BITS Pilani',
        desc: 'Started B.E. CS at one of India\'s top institutes.',
        tag: 'University',
        tagColor: 'text-[#93c5fd] border-[#3b82f6]/30',
        dotColor: '#3b82f6',
      },
    ],
  },
  {
    year: '2025',
    yearColor: '#16a34a',
    events: [
      {
        month: 'May–Aug',
        title: 'Tech Intern — Swecha Telangana',
        desc: 'Shipped fixes in a live ML pipeline; applied CI/CD and Agile.',
        tag: 'Internship',
        tagColor: 'text-[#4ade80] border-[#16a34a]/30',
        dotColor: '#16a34a',
      },
      {
        month: 'Jul–May \'26',
        title: 'Joint Secretary — Firewallz',
        desc: 'Ran security & registration for a 1000+ attendee fest.',
        tag: 'Leadership',
        tagColor: 'text-[#c4b5fd] border-[#7c3aed]/30',
        dotColor: '#a78bfa',
      },
    ],
  },
  {
    year: '2026',
    yearColor: '#ec4899',
    events: [
      {
        month: 'Jan',
        title: 'Published — Springer Nature',
        desc: 'Co-authored research on structural damage detection; AUC 0.99.',
        tag: 'Publication',
        tagColor: 'text-[#f9a8d4] border-[#db2777]/30',
        dotColor: '#ec4899',
      },
      {
        month: 'Jul–Present',
        title: 'SME Intern — House of Couton',
        desc: 'Writing specs and validating AI/ML product builds.',
        tag: 'Internship',
        tagColor: 'text-[#4ade80] border-[#16a34a]/30',
        dotColor: '#16a34a',
      },
    ],
  },
  {
    year: '2027',
    yearColor: '#3b82f6',
    events: [
      {
        title: 'B.E. Graduation — BITS Pilani',
        desc: 'Graduating with honors in CS — full-stack & AI.',
        tag: 'Upcoming',
        tagColor: 'text-[#93c5fd] border-[#3b82f6]/30',
        dotColor: '#3b82f6',
      },
    ],
  },
]

function ScrollTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.1'],
  })

  return (
    <div ref={containerRef} className="flex flex-col gap-0">
      {yearGroups.map((g, i) => {
        const total = yearGroups.length
        // compress into first 55% of scroll so all items done by mid-section
        const start = (i / total) * 0.55
        const mid = ((i + 0.7) / total) * 0.55
        const isLast = i === yearGroups.length - 1
        return (
          <ScrollYearGroup
            key={g.year}
            group={g}
            progress={scrollYProgress}
            start={start}
            mid={mid}
            isLast={isLast}
          />
        )
      })}
    </div>
  )
}

function ScrollYearGroup({
  group,
  progress,
  start,
  mid,
  isLast,
}: {
  group: YearGroup
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  start: number
  mid: number
  isLast: boolean
}) {
  const opacity = useTransform(progress, [start, mid], [0.05, 1])
  const y = useTransform(progress, [start, mid], [16, 0])

  return (
    <motion.div style={{ opacity, y }} className="mb-10">
      {/* Big year */}
      <p
        className="font-black leading-none mb-4 select-none"
        style={{ fontSize: 'clamp(2.6rem, 5vw, 3.8rem)', color: group.yearColor, opacity: 0.9 }}
      >
        {group.year}
      </p>

      {/* Events under this year */}
      <div className="flex flex-col gap-4 pl-1 border-l-2" style={{ borderColor: `${group.yearColor}40` }}>
        {group.events.map((e, ei) => (
          <div key={ei} className="pl-5 relative">
            {/* dot on the line */}
            <div
              className="absolute -left-[6px] top-2 w-2.5 h-2.5 rounded-full"
              style={{ background: e.dotColor, boxShadow: `0 0 8px ${e.dotColor}90` }}
            />
            <div className="flex items-center gap-2 flex-wrap mb-1">
              {e.month && (
                <span className="text-xs font-bold" style={{ color: e.dotColor, opacity: 0.85 }}>
                  {e.month}
                </span>
              )}
              <span
                className={`text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${e.tagColor}`}
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                {e.tag}
              </span>
            </div>
            <p className="text-[#F5F1EA] font-bold text-base leading-snug">{e.title}</p>
            {e.desc && <p className="text-[#C8C0B6] text-sm mt-1 leading-relaxed">{e.desc}</p>}
          </div>
        ))}
      </div>

      {/* connector to next year */}
      {!isLast && (
        <div className="ml-0.5 mt-3 w-px h-6" style={{ background: `linear-gradient(180deg, ${group.yearColor}40, transparent)` }} />
      )}
    </motion.div>
  )
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="atmospheric-section atmosphere-muted px-5 sm:px-8 md:px-12 py-32 pb-48"
    >
      <div className="relative z-10 max-w-[1320px] mx-auto">

        {/* Two-column layout — timeline spans full height from top */}
        <div className="flex flex-col lg:flex-row items-start justify-between">

          {/* ── LEFT: about content ── */}
          <div className="flex-1 min-w-0 lg:max-w-[680px]">

            <FadeIn delay={0} y={40}>
              <h2
                className="hero-heading font-black uppercase leading-none tracking-tight mb-10"
                style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
              >
                About me
              </h2>
            </FadeIn>
            <AnimatedText
              text={ABOUT_TEXT}
              className="font-medium leading-relaxed text-[#efe8df] block w-full"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}
            />

            <FadeIn delay={0.15} y={25}>
              <div className="glass-panel rounded-2xl p-7 mt-10">
                <p className="text-xs font-semibold text-[#d39a63] uppercase tracking-widest mb-5">Education</p>
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 mt-1.5 rounded-full bg-[#d39a63] flex-shrink-0 shadow-[0_0_14px_rgba(211,154,99,0.55)]" />
                  <div>
                    <p className="text-[#F5F1EA] font-bold text-base leading-snug">B.E. Computer Science (Hons)</p>
                    <p className="text-[#F5F1EA] text-sm mt-1">BITS Pilani · 2023 – 2027</p>
                    <p className="text-[#C8C0B6] text-xs mt-2 leading-relaxed">
                      Coursework spanning Algorithms, OS, DBMS, Computer Networks, OOP, and Computer Architecture — complemented by hands-on research and two industry internships while still in sophomore year.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} y={25}>
              <div className="glass-panel rounded-2xl p-7 mt-6">
                <p className="text-xs font-semibold text-[#d39a63] uppercase tracking-widest mb-5">Core Strengths</p>
                <div className="flex flex-wrap gap-2.5">
                  {['Full-Stack Development', 'REST API Design', 'Backend Engineering', 'AI & ML Systems', 'CI/CD & DevOps', 'Automated Testing', 'Database Design', 'Problem Solving'].map((s) => (
                    <span key={s} className="px-3 py-1.5 rounded-full text-xs warm-chip">{s}</span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.25} y={25}>
              <div className="glass-panel rounded-2xl p-7 mt-6">
                <p className="text-xs font-semibold text-[#d39a63] uppercase tracking-widest mb-5">Key Achievements</p>
                <ul className="space-y-3">
                  {[
                    { text: 'Co-authored a peer-reviewed paper in The Journal of Supercomputing (Springer Nature, 2026) while in sophomore year — one of the few undergrads to publish in a Q1 journal.', highlight: 'publication' },
                    { text: 'Completed two industry internships before finishing second year — Swecha Telangana (ML pipeline) and House of Couton (AI/ML product specs).', highlight: 'internships' },
                    { text: 'Comfortable owning work end-to-end — from scoping and architecture to deployment and monitoring — without needing hand-holding at each step.', highlight: 'ownership' },
                    { text: 'Elected Joint Secretary of Firewallz, BITS Pilani — led security and operations for a 1000+ attendee inter-college fest.', highlight: 'leadership' },
                    { text: 'Writes code that ships: every project has tests, a CI pipeline, and a live deployment — not just a GitHub repo.', highlight: 'engineering' },
                  ].map((item) => (
                    <li key={item.highlight} className="flex gap-2.5 text-sm text-[#F5F1EA] leading-relaxed">
                      <span className="text-[#d39a63] flex-shrink-0 mt-0.5">▸</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} y={25}>
              <div className="glass-panel rounded-2xl p-7 mt-6">
                <p className="text-xs font-semibold text-[#d39a63] uppercase tracking-widest mb-4">Career Goals</p>
                <p className="text-sm text-[#F5F1EA] leading-relaxed">
                  Actively seeking <span className="text-[#d39a63] font-semibold">SWE internships and full-stack roles</span>. I want to join a team that ships real products, owns the full stack, and cares about code quality — with a published research track record to back it up.
                </p>
              </div>
            </FadeIn>

            <div className="mt-10">
              <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </ContactButton>
            </div>
          </div>

          {/* ── RIGHT: scroll-driven journey timeline ── */}
          <div className="hidden lg:block lg:w-[340px] xl:w-[380px] flex-shrink-0 self-stretch ml-auto">
            <div className="sticky top-24">
              <ScrollTimeline />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
