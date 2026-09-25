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
      className="atmospheric-section atmosphere-muted py-24 px-6 md:px-16"
    >
      <div className="w-[84vw] max-w-[1340px] mx-auto">
        <FadeIn>
          <h2 className="text-center font-black" style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)', color: '#F5F1EA' }}>
            Focus & <span className="hero-heading">Interests</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-center text-[#E8E3DC] mt-3 max-w-3xl mx-auto">
            The problems I care about, the roles I'm seeking, and the values that guide my work.
          </p>
          <GradientDivider />
        </FadeIn>

        {/* Interest cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {interestCards.map((card, i) => {
            const Icon = card.icon
            return (
              <FadeIn key={card.title} delay={0.2 + i * 0.1}>
                <div className="glass-panel-soft rounded-2xl p-6 h-full">
                  <div className="p-2 rounded-lg bg-[#8f4f27]/25 border border-[#d39a63]/15 w-fit mb-3">
                    <Icon size={20} className="text-[#60a5fa]" />
                  </div>
                  <h3 className="font-bold text-[#F5F1EA] mb-2">{card.title}</h3>
                  <p className="text-base text-[#E8E3DC]">{card.desc}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Bottom cards */}
        <div className="mt-10 grid md:grid-cols-2 gap-8 lg:gap-10">
          <FadeIn delay={0.7}>
            <div className="glass-panel rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#8f4f27]/25 border border-[#d39a63]/15">
                  <Lightbulb size={20} className="text-[#60a5fa]" />
                </div>
                <h3 className="font-bold text-[#F5F1EA]">Motivation & Perspective</h3>
              </div>
              <p className="text-base text-[#E8E3DC]">
                I believe the most meaningful progress in AI comes from combining strong theoretical foundations with an honest reckoning with real-world constraints. I'm motivated not just by what AI can do, but by what it <em>should</em> do — reliably, safely, and for everyone. I approach every project as a hypothesis to be tested and a problem to be genuinely solved.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.8}>
            <div className="glass-panel rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#8f4f27]/25 border border-[#d39a63]/15">
                  <Building2 size={20} className="text-[#60a5fa]" />
                </div>
                <h3 className="font-bold text-[#F5F1EA]">Opportunities Seeking</h3>
              </div>
              <ul className="space-y-2 text-[15px] text-[#E8E3DC]">
                {[
                  'ML Engineering / AI Research internships',
                  'Data Science roles (industry or academic)',
                  'Research assistant positions in AI/ML labs',
                  'Freelance ML projects with meaningful scope',
                  'Collaborative research with publication potential',
                  'Summer programs at AI-focused organizations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#d39a63] mt-0.5">✓</span>
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
            className="mt-14 rounded-2xl p-8 text-center max-w-5xl mx-auto"
            style={{ background: 'linear-gradient(135deg, rgba(48,29,20,0.78), rgba(126,72,35,0.62))', border: '1px solid rgba(211,154,99,0.24)', backdropFilter: 'blur(18px)' }}
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
