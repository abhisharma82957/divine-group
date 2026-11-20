
import { services, posts } from "../lib/data";

const BASE_URL = "https://divinegroupindia.com";

export default function sitemap() {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/blog",
    "/contact",
  ];

  const staticRoutes = staticPages.map((page) => ({
    url: `${BASE_URL}${page}`,
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...blogRoutes,
  ];
}
