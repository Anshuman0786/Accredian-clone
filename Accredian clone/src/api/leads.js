export async function postLead(data) {
  const res = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const body = await res.json()
  if (!res.ok) {
    const error = new Error('Validation failed')
    error.fieldErrors = body.errors
    throw error
  }
  return body
}
