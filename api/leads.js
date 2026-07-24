import { createLead } from './_shared/leadsHandler.js'

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, errors: { _: 'Method not allowed' } })
    return
  }
  const result = createLead(req.body)
  res.status(result.status).json(result.body)
}
