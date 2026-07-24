import Container from '../ui/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Carousel from '../ui/Carousel.jsx'
import adp from '../images/adp.svg'
import bayer from '../images/bayer.svg'
import reliance from '../images/reliance.png'
import './Testimonials.css'

const QUOTES = [
  {
    client: 'ADP',
    logo: adp,
    quote:
      'We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.',
  },
  {
    client: 'BAYER',
    logo: bayer,
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    client: 'Reliance',
    logo: reliance,
    quote:
      'Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading
          title={
            <>
              Testimonials from <span className="text-brand-600">Our Partners</span>
            </>
          }
          subtitle={
            <>
              What <span className="text-brand-600">Our Clients</span> Are Saying
            </>
          }
        />
        <Carousel visiblePerPage={2}>
          {QUOTES.map((item) => (
            <Card key={item.client} className="h-full min-h-[250px] rounded-xl border-gray-300 p-6 shadow-none">
              <img src={item.logo} alt={item.client} className="testimonial-logo" />
              <p className="mt-4 text-ink-600">"{item.quote}"</p>
            </Card>
          ))}
        </Carousel>
      </Container>
    </section>
  )
}
