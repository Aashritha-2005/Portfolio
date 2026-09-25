const ribbonPaths = [
  'M -8 72 C 18 48, 36 88, 58 55 S 92 38, 116 62',
  'M -10 42 C 18 58, 34 18, 56 34 S 92 80, 118 30',
  'M -6 86 C 22 76, 38 98, 62 78 S 94 62, 112 92',
]

const nodes = [
  { left: '12%', top: '18%', delay: '0s' },
  { left: '28%', top: '66%', delay: '1.8s' },
  { left: '48%', top: '32%', delay: '3.2s' },
  { left: '68%', top: '58%', delay: '1.1s' },
  { left: '84%', top: '24%', delay: '2.4s' },
  { left: '76%', top: '82%', delay: '4.1s' },
]

export default function GlobalBackground() {
  return (
    <div className="global-background" aria-hidden="true">
      <div className="global-background__matrix" />
      <div className="global-background__ribbon global-background__ribbon--hero">
        <svg viewBox="0 0 110 100" preserveAspectRatio="none">
          {ribbonPaths.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </svg>
      </div>
      <div className="global-background__ribbon global-background__ribbon--deep">
        <svg viewBox="0 0 110 100" preserveAspectRatio="none">
          {ribbonPaths.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </svg>
      </div>
      <div className="global-background__cubes" />
      <div className="global-background__nodes">
        {nodes.map((node, i) => (
          <span key={i} style={{ left: node.left, top: node.top, animationDelay: node.delay }} />
        ))}
      </div>
      <div className="global-background__grain" />
      <div className="global-background__vignette" />
    </div>
  )
}
