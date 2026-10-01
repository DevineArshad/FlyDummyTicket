import FAQPage from "../../src/views/FAQPage";

export const metadata = {
  title: "Frequently Asked Questions | Visa Dummy Tickets & PNR Validity | FlyDummyTicket",
  description:
    "Clear answers to questions regarding flight reservation validity, airline website PNR verification, consulate acceptance, and delivery timelines.",
  alternates: {
    canonical: "https://flydummyticket.com/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Visa Dummy Tickets & PNR Validity | FlyDummyTicket",
    description:
      "Clear answers to questions regarding flight reservation validity, airline website PNR verification, consulate acceptance, and delivery timelines.",
    url: "https://flydummyticket.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://flydummyticket.com/faq#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is a dummy flight ticket legally accepted for Gulf country visa applications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Gulf embassies, consular sections, and immigration portals (including UAE GDRFA, Saudi MOFA & Nusuk, Qatar Hayya, Oman ROP, Kuwait MOI, and Bahrain NPRA) accept verifiable flight reservations and hotel vouchers rather than requiring expensive, non-refundable tickets before your visa is approved.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I verify the booking reference (PNR) directly on the airline website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Every ticket we issue comes with an authentic 6-digit PNR code. You can go to the operating airline's official website (such as Emirates, Qatar Airways, Lufthansa, Singapore Airlines, British Airways, Air France, Air India, KLM, or Turkish Airlines), go to 'Manage Booking' or 'My Trips', enter your surname and PNR, and view your active flight reservation.",
      },
    },
    {
      "@type": "Question",
      "name": "How long will the dummy ticket remain valid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Validity depends on the airline and travel route, typically staying active for 2 to 3 weeks. We recommend ordering close to your visa appointment or embassy file submission date so the reservation remains active during consulate verification.",
      },
    },
    {
      "@type": "Question",
      "name": "What if my visa appointment is postponed or my travel dates change?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "We provide 100% free date changes. Simply contact our support team on WhatsApp or reply to your order confirmation email with your revised dates, and we will update your itinerary and issue a new PDF free of charge.",
      },
    },
    {
      "@type": "Question",
      "name": "How quickly do I receive my ticket after placing an order?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Our processing is rapid: your official IATA-standard PDF ticket is delivered directly to your WhatsApp and Email address within 10 to 30 minutes of order confirmation.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I use this ticket as proof of return / onward travel for Gulf airports & Ok To Board (OTB)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. If you are traveling on a one-way or tourist visa to Dubai, Abu Dhabi, Jeddah, Riyadh, Doha, Muscat, Kuwait, or Bahrain, airlines strictly require confirmed proof of onward/return travel before issuing boarding passes. Our Return Ticket satisfies airport check-in agents, Ok To Board (OTB) mandates, and border immigration.",
      },
    },
  ],
};

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPage />
    </>
  );
}
