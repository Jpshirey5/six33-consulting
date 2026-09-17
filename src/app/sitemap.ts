import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/about", "/framework", "/who-we-serve", "/services", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/privacy" ? 0.2 : 0.7,
  }));
}
