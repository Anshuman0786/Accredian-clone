import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import stepsImage from '../images/steps.svg'
import stepsImageMobile from '../images/accredian-edge-usp-mobile.svg'

export default function AccredianEdgeTimeline() {
  return (
    <section id="clients" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading
          title={
            <>
              The <span className="text-brand-600">Accredian Edge</span>
            </>
          }
          subtitle={
            <>
              Key Aspects of <span className="text-brand-600">Our Strategic Training</span>
            </>
          }
        />
        <img src={stepsImage} alt="The Accredian Edge" className="mx-auto hidden w-full rounded-lg lg:block" />
        <img src={stepsImageMobile} alt="The Accredian Edge" className="mx-auto w-full rounded-lg lg:hidden" />
      </Container>
    </section>
  )
}
