import { ChartNoAxesCombined, Presentation, MonitorPlay } from 'lucide-react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const STEPS = [
  {
    icon: ChartNoAxesCombined,
    title: 'Skill Gap Analysis',
    description: 'Assess team skill gaps and developmental needs.',
  },
  {
    icon: Presentation,
    title: 'Customized Training Plan',
    description: 'Create a tailored roadmap addressing organizational goals.',
  },
  {
    icon: MonitorPlay,
    title: 'Flexible Program Delivery',
    description: 'Deliver adaptable programs aligned with industry and organizational needs.',
  },
]

export default function HowWeDeliver() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading
          title={
            <>
              How We <span className="text-brand-600">Deliver Results</span> That Matter?
            </>
          }
          subtitle={
            <>
              A Structured Three-Step Approach to <span className="text-brand-600">Skill Development</span>
            </>
          }
        />
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="relative flex w-full max-w-[18rem] flex-col items-center rounded-xl border border-blue-300 bg-brand-50 p-4 text-center shadow-lg sm:p-6"
              >
                <span className="absolute -left-1 top-1/2 h-12 w-1 -translate-y-1/2 rounded-lg bg-brand-600 sm:-left-2 sm:h-36 sm:w-2" />
                <span className="absolute -right-1 top-1/2 h-12 w-1 -translate-y-1/2 rounded-lg bg-brand-600 sm:-right-2 sm:h-36 sm:w-2" />
                <span className="absolute left-[10px] top-6 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border-2 border-blue-300 bg-white text-xs font-bold text-brand-600">
                  {index + 1}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-md sm:h-16 sm:w-16">
                  <Icon size={24} />
                </div>
                <p className="mt-4 font-semibold text-ink-900">{step.title}</p>
                <p className="mt-2 hidden max-w-[18rem] text-sm text-ink-600 sm:block">{step.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
