require('dotenv').config()
const express = require('express')
const cors = require('cors')
const contactRoute = require('./src/server/api/contact.cjs')

const app = express()
const port = process.env.PORT || 9000

// Enable CORS with specific options
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? [process.env.PRODUCTION_URL].filter(Boolean)
        : ['http://localhost:9001'],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: false,
  }),
)

app.use(express.json())

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' })
})

// Routes
app.use('/contact', contactRoute)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message)
  console.error('Stack:', err.stack)
  res.status(500).json({
    error: process.env.NODE_ENV === 'production' ? 'Something went wrong!' : err.message,
  })
  next(err) // Pass error to default Express error handler
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
  console.log(`Environment: ${process.env.NODE_ENV}`)
})
