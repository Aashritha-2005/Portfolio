import { Shield, Zap, Scale, Heart, Lightbulb, Building2 } from 'lucide-react'
import FadeIn from './ui/FadeIn'
import GradientDivider from './ui/GradientDivider'

const interestCards = [
  { icon: Shield, title: 'Reliability', desc: 'Building systems that are dependable under real-world conditions, with graceful degradation and interpretable failure modes.' },
  { icon: Zap, title: 'Learning from Feedback', desc: 'Designing agents and pipelines that improve over time, using reinforcement signals, human feedback, and iterative evaluation.' },
  { icon: Scale, title: 'Scaling Systems', desc: 'Making ML work at scale — distributed training, efficient inference, federated architectures, and production-ready pipelines.' },
  { icon: Heart, title: 'Trust & Safety', desc: 'Ensuring AI systems behave as intended, with alignment, robustness, and meaningful explainability for end users.' },
]

export default function FocusSection() {
  return (
    <section
      id="focus"
      className="bg-[#F8FAFC] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 py-24 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-center font-black" style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)', color: '#111827' }}>
            Focus & <span className="hero-heading">Interests</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-center text-[#6b7280] mt-3 max-w-xl mx-auto">
            The problems I care about, the roles I'm seeking, and the values that guide my work.
          </p>
          <GradientDivider />
        </FadeIn>

        {/* Interest cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interestCards.map((card, i) => {
            const Icon = card.icon
            return (
              <FadeIn key={card.title} delay={0.2 + i * 0.1}>
                <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 h-full shadow-sm">
                  <div className="p-2 rounded-lg bg-[#1a4fd6]/10 w-fit mb-3">
                    <Icon size={20} className="text-[#1a4fd6]" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-base text-gray-600">{card.desc}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Bottom cards */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <FadeIn delay={0.7}>
            <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-amber-100">
                  <Lightbulb size={20} className="text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-800">Motivation & Perspective</h3>
              </div>
              <p className="text-base text-gray-600">
                I believe the most meaningful progress in AI comes from combining strong theoretical foundations with an honest reckoning with real-world constraints. I'm motivated not just by what AI can do, but by what it <em>should</em> do — reliably, safely, and for everyone. I approach every project as a hypothesis to be tested and a problem to be genuinely solved.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.8}>
            <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#1a4fd6]/10">
                  <Building2 size={20} className="text-[#1a4fd6]" />
                </div>
                <h3 className="font-bold text-gray-800">Opportunities Seeking</h3>
              </div>
              <ul className="space-y-2 text-[15px] text-gray-600">
                {[
                  'ML Engineering / AI Research internships',
                  'Data Science roles (industry or academic)',
                  'Research assistant positions in AI/ML labs',
                  'Freelance ML projects with meaningful scope',
                  'Collaborative research with publication potential',
                  'Summer programs at AI-focused organizations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#1a4fd6] mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Callout — moved to bottom */}
        <FadeIn delay={0.9}>
          <div
            className="mt-12 rounded-2xl p-8 text-center max-w-3xl mx-auto"
            style={{ background: 'linear-gradient(135deg, #0c1a4e, #1a4fd6)', border: '1px solid #1e3a5f' }}
          >
            <p className="text-white font-semibold text-lg">
              Currently seeking internships, research roles, and early-career engineering opportunities where I can contribute to impactful AI/ML systems and continue growing as a researcher and engineer.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
