import type { MetadataRoute } from "next";

export const dynamic = "force-static"; // required for `output: export`

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://prabhatk.tech",
      lastModified: "2026-07-01",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
