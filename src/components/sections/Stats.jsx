import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const STATS = [
  { value: '10K+', description: 'Professionals Trained For Exceptional Career Success' },
  { value: '200+', description: 'Sessions Delivered With Unmatched Learning Excellence' },
  { value: '5K+', description: 'Active Learners Engaged In Dynamic Courses' },
]

export default function Stats() {
  return (
    <section id="stats" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading
          title={
            <>
              Our <span className="text-brand-600">Track Record</span>
            </>
          }
          subtitle="The Numbers Behind Our Success"
        />
        <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STATS.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center gap-3 px-6 py-6 text-center">
              <span className="inline-flex rounded-full bg-brand-50 px-6 py-2 text-2xl font-extrabold text-brand-600">
                {stat.value}
              </span>
              <p className="text-sm font-medium text-ink-900">{stat.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
