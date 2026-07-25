import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "haquerahin743@gmail.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, website } = body;

    // ── Honeypot check — silently reject bots ────────────────
    if (website) {
      return NextResponse.json({ success: true });
    }

    // ── Server-side validation ──────────────────────────────
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }
    if (!email || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }
    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Message is required." },
        { status: 400 }
      );
    }

    // ── Create Nodemailer transporter ───────────────────────
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const subjectLine = subject?.trim() || `Portfolio Contact from ${name.trim()}`;
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeSubject = escapeHtml(subjectLine);
    const safeMessage = escapeHtml(message.trim());

    const textBody = [
      `New Contact Form Submission`,
      ``,
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Subject: ${subjectLine}`,
      ``,
      `Message:`,
      message.trim(),
    ].join("\n");

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e293b; border-bottom: 2px solid #6366f1; padding-bottom: 8px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 120px;">Name</td>
            <td style="padding: 8px 0; color: #1e293b;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email</td>
            <td style="padding: 8px 0; color: #1e293b;">${safeEmail}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Subject</td>
            <td style="padding: 8px 0; color: #1e293b;">${safeSubject}</td>
          </tr>
        </table>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-top: 8px;">
          <p style="color: #64748b; font-weight: bold; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
          <p style="color: #1e293b; margin: 0; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
        </div>
      </div>
    `;

    // ── Send email via Gmail SMTP ────────────────────────────
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: TO_EMAIL,
      replyTo: email.trim(),
      subject: subjectLine,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
