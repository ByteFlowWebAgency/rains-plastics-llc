const crypto = require('crypto')
const nodemailer = require('nodemailer')

// Verify webhook signature
function verifySignature(req) {
  const signature = req.headers['x-vercel-signature']
  if (!signature) return false

  const [timestamp, hash] = signature.split(',').reduce(
    (acc, curr) => {
      if (curr.startsWith('t=')) acc[0] = curr.slice(2)
      if (curr.startsWith('s=')) acc[1] = curr.slice(2)
      return acc
    },
    [null, null],
  )

  if (!timestamp || !hash) return false

  const payload = timestamp + '.' + JSON.stringify(req.body)
  const expectedHash = crypto
    .createHmac('sha256', process.env.VERCEL_WEBHOOK_SECRET)
    .update(payload)
    .digest('hex')

  return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(expectedHash))
}

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.TRANSPORTER_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
})

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Verify webhook signature in production
    if (process.env.NODE_ENV === 'production') {
      if (!verifySignature(req)) {
        return res.status(401).json({ error: 'Invalid signature' })
      }
    }

    const { name, email, message } = req.body

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Send email
    const mailOptions = {
      from: process.env.TRANSPORTER_EMAIL,
      to: process.env.BUSINESS_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong> ${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return res.status(200).json({
      message: 'Form submitted successfully',
      requestId: req.headers['x-vercel-id'] || 'local',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({
      error: 'Failed to process form submission',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}
