import Hero from "../src/components/home/Hero";
import TrustBar from "../src/components/home/TrustBar";
import AboutDummyTicket from "../src/components/home/AboutDummyTicket";
import Services from "../src/components/home/Services";
import MajorVisaTypes from "../src/components/home/MajorVisaTypes";
import QuickContactSection from "../src/components/home/QuickContactSection";
import FAQ from "../src/components/home/FAQ";
import FinalCTA from "../src/components/home/FinalCTA";

export const metadata = {
  title: "Flight & Hotel Reservation for Visa Applications | FlyDummyTicket",
  description:
    "Get verifiable flight reservations and hotel bookings for visa applications. Active airline PNR codes, instant WhatsApp delivery, and full documentation for Schengen, GCC, US, and UK visas.",
  keywords: [
    "dummy ticket",
    "dummy flight ticket",
    "flight reservation for visa",
    "dummy ticket for visa",
    "flight itinerary for visa application",
    "dummy air ticket",
    "verifiable airline pnr",
    "dummy hotel booking for visa",
    "flight hotel combo for visa",
    "proof of onward travel",
    "schengen visa flight reservation",
    "dubai visa return ticket",
    "uk visa flight itinerary",
    "us visa flight reservation",
    "vfs global dummy ticket",
  ],
  alternates: {
    canonical: "https://flydummyticket.com/",
  },
  openGraph: {
    title: "Flight & Hotel Reservation for Visa Applications | FlyDummyTicket",
    description:
      "Get verifiable flight reservations and hotel bookings for visa applications. Active airline PNR codes, instant WhatsApp delivery, and full documentation for Schengen, GCC, US, and UK visas.",
    url: "https://flydummyticket.com/",
  },
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://flydummyticket.com/#faq",
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
          "Yes. Every ticket we issue comes with an authentic 6-digit PNR code. You can go to the operating airline's official website (such as Emirates, Qatar Airways, Lufthansa, Singapore Airlines, British Airways, Air India) under 'Manage Booking' to view the active reservation.",
      },
    },
    {
      "@type": "Question",
      "name": "How long will the dummy ticket remain valid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Validity depends on the airline and travel route, typically staying active for 2 to 3 weeks. We recommend ordering close to your visa appointment or embassy file submission date.",
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
          "Yes. When traveling on a one-way ticket or tourist visa to destinations such as the UAE, Saudi Arabia, Thailand, or Singapore, airlines mandate proof of onward travel before issuing boarding passes. Our return ticket documentation fulfills this check-in requirement.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <div id="booking">
        <Hero />
      </div>
      <TrustBar />
      <AboutDummyTicket />
      <Services />
      <MajorVisaTypes />
      <QuickContactSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
