import { useRef, useState, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
}

export default function Magnet({ children, padding = 150, strength = 3 }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setPos({ x: (e.clientX - cx) / strength, y: (e.clientY - cy) / strength })
  }

  function handleMouseEnter() { setActive(true) }
  function handleMouseLeave() { setActive(false); setPos({ x: 0, y: 0 }) }

  return (
    <div
      ref={ref}
      style={{
        padding,
        margin: -padding,
        display: 'inline-block',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          transition: active
            ? 'transform 0.3s ease-out'
            : 'transform 0.6s ease-in-out',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
