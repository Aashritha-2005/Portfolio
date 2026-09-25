import { GitFork, Download } from 'lucide-react'
import { type ReactNode } from 'react'

// orange — nav/download anchor colour
const orangeGradient = 'linear-gradient(123deg, #1a0f0a 7%, #6f3b1f 42%, #b36836 100%)'
const orangeShadow   = 'inset 0 1px 0 rgba(255,255,255,0.14), 0 4px 24px rgba(179,104,54,0.24)'
// blue — "Contact Me" CTA
const greenGradient  = 'linear-gradient(123deg, #0f172a 7%, #1d4ed8 48%, #3b82f6 100%)'
const greenShadow    = 'inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 20px rgba(59,130,246,0.30)'
// explore — keep orange (hero CTA)
const exploreGradient = orangeGradient
const exploreShadow   = orangeShadow

interface BtnProps {
  children?: ReactNode
  onClick?: () => void
  className?: string
}

export function ContactButton({ children, onClick, className = '' }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-3 rounded-full text-white font-semibold text-base uppercase tracking-widest outline outline-2 outline-offset-[-3px] outline-white/20 transition-opacity hover:opacity-90 ${className}`}
      style={{ background: greenGradient, boxShadow: greenShadow }}
    >
      {children}
    </button>
  )
}

export function ExploreButton({ children, onClick, className = '' }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-9 py-3.5 rounded-full text-white font-semibold text-base uppercase tracking-widest outline outline-2 outline-offset-[-3px] outline-white/20 transition-opacity hover:opacity-90 ${className}`}
      style={{ background: exploreGradient, boxShadow: exploreShadow }}
    >
      {children}
    </button>
  )
}

export function DownloadCVButton({ className = '' }: { className?: string }) {
  return (
    <a
      href="https://drive.google.com/file/d/1MFDM1aWdbkqriCAxYJ8i3Y26_sMyop1b/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 px-8 py-3 rounded-full text-white text-base font-semibold uppercase tracking-widest outline outline-2 outline-offset-[-3px] outline-white/20 transition-opacity hover:opacity-90 ${className}`}
      style={{ background: orangeGradient, boxShadow: orangeShadow }}
    >
      <Download size={14} />
      Download CV
    </a>
  )
}

export function ViewCodeButton({ href = '#', className = '' }: { href?: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-[#67e8f9] text-sm font-semibold uppercase tracking-widest border-2 border-[#06b6d4]/40 hover:bg-[#06b6d4]/10 transition-colors ${className}`}
    >
      <GitFork size={14} />
      View Code
    </a>
  )
}
