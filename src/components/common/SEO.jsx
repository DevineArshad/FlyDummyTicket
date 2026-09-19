import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SEO_MAP = {
  "/": {
    title: "Flight & Hotel Reservation for Visa Applications | FlyDummyTicket",
    description:
      "Get verifiable flight reservations and hotel bookings for visa applications. Active airline PNR codes, instant WhatsApp delivery, and full documentation for Schengen, GCC, US, and UK visas.",
  },
  "/pricing": {
    title: "Pricing Plans - Verifiable Flight & Hotel Visa Reservations | FlyDummyTicket",
    description:
      "Transparent pricing for verifiable flight reservations, hotel vouchers, and combo documentation packages. Rapid delivery with live airline PNR verification.",
  },
  "/services/flight-reservation": {
    title: "Flight Reservation for Visa Application | Verifiable Airline PNR | FlyDummyTicket",
    description:
      "Order verifiable flight reservations for visa applications with live 6-digit airline PNR codes. Checkable directly on official airline portals (Emirates, Qatar, Saudia, Lufthansa). Delivered in 10–30 minutes.",
    serviceType: "Flight Reservation for Visa Applications",
  },
  "/services/hotel-booking": {
    title: "Hotel Booking Voucher for Visa Application | Proof of Accommodation | FlyDummyTicket",
    description:
      "Confirmed hotel booking vouchers for Schengen, GCC, UK, and worldwide visa applications. Complete hotel address, contact details, and confirmation numbers.",
    serviceType: "Hotel Accommodation Proof for Visa Applications",
  },
  "/services/flight-hotel-package": {
    title: "Flight and Hotel Reservation Combo for Visa Applications | FlyDummyTicket",
    description:
      "Combined flight itinerary and hotel accommodation voucher package for visa applications. Synchronized travel dates delivered in print-ready PDF format.",
    serviceType: "Flight and Hotel Documentation Package",
  },
  "/services/travel-insurance": {
    title: "Travel Medical Insurance for Schengen & Global Visas | FlyDummyTicket",
    description:
      "Travel medical insurance certificates meeting Schengen Visa Article 15 requirements (€30,000 / $50,000 coverage). Emergency medical, hospitalization, and repatriation coverage.",
    serviceType: "Travel Medical Insurance for Visa Compliance",
  },
  "/services/return-ticket": {
    title: "Proof of Onward Travel & Return Ticket for Immigration | FlyDummyTicket",
    description:
      "Verifiable return flight ticket for airport check-in, airline boarding clearance, and immigration inspection when traveling on one-way or tourist visas.",
    serviceType: "Proof of Onward Travel / Return Ticket Documentation",
  },
  "/services/date-change": {
    title: "Free Itinerary Reschedule & Date Change Service | FlyDummyTicket",
    description:
      "Reschedule your visa flight itinerary or hotel booking free of charge if your embassy appointment, visa processing, or travel schedule changes.",
    serviceType: "Itinerary Rescheduling Service",
  },
  "/how-it-works": {
    title: "How It Works - Verifiable Visa Travel Reservations Explained | FlyDummyTicket",
    description:
      "Learn how verifiable flight reservations work for visa applications, how to verify active PNR codes on airline websites, and why consulates require travel itineraries.",
  },
  "/visa-guide": {
    title: "Gulf & GCC Visa Flight Itinerary Requirements Guide | FlyDummyTicket",
    description:
      "Comprehensive guide on flight reservation, hotel voucher, and Ok To Board (OTB) requirements for UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain visa applications.",
  },
  "/services/visa-guide": {
    title: "Gulf & GCC Visa Flight Itinerary Requirements Guide | FlyDummyTicket",
    description:
      "Comprehensive guide on flight reservation, hotel voucher, and Ok To Board (OTB) requirements for UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain visa applications.",
  },
  "/faq": {
    title: "Frequently Asked Questions | Visa Dummy Tickets & PNR Validity | FlyDummyTicket",
    description:
      "Clear answers to questions regarding flight reservation validity, airline website PNR verification, consulate acceptance, and delivery timelines.",
  },
  "/blog": {
    title: "Travel Visa Documentation & Immigration Guides | FlyDummyTicket Blog",
    description:
      "In-depth guides on visa requirements, flight itinerary rules for embassies, proof of onward travel, and international immigration tips.",
  },
  "/contact": {
    title: "Contact FlyDummyTicket | 24/7 WhatsApp & Email Documentation Support",
    description:
      "Need assistance with your visa flight reservation or hotel voucher? Contact our documentation team via WhatsApp at +91 95600 99481 or email.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | FlyDummyTicket",
    description:
      "Read our privacy policy detailing data handling practices, security protocols, and customer confidential information protection.",
  },
  "/terms-conditions": {
    title: "Terms and Conditions | FlyDummyTicket",
    description:
      "Review the terms of service, acceptable usage guidelines, and service delivery policies for FlyDummyTicket travel documentation services.",
  },
  "/refund-policy": {
    title: "Refund & Cancellation Policy | FlyDummyTicket",
    description:
      "Learn about our refund terms, service delivery commitments, and satisfaction guarantees for travel reservation documentation.",
  },
  "/404": {
    title: "Page Not Found | FlyDummyTicket",
    description:
      "The page you are looking for does not exist or has been moved. Explore our verifiable flight reservation and travel document services.",
    noindex: true,
  },
};

