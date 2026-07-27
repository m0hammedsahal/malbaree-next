import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/about", "/franchise", "/contact"];
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
  }));
}
