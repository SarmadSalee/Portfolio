import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sarmad-dev-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sarmad Saleem | Full Stack Developer & SaaS Product Builder",
    template: "%s | Sarmad Saleem",
  },
  description:
    "I'm Sarmad Saleem, a Senior Full Stack Developer building SaaS products, AI automation systems, and enterprise software with React, Next.js, Node.js, MongoDB, and AWS. 5+ years of experience, 50+ projects shipped.",
  keywords: [
    "Sarmad Saleem",
    "Full Stack Developer",
    "AI Engineer",
    "SaaS Product Builder",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "AWS",
    "MongoDB",
    "TypeScript",
    "Enterprise Software",
    "AI Automation",
  ],
  authors: [{ name: "Sarmad Saleem", url: SITE_URL }],
  creator: "Sarmad Saleem",
  publisher: "Sarmad Saleem",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Sarmad Saleem",
    locale: "en_US",
    title: "Sarmad Saleem | Full Stack Developer & SaaS Product Builder",
    description:
      "I build SaaS products, AI automation systems, and enterprise software with React, Next.js, Node.js, MongoDB, and AWS.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sarmad Saleem — Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sarmadsaleem",
    creator: "@sarmadsaleem",
    title: "Sarmad Saleem | Full Stack Developer & SaaS Product Builder",
    description:
      "I build SaaS products, AI automation systems, and enterprise software with React, Next.js, Node.js, MongoDB, and AWS.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here, e.g. google: "xxxxxxxxxxxxx"
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "Portfolio",
  applicationName: "Sarmad Saleem Portfolio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sarmad Saleem",
  url: SITE_URL,
  image: `${SITE_URL}/sarmad-mark.svg`,
  jobTitle: "Senior Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Max HR",
  },
  knowsAbout: [
    "SaaS Product Development",
    "AI Automation",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "MongoDB",
    "Enterprise Software",
  ],
  sameAs: [
    "https://github.com/SarmadSalee",
    "https://www.linkedin.com/in/sarmad-saleem-dev",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta name="theme-color" content="#0E1623" />
        <meta name="author" content="Sarmad Saleem" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H742CC2C9K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H742CC2C9K');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