const HOMEPAGE_FAQS = [
  {
    question: "Is a flight reservation accepted for visa applications?",
    answer:
      "Yes. Most embassies, consular sections, and immigration departments (including Schengen member states, US consulates, UKVI, Canada, and Gulf authorities) accept verifiable flight reservations and hotel bookings rather than requiring non-refundable purchased tickets before visa approval.",
  },
  {
    question: "Can I verify the booking reference (PNR) directly on the airline website?",
    answer:
      "Yes. Every flight reservation issued comes with an authentic 6-digit PNR code. You can log into the operating airline's official website (such as Emirates, Qatar Airways, Saudia, Lufthansa, Singapore Airlines, or British Airways) under 'Manage Booking' to view the active reservation.",
  },
  {
    question: "How long does a flight reservation remain valid?",
    answer:
      "Validity depends on the airline GDS system and departure schedule, typically staying active for up to two to three weeks. It is recommended to order close to your visa appointment or file submission date.",
  },
  {
    question: "What happens if my visa appointment date changes?",
    answer:
      "FlyDummyTicket provides free date rescheduling. Contact our support team with your booking reference and updated travel dates, and a revised itinerary PDF will be reissued.",
  },
  {
    question: "How quickly is the documentation delivered?",
    answer:
      "Standard processing delivers high-resolution, print-ready PDF documents directly to your WhatsApp and email within 10 to 30 minutes of order confirmation.",
  },
  {
    question: "Can I use this documentation as proof of return or onward travel for airline check-in?",
    answer:
      "Yes. When traveling on a one-way ticket or tourist visa to destinations such as the UAE, Saudi Arabia, Thailand, or Singapore, airlines mandate proof of onward travel before issuing boarding passes. Our return ticket documentation fulfills this check-in requirement.",
  },
];

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const rawPath = location.pathname;
    // Normalize trailing slashes (e.g. /services/flight-reservation/ -> /services/flight-reservation)
    const normalizedPath =
      rawPath.length > 1 && rawPath.endsWith("/") ? rawPath.slice(0, -1) : rawPath;

    const meta = SEO_MAP[normalizedPath] || SEO_MAP[rawPath] || SEO_MAP["/"];
    const canonicalUrl = `https://flydummyticket.com${normalizedPath === "/" ? "/" : normalizedPath}`;

    // 1. Update Document Title
    document.title = meta.title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", meta.description);

    // 3. Remove Obsolete Meta Keywords (Google does not use it)
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.remove();
    }

    // 4. Update Robots Meta Tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      document.head.appendChild(metaRobots);
    }
    if (meta.noindex) {
      metaRobots.setAttribute("content", "noindex, follow");
    } else {
      metaRobots.setAttribute(
        "content",
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      );
    }

    // 5. Update Open Graph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", canonicalUrl);

    // 6. Update Twitter Card Tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", meta.title);

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", meta.description);

    // 7. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // 8. Route-Specific Dynamic Schema Injection
    let routeSchemaScript = document.getElementById("route-schema");
    if (!routeSchemaScript) {
      routeSchemaScript = document.createElement("script");
      routeSchemaScript.id = "route-schema";
      routeSchemaScript.type = "application/ld+json";
      document.head.appendChild(routeSchemaScript);
    }

    let routeSchemaData = null;

    if (normalizedPath === "/" || normalizedPath === "/faq") {
      // FAQPage schema only on pages with visible FAQs
      routeSchemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": HOMEPAGE_FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      };
    } else if (normalizedPath.startsWith("/services/")) {
      // Service schema on service pages
      routeSchemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        "name": meta.serviceType || meta.title,
        "description": meta.description,
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
    }

    if (routeSchemaData) {
      routeSchemaScript.textContent = JSON.stringify(routeSchemaData);
    } else {
      routeSchemaScript.textContent = "";
    }
  }, [location.pathname]);

  return null;
}
