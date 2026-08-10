import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, message } = body;

		if (!name || !email || !message) {
			return NextResponse.json(
				{ success: false, message: "All fields are required." },
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

		await transporter.sendMail({
			from: process.env.SMTP_FROM || smtpUser,
			to: contactEmail,
			replyTo: email,
			subject: `New portfolio message from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
			html: `
        <h3>New portfolio message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
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
