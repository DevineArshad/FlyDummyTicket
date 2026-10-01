import SharedBookingCard from "../../src/components/common/SharedBookingCard";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Plane, HelpCircle, ArrowRight, Building2, Globe } from "lucide-react";

export const metadata = {
  title: "Dummy Ticket for Visa Applications | Verifiable Airline Reservation | FlyDummyTicket",
  description:
    "Order an official dummy ticket for your visa application with a live 6-digit airline PNR code. Accepted by Schengen, US, UK, Canada, and Gulf embassies. Delivered in 10-30 mins.",
  keywords: [
    "dummy ticket for visa",
    "dummy flight ticket for visa application",
    "visa dummy ticket with PNR",
    "embassy accepted dummy ticket",
    "schengen visa dummy ticket",
    "vfs dummy ticket",
    "proof of flight for visa",
  ],
  alternates: {
    canonical: "https://flydummyticket.com/dummy-ticket-for-visa",
  },
  openGraph: {
    title: "Dummy Ticket for Visa Applications | Verifiable Airline Reservation | FlyDummyTicket",
    description:
      "Order an official dummy ticket for your visa application with a live 6-digit airline PNR code. Accepted by Schengen, US, UK, Canada, and Gulf embassies. Delivered in 10-30 mins.",
    url: "https://flydummyticket.com/dummy-ticket-for-visa",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://flydummyticket.com/dummy-ticket-for-visa#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why do embassies accept a dummy ticket instead of a real ticket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Embassies recognize that visa issuance is never guaranteed. They specifically advise applicants against purchasing non-refundable tickets prior to visa approval to avoid severe financial loss if the application is delayed or rejected.",
      },
    },
    {
      "@type": "Question",
      "name": "How can the visa officer verify my dummy ticket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The visa officer enters the 6-character PNR code and your surname into the operating airline's computer reservation system or website. The reservation shows up as an active, confirmed booking in the passenger manifest.",
      },
    },
    {
      "@type": "Question",
      "name": "How long is the dummy ticket valid for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Depending on the airline and departure date, dummy tickets typically remain valid for 2 to 3 weeks. If your visa appointment date changes, FlyDummyTicket reissues your ticket free of charge.",
      },
    },
  ],
};

export default function DummyTicketForVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SharedBookingCard
        serviceType="flight"
        serviceTitle="Dummy Ticket for Visa Applications"
        price="₹299"
        badge="Live Airline PNR • 100% Embassy Accepted"
        description="Official IATA flight reservation with active 6-character PNR checkable directly on airline websites. Delivered to WhatsApp & Email within 10 to 30 minutes."
        features={[
          "Live 6-digit airline PNR verifiable on Emirates, Qatar, Lufthansa, etc.",
          "Accepted by Schengen, UKVI, US Consulates, Canada & GCC authorities",
          "Includes standard IATA barcode, confirmed flight numbers & terminals",
          "100% Free date change guarantee if appointment is postponed",
          "Dispatched in high-resolution, print-ready PDF format in 10-30 mins",
        ]}
      />

      {/* Comprehensive SEO Content Section */}
      <section className="bg-white py-14 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                What is a Dummy Ticket for Visa Applications?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                A <strong>dummy ticket for visa</strong> is a genuine, temporary flight reservation with a live Passenger Name Record (PNR) code generated through airline Global Distribution Systems (GDS). It outlines your complete travel itinerary—including departure and arrival airports, flight numbers, transit layovers, dates, and passenger passport names—without requiring you to pay thousands of dollars for non-refundable commercial airfare.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Visa application centers (including VFS Global, TLScontact, and BLS International) mandate flight itineraries so consular officers can evaluate your travel schedule, length of stay, and compliance with immigration time limits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E6582A]">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Why Use FlyDummyTicket?</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Real 6-character PNR verifiable under airline Manage Booking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Avoid losing money on non-refundable tickets if visa is delayed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Free date changes whenever your appointment shifts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Delivered in 10 to 30 minutes straight to WhatsApp & Email.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Plane size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Which Visas Accept It?</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>All 29 Schengen Area countries (France, Germany, Italy, Spain, etc.).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>United Kingdom Standard Visitor and Transit visas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>United States B1/B2 tourist & business visa appointments.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Gulf tourist & visit visas (UAE Dubai, Saudi Arabia, Qatar).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Country Guides Links */}
            <div className="rounded-2xl bg-orange-50/60 border border-orange-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Country-Specific Visa Itinerary Guides</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold">
                <Link href="/visa/schengen" className="text-[#E6582A] hover:underline">
                  Schengen Visa Guide →
                </Link>
                <Link href="/visa/uk" className="text-[#E6582A] hover:underline">
                  UK Visa Guide →
                </Link>
                <Link href="/visa/usa" className="text-[#E6582A] hover:underline">
                  USA Visa Guide →
                </Link>
                <Link href="/visa/canada" className="text-[#E6582A] hover:underline">
                  Canada Visa Guide →
                </Link>
                <Link href="/visa/australia" className="text-[#E6582A] hover:underline">
                  Australia Visa Guide →
                </Link>
                <Link href="/visa/uae" className="text-[#E6582A] hover:underline">
                  UAE & Dubai Visa Guide →
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">Why do embassies accept a dummy ticket instead of a real ticket?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Embassies recognize that visa issuance is never guaranteed. They specifically advise applicants against purchasing non-refundable tickets prior to visa approval to avoid severe financial loss if the application is delayed or rejected.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">How can the visa officer verify my dummy ticket?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    The visa officer enters the 6-character PNR code and your surname into the operating airline&apos;s computer reservation system or website. The reservation shows up as an active, confirmed booking in the passenger manifest.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">How long is the dummy ticket valid for?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Depending on the airline and departure date, dummy tickets typically remain valid for 2 to 3 weeks. If your visa appointment date changes, FlyDummyTicket reissues your ticket free of charge.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
