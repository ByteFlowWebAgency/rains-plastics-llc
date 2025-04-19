const nodemailer = require('nodemailer')
const { z } = require('zod')

// Email validation schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
})

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.TRANSPORTER_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true, // Use TLS
  tls: {
    rejectUnauthorized: true,
  },
})

// Verify transporter connection
transporter.verify(function (error) {
  if (error) {
    console.log('Server is not ready to take our messages')
    console.error(error)
  } else {
    console.log('Server is ready to take our messages')
  }
})

// HTML email template
const createEmailHTML = (data) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #AA111F; margin-bottom: 10px;">New Contact Form Submission</h1>
      <div style="height: 3px; background-color: #AA111F; width: 100px; margin: 0 auto;"></div>
    </div>

    <div style="margin-bottom: 20px;">
      <h2 style="color: #333333; font-size: 18px;">Contact Details:</h2>
      <p style="margin: 5px 0;"><strong>Name:</strong> ${data.name}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> ${data.email}</p>
    </div>

    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 4px; margin-bottom: 20px;">
      <h2 style="color: #333333; font-size: 18px; margin-top: 0;">Message:</h2>
      <p style="margin: 0; line-height: 1.6;">${data.message}</p>
    </div>

    <div style="text-align: center; color: #666666; font-size: 12px; margin-top: 30px;">
      <p>This email was sent from the Rains Plastics LLC contact form.</p>
    </div>
  </div>
`

const router = require('express').Router()

router.post('/', async (req, res) => {
  try {
    console.log('Received contact form submission:', req.body)

    // Validate input
    const validatedData = contactSchema.parse(req.body)
    console.log('Validation passed:', validatedData)

    // Email options
    const mailOptions = {
      from: process.env.TRANSPORTER_EMAIL,
      to: process.env.BUSINESS_EMAIL,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: createEmailHTML(validatedData),
      replyTo: validatedData.email, // Add reply-to header
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)

    return res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors[0].message })
    }

    // Check for specific nodemailer errors
    if (error.code === 'EAUTH') {
      console.error('Authentication error - check email credentials')
      return res.status(500).json({ error: 'Email service authentication failed' })
    }

    if (error.code === 'ESOCKET') {
      console.error('Network error - check internet connection')
      return res.status(500).json({ error: 'Network connection error' })
    }

    return res.status(500).json({
      error: process.env.NODE_ENV === 'production' ? 'Failed to send email' : error.message,
    })
  }
})

module.exports = router
