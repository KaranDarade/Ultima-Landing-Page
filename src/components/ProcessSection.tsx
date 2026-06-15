import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, PenTool, Share2, Award } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    desc: 'We seek raw, unfiltered talent across every medium — from lens to canvas, from code to choreography.',
    color: '#DEDBC8',
  },
  {
    icon: PenTool,
    title: 'Create',
    desc: 'Our studio-grade toolkit gives you the space and tools to bring your boldest visions to life without compromise.',
    color: '#DEDBC8',
  },
  {
    icon: Share2,
    title: 'Showcase',
    desc: 'We pair your work with curators, festivals, and platforms that amplify your voice to the right audience.',
    color: '#DEDBC8',
  },
  {
    icon: Award,
    title: 'Evolve',
    desc: 'Through workshops, critiques, and network-driven growth, your craft never stops ascending.',
    color: '#DEDBC8',
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#212121] flex items-center justify-center mb-5 ring-1 ring-white/5">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#DEDBC8' }} />
      </div>
      <span className="text-gray-500 text-xs mb-2">0{index + 1}</span>
      <h3 className="text-primary text-base sm:text-lg font-medium mb-3">{step.title}</h3>
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">{step.desc}</p>
    </motion.div>
  )
}

export default function ProcessSection() {
  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 md:mb-18">
          <p className="text-primary text-[10px] sm:text-xs tracking-widest mb-4">How it works</p>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal max-w-3xl mx-auto" style={{ color: '#DEDBC8' }}>
            <WordsPullUpMultiStyle
              segments={[
                { text: 'From spark to spotlight — a process built for creators.' },
              ]}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
