import { GitFork, Download } from 'lucide-react'
import { type ReactNode } from 'react'

const btnGradient = 'linear-gradient(123deg, #0c1a4e 7%, #1a4fd6 37%, #0ea5e9 72%, #38bdf8 100%)'
const btnShadow = 'inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 24px rgba(26,79,214,0.3)'

interface BtnProps {
  children?: ReactNode
  onClick?: () => void
  className?: string
}

export function ContactButton({ children, onClick, className = '' }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-3 rounded-full text-white font-semibold text-sm uppercase tracking-widest outline outline-2 outline-offset-[-3px] outline-white/20 transition-opacity hover:opacity-90 ${className}`}
      style={{ background: btnGradient, boxShadow: btnShadow }}
    >
      {children}
    </button>
  )
}

export function ExploreButton({ children, onClick, className = '' }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-3 rounded-full text-white font-semibold text-sm uppercase tracking-widest outline outline-2 outline-offset-[-3px] outline-white/20 transition-opacity hover:opacity-90 ${className}`}
      style={{ background: btnGradient, boxShadow: btnShadow }}
    >
      {children}
    </button>
  )
}

export function DownloadCVButton({ className = '' }: { className?: string }) {
  return (
    <a
      href="/AashrithaM_CV.pdf"
      download="AashrithaM_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-xs font-semibold uppercase tracking-widest outline outline-2 outline-offset-[-3px] outline-white/20 transition-opacity hover:opacity-90 ${className}`}
      style={{ background: btnGradient, boxShadow: btnShadow }}
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
      className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-[#A8C5DA] text-xs font-semibold uppercase tracking-widest border-2 border-[#A8C5DA] hover:bg-[#A8C5DA]/10 transition-colors ${className}`}
    >
      <GitFork size={14} />
      View Code
    </a>
  )
}
