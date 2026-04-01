const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Hello from Kubernetes!</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f0f4f8; }
          .card { background: white; border-radius: 12px; padding: 40px; display: inline-block; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
          h1 { color: #326ce5; }
          .info { background: #f0f4f8; border-radius: 8px; padding: 16px; margin-top: 20px; text-align: left; }
          .label { font-weight: bold; color: #555; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Hello from Kubernetes!</h1>
          <p>Your app is running inside a KIND cluster, deployed by ArgoCD.</p>
          <div class="info">
            <p><span class="label">Pod Name:</span> ${process.env.HOSTNAME || 'unknown'}</p>
            <p><span class="label">App Version:</span> 1.0.0</p>
            <p><span class="label">Node.js:</span> ${process.version}</p>
          </div>
        </div>
      </body>
    </html>
  `)
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
