/**
 * Build-time Prerendering Script for FlyDummyTicket (Static HTML Generation)
 * 
 * Purpose:
 * Generates route-specific index.html files inside the `dist/` folder after `vite build`.
 * This injects route-accurate <title>, <meta name="description">, <link rel="canonical">,
 * Open Graph, Twitter cards, and Schema.org structured data directly into the initial HTML.
 * 
 * Benefits:
 * 1. 100% Crawlable by search engines (Google, Bing, Yandex) without waiting for JS rendering queue.
 * 2. Instant, perfect link previews on WhatsApp, Twitter/X, Facebook, LinkedIn, Telegram.
 * 3. Eliminates canonical mismatch between raw HTML and client DOM.
 * 4. Zero infrastructure overhead: 100% static hosting on Netlify.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");
const templatePath = path.join(distDir, "index.html");

const ROUTES = [
  {
    path: "/",
    title: "Flight & Hotel Reservation for Visa Applications | FlyDummyTicket",
    description:
      "Get verifiable flight reservations and hotel bookings for visa applications. Active airline PNR codes, instant WhatsApp delivery, and full documentation for Schengen, GCC, US, and UK visas.",
  },
  {
    path: "/pricing",
    title: "Pricing Plans - Verifiable Flight & Hotel Visa Reservations | FlyDummyTicket",
    description:
      "Transparent pricing for verifiable flight reservations, hotel vouchers, and combo documentation packages. Rapid delivery with live airline PNR verification.",
  },
  {
    path: "/services/flight-reservation",
    title: "Flight Reservation for Visa Application | Verifiable Airline PNR | FlyDummyTicket",
    description:
      "Order verifiable flight reservations for visa applications with live 6-digit airline PNR codes. Checkable directly on official airline portals (Emirates, Qatar, Saudia, Lufthansa). Delivered in 10–30 minutes.",
    serviceType: "Flight Reservation for Visa Applications",
  },
  {
    path: "/services/hotel-booking",
    title: "Hotel Booking Voucher for Visa Application | Proof of Accommodation | FlyDummyTicket",
    description:
      "Confirmed hotel booking vouchers for Schengen, GCC, UK, and worldwide visa applications. Complete hotel address, contact details, and confirmation numbers.",
    serviceType: "Hotel Accommodation Proof for Visa Applications",
  },
  {
    path: "/services/flight-hotel-package",
    title: "Flight and Hotel Reservation Combo for Visa Applications | FlyDummyTicket",
    description:
      "Combined flight itinerary and hotel accommodation voucher package for visa applications. Synchronized travel dates delivered in print-ready PDF format.",
    serviceType: "Flight and Hotel Documentation Package",
  },
  {
    path: "/services/travel-insurance",
    title: "Travel Medical Insurance for Schengen & Global Visas | FlyDummyTicket",
    description:
      "Travel medical insurance certificates meeting Schengen Visa Article 15 requirements (€30,000 / $50,000 coverage). Emergency medical, hospitalization, and repatriation coverage.",
    serviceType: "Travel Medical Insurance for Visa Compliance",
  },
  {
    path: "/services/return-ticket",
    title: "Proof of Onward Travel & Return Ticket for Immigration | FlyDummyTicket",
    description:
      "Verifiable return flight ticket for airport check-in, airline boarding clearance, and immigration inspection when traveling on one-way or tourist visas.",
    serviceType: "Proof of Onward Travel / Return Ticket Documentation",
  },
  {
    path: "/services/date-change",
    title: "Free Itinerary Reschedule & Date Change Service | FlyDummyTicket",
    description:
      "Reschedule your visa flight itinerary or hotel booking free of charge if your embassy appointment, visa processing, or travel schedule changes.",
    serviceType: "Itinerary Rescheduling Service",
  },
  {
    path: "/how-it-works",
    title: "How It Works - Verifiable Visa Travel Reservations Explained | FlyDummyTicket",
    description:
      "Learn how verifiable flight reservations work for visa applications, how to verify active PNR codes on airline websites, and why consulates require travel itineraries.",
  },
  {
    path: "/visa-guide",
    title: "Gulf & GCC Visa Flight Itinerary Requirements Guide | FlyDummyTicket",
    description:
      "Comprehensive guide on flight reservation, hotel voucher, and Ok To Board (OTB) requirements for UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain visa applications.",
  },
  {
    path: "/services/visa-guide",
    title: "Gulf & GCC Visa Flight Itinerary Requirements Guide | FlyDummyTicket",
    description:
      "Comprehensive guide on flight reservation, hotel voucher, and Ok To Board (OTB) requirements for UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain visa applications.",
  },
  {
    path: "/faq",
    title: "Frequently Asked Questions | Visa Dummy Tickets & PNR Validity | FlyDummyTicket",
    description:
      "Clear answers to questions regarding flight reservation validity, airline website PNR verification, consulate acceptance, and delivery timelines.",
  },
  {
    path: "/blog",
    title: "Travel Visa Documentation & Immigration Guides | FlyDummyTicket Blog",
    description:
      "In-depth guides on visa requirements, flight itinerary rules for embassies, proof of onward travel, and international immigration tips.",
  },
  {
    path: "/contact",
    title: "Contact FlyDummyTicket | 24/7 WhatsApp & Email Documentation Support",
    description:
      "Need assistance with your visa flight reservation or hotel voucher? Contact our documentation team via WhatsApp at +91 95600 99481 or email.",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | FlyDummyTicket",
    description:
      "Read our privacy policy detailing data handling practices, security protocols, and customer confidential information protection.",
  },
  {
    path: "/terms-conditions",
    title: "Terms and Conditions | FlyDummyTicket",
    description:
      "Review the terms of service, acceptable usage guidelines, and service delivery policies for FlyDummyTicket travel documentation services.",
  },
  {
    path: "/refund-policy",
    title: "Refund & Cancellation Policy | FlyDummyTicket",
    description:
      "Learn about our refund terms, service delivery commitments, and satisfaction guarantees for travel reservation documentation.",
  },
  {
    path: "/404",
    title: "Page Not Found | FlyDummyTicket",
    description:
      "The page you requested could not be found. Explore our verifiable flight reservation and visa travel documentation services.",
    noindex: true,
  },
];

function generateHtmlForRoute(template, route) {
  let html = template;
  const canonicalUrl = `https://flydummyticket.com${route.path === "/" ? "/" : route.path}`;

  // Replace Title
  html = html.replace(
    /<title>.*?<\/title>/s,
    `<title>${escapeHtml(route.title)}</title>`
  );

  // Replace Meta Description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/s,
    `<meta name="description" content="${escapeHtml(route.description)}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/s,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace Open Graph Tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // Replace Twitter Tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/s,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/s,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
  );

  // If noindex route (like 404), replace robots tag
  if (route.noindex) {
    html = html.replace(
      /<meta\s+name="robots"\s+content=".*?"\s*\/?>/s,
      `<meta name="robots" content="noindex, follow" />`
    );
  }

  // Inject route-specific schema before </head>
  if (route.serviceType) {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      "name": route.serviceType,
      "description": route.description,
      "url": canonicalUrl,
      "provider": {
        "@type": "TravelAgency",
        "@id": "https://flydummyticket.com/#organization",
        "name": "FlyDummyTicket",
        "url": "https://flydummyticket.com/",
      },
      "areaServed": [
        "United Arab Emirates",
        "Saudi Arabia",
        "Qatar",
        "Kuwait",
        "Oman",
        "Bahrain",
        "Worldwide",
      ],
    };
    const schemaScript = `\n  <script type="application/ld+json">\n${JSON.stringify(
      serviceSchema,
      null,
      2
    )}\n  </script>\n</head>`;
    html = html.replace("</head>", schemaScript);
  }

  return html;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function prerender() {
  if (!fs.existsSync(templatePath)) {
    console.warn(
      `[Prerender Warning] dist/index.html not found. Run 'npm run build' first before running prerender.`
    );
    return;
  }

  const template = fs.readFileSync(templatePath, "utf-8");
  console.log(`[Prerender] Starting static HTML generation for ${ROUTES.length} routes...`);

  for (const route of ROUTES) {
    const renderedHtml = generateHtmlForRoute(template, route);

    if (route.path === "/") {
      fs.writeFileSync(templatePath, renderedHtml, "utf-8");
      console.log(`  ✓ Generated / (dist/index.html)`);
    } else {
      const targetDir = path.join(distDir, route.path.replace(/^\//, ""));
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, "index.html"), renderedHtml, "utf-8");
      console.log(`  ✓ Generated ${route.path} (${targetDir}/index.html)`);
    }
  }

  console.log(`[Prerender] Completed static generation successfully.`);
}

prerender();
