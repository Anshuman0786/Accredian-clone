import assert from 'node:assert'
import { createLead } from './leadsHandler.js'

const invalid = createLead({ name: '', email: 'not-an-email' })
assert.equal(invalid.status, 400)
assert.ok(invalid.body.errors.email)
assert.ok(invalid.body.errors.phone)

const valid = createLead({
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '9876543210',
  company: 'Acme',
  domain: 'Tech & Data Insights',
  candidates: '25',
  deliveryMode: 'Online',
  location: 'Gurugram, India',
})
assert.equal(valid.status, 201)
assert.equal(valid.body.lead.name, 'Jane Doe')

console.log('leadsHandler: all assertions passed')
