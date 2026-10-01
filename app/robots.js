export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/404"],
      },
    ],
    sitemap: "https://flydummyticket.com/sitemap.xml",
    host: "https://flydummyticket.com",
  };
}
