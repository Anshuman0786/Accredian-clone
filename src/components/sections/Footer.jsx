import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { useEnquireModal } from '../../context/EnquireModalContext.jsx'
import logo from '../images/logo.webp'
import './Footer.css'

// ponytail: lucide-react dropped brand/social icons, so these are hand-rolled outline SVGs (no new dependency).
const ICON_PATHS = {
  Facebook: 'M13 22v-8h3l1-4h-4V7.5C13 6.7 13.7 6 14.5 6H17V2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4Z',
  LinkedIn:
    'M6.94 6.5a2 2 0 1 1 0-4.001 2 2 0 0 1 0 4Zm.06 3.5H5v11h2V10Zm3.5 0H10v11h2v-6c0-3 4-3.3 4 0v6h2v-6.6c0-4.7-5-4.5-6-2.2V10Z',
  Twitter:
    'M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.6A11.3 11.3 0 0 1 3.8 4.6a4 4 0 0 0 1.3 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 3.9c-.5.1-1.1.2-1.7.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 17.5a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.3-6 11.3-11.3v-.5c.8-.6 1.4-1.3 1.9-2.1Z',
  Instagram:
    'M8 2h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6Zm0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8Zm4 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM17.2 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z',
  YouTube:
    'M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.1 5 12 5 12 5s-6.1 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.9 19 12 19 12 19s6.1 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z',
}

const SOCIALS = ['Facebook', 'LinkedIn', 'Twitter', 'Instagram', 'YouTube']

const ACCREDIAN_LINKS = ['About', 'Blog', 'Why Accredian']

export default function Footer() {
  const { open } = useEnquireModal()

  return (
    <footer className="border-t border-slate-100 bg-white py-12">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div>
            <img src={logo} alt="Accredian - credentials that matter" className="footer-logo" />
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-ink-600 hover:text-brand-600"
                >
                  <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor" aria-hidden="true">
                    <path d={ICON_PATHS[label]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 lg:items-end">
            <Button type="button" onClick={open}>
              Enquire Now
            </Button>
            <p className="text-sm text-ink-600">Speak with our Advisor</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-slate-100 pt-8 sm:grid-cols-2">
          <div>
            <p className="font-semibold text-ink-900">Accredian</p>
            <ul className="mt-3 space-y-2">
              {ACCREDIAN_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-ink-600 hover:text-brand-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-lg">
            <p className="font-semibold text-ink-900">Contact Us</p>
            <p className="mt-3 text-sm text-ink-600">
              Email us: <a href="mailto:enterprise@accredian.com" className="text-brand-600">enterprise@accredian.com</a>
            </p>
            <p className="mt-2 max-w-lg text-sm text-ink-600">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 text-center text-sm text-ink-600">
          © {new Date().getFullYear()} Accredian — A Brand of FullStack Education Pvt Ltd. All
          Rights Reserved. (Clone built for a take-home assignment — not affiliated with
          Accredian.)
        </div>
      </Container>
    </footer>
  )
}
