import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Sarmad Saleem | AI Software Engineer & SaaS Product Builder",
  description:
    "I build scalable AI applications, enterprise HR systems, modern SaaS platforms, and cloud-powered web applications using React, Next.js, Node.js, AWS, MongoDB, and Large Language Models.",
  keywords: [
    "AI Engineer",
    "Full Stack Developer",
    "SaaS Product Builder",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "MongoDB",
    "TypeScript",
    "Enterprise Software",
  ],
  authors: [{ name: "Sarmad Saleem" }],
  icons: {
    icon: "/sarmad-mark.svg",
    shortcut: "/sarmad-mark.svg",
    apple: "/sarmad-mark.svg",
  },
  openGraph: {
    title: "Sarmad Saleem | AI Software Engineer",
    description:
      "Building AI-powered SaaS products that solve real business problems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarmad Saleem | AI Software Engineer",
    description:
      "Building AI-powered SaaS products that solve real business problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
