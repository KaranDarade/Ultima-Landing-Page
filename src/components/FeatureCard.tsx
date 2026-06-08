import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

interface FeatureCardProps {
  index: number
  title: string
  number: string
  items: string[]
  isVideo?: boolean
  imageUrl?: string
  iconUrl?: string
}

export default function FeatureCard({ index, title, number, items, isVideo, imageUrl, iconUrl }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden flex flex-col"
      style={isVideo ? {} : { backgroundColor: '#212121' }}
    >
      {isVideo ? (
        <>
          {imageUrl && (
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src={imageUrl} type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10" />
          <div className="relative z-20 mt-auto p-5 md:p-6">
            <p style={{ color: '#E1E0CC' }} className="text-sm md:text-base font-medium">
              Your creative canvas.
            </p>
          </div>
        </>
      ) : (
        <div className="p-5 md:p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4">
            {iconUrl && (
              <img src={iconUrl} alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover" />
            )}
            <div>
              <h3 className="text-primary text-sm md:text-base font-medium">{title}</h3>
              <span className="text-gray-500 text-xs">({number})</span>
            </div>
          </div>
          <ul className="space-y-3 flex-1">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm no-underline mt-4 group"
          >
            Learn more
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 -rotate-45 group-hover:translate-x-0.5" />
          </a>
        </div>
      )}
    </motion.div>
  )
}
