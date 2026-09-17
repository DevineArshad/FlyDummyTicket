import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEO_MAP = {
  "/": {
    title: "FlyDummyTicket | Verifiable Flight & Hotel Reservations for Visa Applications",
    description:
      "Get verifiable dummy flight tickets with active airline PNR and confirmed hotel vouchers for Schengen, US, UK, Canada & worldwide visa applications. 10 to 30-minute delivery via WhatsApp.",
    keywords:
      "dummy ticket, flight reservation for visa, dummy hotel booking, proof of onward travel, schengen visa flight itinerary, return ticket for immigration, ok to board, travel insurance",
  },
  "/pricing": {
    title: "Pricing & Plans - Dummy Flight Tickets & Hotel Bookings from ₹249 | FlyDummyTicket",
    description:
      "Affordable dummy flight tickets from ₹299, dummy hotel bookings from ₹249, and combo packages from ₹499. Instant delivery with genuine airline PNR.",
    keywords:
      "dummy ticket price, cheap dummy flight ticket, dummy hotel booking cost, flight hotel combo price, schengen visa ticket price",
  },
  "/services/flight-reservation": {
    title: "Dummy Flight Ticket for Visa Application (₹299) | 100% Verifiable PNR | FlyDummyTicket",
    description:
      "Order embassy-approved dummy flight tickets with live 6-digit airline PNR code. Verifiable directly on airline websites (Emirates, Qatar, Lufthansa, etc.). Delivered in 10-30 mins.",
    keywords:
      "dummy flight ticket, flight itinerary for visa, verifiable airline pnr, proof of onward flight, schengen visa flight ticket",
  },
  "/services/hotel-booking": {
    title: "Dummy Hotel Booking for Visa (₹249) | Confirmed Hotel Voucher | FlyDummyTicket",
    description:
      "Legitimate confirmed hotel booking vouchers for Schengen, UK, US, and worldwide visa applications. 100% verifiable reservation at just ₹249.",
    keywords:
      "dummy hotel booking, hotel voucher for visa, proof of accommodation, embassy hotel reservation",
  },
  "/services/flight-hotel-package": {
    title: "Flight & Hotel Dummy Ticket Combo (₹499) | Complete Visa Package | FlyDummyTicket",
    description:
      "Get both verifiable dummy flight itinerary and confirmed hotel reservation together. Save big on embassy visa requirements with fast delivery.",
    keywords:
      "flight and hotel combo visa, dummy flight and hotel package, complete visa travel package",
  },
  "/services/travel-insurance": {
    title: "Travel Medical Insurance for Schengen & Global Visas (₹699) | FlyDummyTicket",
    description:
      "Embassy-compliant travel health insurance covering up to €30,000 / $50,000 minimum requirement for Schengen, US, UK, and worldwide travel.",
    keywords:
      "schengen travel insurance, visa travel medical insurance, €30000 insurance for visa",
  },
  "/services/return-ticket": {
    title: "Proof of Return / Onward Ticket for Immigration (₹1,499) | FlyDummyTicket",
    description:
      "Authentic return flight ticket for airport check-in, airline immigration counters, and ok-to-board clearance worldwide.",
    keywords:
      "return ticket for immigration, proof of return, onward ticket airport check-in, ok to board ticket",
  },
  "/services/date-change": {
    title: "Free Date Change & Reschedule Service | FlyDummyTicket",
    description:
      "Visa appointment delayed? We offer 100% free date changes for your dummy flight reservations and hotel bookings.",
    keywords:
      "dummy ticket date change, reschedule flight reservation, visa appointment date change",
  },
  "/how-it-works": {
    title: "How Dummy Ticket Works - Step-by-Step Guide | FlyDummyTicket",
    description:
      "Understand how dummy flight tickets work for visa applications, how to verify PNR codes on airline websites, and why embassies accept them.",
    keywords:
      "how dummy ticket works, dummy ticket verification, check pnr on airline website, is dummy ticket legal",
  },
  "/visa-guide": {
    title: "Embassy Visa Flight Itinerary Requirements Guide | FlyDummyTicket",
    description:
      "Complete guide on flight reservation requirements for Schengen, US B1/B2, UK Standard Visitor, Canada, and Australia visa applications.",
    keywords:
      "schengen visa flight requirements, embassy flight itinerary rules, visa dummy ticket guidelines",
  },
  "/faq": {
    title: "Frequently Asked Questions (FAQ) | Verifiable Dummy Tickets | FlyDummyTicket",
    description:
      "Have questions about dummy tickets, PNR validity, airline verification, and visa acceptance? Find answers to all frequent questions.",
    keywords:
      "dummy ticket faq, flight reservation questions, dummy ticket validity period",
  },
  "/blog": {
    title: "Travel & Visa Guides Blog | FlyDummyTicket",
    description:
      "Expert travel tips, visa application guides, dummy ticket legalities, and immigration advice from the FlyDummyTicket team.",
    keywords:
      "visa guide blog, travel tips, schengen visa tips, dummy ticket blog",
  },
  "/contact": {
    title: "Contact Us & 24/7 WhatsApp Support | FlyDummyTicket",
    description:
      "Contact FlyDummyTicket support via WhatsApp at +91 95600 99481 or email flydummyticket@gmail.com for instant dummy ticket assistance.",
    keywords:
      "contact flydummyticket, dummy ticket whatsapp support, dummy ticket customer care",
  },
  "/privacy-policy": {
    title: "Privacy Policy | FlyDummyTicket",
    description:
      "Read our privacy policy regarding how customer data and booking details are secured and handled.",
    keywords: "privacy policy, flydummyticket privacy",
  },
  "/terms-conditions": {
    title: "Terms & Conditions | FlyDummyTicket",
    description:
      "Review the terms of service, usage guidelines, and cancellation policies for FlyDummyTicket services.",
    keywords: "terms and conditions, terms of service",
  },
  "/refund-policy": {
    title: "Refund Policy | FlyDummyTicket",
    description:
      "Learn about our refund policy and satisfaction guarantees for dummy ticket and travel services.",
    keywords: "refund policy, cancellation refund",
  },
};

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const meta = SEO_MAP[currentPath] || SEO_MAP["/"];

    // Update document title
    document.title = meta.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", meta.description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", meta.keywords || SEO_MAP["/"].keywords);

    // Update Open Graph tags
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
    ogUrl.setAttribute("content", `https://flydummyticket.com${currentPath}`);

    // Update Twitter tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", meta.title);

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", meta.description);

    // Update Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      currentPath === "/"
        ? "https://flydummyticket.com/"
        : `https://flydummyticket.com${currentPath}`
    );
  }, [location.pathname]);

  return null;
}
