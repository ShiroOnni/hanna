import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, phone, service, date, time, message } = await req.json()

  if (!name || !email || !phone || !service || !date) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;padding:32px;border-radius:12px;border:1px solid rgba(201,168,76,0.3)">
      <h2 style="color:#C9A84C;margin-bottom:24px">✨ Nouvelle demande de rendez-vous</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#999;width:140px">Nom</td><td style="padding:8px 0;color:#fff;font-weight:bold">${name}</td></tr>
        <tr><td style="padding:8px 0;color:#999">Email</td><td style="padding:8px 0;color:#fff">${email}</td></tr>
        <tr><td style="padding:8px 0;color:#999">Téléphone</td><td style="padding:8px 0;color:#fff">${phone}</td></tr>
        <tr><td style="padding:8px 0;color:#999">Prestation</td><td style="padding:8px 0;color:#C9A84C;font-weight:bold">${service}</td></tr>
        <tr><td style="padding:8px 0;color:#999">Date</td><td style="padding:8px 0;color:#fff">${date}</td></tr>
        ${time ? `<tr><td style="padding:8px 0;color:#999">Heure</td><td style="padding:8px 0;color:#fff">${time}</td></tr>` : ''}
        ${message ? `<tr><td style="padding:8px 0;color:#999;vertical-align:top">Message</td><td style="padding:8px 0;color:#fff">${message}</td></tr>` : ''}
      </table>
      <p style="margin-top:24px;font-size:12px;color:#555">SY MA — Réservation en ligne</p>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"SY MA Réservations" <${process.env.GMAIL_USER}>`,
      to: ['sisi.zrk@gmail.com', 'yacinetouazi11@gmail.com'],
      replyTo: email,
      subject: `Nouveau RDV — ${service} — ${name}`,
      html,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Mail error:', err)
    return NextResponse.json({ error: 'Erreur envoi mail' }, { status: 500 })
  }
}
