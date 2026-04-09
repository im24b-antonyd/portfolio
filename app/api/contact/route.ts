import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// --- Services & Utilities ---

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  message: string
}

/**
 * Validates the incoming contact form payload.
 * Modularized for testability and separation of concerns.
 */
function validateFormData(data: unknown): { isValid: boolean; error?: string } {
  if (!data || typeof data !== 'object') {
    return { isValid: false, error: 'Invalid payload' }
  }

  const record = data as Record<string, unknown>

  if (!record.name || typeof record.name !== 'string' || record.name.trim() === '') {
    return { isValid: false, error: 'Name is required' }
  }
  if (!record.email || typeof record.email !== 'string' || !/^\S+@\S+\.\S+$/.test(record.email)) {
    return { isValid: false, error: 'A valid email is required' }
  }
  if (!record.message || typeof record.message !== 'string' || record.message.trim() === '') {
    return { isValid: false, error: 'Message is required' }
  }

  return { isValid: true }
}

/**
 * Handles the actual sending of the email via Resend.
 * Isolated from the HTTP request context.
 */
async function sendEmailService({ name, email, message }: ContactFormData) {
  // Note: onboarding@resend.dev is for testing. Replace with your verified domain email in production.
  return await resend.emails.send({
    from: 'Portfolio Contact Form <onboarding@resend.dev>',
    to: 'daniel.antonymenistren@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    replyTo: email, // Changed from reply_to to replyTo
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; margin-left: 0; white-space: pre-wrap;">
        ${message}
      </blockquote>
    `,
  })
}

// --- Route Handlers ---

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // 1. Validate Input
    const validation = validateFormData(body)
    if (!validation.isValid) {
      return NextResponse.json({ error: validation.error }, { status: 400 })
    }

    const { name, email, message } = body as ContactFormData

    // 2. Send Email
    const { data, error } = await sendEmailService({ name, email, message })

    // 3. Handle Resend API Errors
    if (error) {
      console.error('Resend API Error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    // 4. Return Success
    return NextResponse.json(
      { success: true, message: 'Message sent successfully!', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API unexpected error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    )
  }
}
