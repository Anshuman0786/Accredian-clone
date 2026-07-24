import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import reliance from '../images/reliance.png'
import hcl from '../images/hcl.png'
import ibm from '../images/ibm.png'
import crif from '../images/crif.png'
import adp from '../images/adp.svg'
import bayer from '../images/bayer.svg'

const CLIENTS = [
  { name: 'Reliance Industries Limited', logo: reliance, cls: 'w-14 h-14 sm:w-24 sm:h-24' },
  { name: 'HCL', logo: hcl, cls: 'w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40' },
  { name: 'IBM', logo: ibm, cls: 'w-14 h-14 sm:w-24 sm:h-24' },
  { name: 'CRIF', logo: crif, cls: 'w-14 h-14 sm:w-24 sm:h-24' },
  { name: 'ADP', logo: adp, cls: 'w-14 h-14 sm:w-24 sm:h-24' },
  { name: 'BAYER', logo: bayer, cls: 'w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24' },
]

export default function Partnerships() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          title={
            <>
              Our <span className="text-brand-600">Proven Partnerships</span>
            </>
          }
          subtitle={
            <>
              Successful Collaborations With the <span className="text-brand-600">Industry's Best</span>
            </>
          }
        />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {CLIENTS.map((client) => (
            <div key={client.name} className="flex items-center justify-center px-4">
              <img src={client.logo} alt={client.name} className={`object-contain ${client.cls}`} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
