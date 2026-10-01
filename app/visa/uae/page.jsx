import SharedBookingCard from "../../../src/components/common/SharedBookingCard";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Building2 } from "lucide-react";

export const metadata = {
  title: "Flight Ticket for Dubai & UAE Tourist Visa | Return Flight Proof",
  description:
    "Verifiable return flight ticket for Dubai & UAE tourist visas (30/60 days) and airport immigration clearance. GDRFA & ICP compliant flight reservation with live PNR.",
  alternates: {
    canonical: "https://flydummyticket.com/visa/uae",
  },
  openGraph: {
    title: "Flight Ticket for Dubai & UAE Tourist Visa | Return Flight Proof",
    description:
      "Verifiable return flight ticket for Dubai & UAE tourist visas (30/60 days) and airport immigration clearance. GDRFA & ICP compliant flight reservation with live PNR.",
    url: "https://flydummyticket.com/visa/uae",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://flydummyticket.com/visa/uae#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is a confirmed return ticket mandatory for traveling to Dubai and UAE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. UAE immigration authorities (GDRFA and ICP) and airline check-in counters strictly require all tourist and visit visa holders to present a valid confirmed return or onward ticket before boarding.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I use FlyDummyTicket for Dubai airport immigration clearance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Our flight reservations come with genuine 6-digit airline PNRs that verify directly on major airlines including Emirates, flydubai, Air Arabia, and IndiGo, satisfying airline counter and immigration verification.",
      },
    },
    {
      "@type": "Question",
      "name": "What if my return date changes during my stay in UAE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "FlyDummyTicket provides 100% free date changes. If you extend your UAE visa or alter your departure date, simply message us on WhatsApp with your booking reference.",
      },
    },
  ],
};

export default function UAEVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SharedBookingCard
        serviceType="flight"
        serviceTitle="Return Ticket for Dubai & UAE Tourist Visa"
        price="₹299"
        badge="GDRFA & ICP Compliant • Emirates / FlyDubai / Air Arabia"
        description="Verifiable round-trip flight reservation with live 6-digit PNR for UAE tourist visas (30/60 days), Ok-To-Board (OTB), and DXB/SHJ/AUH immigration checks."
        features={[
          "Authentic airline PNR checkable directly on airline portals & apps",
          "Accepted for 30-day, 60-day Dubai tourist visas and airport boarding gates",
          "Includes standard IATA barcodes, flight numbers & UAE airport codes (DXB, AUH, SHJ)",
          "100% Free date change guarantee if your travel itinerary changes",
          "Instant delivery via WhatsApp & Email in print-ready PDF within 10-30 mins",
        ]}
      />

      <section className="bg-white py-14 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Dubai & UAE Tourist Visa Travel Guidance
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Traveling to the United Arab Emirates on a 30-day or 60-day tourist visa requires strict adherence to airline and airport immigration rules. Both the General Directorate of Residency and Foreigners Affairs (**GDRFA**) in Dubai and the Federal Authority for Identity, Citizenship, Customs and Port Security (**ICP**) mandate that visitors must possess a valid return or onward flight ticket before boarding.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Airlines such as Emirates, FlyDubai, Air Arabia, IndiGo, and SpiceJet routinely inspect return flight itineraries at the departure check-in desk. Passengers without a verifiable return reservation risk boarding denial or delays with **Ok To Board (OTB)** verification. A genuine reservation from FlyDummyTicket provides full compliance with zero financial risk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E6582A]">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Why Use FlyDummyTicket for UAE</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Real airline PNR verifiable on Emirates, flydubai, Air Arabia, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Meets strict airline check-in counter return flight proof requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Free date modification if you extend your UAE visit or change plans.</span>
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
                    <span>Confirmed hotel voucher for Dubai, Abu Dhabi, or Sharjah stays.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Complete hotel address and booking reference for immigration declaration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dates synchronized with your return flight itinerary.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50/60 border border-orange-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Recommended Packages for UAE Travel</h3>
              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <Link href="/services/flight-hotel-package" className="text-[#E6582A] hover:underline">
                  Dubai Flight + Hotel Combo (₹499) →
                </Link>
                <Link href="/services/return-ticket" className="text-[#E6582A] hover:underline">
                  Return Ticket for Immigration (₹299) →
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
                  <h4 className="font-bold text-sm text-slate-900">Is a confirmed return ticket mandatory for traveling to Dubai and UAE?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Yes. UAE immigration authorities (GDRFA and ICP) and airline check-in counters strictly require all tourist and visit visa holders to present a valid confirmed return or onward ticket before boarding.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">Can I use FlyDummyTicket for Dubai airport immigration clearance?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Yes. Our flight reservations come with genuine 6-digit airline PNRs that verify directly on major airlines including Emirates, flydubai, Air Arabia, and IndiGo, satisfying airline counter and immigration verification.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">What if my return date changes during my stay in UAE?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    FlyDummyTicket provides 100% free date changes. If you extend your UAE visa or alter your departure date, simply message us on WhatsApp with your booking reference.
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
