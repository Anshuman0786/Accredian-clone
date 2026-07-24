import { CheckCircle2, FileText } from 'lucide-react'
import Modal from './ui/Modal.jsx'
import Button from './ui/Button.jsx'
import useLeadForm from '../hooks/useLeadForm.js'
import { useEnquireModal } from '../context/EnquireModalContext.jsx'

const DOMAIN_OPTIONS = [
  'Product & Innovation Hub',
  'Gen-AI Mastery',
  'Leadership Elevation',
  'Tech & Data Insights',
  'Operations Excellence',
  'Digital Enterprise',
  'Fintech Innovation Lab',
  'Other',
]

const DELIVERY_MODE_OPTIONS = ['Online', 'Offline', 'Hybrid']

export default function EnquireModal() {
  const { isOpen, close } = useEnquireModal()
  const { values, errors, status, handleChange, handleSubmit, reset } = useLeadForm()

  function handleClose() {
    close()
    if (status === 'success') reset()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden flex-col items-center justify-center gap-4 rounded-l-2xl bg-brand-50 p-10 md:flex">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-brand-100">
            <FileText size={48} className="text-brand-600" />
          </div>
          <p className="text-center text-lg font-semibold text-ink-900">Quote Request</p>
          <p className="text-center text-sm text-ink-600">
            Share a few details and our enterprise team will get back to you with a tailored
            training plan.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          {status === 'success' ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <CheckCircle2 size={48} className="text-green-500" />
              <h3 className="mt-4 text-xl font-bold text-ink-900">Thank you for filling the form!</h3>
              <p className="mt-2 text-sm text-ink-600">We will reach out to you soon.</p>
              <Button type="button" onClick={handleClose} className="mt-6">
                Close
              </Button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-ink-900">Enquire Now</h3>
              <form onSubmit={handleSubmit} noValidate className="mt-4 space-y-4">
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    value={values.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={values.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={values.countryCode}
                      onChange={handleChange}
                      className="w-24 rounded-lg border border-slate-300 px-2 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                    </select>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      value={values.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <input
                    name="company"
                    type="text"
                    placeholder="Enter company name"
                    value={values.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                  />
                  {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
                </div>

                <div>
                  <select
                    name="domain"
                    value={values.domain}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-ink-600 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                  >
                    <option value="">Select Domain</option>
                    {DOMAIN_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.domain && <p className="mt-1 text-xs text-red-600">{errors.domain}</p>}
                </div>

                <div>
                  <input
                    name="candidates"
                    type="number"
                    min="0"
                    placeholder="Enter No. of candidates"
                    value={values.candidates}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                  />
                </div>

                <div>
                  <select
                    name="deliveryMode"
                    value={values.deliveryMode}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-ink-600 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                  >
                    <option value="">Select Mode of Delivery *</option>
                    {DELIVERY_MODE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.deliveryMode && (
                    <p className="mt-1 text-xs text-red-600">{errors.deliveryMode}</p>
                  )}
                </div>

                <div>
                  <input
                    name="location"
                    type="text"
                    placeholder="Eg: Gurgoan, Delhi, India"
                    value={values.location}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
                  />
                  {errors.location && <p className="mt-1 text-xs text-red-600">{errors.location}</p>}
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
                )}

                <Button type="submit" disabled={status === 'submitting'} className="w-full">
                  {status === 'submitting' ? 'Submitting…' : 'Submit'}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </Modal>
  )
}
