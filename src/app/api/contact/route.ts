import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import nodemailer from "nodemailer";

const requestLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function getClientAddress(request: NextRequest) {
	return (
		request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
	);
}

function isLocallyRateLimited(address: string) {
	const now = Date.now();
	const recentRequests = (requestLog.get(address) || []).filter(
		(timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
	);

	if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
		requestLog.set(address, recentRequests);
		return true;
	}

	recentRequests.push(now);
	requestLog.set(address, recentRequests);
	return false;
}

type Lead = {
	name: string;
	email: string;
	phone: string;
	company: string;
	service: string;
	timeline: string;
	message: string;
	createdAt: Date;
	status: "new";
};

const mongoClient = process.env.MONGODB_URI
	? new MongoClient(process.env.MONGODB_URI)
	: null;

const databaseName = process.env.MONGODB_DB || "portfolio";

type RateLimitRecord = {
	_id: string;
	count: number;
	windowStartedAt: Date;
	expiresAt: Date;
};

const mongoClientPromise = mongoClient?.connect();
const rateLimitIndexPromise = mongoClientPromise?.then((client) =>
	client
		.db(databaseName)
		.collection<RateLimitRecord>("contact_rate_limits")
		.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
);

async function isRateLimited(address: string) {
	const locallyLimited = isLocallyRateLimited(address);
	if (locallyLimited || !mongoClientPromise) {
		return locallyLimited;
	}

	try {
		const client = await mongoClientPromise;
		await rateLimitIndexPromise;
		const collection = client
			.db(databaseName)
			.collection<RateLimitRecord>("contact_rate_limits");
		const now = new Date();
		const windowStart = new Date(now.getTime() - RATE_LIMIT_WINDOW_MS);
		const current = await collection.findOne({ _id: address });

		if (!current || current.windowStartedAt < windowStart) {
			await collection.updateOne(
				{ _id: address },
				{
					$set: {
						count: 1,
						windowStartedAt: now,
						expiresAt: new Date(now.getTime() + RATE_LIMIT_WINDOW_MS),
					},
				},
				{ upsert: true },
			);
			return false;
		}

		const updated = await collection.findOneAndUpdate(
			{ _id: address, count: { $lt: RATE_LIMIT_MAX_REQUESTS } },
			{ $inc: { count: 1 } },
			{ returnDocument: "after" },
		);
		return !updated;
	} catch (error) {
		console.error("Persistent contact rate limit error:", error);
		return locallyLimited;
	}
}

async function saveLead(lead: Lead) {
	if (!mongoClientPromise) {
		throw new Error("MONGODB_URI is not configured.");
	}

	const client = await mongoClientPromise;
	return client.db(databaseName).collection<Lead>("leads").insertOne(lead);
}

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
	phone,
	company,
	service,
	timeline,
	message,
}: {
	name: string;
	email: string;
	phone: string;
	company: string;
	service: string;
	timeline: string;
	message: string;
}) {
	const escapeHtml = (value: string) =>
		value
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/\"/g, "&quot;");
	const messageHtml = escapeHtml(message).replace(/\n/g, "<br />");
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
			<p><strong>Name:</strong> ${escapeHtml(name)}</p>
			<p><strong>Email:</strong> ${escapeHtml(email)}</p>
			<p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
			<p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
			<p><strong>Service:</strong> ${escapeHtml(service || "Not specified")}</p>
			<p><strong>Timeline:</strong> ${escapeHtml(timeline || "Not specified")}</p>
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
		const clientAddress = getClientAddress(request);
		const website =
			typeof body?.website === "string" ? body.website.trim() : "";
		const formStartedAt = Number(body?.formStartedAt);

		if (
			website ||
			!Number.isFinite(formStartedAt) ||
			Date.now() - formStartedAt < 2500
		) {
			return NextResponse.json({
				success: true,
				message: "Your message was received.",
			});
		}

		if (await isRateLimited(clientAddress)) {
			return NextResponse.json(
				{
					success: false,
					message: "Too many requests. Please try again later.",
				},
				{ status: 429 },
			);
		}

		const name = typeof body?.name === "string" ? body.name.trim() : "";
		const email = typeof body?.email === "string" ? body.email.trim() : "";
		const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
		const company =
			typeof body?.company === "string" ? body.company.trim() : "";
		const service =
			typeof body?.service === "string" ? body.service.trim() : "";
		const timeline =
			typeof body?.timeline === "string" ? body.timeline.trim() : "";
		const message =
			typeof body?.message === "string" ? body.message.trim() : "";

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

		if (phone && !parsePhoneNumberFromString(phone)?.isValid()) {
			return NextResponse.json(
				{ success: false, message: "Please enter a valid phone number." },
				{ status: 400 },
			);
		}

		if (
			name.length > 120 ||
			email.length > 254 ||
			phone.length > 40 ||
			company.length > 160 ||
			message.length > 5000
		) {
			return NextResponse.json(
				{
					success: false,
					message: "Please shorten one or more fields and try again.",
				},
				{ status: 400 },
			);
		}

		await saveLead({
			name,
			email,
			phone,
			company,
			service,
			timeline,
			message,
			createdAt: new Date(),
			status: "new",
		});

		const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
		const smtpPort = Number(process.env.SMTP_PORT || 587);
		const smtpSecure = process.env.SMTP_SECURE === "true";
		const smtpUser = process.env.SMTP_USER;
		const smtpPass = process.env.SMTP_PASS;
		const contactEmail =
			process.env.CONTACT_EMAIL || smtpUser || "sarmad.saleem62@gmail.com";

		if (!smtpUser || !smtpPass) {
			return NextResponse.json({
				success: true,
				message: "Your message was received.",
			});
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
			text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nCompany: ${company || "Not provided"}\nService: ${service || "Not specified"}\nTimeline: ${timeline || "Not specified"}\n\nMessage:\n${message}`,
			html: adminNotificationHtml({
				name,
				email,
				phone,
				company,
				service,
				timeline,
				message,
			}),
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
