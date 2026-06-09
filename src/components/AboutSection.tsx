import FadeIn from './ui/FadeIn'
import AnimatedText from './ui/AnimatedText'
import { ContactButton } from './ui/Buttons'

const ABOUT_TEXT =
  "I'm Aashritha Lakshmi Mallampati, a Computer Science undergraduate at BITS Pilani specialising in AI & ML. I build intelligent systems that are usable, responsible, and impactful — bridging research rigour with real-world engineering."

const cornerImages = [
  // {
  //   src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  //   className: 'absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none',
  //   fadeProps: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  // },
  // {
  //   src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  //   className: 'absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none select-none',
  //   fadeProps: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  // },
  // {
  //   src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  //   className: 'absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none',
  //   fadeProps: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  // },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    className: 'absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none select-none',
    fadeProps: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#161616] min-h-screen px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Corner decorative images */}
      {cornerImages.map((img, i) => (
        <FadeIn
          key={i}
          delay={img.fadeProps.delay}
          x={img.fadeProps.x}
          y={img.fadeProps.y}
          duration={img.fadeProps.duration}
          className={img.className}
        >
          <img src={img.src} alt="" className="w-full h-full object-contain" />
        </FadeIn>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 md:mt-16 max-w-[620px] mx-auto">
          <AnimatedText
            text={ABOUT_TEXT}
            className="font-medium text-center leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        {/* Education + Strengths */}
        <div className="mt-14 max-w-4xl mx-auto w-full grid md:grid-cols-2 gap-8 px-2">
          {/* Education */}
          <FadeIn delay={0.15} y={30}>
            <div className="bg-[#111827] border border-[#1e2a3a] rounded-2xl p-8">
              <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-5">Education</p>
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 mt-2 rounded-full bg-cyan-400 flex-shrink-0" />
                <div>
                  <p className="text-[#D7E2EA] font-bold text-lg leading-snug">B.E. Computer Science</p>
                  <p className="text-[#A8C5DA] text-base mt-1">Birla Institute of Technology and Science (BITS), Pilani</p>
                  <p className="text-[#6b7280] text-sm mt-1.5">Expected Graduation: 2027</p>
                  <p className="text-[#6b7280] text-sm mt-2 leading-relaxed">Core CS disciplines with a focus on AI, ML, and research-oriented work.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Core Strengths */}
          <FadeIn delay={0.2} y={30}>
            <div className="bg-[#111827] border border-[#1e2a3a] rounded-2xl p-8">
              <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-5">Core Strengths</p>
              <div className="flex flex-wrap gap-2.5">
                {['AI & Machine Learning', 'Deep Learning', 'Research & Innovation', 'Software Development', 'Problem Solving', 'Technical Communication'].map((s) => (
                  <span key={s} className="px-4 py-1.5 rounded-full text-sm bg-[#1e2a3a] text-[#A8C5DA] border border-[#1e3a5f]">{s}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Key Achievements */}
        <FadeIn delay={0.25} y={30}>
          <div className="mt-8 max-w-4xl mx-auto w-full bg-[#111827] border border-[#1e2a3a] rounded-2xl p-8">
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-5">Key Achievements</p>
            <ul className="space-y-3">
              {[
                'Co-author on a research paper published in The Journal of Supercomputing (Springer Nature, 2026)',
                'Selected for competitive internships and training programs in AI and cybersecurity',
                'Contributed to research-driven and socially impactful technology initiatives',
                'Led and coordinated teams in fast-paced, technical problem-solving environments',
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-base text-[#A8C5DA] leading-relaxed">
                  <span className="text-cyan-400 flex-shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Career Goals */}
        <FadeIn delay={0.3} y={30}>
          <div className="mt-8 max-w-4xl mx-auto w-full bg-[#111827] border border-[#1e2a3a] rounded-2xl p-8">
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">Career Goals</p>
            <p className="text-base text-[#A8C5DA] leading-relaxed">
              I aim to grow in roles that combine engineering discipline with analytical thinking — in environments that value structured problem-solving, learning-oriented teams, and long-term system impact. I'm especially drawn to opportunities that bridge research and real-world deployment.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 sm:mt-16 md:mt-20">
          <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </ContactButton>
        </div>
      </div>
    </section>
  )
}
