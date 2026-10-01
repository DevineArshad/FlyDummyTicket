import SharedBookingCard from "../../../src/components/common/SharedBookingCard";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Building2 } from "lucide-react";

export const metadata = {
  title: "Flight Itinerary for Canada Visitor Visa (TRV) | FlyDummyTicket",
  description:
    "Verifiable flight reservation for Canada Temporary Resident Visa (TRV) and eTA applications. IRCC compliant travel itinerary with live airline PNR.",
  alternates: {
    canonical: "https://flydummyticket.com/visa/canada",
  },
  openGraph: {
    title: "Flight Itinerary for Canada Visitor Visa (TRV) | FlyDummyTicket",
    description:
      "Verifiable flight reservation for Canada Temporary Resident Visa (TRV) and eTA applications. IRCC compliant travel itinerary with live airline PNR.",
    url: "https://flydummyticket.com/visa/canada",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://flydummyticket.com/visa/canada#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does IRCC require a paid flight ticket for a Canada visitor visa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "No. Immigration, Refugees and Citizenship Canada (IRCC) explicitly states that applicants should NOT buy tickets before a decision is made on their application.",
      },
    },
    {
      "@type": "Question",
      "name": "What document should I upload for 'Purpose of Travel' on the IRCC portal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "You can upload your FlyDummyTicket flight itinerary along with your day-to-day travel plan and hotel accommodation voucher under the Purpose of Travel client application slot.",
      },
    },
  ],
};

export default function CanadaVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SharedBookingCard
        serviceType="flight"
        serviceTitle="Flight Itinerary for Canada Visitor Visa"
        price="₹299"
        badge="IRCC Compliant • Air Canada / Emirates"
        description="Official airline flight itinerary checkable on airline portals. Aligned with IRCC guidelines advising against pre-purchasing tickets."
        features={[
          "Live 6-digit PNR checkable directly on airline websites",
          "Accepted by IRCC & VFS Canada Visa Application Centers",
          "Includes standard IATA barcodes, flight numbers & Canadian entry airports",
          "100% Free date change guarantee if application processing is delayed",
          "Delivered via WhatsApp & Email in print-ready PDF within 10-30 mins",
        ]}
      />

      <section className="bg-white py-14 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                IRCC Canada Visitor Visa Itinerary Requirements
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                When applying for a Canadian Temporary Resident Visa (TRV) through the IRCC portal, one of the primary upload sections is **Purpose of Travel**. Visa officers evaluate whether you have a genuine temporary stay planned and clear ties to depart Canada at the end of your visit.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                IRCC guidelines explicitly emphasize: **&quot;Do not buy non-refundable tickets until you have received your visa.&quot;** A round-trip flight reservation arriving into Toronto (YYZ), Vancouver (YVR), or Montreal (YUL) with a scheduled return leg provides convincing evidence of your intended departure without any financial gamble.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E6582A]">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Why Use FlyDummyTicket for Canada</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Real airline PNR checkable on Air Canada, Emirates, British Airways, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Avoids loss during lengthy Canadian biometric and processing wait times.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Free date modification if passport stamping takes longer than expected.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Building2 size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Proof of Lodging for Canada</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Confirmed hotel voucher matching your Canadian city itinerary.</span>
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
              <h3 className="text-sm font-bold text-slate-900 mb-3">Recommended Packages for Canadian Visas</h3>
              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <Link href="/services/flight-hotel-package" className="text-[#E6582A] hover:underline">
                  Canada Flight + Hotel Combo (₹499) →
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
                  <h4 className="font-bold text-sm text-slate-900">Does IRCC require a paid flight ticket for a Canada visitor visa?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    No. Immigration, Refugees and Citizenship Canada (IRCC) explicitly states that applicants should NOT buy tickets before a decision is made on their application.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">What document should I upload for &quot;Purpose of Travel&quot; on the IRCC portal?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    You can upload your FlyDummyTicket flight itinerary along with your day-to-day travel plan and hotel accommodation voucher under the Purpose of Travel client application slot.
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
