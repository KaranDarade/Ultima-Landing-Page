import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const testimonials = [
  {
    quote: 'Ultima gave me the creative freedom I never knew I needed. The tools are intuitive, the community is electric, and the opportunities are real.',
    name: 'Elena Voss',
    role: 'Visual Artist, Berlin',
  },
  {
    quote: 'I joined as a filmmaker looking for honest feedback. I found a global network that pushed my work further than any film school ever did.',
    name: 'Marcus Adeyemi',
    role: 'Filmmaker, Lagos',
  },
  {
    quote: 'The immersive critique sessions changed how I see my own work. It is not just a platform — it is a creative renaissance.',
    name: 'Yuki Tanaka',
    role: 'Photographer, Tokyo',
  },
]

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#101010] rounded-2xl p-6 md:p-8 flex flex-col"
    >
      <Quote className="w-6 h-6 sm:w-8 sm:h-8 mb-4" style={{ color: 'rgba(222, 219, 200, 0.3)' }} />
      <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed flex-1 mb-6">
        {t.quote}
      </p>
      <div>
        <p className="text-primary text-sm sm:text-base font-medium">{t.name}</p>
        <p className="text-gray-500 text-xs sm:text-sm">{t.role}</p>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 md:mb-18">
          <p className="text-primary text-[10px] sm:text-xs tracking-widest mb-4">Testimonials</p>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal max-w-3xl mx-auto" style={{ color: '#DEDBC8' }}>
            <WordsPullUpMultiStyle
              segments={[
                { text: 'What our creators say.' },
              ]}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
