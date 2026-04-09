import { NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactFormData {
  name: string
  email: string
  message: string
}

function validateFormData(data: unknown): { isValid: boolean; error?: string } {
  // 1. Check if data exists
  if (!data || typeof data !== 'object') {
    return { isValid: false, error: 'Invalid payload' }
  }

  const record = data as Record<string, unknown>

  // 2. Validate fields
  if (!record.name || typeof record.name !== 'string' || record.name.trim() === '') {
    return { isValid: false, error: 'Name is required' }
  }

  if (!record.email || typeof record.email !== 'string' || !/^\S+@\S+\.\S+$/.test(record.email)) {
    return { isValid: false, error: 'A valid email is required' }
  }

  if (!record.message || typeof record.message !== 'string' || record.message.trim() === '') {
    return { isValid: false, error: 'Message is required' }
  }

  // 3. Final Fallback (The "Success" path)
  return { isValid: true }
}

/**
 * Handles the actual sending of the email via Resend.
 */
async function sendEmailService({ name, email, message }: ContactFormData) {
  // MOVE INITIALIZATION HERE
  // This prevents the "Missing API key" error during 'next build'
  const resend = new Resend(process.env.RESEND_API_KEY)

  return await resend.emails.send({
    from: 'Portfolio Contact Form <onboarding@resend.dev>',
    to: 'daniel.antonymenistren@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    replyTo: email,
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

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const validation = validateFormData(body)
    if (!validation.isValid) {
      return NextResponse.json({ error: validation.error }, { status: 400 })
    }

    const { name, email, message } = body as ContactFormData

    const { data, error } = await sendEmailService({ name, email, message })

    if (error) {
      console.error('Resend API Error:', error)
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API unexpected error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 })
  }
}
