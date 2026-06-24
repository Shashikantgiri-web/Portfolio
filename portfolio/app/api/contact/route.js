import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Log the submission (in production, configure Nodemailer with your SMTP)
    console.log('Contact Form Submission:', { name, email, subject, message });

    // ---- Nodemailer setup (enable when SMTP env vars are set) ----
    // import nodemailer from 'nodemailer';
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });
    // await transporter.sendMail({
    //   from: email,
    //   to: 'shashikantshankar707@gmail.com',
    //   subject: `Portfolio Contact: ${subject}`,
    //   html: `
    //     <h2>New message from ${name}</h2>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: 'Message received successfully! I will respond within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'internal server error' }, { status: 500 });
  }
}
