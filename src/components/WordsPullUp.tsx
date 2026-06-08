import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Easing } from 'framer-motion'

interface WordsPullUpProps {
  text: string
  className?: string
  wordClassName?: string
  showAsterisk?: boolean
}

export default function WordsPullUp({ text, className = '', wordClassName = '', showAsterisk }: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const words = text.split(' ')

  const ease: Easing = [0.16, 1, 0.3, 1]

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
    <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? 'show' : 'hidden'} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        const lastChar = word.charAt(word.length - 1).toLowerCase()
        const shouldShowAsterisk = showAsterisk && isLast && lastChar === 'a'
        return (
          <motion.span key={i} variants={child} className={`inline-block relative ${wordClassName}`}>
            {word}
            {shouldShowAsterisk && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        )
      })}
    </motion.div>
  )
}
