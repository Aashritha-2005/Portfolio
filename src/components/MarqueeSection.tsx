import { useRef, useEffect, useState } from 'react'

const concepts = [
  { label: 'embeddings', type: 'vector search', title: 'ChromaDB results', lines: ['query: video transcript', 'bge-small-en-v1.5', 'top_k: 05  score: .91'] },
  { label: 'agents', type: 'terminal', title: 'SessionZERO memory hook', lines: ['trust=HIGH  inject context', 'contradiction penalty: .71', 'bridge: active'] },
  { label: 'federated', type: 'training log', title: 'Flower FL rounds', lines: ['round 08/20  clients=12', 'fedavg loss: 0.184', 'privacy budget eps=8'] },
  { label: 'retrieval', type: 'rag result', title: 'RAG Video Analytics', lines: ['retrieved chunks: 04', 'citation: transcript:12:44', 'engagement delta: +18%'] },
  { label: 'vision', type: 'inference', title: 'PlantVerse CV', lines: ['class: leaf blight', 'confidence: 0.94', 'bbox: [42,18,320,266]'] },
  { label: 'signals', type: 'spectrogram', title: 'Signal features', lines: ['fft bins: 1024', 'dominant freq: 2.8kHz', 'window: hann'] },
  { label: 'systems', type: 'dashboard', title: 'TaskFlow dashboard', lines: ['projects: 12  overdue: 03', 'rbac: admin/member', 'api latency: 82ms'] },
  { label: 'evaluation', type: 'chart', title: 'RLBenchKit metrics', lines: ['ppo reward ↑', 'a2c baseline', 'seed: 42  env: CartPole'] },
]

const row2 = [
  { label: 'graphs', type: 'knowledge graph', title: 'SessionZERO graph', lines: ['nodes: decisions', 'edges: supersedes', 'path length: 03'] },
  { label: 'memory', type: 'records', title: 'Memory recall', lines: ['record: deployment choice', 'trust: MEDIUM', 'last_seen: session-18'] },
  { label: 'pipelines', type: 'pipeline', title: 'RAG/ML pipeline', lines: ['ingest → embed → retrieve', 'rerank → answer', 'trace id: rag_42'] },
  { label: 'models', type: 'model run', title: 'Model training', lines: ['epoch 14  val_auc=.982', 'lr=2e-4  bs=32', 'checkpoint saved'] },
  { label: 'safety', type: 'eval', title: 'Safety classifier', lines: ['harmful: 0.03', 'safe: 0.97', 'threshold: calibrated'] },
  { label: 'research', type: 'research', title: 'Neural Twin FEM', lines: ['damage loc: 94%', 'zero-shot geometry', 'mode shape: stable'] },
  { label: 'apis', type: 'swagger', title: 'FastAPI endpoint', lines: ['POST /analyze', '200 OK  application/json', 'schema: VideoCompare'] },
  { label: 'inference', type: 'prediction', title: 'Inference trace', lines: ['input → encoder → head', 'prediction: positive', 'confidence: 0.88'] },
]

const rows = [[...concepts, ...concepts, ...concepts], [...row2, ...row2, ...row2]]

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
    <section ref={sectionRef} className="atmospheric-section atmosphere-lines py-28 overflow-hidden">
      <div className="flex flex-col gap-5">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-3"
            style={{ transform: `translateX(${rowIndex === 0 ? offset - 200 : -(offset - 200)}px)`, willChange: 'transform' }}
          >
            {row.map((item, i) => (
              <div
                key={`${item.label}-${i}`}
                className={`data-tile data-tile--${item.label} flex-shrink-0`}
                style={{ width: 580, height: 340 }}
              >
                <div className="data-tile__visual artifact-screen">
                  <div className="artifact-screen__bar">
                    <span />
                    <span />
                    <span />
                    <strong>{item.type}</strong>
                  </div>
                  <div className="artifact-screen__body">
                    <p>{item.title}</p>
                    <div className={`artifact-screen__viz artifact-screen__viz--${item.label}`} />
                    <ul>
                      {item.lines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
