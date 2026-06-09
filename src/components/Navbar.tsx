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
      for (const [label, id] of Object.entries(sectionIds).reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(label)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <FadeIn y={-20} delay={0}>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 pt-2 pb-[26px] bg-[#0C0C0C]/80 backdrop-blur-md border-b border-white/5">
        <span className="text-[24px] font-black hero-heading">Aashritha</span>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const isActive = active === link
            return (
              <li key={link}>
                <a
                  href={`#${sectionIds[link]}`}
                  className="relative text-[16px] font-medium text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors pb-1"
                >
                  {link}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                      style={{ background: 'linear-gradient(90deg, #1a4fd6, #7dd3fc)' }}
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
