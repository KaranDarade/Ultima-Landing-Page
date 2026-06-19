import { useScroll, useTransform, motion, type MotionValue } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'

interface CharSpanProps {
  char: string
  scrollYProgress: MotionValue<number>
  start: number
  end: number
}

function CharSpan({ char, scrollYProgress, start, end }: CharSpanProps) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  )
}

interface AnimatedLetterProps {
  text: string
  className?: string
  style?: CSSProperties
}

export default function AnimatedLetter({ text, className = '', style }: AnimatedLetterProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')
  const total = chars.length

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => {
        const charProgress = i / total
        const start = Math.max(0, charProgress - 0.1)
        const end = Math.min(1, charProgress + 0.05)
        return (
          <CharSpan
            key={i}
            char={char}
            scrollYProgress={scrollYProgress}
            start={start}
            end={end}
          />
        )
      })}
    </p>
  )
}