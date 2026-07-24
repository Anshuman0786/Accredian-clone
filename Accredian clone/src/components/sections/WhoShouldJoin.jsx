import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from 'lucide-react'
import Container from '../ui/Container.jsx'
import humanImage from '../images/imagehuman.png'
import './WhoShouldJoin.css'

const AUDIENCE = [
  { icon: MonitorCheck, title: 'Tech Professionals', description: 'Enhance expertise, embrace tech, drive innovation.' },
  { icon: MonitorX, title: 'Non-Tech Professionals', description: 'Adapt digitally, collaborate in tech environments.' },
  { icon: GraduationCap, title: 'Emerging Professionals', description: 'Develop powerful skills for rapid career growth.' },
  { icon: Briefcase, title: 'Senior Professionals', description: 'Strengthen leadership, enhance strategic decisions.' },
]

export default function WhoShouldJoin() {
  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-col gap-10 rounded-lg bg-brand-600 px-4 py-12 lg:mx-10 lg:flex-row xl:px-6">
          <div className="md:w-1/2">
            <h4 className="text-lg font-medium text-white sm:text-xl">Who Should Join?</h4>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Strategic Skill Enhancement
            </h2>
            <img
              src={humanImage}
              alt="Professionals collaborating"
              className="who-image mt-6 hidden object-contain md:block"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:w-1/2">
            {AUDIENCE.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title}>
                  <Icon size={28} className="text-white" />
                  <p className="mt-3 text-base font-semibold text-white sm:text-xl">{item.title}</p>
                  <p className="mt-1 text-sm text-brand-100">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
