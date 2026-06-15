import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, PenTool, Share2, Award } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    desc: 'We seek raw, unfiltered talent across every medium — from lens to canvas, from code to choreography.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format',
  },
  {
    icon: PenTool,
    title: 'Create',
    desc: 'Our studio-grade toolkit gives you the space and tools to bring your boldest visions to life without compromise.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80&auto=format',
  },
  {
    icon: Share2,
    title: 'Showcase',
    desc: 'We pair your work with curators, festivals, and platforms that amplify your voice to the right audience.',
    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&q=80&auto=format',
  },
  {
    icon: Award,
    title: 'Evolve',
    desc: 'Through workshops, critiques, and network-driven growth, your craft never stops ascending.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80&auto=format',
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] flex flex-col"
    >
      {/* Background image */}
      <img
        src={step.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 z-10" />

      {/* Subtle noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.08] z-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 mt-auto p-6 md:p-8">
        {/* Icon row */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -15 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
          transition={{ delay: index * 0.15 + 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/10"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
          >
            <Icon className="w-5 h-5" style={{ color: '#DEDBC8' }} />
          </motion.div>
          <span className="text-[11px] sm:text-xs tracking-[0.15em]" style={{ color: 'rgba(222, 219, 200, 0.5)' }}>
            STEP 0{index + 1}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-primary text-xl sm:text-2xl md:text-3xl font-medium mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {step.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.15 + 0.45, duration: 0.5 }}
        >
          {step.desc}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function ProcessSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })

  return (
    <section className="bg-black relative py-20 md:py-28 lg:py-36 px-4 overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={headingRef}
          className="text-center mb-14 md:mb-18"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
