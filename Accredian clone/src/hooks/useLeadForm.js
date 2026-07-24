import { useState } from 'react'
import { postLead } from '../api/leads.js'

const INITIAL_VALUES = {
  name: '',
  email: '',
  countryCode: '+91',
  phone: '',
  company: '',
  domain: '',
  candidates: '',
  deliveryMode: '',
  location: '',
}

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

function validate(values) {
  const errors = {}
  REQUIRED_FIELDS.forEach((field) => {
    if (!values[field].trim()) errors[field] = `${FIELD_LABELS[field]} is required`
  })
  if (values.email.trim() && !EMAIL_RE.test(values.email)) {
    errors.email = 'Enter a valid email'
  }
  return errors
}

// status: 'idle' | 'submitting' | 'success' | 'error'
export default function useLeadForm(onSuccess) {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const clientErrors = validate(values)
    setErrors(clientErrors)
    if (Object.keys(clientErrors).length) return

    setStatus('submitting')
    try {
      await postLead(values)
      setStatus('success')
      onSuccess?.()
    } catch (err) {
      setStatus('error')
      if (err.fieldErrors) setErrors(err.fieldErrors)
    }
  }

  function reset() {
    setValues(INITIAL_VALUES)
    setErrors({})
    setStatus('idle')
  }

  return { values, errors, status, handleChange, handleSubmit, reset }
}
