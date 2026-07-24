import { BookOpen, PlayCircle, Wrench } from 'lucide-react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import catFrameworkImage from '../images/catV2.svg'

const STEPS = [
  { icon: BookOpen, title: 'Concept', description: 'Foundational knowledge for deep subject understanding.' },
  { icon: PlayCircle, title: 'Application', description: 'Practical implementation through real-world scenarios.' },
  { icon: Wrench, title: 'Tools', description: 'Resources and techniques for effective skill mastery.' },
]

export default function CatFramework() {
  return (
    <section id="cat" className="scroll-mt-20 bg-brand-50 py-20">
      <Container>
        <SectionHeading
          title={
            <>
              The <span className="text-brand-600">CAT Framework</span>
            </>
          }
          subtitle={
            <>
              Our Proven Approach to <span className="text-brand-600">Learning Excellence</span>
            </>
          }
        />
        <img src={catFrameworkImage} alt="CAT framework" className="mx-auto hidden w-full max-w-4xl sm:block" />
        <div className="grid grid-cols-1 gap-10 sm:hidden">
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-brand-100 bg-white shadow-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Icon size={28} />
                  </div>
                </div>
                <p className="mt-5 text-lg font-semibold text-ink-900">{step.title}</p>
                <p className="mt-1 max-w-xs text-sm text-ink-600">{step.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
