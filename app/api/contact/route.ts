import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    // Lazy Initialization: API Key Validation
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not defined in environment variables.')
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }

    // Initialize Resend inside the function
    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await request.json()
    const { name, email, message } = body

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      )
    }

    // Send Email
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'daniel.antonymenistren@gmail.com',
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
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
