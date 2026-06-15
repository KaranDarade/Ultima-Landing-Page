import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { ArrowRight, MessageCircle, Camera, Music } from 'lucide-react'

const footerLinks = ['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries']

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-black px-4 pb-8 pt-16 md:pt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#101010] rounded-3xl p-8 md:p-12 lg:p-16 text-center"
        >
          <p className="text-gray-500 text-xs sm:text-sm tracking-widest mb-4">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal max-w-2xl mx-auto mb-8" style={{ color: '#DEDBC8' }}>
            Ready to create something unforgettable?
          </h2>
          <a
            href="mailto:daradekaran123@gmail.com"
            className="inline-flex items-center gap-3 bg-primary rounded-full text-black text-sm sm:text-base font-medium no-underline px-6 py-3 sm:px-8 sm:py-4 transition-all duration-300 hover:gap-5 group mb-12"
          >
            Start your journey
            <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#E1E0CC' }} />
            </span>
          </a>

          <div className="border-t border-white/5 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-gray-500 text-xs sm:text-sm">
                &copy; 2026 Ultima. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                {footerLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-500 hover:text-primary text-xs sm:text-sm no-underline transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200">
                  <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200">
                  <Music className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
