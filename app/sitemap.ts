import type { MetadataRoute } from "next";

const base = "https://talkingtotitans.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/kingdom-leadership-collective",
    "/for-pastors",
    "/resources",
    "/podcast",
    "/conference",
    "/contact",
    "/refer",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
