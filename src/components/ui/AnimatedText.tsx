import { useRef } from 'react'
import { type CSSProperties } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <span ref={ref} className={className} style={style} aria-label={text}>
      {chars.map((char, i) => {
        const start = i / chars.length
        const end = (i + 1) / chars.length
        return (
          <AnimatedChar
            key={i}
            char={char}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        )
      })}
    </span>
  )
}

function AnimatedChar({
  char,
  progress,
  start,
  end,
}: {
  char: string
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  start: number
  end: number
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block whitespace-pre">
      {char}
    </motion.span>
  )
}
