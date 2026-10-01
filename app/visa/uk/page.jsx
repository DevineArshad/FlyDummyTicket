import SharedBookingCard from "../../../src/components/common/SharedBookingCard";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Building2 } from "lucide-react";

export const metadata = {
  title: "Flight Itinerary for UK Visa Applications | FlyDummyTicket",
  description:
    "Verifiable flight itinerary for UK Standard Visitor, Business, and Family visas. Complies with UKVI guidelines advising against purchasing non-refundable air tickets.",
  alternates: {
    canonical: "https://flydummyticket.com/visa/uk",
  },
  openGraph: {
    title: "Flight Itinerary for UK Visa Applications | FlyDummyTicket",
    description:
      "Verifiable flight itinerary for UK Standard Visitor, Business, and Family visas. Complies with UKVI guidelines advising against purchasing non-refundable air tickets.",
    url: "https://flydummyticket.com/visa/uk",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://flydummyticket.com/visa/uk#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does UKVI require a booked flight ticket for a UK Standard Visitor visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "No. Official UK Visas & Immigration (UKVI) guidelines explicitly warn applicants not to pay for flights or non-refundable travel arrangements until they have received a decision on their visa application.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I submit a flight reservation for my UK visa application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. A verifiable flight reservation showing your planned arrival and departure dates demonstrates your intended itinerary without putting your money at risk.",
      },
    },
  ],
};

export default function UKVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SharedBookingCard
        serviceType="flight"
        serviceTitle="Flight Itinerary for UK Visa (UKVI)"
        price="₹299"
        badge="UKVI Compliant Itinerary • British Airways / Emirates"
        description="Official airline flight itinerary checkable on airline portals. Aligned with UK Home Office guidelines advising against buying tickets before visa approval."
        features={[
          "Live 6-digit PNR checkable directly on airline websites",
          "Accepted by UK Visas & Immigration (UKVI) & VFS / TLS centers",
          "Includes standard IATA barcodes, flight numbers & London terminals",
          "100% Free date change guarantee if appointment is postponed",
          "Delivered via WhatsApp & Email in print-ready PDF within 10-30 mins",
        ]}
      />

      <section className="bg-white py-14 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                UK Visas & Immigration (UKVI) Travel Guidance
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                When preparing a UK Standard Visitor Visa application, applicants must complete the online visa form and submit supporting documents outlining their travel intent. The UK Home Office and UKVI explicitly advise all applicants:
              </p>
              <blockquote className="my-4 border-l-4 border-[#E6582A] pl-4 py-2 italic text-slate-700 bg-orange-50/50 rounded-r-xl text-sm">
                &quot;You should not buy tickets or pay for accommodation until you have received a decision on your visa application. You only need to provide an itinerary of your planned trip.&quot;
              </blockquote>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Our verifiable flight reservation service delivers the exact travel itinerary document UKVI case workers look for: realistic flight connections into London Heathrow (LHR), Gatwick (LGW), or Manchester (MAN), confirmed transit layovers, and an active PNR reference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E6582A]">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Why Use FlyDummyTicket for the UK</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Live checkable PNR on British Airways, Emirates, Virgin Atlantic, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Avoids non-refundable ticket losses during 3–6 week UKVI processing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Free date modification if biometric appointment date shifts.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Building2 size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Need Accommodation Proof?</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>UKVI also examines where you will stay in the UK.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Our hotel voucher includes real hotel address, phone & booking code.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dates synchronized with your arrival and departure flights.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50/60 border border-orange-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Recommended Packages for UK Travel</h3>
              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <Link href="/services/flight-hotel-package" className="text-[#E6582A] hover:underline">
                  UK Flight + Hotel Combo (₹499) →
                </Link>
                <Link href="/services/flight-reservation" className="text-[#E6582A] hover:underline">
                  Dummy Flight Ticket (₹299) →
                </Link>
                <Link href="/faq" className="text-[#E6582A] hover:underline">
                  Frequently Asked Questions →
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">Does UKVI require a booked flight ticket for a UK Standard Visitor visa?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    No. Official UK Visas & Immigration (UKVI) guidelines explicitly warn applicants not to pay for flights or non-refundable travel arrangements until they have received a decision on their visa application.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">Can I submit a flight reservation for my UK visa application?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Yes. A verifiable flight reservation showing your planned arrival and departure dates demonstrates your intended itinerary without putting your money at risk.
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
