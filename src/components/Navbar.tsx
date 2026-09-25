import { useState, useEffect } from 'react'
import FadeIn from './ui/FadeIn'
import { DownloadCVButton } from './ui/Buttons'

const links = ['Home', 'About', 'Skills', 'Focus', 'Projects', 'Certificates', 'Contact']
const sectionIds: Record<string, string> = {
  Home: 'hero',
  About: 'about',
  Skills: 'skills',
  Focus: 'focus',
  Projects: 'projects',
  Certificates: 'certifications',
  Contact: 'contact',
}

export default function Navbar() {
  const [active, setActive] = useState('Home')

  useEffect(() => {
    function onScroll() {
      const sections = Object.entries(sectionIds)
      for (let i = sections.length - 1; i >= 0; i--) {
        const [label, id] = sections[i]
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.5) {
          setActive(label)
          return
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <FadeIn y={-20} delay={0}>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-[#080605]/75 backdrop-blur-xl border-b border-[#c58f5e]/10">
        <span className="text-[34px] font-black hero-heading">Aashritha</span>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = active === link
            return (
              <li key={link}>
                <a
                  href={`#${sectionIds[link]}`}
                  className="relative text-[22px] font-medium text-[#F5F1EA]/85 hover:text-[#F5F1EA] transition-colors pb-1"
                >
                  {link}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                      style={{ background: 'linear-gradient(90deg, #8f4f27, #d39a63)' }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>
        <DownloadCVButton />
      </nav>
    </FadeIn>
  )
}
