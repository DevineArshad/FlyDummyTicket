import SharedBookingCard from "../../../src/components/common/SharedBookingCard";
import Link from "next/link";
import { CheckCircle2, Plane, Building2 } from "lucide-react";

export const metadata = {
  title: "Dummy Ticket for Schengen Visa | Verifiable Flight Reservation | FlyDummyTicket",
  description:
    "Embassy-compliant flight reservation and hotel voucher for Schengen visa applications. Valid for all 29 Schengen countries under Article 14. Instant PDF delivery.",
  alternates: {
    canonical: "https://flydummyticket.com/visa/schengen",
  },
  openGraph: {
    title: "Dummy Ticket for Schengen Visa | Verifiable Flight Reservation | FlyDummyTicket",
    description:
      "Embassy-compliant flight reservation and hotel voucher for Schengen visa applications. Valid for all 29 Schengen countries under Article 14. Instant PDF delivery.",
    url: "https://flydummyticket.com/visa/schengen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://flydummyticket.com/visa/schengen#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do Schengen embassies accept dummy flight tickets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Article 14 of the European Visa Code states that applicants must submit proof of travel itinerary, such as a flight reservation, and explicitly advises against purchasing non-refundable tickets prior to visa approval.",
      },
    },
    {
      "@type": "Question",
      "name": "Does the flight reservation work for all 29 Schengen countries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Our reservations comply with the unified Visa Code applicable to all 29 Schengen member states, including France, Germany, Italy, Spain, Switzerland, Austria, and Greece.",
      },
    },
  ],
};

export default function SchengenVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SharedBookingCard
        serviceType="combo"
        serviceTitle="Schengen Visa Flight & Hotel Reservation"
        price="₹499"
        badge="Schengen Article 14 Compliant • 29 European States"
        description="Synchronized round-trip flight reservation and confirmed hotel accommodation voucher with live airline PNR. Accepted by all 29 Schengen embassies."
        features={[
          "Live 6-digit PNR verifiable under airline 'Manage Booking'",
          "Confirmed hotel accommodation voucher fulfilling Article 14(1)(b)",
          "Accepted by VFS Global, TLScontact, and BLS International",
          "Synchronized check-in/out dates matching flight arrival/departure",
          "100% Free date change guarantee if appointment is postponed",
        ]}
      />

      <section className="bg-white py-14 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Schengen Visa Flight Itinerary & Accommodation Rules
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Traveling to the European Schengen Area requires strict documentation. Under **Article 14 of the Community Code on Visas (Regulation EC No 810/2009)**, applicants are mandated to provide proof of their travel route, transportation, and accommodation for the entire trip.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Importantly, the official European Commission Visa Handbook clarifies that consular staff **should not require applicants to present a paid travel ticket** before a decision on the application has been reached. A verifiable flight itinerary with a live airline PNR satisfies 100% of consular requirements without risking your travel budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E6582A]">
                    <Plane size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Flight Requirements</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Must be a round-trip ticket entering and exiting the Schengen zone.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Must show flight numbers, airport terminals, and layover connections.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>PNR must be active and verifiable on the operating carrier portal.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Building2 size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Hotel Requirements</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Check-in date must strictly match your flight arrival day.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Check-out date must align with your outbound flight departure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Must provide registered hotel address, contact phone, and voucher ID.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50/60 border border-orange-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Recommended Schengen Services</h3>
              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <Link href="/services/flight-hotel-package" className="text-[#E6582A] hover:underline">
                  Flight + Hotel Combo (₹499) →
                </Link>
                <Link href="/services/travel-insurance" className="text-[#E6582A] hover:underline">
                  Schengen €30k Travel Medical Insurance (₹699) →
                </Link>
                <Link href="/blog/how-to-get-flight-reservation-for-schengen-visa" className="text-[#E6582A] hover:underline">
                  Read Full Schengen Application Guide →
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">Do Schengen embassies accept dummy flight tickets?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Yes. Article 14 of the European Visa Code states that applicants must submit proof of travel itinerary, such as a flight reservation, and explicitly advises against purchasing non-refundable tickets prior to visa approval.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">Does the flight reservation work for all 29 Schengen countries?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Yes. Our reservations comply with the unified Visa Code applicable to all 29 Schengen member states, including France, Germany, Italy, Spain, Switzerland, Austria, and Greece.
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
