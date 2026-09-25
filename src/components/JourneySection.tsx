import FadeIn from './ui/FadeIn'
import GradientDivider from './ui/GradientDivider'

type Milestone = {
  year: string
  title: string
  subtitle: string
  description: string
  tag: string
  tagColor: string
  dotColor: string
  side: 'left' | 'right'
}

const milestones: Milestone[] = [
  {
    year: '2021',
    title: 'Class X — Perfect Score',
    subtitle: 'ST Ann\'s (EM) School · Telangana SSC Board',
    description: 'Completed secondary education with a perfect 10 CGPA — laying the foundation for a CS path ahead.',
    tag: 'Education',
    tagColor: 'bg-[#0e7490]/20 text-[#67e8f9] border border-[#06b6d4]/25',
    dotColor: '#06b6d4',
    side: 'right',
  },
  {
    year: '2023',
    title: 'Class XII — 958 / 1000',
    subtitle: 'Sri Chaitanya JR Kalashala · TSBIE Telangana',
    description: 'Scored 958 marks in the Telangana Board of Intermediate Education — Physics, Chemistry, Maths — securing admission to BITS Pilani.',
    tag: 'Education',
    tagColor: 'bg-[#0e7490]/20 text-[#67e8f9] border border-[#06b6d4]/25',
    dotColor: '#06b6d4',
    side: 'left',
  },
  {
    year: '2023',
    title: 'Joined BITS Pilani',
    subtitle: 'B.E. Computer Science Engineering (Hons)',
    description: 'Enrolled at one of India\'s top engineering institutes. Coursework spans Algorithms, OS, Databases, Networks, OOP, Computer Architecture, and ML.',
    tag: 'University',
    tagColor: 'bg-[#4a1d6e]/30 text-[#c4b5fd] border border-[#7c3aed]/25',
    dotColor: '#a78bfa',
    side: 'right',
  },
  {
    year: '2025',
    title: 'Tech Intern — Swecha Telangana',
    subtitle: 'May – August 2025',
    description: 'Debugged and shipped fixes across an 8-contributor open-source Python/ML pipeline. Applied CI/CD and Agile workflows to maintain production stability and validated ML training and inference stages through targeted tests.',
    tag: 'Internship',
    tagColor: 'bg-[#052e16]/40 text-[#4ade80] border border-[#16a34a]/25',
    dotColor: '#16a34a',
    side: 'left',
  },
  {
    year: '2025',
    title: 'Summer of AI — VISWAM.AI & Swecha',
    subtitle: 'Certified · AI/ML Internship',
    description: 'Built data processing pipelines for AI/ML applications and contributed to open-source AI tools under the Summer of AI programme.',
    tag: 'Certification',
    tagColor: 'bg-[#1a0f0a]/60 text-[#fbbf24] border border-[#d97706]/25',
    dotColor: '#f59e0b',
    side: 'right',
  },
  {
    year: '2025',
    title: 'Joint Secretary — Firewallz',
    subtitle: 'BITS Pilani · Jul 2025 – May 2026',
    description: 'Managed registration and security for inter-college fest participants. Served as key liaison across departments, coordinating cross-functional operations.',
    tag: 'Leadership',
    tagColor: 'bg-[#1a0a2e]/50 text-[#c4b5fd] border border-[#7c3aed]/25',
    dotColor: '#a78bfa',
    side: 'left',
  },
  {
    year: '2026',
    title: 'Research Published — Springer Nature',
    subtitle: 'The Journal of Supercomputing · Vol. 82, Article 440',
    description: 'Co-authored "Integrated FEM-Based Digital Twin Model and Scalable Computational Feature Transfer for Structural Dynamics & Damage Detection." Achieved AUC up to 0.99 on benchmark tasks.',
    tag: 'Publication',
    tagColor: 'bg-[#1a0a1a]/50 text-[#f9a8d4] border border-[#db2777]/25',
    dotColor: '#ec4899',
    side: 'right',
  },
  {
    year: '2026',
    title: 'SME Intern — House of Couton',
    subtitle: 'AI/ML · July 2026 – Present',
    description: 'Engineered technical specs and validation workflows across 6 software initiatives. Reduced downstream rework by producing trade-off analyses identifying implementation risks before development began.',
    tag: 'Internship',
    tagColor: 'bg-[#052e16]/40 text-[#4ade80] border border-[#16a34a]/25',
    dotColor: '#16a34a',
    side: 'left',
  },
  {
    year: '2026',
    title: 'Harvard CS50x Certified',
    subtitle: 'Harvard University',
    description: 'Completed Harvard\'s flagship CS course — algorithms, data structures, memory management, SQL, Flask, and cybersecurity fundamentals.',
    tag: 'Certification',
    tagColor: 'bg-[#1a0f0a]/60 text-[#fbbf24] border border-[#d97706]/25',
    dotColor: '#f59e0b',
    side: 'right',
  },
  {
    year: '2027',
    title: 'B.E. Computer Science — Expected Graduation',
    subtitle: 'BITS Pilani · Class of 2027',
    description: 'Completing B.E. in Computer Science Engineering (Honors) with a focus on software engineering, AI systems, and applied research.',
    tag: 'Upcoming',
    tagColor: 'bg-[#0a1628]/50 text-[#93c5fd] border border-[#3b82f6]/25',
    dotColor: '#3b82f6',
    side: 'left',
  },
]

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="relative z-10 py-24 px-6 md:px-16"
    >
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <h2 className="text-center font-black text-[#F5F1EA]" style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}>
            My <span className="hero-heading">Journey</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-center text-[#E8E3DC] mt-3 max-w-2xl mx-auto">
            From perfect boards to production deployments — the road so far.
          </p>
          <GradientDivider />
        </FadeIn>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Centre line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(180deg, transparent 0%, #c58f5e 8%, #c58f5e 92%, transparent 100%)', opacity: 0.25 }}
          />

          <div className="flex flex-col gap-12">
            {milestones.map((m, i) => (
              <FadeIn key={i} delay={0.05 * i} y={30}>
                <div className={`relative flex items-start gap-6 md:gap-0 ${m.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* Card — takes up ~46% on each side */}
                  <div className="w-full md:w-[46%]">
                    <div className="glass-panel-soft rounded-2xl p-6 border border-[#3b2a22]/60 hover:border-[#c58f5e]/20 transition-colors">
                      {/* Tag */}
                      <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${m.tagColor}`}>
                        {m.tag}
                      </span>

                      <h3 className="font-bold text-[#F5F1EA] text-lg leading-snug mb-1">{m.title}</h3>
                      <p className="text-[#d39a63] text-sm font-medium mb-3">{m.subtitle}</p>
                      <p className="text-[#C8C0B6] text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>

                  {/* Centre dot + year — takes up ~8% */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0 w-[8%] pt-5">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0 shadow-lg"
                      style={{ background: m.dotColor, boxShadow: `0 0 12px ${m.dotColor}80` }}
                    />
                    <span
                      className="font-black mt-2 leading-none select-none"
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)', color: m.dotColor, opacity: 0.7 }}
                    >
                      {m.year}
                    </span>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[46%]" />

                  {/* Mobile: year badge */}
                  <div className="md:hidden flex-shrink-0 flex flex-col items-center">
                    <div
                      className="w-2.5 h-2.5 rounded-full mt-6"
                      style={{ background: m.dotColor, boxShadow: `0 0 10px ${m.dotColor}80` }}
                    />
                    <span className="text-xs font-bold mt-1" style={{ color: m.dotColor }}>{m.year}</span>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
