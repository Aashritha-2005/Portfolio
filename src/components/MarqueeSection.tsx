import { useRef, useEffect, useState } from 'react'

const gifs = [
  // Row 1 (indices 0–10)
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  // Row 2 (indices 11–20)
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
]

const row1 = [...gifs.slice(0, 11), ...gifs.slice(0, 11), ...gifs.slice(0, 11)]
const row2 = [...gifs.slice(11), ...gifs.slice(11), ...gifs.slice(11)]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function onScroll() {
      const el = sectionRef.current
      if (!el) return
      const sectionTop = el.getBoundingClientRect().top + window.scrollY
      const newOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(newOffset)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] py-12 overflow-hidden">
      <div className="flex flex-col gap-3">
        {/* Row 1 — moves right */}
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {row1.map((url, i) => (
            <img
              key={i}
              src={url}
              loading="lazy"
              className="rounded-2xl object-cover flex-shrink-0"
              style={{ width: 420, height: 270 }}
              alt=""
            />
          ))}
        </div>
        {/* Row 2 — moves left */}
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {row2.map((url, i) => (
            <img
              key={i}
              src={url}
              loading="lazy"
              className="rounded-2xl object-cover flex-shrink-0"
              style={{ width: 420, height: 270 }}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  )
}
