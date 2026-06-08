import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

const navItems = ['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries']

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4" type="video/mp4" />
        </video>
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 m-0 p-0 list-none">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[10px] sm:text-xs md:text-sm no-underline transition-colors duration-200"
                    style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#E1E0CC' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h1 style={{ color: '#E1E0CC' }}>
                <WordsPullUp
                  text="Ultima"
                  className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
                  showAsterisk
                />
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-end pb-2 lg:pb-6">
              <motion.p
                className="text-xs sm:text-sm md:text-base"
                style={{ color: 'rgba(225, 224, 204, 0.7)', lineHeight: 1.2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Ultima is a worldwide network of visual artists, filmmakers and storytellers bound not
                by place, status or labels but by passion and hunger to unlock potential through our
                unique perspectives.
              </motion.p>
              <motion.div
                className="mt-4 md:mt-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary rounded-full text-black text-sm sm:text-base font-medium no-underline px-5 py-2 sm:px-6 sm:py-3 transition-all duration-300 hover:gap-3 group"
                >
                  Join the lab
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#E1E0CC' }} />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
