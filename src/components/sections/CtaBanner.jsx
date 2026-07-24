import { Headphones } from 'lucide-react'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { useEnquireModal } from '../../context/EnquireModalContext.jsx'
import './CtaBanner.css'

export default function CtaBanner() {
  const { open } = useEnquireModal()

  return (
    <section className="py-12">
      <Container>
        <div className="cta-banner flex flex-col items-center justify-center gap-6 rounded-xl border border-brand-600 bg-brand-600 px-6 py-8 text-center md:flex-row md:justify-between md:px-12 md:py-16 md:text-left">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2">
              <Headphones size={28} className="text-brand-600" />
            </div>
            <div>
              <p className="text-xl font-semibold text-white">
                Want to Learn More About Our Training Solutions?
              </p>
              <p className="mt-1 text-sm text-brand-100">
                Get Expert Guidance for Your Team's Success!
              </p>
            </div>
          </div>
          <Button type="button" variant="white" onClick={open} className="shrink-0 text-xl font-semibold">
            Contact Us
            <svg viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
            </svg>
          </Button>
        </div>
      </Container>
    </section>
  )
}
