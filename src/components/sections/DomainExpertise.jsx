import { Lightbulb, Brain, Users, ChartNoAxesColumnIncreasing, Settings, Globe, Banknote } from 'lucide-react'
import Container from '../ui/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const DOMAINS = [
  { icon: Lightbulb, title: 'Product & Innovation Hub' },
  { icon: Brain, title: 'Gen-AI Mastery' },
  { icon: Users, title: 'Leadership Elevation' },
  { icon: ChartNoAxesColumnIncreasing, title: 'Tech & Data Insights' },
  { icon: Settings, title: 'Operations Excellence' },
  { icon: Globe, title: 'Digital Enterprise' },
  { icon: Banknote, title: 'Fintech Innovation Lab' },
]

export default function DomainExpertise() {
  return (
    <section id="accredian-edge" className="scroll-mt-20 py-20">
      <Container className="max-w-6xl">
        <SectionHeading
          title={
            <>
              Our <span className="text-brand-600">Domain Expertise</span>
            </>
          }
          subtitle={
            <>
              <span className="text-brand-600">Specialized Programs</span> Designed to Fuel Innovation
            </>
          }
        />
        <div className="flex flex-wrap justify-center gap-4">
          {DOMAINS.map((domain) => {
            const Icon = domain.icon
            return (
              <Card
                key={domain.title}
                className="flex w-[45%] flex-col items-center justify-center rounded-xl border-gray-200 p-2 text-center shadow-lg sm:w-[30%]"
              >
                <Icon className="h-6 w-6 text-blue-600 sm:h-14 sm:w-14" strokeWidth={2} />
                <p className="mt-2 text-[10px] font-semibold text-ink-900 sm:text-lg">{domain.title}</p>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
