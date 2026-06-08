import AnimatedLetter from './AnimatedLetter'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

export default function About() {
  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 px-4">
      <div className="bg-[#101010] rounded-2xl md:rounded-3xl max-w-6xl mx-auto px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 text-center">
        <p className="text-primary text-[10px] sm:text-xs tracking-widest mb-6 md:mb-8">Visual arts</p>

        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9]" style={{ color: '#DEDBC8' }}>
          <WordsPullUpMultiStyle
            segments={[
              { text: 'I am KD,', className: 'font-normal' },
              { text: 'a self-taught director.', className: 'italic font-serif' },
              { text: 'I have skills in color grading, visual effects, and narrative design.', className: 'font-normal' },
            ]}
          />
        </div>

        <div className="mt-8 md:mt-10 lg:mt-12 max-w-2xl mx-auto">
          <AnimatedLetter
            text="Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."
            className="text-xs sm:text-sm md:text-base leading-relaxed"
            style={{ color: '#DEDBC8' }}
          />
        </div>
      </div>
    </section>
  )
}
