export default function sitemap() {
  const baseUrl = "https://flydummyticket.com";
  const now = new Date().toISOString().split("T")[0];

  const routes = [
    // Core commercial pages
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/flight-reservation`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/services/hotel-booking`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/flight-hotel-package`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/return-ticket`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/services/travel-insurance`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/services/date-change`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },

    // SEO Commercial Landing Pages
    { url: `${baseUrl}/dummy-ticket-for-visa`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/dummy-flight-ticket`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/flight-reservation-for-visa`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/visa/schengen`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/visa/uk`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/visa/usa`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/visa/canada`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/visa/australia`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/visa/uae`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // Informational & SEO Pillar Pages
    { url: `${baseUrl}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/visa-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Blog Articles
    { url: `${baseUrl}/blog/what-is-a-dummy-ticket`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog/dummy-ticket-vs-flight-ticket`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog/how-to-get-flight-reservation-for-schengen-visa`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog/how-to-verify-flight-reservation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog/do-i-need-a-flight-ticket-before-applying-for-a-visa`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Legal & Policy Pages
    { url: `${baseUrl}/terms-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/refund-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  return routes;
}
