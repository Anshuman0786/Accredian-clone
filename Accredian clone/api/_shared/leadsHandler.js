// ponytail: in-memory store — resets on every restart/cold start, fine for a take-home demo.
// Swap for a real DB if leads need to persist (Vercel functions have no writable filesystem).
const leads = []

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const REQUIRED_FIELDS = ['name', 'email', 'phone', 'company', 'domain', 'deliveryMode', 'location']

const FIELD_LABELS = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone number',
  company: 'Company name',
  domain: 'Domain',
  deliveryMode: 'Mode of delivery',
  location: 'Location',
}

function validate(data) {
  const errors = {}
  REQUIRED_FIELDS.forEach((field) => {
    if (!data[field]?.trim()) errors[field] = `${FIELD_LABELS[field]} is required`
  })
  if (data.email?.trim() && !EMAIL_RE.test(data.email)) {
    errors.email = 'Enter a valid email'
  }
  return errors
}

export function createLead(data) {
  const errors = validate(data ?? {})
  if (Object.keys(errors).length) {
    return { status: 400, body: { success: false, errors } }
  }
  const lead = { id: leads.length + 1, ...data, createdAt: new Date().toISOString() }
  leads.push(lead)
  return { status: 201, body: { success: true, lead } }
}
