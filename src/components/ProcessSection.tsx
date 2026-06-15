import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, PenTool, Share2, Award } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    desc: 'We seek raw, unfiltered talent across every medium — from lens to canvas, from code to choreography.',
  },
  {
    icon: PenTool,
    title: 'Create',
    desc: 'Our studio-grade toolkit gives you the space and tools to bring your boldest visions to life without compromise.',
  },
  {
    icon: Share2,
    title: 'Showcase',
    desc: 'We pair your work with curators, festivals, and platforms that amplify your voice to the right audience.',
  },
  {
    icon: Award,
    title: 'Evolve',
    desc: 'Through workshops, critiques, and network-driven growth, your craft never stops ascending.',
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay: index * 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center text-center px-4 py-8"
    >
      {/* Connector line – hidden on mobile */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />
      )}

      {/* Glow behind icon */}
      <motion.div
        className="absolute top-8 w-24 h-24 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(222,219,200,0.12) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3 + index * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.4,
        }}
      />

      {/* Icon container */}
      <motion.div
        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-6"
        style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.4)' }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3 + index * 0.3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.5,
        }}
      >
        <Icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: '#DEDBC8' }} />
      </motion.div>

      {/* Step number */}
      <motion.span
        className="text-[11px] sm:text-xs tracking-widest mb-3"
        style={{ color: 'rgba(222, 219, 200, 0.35)' }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.2 + 0.3 }}
      >
        STEP 0{index + 1}
      </motion.span>

      {/* Title */}
      <motion.h3
        className="text-primary text-lg sm:text-xl md:text-2xl font-medium mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: index * 0.2 + 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {step.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
      >
        {step.desc}
      </motion.p>
    </motion.div>
  )
}

export default function ProcessSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })

  return (
    <section className="bg-black relative py-20 md:py-28 lg:py-36 px-4 overflow-hidden">
      {/* Soothing ambient gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, rgba(222,219,200,1) 0%, transparent 70%)',
          }}
        />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.02]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Subtle noise */}
      <div className="bg-noise absolute inset-0 opacity-[0.06] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-[10px] sm:text-xs tracking-[0.2em] mb-4"
            style={{ color: 'rgba(222, 219, 200, 0.5)' }}
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.15 }}
          >
            HOW IT WORKS
          </motion.p>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal max-w-3xl mx-auto" style={{ color: '#DEDBC8' }}>
            <WordsPullUpMultiStyle
              segments={[
                { text: 'From spark to spotlight — a process built for creators.' },
              ]}
            />
          </div>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 relative">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
