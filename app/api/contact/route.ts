import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = (formData.get('name') || '').toString();
    const email = (formData.get('email') || '').toString();
    const company = (formData.get('company') || '').toString();
    const budget = (formData.get('budget') || '').toString();
    const message = (formData.get('message') || '').toString();

    if (!name || !email || !message) {
      return Response.json({ ok: false, error: 'Missing required fields.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO || process.env.SMTP_USER;
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER;

    await transporter.sendMail({
      from,
      to,
      subject: `Portfolio contact from ${name}`,
      replyTo: email,
      text: `Name: ${name}
Email: ${email}
Company: ${company}
Budget/Project: ${budget}

Message:
${message}`,
    });

    return Response.json({ ok: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ ok: false, error: 'Failed to send message.' }, { status: 500 });
  }
}
