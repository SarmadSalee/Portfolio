import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SITE_URL =
	process.env.SITE_URL || "https://sarmad-dev-portfolio.vercel.app";

const BRAND = {
	name: "Sarmad Saleem",
	logo: `${SITE_URL}/dark-logo.png`,
	accent: "#F4A261",
	accentDark: "#E8845C",
	bg: "#0E1623",
};

function adminNotificationHtml({
	name,
	email,
	message,
}: {
	name: string;
	email: string;
	message: string;
}) {
	const messageHtml = message.replace(/\n/g, "<br />");
	return `
  <html>
    <head>
      <style>
        .card { max-width: 600px; margin: 0 auto; font-family: 'Inter', Arial, sans-serif; background: #ffffff; border: 1px solid #eeeeee; border-radius: 12px; overflow: hidden; }
        .header { background: linear-gradient(135deg, #F7C8A8 0%, ${BRAND.accent} 100%); padding: 32px 24px; text-align: center; }
        .body { padding: 32px 28px; color: #333333; line-height: 1.6; }
        .title { font-size: 20px; font-weight: 700; margin: 0 0 6px; color: #111827; }
        .details { background: #faf7f4; border-left: 4px solid ${BRAND.accent}; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .details p { margin: 8px 0; font-size: 14px; color: #374151; }
        .details strong { color: #111827; }
        .msg { background: #ffffff; border: 1px solid #eeeeee; border-radius: 8px; padding: 16px; margin-top: 20px; font-size: 14px; color: #374151; }
        .footer { text-align: center; padding: 16px; font-size: 12px; color: #9ca3af; border-top: 1px solid #f3f4f6; }
      </style>
    </head>
    <body style="margin: 0; padding: 20px; background: #f6f7f9;">
      <div class="card">
        <div class="header">
          <img src="${BRAND.logo}" alt="${BRAND.name}" style="height: 56px; width: auto;" />
          <h1 class="title">New Portfolio Inquiry</h1>
        </div>
        <div class="body">
          <h3 style="margin-top: 0; color: #111827;">New message from your portfolio</h3>
          <div class="details">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <p><strong style="color: #111827;">Message:</strong></p>
          <div class="msg">${messageHtml}</div>
        </div>
        <div class="footer">© ${new Date().getFullYear()} ${BRAND.name}. All rights reserved.</div>
      </div>
    </body>
  </html>
  `;
}

function clientAutoresponseHtml({ name }: { name: string }) {
	return `
  <html>
    <head>
      <style>
        .email-card { max-width: 600px; margin: 0 auto; font-family: 'Inter', Arial, sans-serif; background-color: #0d0e12; color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); }
        .header { background: linear-gradient(135deg, #F7C8A8 0%, ${BRAND.accent} 50%, ${BRAND.accentDark} 100%); padding: 40px 20px; text-align: center; }
        .body { padding: 40px 30px; background-color: #0f1015; }
        .title { font-size: 24px; font-weight: 700; margin-top: 0; color: #ffffff; }
        .content { font-size: 16px; line-height: 1.7; color: #b0b3c1; }
        .details-box { background-color: #161822; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid ${BRAND.accent}; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #5b5f76; border-top: 1px solid #1c1e28; background-color: #0d0e12; }
      </style>
    </head>
    <body style="background-color: #050507; padding: 20px;">
      <div class="email-card">
        <div class="header">
          <img src="${BRAND.logo}" alt="${BRAND.name}" style="display: block; margin: 0 auto; height: 64px; max-height: 64px; width: auto;" />
        </div>
        <div class="body">
          <h2 class="title">Hello ${name},</h2>
          <p class="content">Thank you for reaching out to ${BRAND.name}! I have received your message and will get back to you as soon as possible — typically within 1 to 2 business days.</p>
          <p class="content">I'm excited to discuss how we can bring your idea to life. In the meantime, feel free to connect with me on LinkedIn.</p>
          <div class="details-box">
            <h3 style="margin-top: 0; color: #ffffff; font-size: 16px;">What happens next?</h3>
            <p style="margin: 5px 0; font-size: 14px; color: #b0b3c1;">1. I review your message</p>
            <p style="margin: 5px 0; font-size: 14px; color: #b0b3c1;">2. We schedule a quick call</p>
            <p style="margin: 5px 0; font-size: 14px; color: #b0b3c1;">3. We build something amazing together</p>
          </div>
          <p class="content">If you need immediate assistance, feel free to reply directly to this email.</p>
          <p class="content" style="margin-top: 30px;">Best regards,<br><strong style="color: ${BRAND.accent};">${BRAND.name}</strong></p>
        </div>
        <div class="footer">© ${new Date().getFullYear()} ${BRAND.name}. All rights reserved.</div>
      </div>
    </body>
  </html>
  `;
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const name = typeof body?.name === "string" ? body.name.trim() : "";
		const email = typeof body?.email === "string" ? body.email.trim() : "";
		const message = typeof body?.message === "string" ? body.message.trim() : "";

		if (!name || !email || !message) {
			return NextResponse.json(
				{ success: false, message: "All fields are required." },
				{ status: 400 },
			);
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return NextResponse.json(
				{ success: false, message: "Please enter a valid email address." },
				{ status: 400 },
			);
		}

		const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
		const smtpPort = Number(process.env.SMTP_PORT || 587);
		const smtpSecure = process.env.SMTP_SECURE === "true";
		const smtpUser = process.env.SMTP_USER;
		const smtpPass = process.env.SMTP_PASS;
		const contactEmail =
			process.env.CONTACT_EMAIL || smtpUser || "sarmad.saleem62@gmail.com";

		if (!smtpUser || !smtpPass) {
			return NextResponse.json(
				{ success: false, message: "Email credentials are not configured." },
				{ status: 500 },
			);
		}

		const transporter = nodemailer.createTransport({
			host: smtpHost,
			port: smtpPort,
			secure: smtpSecure,
			auth: {
				user: smtpUser,
				pass: smtpPass,
			},
		});

		// Email 1: Notification to site owner (mirrors the PHP admin email)
		await transporter.sendMail({
			from: process.env.SMTP_FROM || smtpUser,
			to: contactEmail,
			replyTo: `${name} <${email}>`,
			subject: `New Portfolio Inquiry from: ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
			html: adminNotificationHtml({ name, email, message }),
		});

		// Email 2: Confirmation autoresponse to the visitor (mirrors the PHP client email)
		await transporter.sendMail({
			from: process.env.SMTP_FROM || smtpUser,
			to: email,
			subject: "Inquiry Received — Sarmad Saleem",
			text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you within 1 to 2 business days.\n\nBest regards,\nSarmad Saleem`,
			html: clientAutoresponseHtml({ name }),
		});

		return NextResponse.json({
			success: true,
			message: "Message sent successfully.",
		});
	} catch (error) {
		console.error("Contact form email error:", error);
		const errorMessage =
			error instanceof Error
				? error.message
				: "Failed to send message. Please try again later.";

		return NextResponse.json(
			{
				success: false,
				message: errorMessage,
			},
			{ status: 500 },
		);
	}
}
