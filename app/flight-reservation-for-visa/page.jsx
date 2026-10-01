import SharedBookingCard from "../../src/components/common/SharedBookingCard";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Plane, FileCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Flight Reservation for Visa | Confirmed Flight Itinerary | FlyDummyTicket",
  description:
    "Get a confirmed flight reservation for your visa application without buying expensive tickets. 100% embassy compliant flight itinerary with live PNR.",
  alternates: {
    canonical: "https://flydummyticket.com/flight-reservation-for-visa",
  },
  openGraph: {
    title: "Flight Reservation for Visa | Confirmed Flight Itinerary | FlyDummyTicket",
    description:
      "Get a confirmed flight reservation for your visa application without buying expensive tickets. 100% embassy compliant flight itinerary with live PNR.",
    url: "https://flydummyticket.com/flight-reservation-for-visa",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://flydummyticket.com/flight-reservation-for-visa#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between a flight reservation and a flight ticket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A flight reservation holds a seat on a flight with a verified PNR code without paying the full airfare. A flight ticket is fully paid with an e-ticket number. Embassies request flight reservations so applicants do not risk non-refundable funds before visa issuance.",
      },
    },
    {
      "@type": "Question",
      "name": "Will the embassy accept a reservation if my appointment is delayed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "If your appointment moves, contact FlyDummyTicket on WhatsApp and we will issue an updated flight reservation with your revised dates completely free of charge.",
      },
    },
  ],
};

export default function FlightReservationForVisaLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SharedBookingCard
        serviceType="flight"
        serviceTitle="Flight Reservation for Visa"
        price="₹299"
        badge="Official IATA Flight Itinerary"
        description="Embassies advise applicants not to buy real tickets until visa approval. Secure your verified flight reservation with active PNR delivered in 10-30 minutes."
        features={[
          "Live 6-digit PNR verifiable directly on official airline portals",
          "Includes standard IATA barcodes, flight numbers, terminals & layovers",
          "Accepted by all European Schengen embassies, UKVI, US & Canadian consulates",
          "100% Free date change guarantee if your interview is rescheduled",
          "Print-ready 300 DPI PDF delivered via WhatsApp & Email in 10-30 mins",
        ]}
      />

      <section className="bg-white py-14 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Official Consular Rules for Flight Reservations
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Visa applicant instructions issued by the European Commission, the British High Commission, the US Embassy, and the Australian Department of Home Affairs all specify that applicants should provide proof of travel plans—usually in the form of a <strong>booked flight reservation</strong> or <strong>round-trip travel itinerary</strong>.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                The objective is to confirm that the applicant has formulated a realistic schedule, has calculated their intended length of stay, and has a clear plan to return to their home country. By using a verifiable reservation from FlyDummyTicket, you satisfy every diplomatic requirement while protecting your personal finances.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E6582A]">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">What Consulates Verify</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Exact entry and exit dates matching your visa application form.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Active 6-digit PNR verified on the airline reservation system.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Passenger name matching the international passport bio-page.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Flight numbers and transit airports corresponding with intended route.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Plane size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Ordering in 3 Steps</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>1. Choose your origin and destination airports.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>2. Enter your travel dates and passenger name.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>3. Confirm on WhatsApp and receive your verified PDF in 10-30 mins.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Free re-issuance anytime if your embassy dates move.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50/60 border border-orange-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Related Guides & Resources</h3>
              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <Link href="/blog/do-i-need-a-flight-ticket-before-applying-for-a-visa" className="text-[#E6582A] hover:underline">
                  Do I Need a Ticket Before Applying? →
                </Link>
                <Link href="/services/hotel-booking" className="text-[#E6582A] hover:underline">
                  Dummy Hotel Booking Voucher →
                </Link>
                <Link href="/visa/schengen" className="text-[#E6582A] hover:underline">
                  Schengen Visa Requirements Guide →
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">What is the difference between a flight reservation and a flight ticket?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    A flight reservation holds a seat on a flight with a verified PNR code without paying the full airfare. A flight ticket is fully paid with an e-ticket number. Embassies request flight reservations so applicants do not risk non-refundable funds before visa issuance.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">Will the embassy accept a reservation if my appointment is delayed?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    If your appointment moves, contact FlyDummyTicket on WhatsApp and we will issue an updated flight reservation with your revised dates completely free of charge.
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
