import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react'

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
import emailjs from '@emailjs/browser'
import FadeIn from './ui/FadeIn'
import GradientDivider from './ui/GradientDivider'

const EMAILJS_SERVICE = 'service_tth6584'
const EMAILJS_TEMPLATE = 'template_i3qju2f'
const EMAILJS_PUBLIC_KEY = 'LEcuUM8jqUozgETHw'

const btnGradient = 'linear-gradient(123deg, #0f172a 7%, #1d4ed8 52%, #3b82f6 100%)'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(false)

    try {
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        from_name: form.name,
        from_email: form.email,
        from_message: form.message,
        to_name: 'Aashritha',
        reply_to: form.email,
        to_email: 'mallampatiaashritha29@gmail.com',
      })
      setSuccess(true)
      setForm({ name: '', email: '', message: '' })
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="atmospheric-section atmosphere-settle py-40 px-6 md:px-16"
    >
      <div className="w-[84vw] max-w-[1320px] mx-auto">
        <FadeIn>
          <h2 className="text-center font-black text-[#F5F1EA]" style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}>
            Get In <span className="hero-heading">Touch</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-center text-[#E8E3DC] mt-3 max-w-3xl mx-auto">
            Open to internships, research collaborations, and interesting conversations.
          </p>
          <GradientDivider />
        </FadeIn>

        <div className="mt-14 grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-xl font-bold text-[#F5F1EA] mb-6">Let's Connect</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-[#F5F1EA]/85">
                  <div className="p-2 rounded-lg bg-[#8f4f27]/25 border border-[#d39a63]/15"><Mail size={18} className="text-[#60a5fa]" /></div>
                  <span className="text-base">mallampatiaashritha29@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-[#F5F1EA]/85">
                  <div className="p-2 rounded-lg bg-[#8f4f27]/25 border border-[#d39a63]/15"><Phone size={18} className="text-[#60a5fa]" /></div>
                  <span className="text-base">+91 85550 77715</span>
                </div>
                <div className="flex items-center gap-3 text-[#F5F1EA]/85">
                  <div className="p-2 rounded-lg bg-[#8f4f27]/25 border border-[#d39a63]/15"><MapPin size={18} className="text-[#60a5fa]" /></div>
                  <span className="text-base">Hyderabad, India</span>
                </div>
              </div>
              <div className="flex gap-3 mb-8">
                {[
                  { icon: GithubIcon, href: 'https://github.com/Aashritha-2005' },
                  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/mallampatiaashritha/' },
                  { icon: Mail, href: 'mailto:mallampatiaashritha29@gmail.com' },
                  { icon: Phone, href: 'tel:+918555077715' },
                ].map(({ icon: Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-panel-soft text-[#F5F1EA]/70 hover:text-[#60a5fa] hover:border-[#3b82f6]/30 transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <div className="glass-panel-soft rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" style={{ boxShadow: '0 0 8px rgba(74,222,128,0.6)' }} />
                  <span className="text-sm font-semibold text-[#F5F1EA]">Available for full-time opportunities</span>
                </div>
                <p className="text-xs text-[#E8E3DC]">Open to Software Engineering, ML Engineering, and Applied AI roles.</p>
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.3}>
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#F5F1EA] mb-6">Send Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-[#F5F1EA] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d39a63]/20 bg-[#0a0807]/65 text-sm text-[#F5F1EA] placeholder:text-[#C8C0B6] focus:outline-none focus:border-[#d39a63] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F5F1EA] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d39a63]/20 bg-[#0a0807]/65 text-sm text-[#F5F1EA] placeholder:text-[#C8C0B6] focus:outline-none focus:border-[#d39a63] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F5F1EA] mb-1">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d39a63]/20 bg-[#0a0807]/65 text-sm text-[#F5F1EA] placeholder:text-[#C8C0B6] focus:outline-none focus:border-[#d39a63] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full text-white text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-90 disabled:opacity-70 flex items-center justify-center gap-2"
                  style={{ background: btnGradient }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
                <p className="text-xs text-center text-[#E8E3DC]">Typically responds within 24 hours</p>
                {success && (
                  <p className="text-sm text-center text-green-600 font-medium">
                    Message sent! I'll reply within 24 hours.
                  </p>
                )}
                {error && (
                  <p className="text-sm text-center text-red-500 font-medium">
                    Something went wrong. Please email me directly.
                  </p>
                )}
              </form>
            </div>
          </FadeIn>
        </div>

        {/* Footer */}
        <FadeIn delay={0.4}>
          <div className="mt-16 pt-8 border-t border-[#d39a63]/10 text-center space-y-1">
            <p className="text-[15px] text-[#E8E3DC]">© 2025 Aashritha Lakshmi Mallampati. All rights reserved.</p>
            <p className="text-[15px] text-[#E8E3DC]/70">Built with passion using React & TypeScript</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
