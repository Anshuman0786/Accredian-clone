import { EnquireModalProvider } from './context/EnquireModalContext.jsx'
import EnquireModal from './components/EnquireModal.jsx'
import Navbar from './components/sections/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import Stats from './components/sections/Stats.jsx'
import Partnerships from './components/sections/Partnerships.jsx'
import AccredianEdgeTimeline from './components/sections/AccredianEdgeTimeline.jsx'
import DomainExpertise from './components/sections/DomainExpertise.jsx'
import CourseSegmentation from './components/sections/CourseSegmentation.jsx'
import WhoShouldJoin from './components/sections/WhoShouldJoin.jsx'
import CatFramework from './components/sections/CatFramework.jsx'
import HowWeDeliver from './components/sections/HowWeDeliver.jsx'
import Faqs from './components/sections/Faqs.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import CtaBanner from './components/sections/CtaBanner.jsx'
import Footer from './components/sections/Footer.jsx'

export default function App() {
  return (
    <EnquireModalProvider>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Partnerships />
        <AccredianEdgeTimeline />
        <DomainExpertise />
        <CourseSegmentation />
        <WhoShouldJoin />
        <CatFramework />
        <HowWeDeliver />
        <Faqs />
        <Testimonials />
        <CtaBanner />
        <Footer />
      </main>
      <EnquireModal />
    </EnquireModalProvider>
  )
}
