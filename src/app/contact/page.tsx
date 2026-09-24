import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Sarmad Saleem about your web application, SaaS, AI automation, or software project.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
