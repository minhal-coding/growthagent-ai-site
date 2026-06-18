import type { MetadataRoute } from "next";

const routes = ["", "/pricing", "/blog", "/about", "/contact"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://growthagent.ai${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
