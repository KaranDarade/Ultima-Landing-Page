import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import FeatureCard from './FeatureCard'

const features = [
  {
    isVideo: true,
    imageUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
    title: '',
    number: '',
    items: [],
    iconUrl: '',
  },
  {
    title: 'Project Storyboard.',
    number: '01',
    iconUrl: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Drag-and-drop timeline editor',
      'Real-time collaboration tools',
      'Version history & rollback',
      'Export to multiple formats',
    ],
  },
  {
    title: 'Smart Critiques.',
    number: '02',
    iconUrl: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'AI-powered scene analysis',
      'Contextual creative notes',
      'Seamless tool integrations',
    ],
  },
  {
    title: 'Immersion Capsule.',
    number: '03',
    iconUrl: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'Distraction-free mode',
      'Ambient soundscapes',
      'Schedule & deadline syncing',
    ],
  },
]

export default function Features() {
  return (
    <section className="min-h-screen bg-black relative py-16 md:py-24 lg:py-32 px-4">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal" style={{ color: '#DEDBC8' }}>
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Studio-grade workflows for visionary creators.' },
              ]}
            />
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-500 mt-2">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Built for pure vision. Powered by art.' },
              ]}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-3 sm:gap-2 md:gap-1">
          {features.map((f, i) => (
            <FeatureCard
              key={i}
              index={i}
              isVideo={f.isVideo}
              title={f.title}
              number={f.number}
              items={f.items}
              imageUrl={f.imageUrl}
              iconUrl={f.iconUrl}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="mailto:daradekaran123@gmail.com"
            className="text-primary/60 hover:text-primary text-xs sm:text-sm no-underline transition-colors duration-200"
          >
            daradekaran123@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
