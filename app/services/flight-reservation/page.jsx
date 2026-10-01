import DummyFlightTicket from "../../../src/views/DummyFlightTicket";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, FileText } from "lucide-react";

export const metadata = {
  title: "Flight Reservation for Visa Application | Verifiable Airline PNR | FlyDummyTicket",
  description:
    "Order verifiable flight reservations for visa applications with live 6-digit airline PNR codes. Checkable directly on official airline portals (Emirates, Qatar, Saudia, Lufthansa). Delivered in 10–30 minutes.",
  keywords: [
    "flight reservation for visa",
    "dummy ticket with PNR",
    "verifiable flight reservation",
    "air ticket reservation for visa application",
    "flight itinerary for visa",
    "dummy ticket booking",
    "airline PNR verification",
    "schengen visa flight reservation",
    "dummy ticket online 299",
  ],
  alternates: {
    canonical: "https://flydummyticket.com/services/flight-reservation",
  },
  openGraph: {
    title: "Flight Reservation for Visa Application | Verifiable Airline PNR | FlyDummyTicket",
    description:
      "Order verifiable flight reservations for visa applications with live 6-digit airline PNR codes. Checkable directly on official airline portals (Emirates, Qatar, Saudia, Lufthansa). Delivered in 10–30 minutes.",
    url: "https://flydummyticket.com/services/flight-reservation",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://flydummyticket.com/services/flight-reservation#service",
  "name": "Flight Reservation for Visa Applications",
  "description":
    "Order verifiable flight reservations for visa applications with live 6-digit airline PNR codes. Checkable directly on official airline portals (Emirates, Qatar, Saudia, Lufthansa). Delivered in 10–30 minutes.",
  "url": "https://flydummyticket.com/services/flight-reservation",
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

const flightFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://flydummyticket.com/services/flight-reservation#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this flight reservation accepted by Schengen and US embassies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Consulates specifically state that applicants should not purchase fully paid tickets until their visa is approved. Our verifiable reservations with live PNR numbers are fully compliant with embassy requirements.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I check the flight reservation on the airline's website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Every flight reservation is issued with an authentic 6-character PNR checkable under 'Manage Booking' on official airline websites like Emirates, Qatar Airways, Lufthansa, Singapore Airlines, and Air India.",
      },
    },
    {
      "@type": "Question",
      "name": "What if my visa appointment is rescheduled?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "FlyDummyTicket provides 100% free date changes. Simply message us on WhatsApp with your booking reference and new travel dates to receive an updated itinerary PDF at no extra charge.",
      },
    },
  ],
};

export default function FlightReservationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(flightFaqSchema) }}
      />

      {/* Main Interactive Booking Component */}
      <DummyFlightTicket />

      {/* Structured SEO Content Section */}
      <section className="bg-white py-14 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Why Embassies Require a Verifiable Flight Reservation
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                When applying for a tourist, business, or visitor visa, consulates and embassies require applicants to submit proof of intended travel dates, route, and flight itinerary. Purchasing a non-refundable, full-price airline ticket before visa approval is financially risky—if the visa is delayed or refused, travelers stand to lose hundreds or thousands of dollars.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Official diplomatic guidelines from Schengen member states, the UK Visas and Immigration (UKVI), and the US Department of State explicitly recommend submitting a flight itinerary or reservation rather than a purchased ticket. FlyDummyTicket provides authentic reservations booked directly through airline Global Distribution Systems (GDS) with verifiable Passenger Name Records (PNR).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E6582A]">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">How to Verify Your PNR</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Go to the official website of the operating airline.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Navigate to &quot;Manage Booking&quot; or &quot;My Trips&quot;.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Enter your 6-character PNR code and passenger surname.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>View your confirmed flight numbers, dates, and seat reservation.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <FileText size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Included in Every Ticket</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Official IATA e-ticket formatting with barcode.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Departure and arrival airports, terminals, and flight numbers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Print-ready high-resolution PDF sent via WhatsApp and Email.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Free date rescheduling if embassy appointment moves.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contextual Internal Links */}
            <div className="rounded-2xl bg-orange-50/60 border border-orange-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Related Visa Documentation & Guides</h3>
              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <Link href="/services/hotel-booking" className="text-[#E6582A] hover:underline">
                  Dummy Hotel Booking (₹249) →
                </Link>
                <Link href="/services/flight-hotel-package" className="text-[#E6582A] hover:underline">
                  Flight + Hotel Combo (₹499) →
                </Link>
                <Link href="/visa-guide" className="text-[#E6582A] hover:underline">
                  GCC & Gulf Visa Guide →
                </Link>
                <Link href="/visa/schengen" className="text-[#E6582A] hover:underline">
                  Schengen Visa Itinerary Guide →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
