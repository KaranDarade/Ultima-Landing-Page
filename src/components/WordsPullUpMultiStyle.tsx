import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Easing } from 'framer-motion'

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  containerClassName?: string
}

export default function WordsPullUpMultiStyle({ segments, containerClassName = '' }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const ease: Easing = [0.16, 1, 0.3, 1]

  const wordEntries: { word: string; className: string }[] = []
  for (const seg of segments) {
    const segWords = seg.text.split(' ')
    for (const w of segWords) {
      wordEntries.push({ word: w, className: seg.className ?? '' })
    }
  }

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  }

  const child = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease } },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className={`inline-flex flex-wrap justify-center ${containerClassName}`}
    >
      {wordEntries.map((entry, i) => (
        <motion.span key={i} variants={child} className={`inline-block ${entry.className}`}>
          {entry.word}{i < wordEntries.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.div>
  )
}
