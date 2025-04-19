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
        ? ['https://rainsplastics.com', 'https://www.rainsplastics.com']
        : ['http://localhost:9001'],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: false,
  }),
)

app.use(express.json())

// Test route to verify server status
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' })
})

// Routes
app.use('/api/contact', contactRoute)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message)
  console.error('Stack:', err.stack)

  // Log additional details for email errors
  if (err.code === 'EAUTH' || err.code === 'ESOCKET') {
    console.error('Email Configuration:', {
      transporterEmail: process.env.TRANSPORTER_EMAIL,
      businessEmail: process.env.BUSINESS_EMAIL,
      hasPassword: !!process.env.EMAIL_PASSWORD,
    })
  }

  res.status(500).json({
    error:
      process.env.NODE_ENV === 'production'
        ? 'Failed to send message. Please try again later.'
        : err.message,
  })
  next(err)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
  console.log(`Environment: ${process.env.NODE_ENV}`)
})
