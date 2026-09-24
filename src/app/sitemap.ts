import type { MetadataRoute } from "next";

const SITE_URL =
	process.env.NEXT_PUBLIC_SITE_URL || "https://sarmad-dev-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: SITE_URL,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${SITE_URL}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];
}
