import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const OWNER_EMAIL = 'moradavega143@gmail.com'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const user = process.env.EMAIL_USER
    const pass = process.env.EMAIL_PASSWORD

    // Fail loudly (and clearly) when the mailbox isn't configured. This is the
    // most common reason messages never arrive: the env vars aren't set in the
    // hosting environment (e.g. Vercel project settings).
    if (!user || !pass) {
      console.error(
        'Email not configured: EMAIL_USER and/or EMAIL_PASSWORD are missing from the environment.'
      )
      return NextResponse.json(
        {
          error:
            'Email service is not configured. Please set EMAIL_USER and EMAIL_PASSWORD (Gmail App Password) in the deployment environment.',
        },
        { status: 503 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    })

    // Surface auth/connection problems with a precise message instead of a
    // generic 500 buried after a partial send.
    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        {
          error:
            'Could not connect to the email provider. Check that EMAIL_USER is correct and EMAIL_PASSWORD is a valid Gmail App Password.',
        },
        { status: 502 }
      )
    }

    const safeName = escapeHtml(String(name))
    const safeEmail = escapeHtml(String(email))
    const safeSubject = escapeHtml(String(subject))
    const safeMessage = escapeHtml(String(message))

    // 1) Notification to the site owner — this is the critical send.
    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: OWNER_EMAIL,
      replyTo: `"${safeName}" <${email}>`,
      subject: `New Contact Form Submission: ${subject}`,
      text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${safeMessage}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">Reply directly to this email to respond to ${safeName}.</p>
        </div>
      `,
    })

    // 2) Confirmation to the visitor — best effort. If it fails (e.g. a typo'd
    // address) we must NOT report failure, since the owner was already notified.
    try {
      await transporter.sendMail({
        from: `"Vega Morada" <${user}>`,
        to: email,
        subject: 'Thank you for reaching out!',
        text: `Thank you, ${name}! I received your message and will get back to you as soon as possible.\n\nYour message:\n${message}\n\nBest regards,\nVega Morada`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Thank you, ${safeName}!</h2>
            <p>I received your message and will get back to you as soon as possible.</p>
            <p><strong>Your message:</strong></p>
            <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${safeMessage}</p>
            <hr />
            <p>Best regards,<br/>Vega Morada</p>
            <p style="font-size: 12px; color: #666;">
              Email: ${OWNER_EMAIL}<br/>
              LinkedIn: linkedin.com/in/vegamorada
            </p>
          </div>
        `,
      })
    } catch (confirmationError) {
      console.warn('Visitor confirmation email failed (owner was still notified):', confirmationError)
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again or email moradavega143@gmail.com directly.' },
      { status: 500 }
    )
  }
}
