import SharedBookingCard from "../../../src/components/common/SharedBookingCard";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Building2 } from "lucide-react";

export const metadata = {
  title: "Flight Itinerary for Australia Visitor Visa (Subclass 600) | FlyDummyTicket",
  description:
    "Official flight reservation for Australian Visitor Visa Subclass 600 and ETA applications. Department of Home Affairs compliant travel itinerary.",
  alternates: {
    canonical: "https://flydummyticket.com/visa/australia",
  },
  openGraph: {
    title: "Flight Itinerary for Australia Visitor Visa (Subclass 600) | FlyDummyTicket",
    description:
      "Official flight reservation for Australian Visitor Visa Subclass 600 and ETA applications. Department of Home Affairs compliant travel itinerary.",
    url: "https://flydummyticket.com/visa/australia",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://flydummyticket.com/visa/australia#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does the Australian Department of Home Affairs require a flight ticket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "No. The Australian Department of Home Affairs strongly recommends that applicants do not book flights or make non-refundable travel commitments until their visa has been decided.",
      },
    },
    {
      "@type": "Question",
      "name": "How does a flight itinerary help my Genuine Temporary Entrant (GTE) assessment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A confirmed round-trip flight reservation proves you have calculated realistic holiday dates and have an arranged return flight back to your country of employment or residence.",
      },
    },
  ],
};

export default function AustraliaVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SharedBookingCard
        serviceType="flight"
        serviceTitle="Flight Itinerary for Australia Visa (Subclass 600)"
        price="₹299"
        badge="Home Affairs Compliant • Qantas / Singapore Airlines"
        description="Official airline flight itinerary checkable on airline portals. Aligned with Australian Department of Home Affairs guidelines."
        features={[
          "Live 6-digit PNR checkable directly on airline websites",
          "Accepted for Australian Subclass 600, ETA 601 & eVisitor 651 applications",
          "Includes standard IATA barcodes, flight numbers & Australian airport codes",
          "100% Free date change guarantee if application processing is delayed",
          "Delivered via WhatsApp & Email in print-ready PDF within 10-30 mins",
        ]}
      />

      <section className="bg-white py-14 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Australian Visitor Visa Subclass 600 Travel Guidance
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                When lodging an Australian Visitor Visa (Subclass 600) via ImmiAccount, decision-makers assess your application against the **Genuine Temporary Entrant (GTE)** criteria. One of the strongest supporting pieces of evidence is a clear, sensible travel itinerary that shows you have planned your trip and intend to return home prior to your stay limit.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                The Australian Department of Home Affairs expressly advises: **&quot;Do not confirm bookings or pay for travel until you have been granted a visa.&quot;** A verifiable reservation entering Sydney (SYD), Melbourne (MEL), Brisbane (BNE), or Perth (PER) and departing on scheduled dates fulfills every requirement with zero financial risk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E6582A]">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Why Use FlyDummyTicket for Australia</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Real airline PNR checkable on Singapore Airlines, Qantas, Emirates, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Supports your ImmiAccount &quot;Planned Itinerary&quot; upload requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Free date modification if visa processing spans several weeks.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Building2 size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Hotel Accommodation Proof</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Confirmed hotel vouchers for Sydney, Melbourne, Gold Coast, or Cairns.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Includes complete hotel street address, telephone & confirmation ID.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dates synchronized with your arrival and return flight itinerary.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50/60 border border-orange-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Recommended Packages for Australia Visas</h3>
              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <Link href="/services/flight-hotel-package" className="text-[#E6582A] hover:underline">
                  Australia Flight + Hotel Combo (₹499) →
                </Link>
                <Link href="/services/flight-reservation" className="text-[#E6582A] hover:underline">
                  Dummy Flight Ticket (₹299) →
                </Link>
                <Link href="/pricing" className="text-[#E6582A] hover:underline">
                  Compare All Pricing Plans →
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">Does the Australian Department of Home Affairs require a flight ticket?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    No. The Australian Department of Home Affairs strongly recommends that applicants do not book flights or make non-refundable travel commitments until their visa has been decided.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">How does a flight itinerary help my Genuine Temporary Entrant (GTE) assessment?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    A confirmed round-trip flight reservation proves you have calculated realistic holiday dates and have an arranged return flight back to your country of employment or residence.
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
