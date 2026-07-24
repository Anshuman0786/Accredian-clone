import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createLead } from './api/_shared/leadsHandler.js'

function leadsApiPlugin() {
  return {
    name: 'leads-api-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/leads', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method Not Allowed')
          return
        }
        let body = ''
        req.on('data', (chunk) => {
          body += chunk
        })
        req.on('end', () => {
          let data
          try {
            data = JSON.parse(body || '{}')
          } catch {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: false, errors: { _: 'Invalid JSON' } }))
            return
          }
          const result = createLead(data)
          res.statusCode = result.status
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(result.body))
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), leadsApiPlugin()],
})
