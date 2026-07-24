import Container from '../ui/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import section1 from '../images/4_section-1.webp'
import section2 from '../images/4-section-2.webp'
import section3 from '../images/4-section-3.webp'
import section4 from '../images/4-section-4.webp'
import './CourseSegmentation.css'

const SEGMENTS = [
  {
    image: section1,
    title: 'Program Specific',
    description: 'Certificate, Executive, Post Graduate Certificate',
  },
  {
    image: section2,
    title: 'Industry Specific',
    description: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
  },
  {
    image: section3,
    title: 'Topic Specific',
    description: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
  },
  {
    image: section4,
    title: 'Level Specific',
    description: 'Senior Leadership, Mid-Career Professionals, Freshers',
  },
]

export default function CourseSegmentation() {
  return (
    <section className="course-segmentation">
      <Container>
        <SectionHeading
          title={
            <>
              Tailored <span className="text-brand-600">Course Segmentation</span>
            </>
          }
          subtitle={
            <>
              Explore <span className="text-brand-600">Custom-fit Courses</span> Designed to Address Every
              Professional Focus
            </>
          }
          className="mb-6"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SEGMENTS.map((segment) => (
            <Card key={segment.title} className="overflow-hidden p-0">
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-100 to-brand-50">
                <img src={segment.image} alt={segment.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <p className="font-semibold text-ink-900">{segment.title}</p>
                <p className="mt-1 text-sm text-ink-600">{segment.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
