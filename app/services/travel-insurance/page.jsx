import TravelInsurance from "../../../src/views/TravelInsurance";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, HeartPulse } from "lucide-react";

export const metadata = {
  title: "Travel Medical Insurance for Schengen & Global Visas | FlyDummyTicket",
  description:
    "Travel medical insurance certificates meeting Schengen Visa Article 15 requirements (€30,000 / $50,000 coverage). Emergency medical, hospitalization, and repatriation coverage.",
  alternates: {
    canonical: "https://flydummyticket.com/services/travel-insurance",
  },
  openGraph: {
    title: "Travel Medical Insurance for Schengen & Global Visas | FlyDummyTicket",
    description:
      "Travel medical insurance certificates meeting Schengen Visa Article 15 requirements (€30,000 / $50,000 coverage). Emergency medical, hospitalization, and repatriation coverage.",
    url: "https://flydummyticket.com/services/travel-insurance",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://flydummyticket.com/services/travel-insurance#service",
  "name": "Travel Medical Insurance for Visa Compliance",
  "description":
    "Travel medical insurance certificates meeting Schengen Visa Article 15 requirements (€30,000 / $50,000 coverage). Emergency medical, hospitalization, and repatriation coverage.",
  "url": "https://flydummyticket.com/services/travel-insurance",
  "provider": {
    "@type": "TravelAgency",
    "@id": "https://flydummyticket.com/#organization",
    "name": "FlyDummyTicket",
    "url": "https://flydummyticket.com/",
  },
};

export default function TravelInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <TravelInsurance />

      <section className="bg-white py-14 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Mandatory Schengen Visa Article 15 Medical Insurance
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Under Regulation (EC) No 810/2009 (Visa Code Article 15), every applicant applying for a Schengen visa must demonstrate adequate and valid travel medical insurance. Consulates strictly enforce that the policy must provide a minimum cover of €30,000 (or $50,000 USD) and cover emergency medical expenses, emergency hospital treatment, and repatriation for medical reasons or death.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                FlyDummyTicket provides official travel medical insurance certificates meeting 100% of consular criteria. Each certificate includes an authentic policy number, coverage tables, zero deductible clauses, and a verification QR code acceptable across all 29 Schengen embassies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E6582A]">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Mandatory Coverage</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Minimum €30,000 / $50,000 emergency medical cover.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Emergency medical evacuation and repatriation of mortal remains.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Zero deductible / zero excess policy wording.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Valid across entire Schengen Area and worldwide destinations.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <HeartPulse size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Delivery & Compliance</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Official certificate with unique policy ID and QR code.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Accepted by VFS Global, TLScontact, and BLS International.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dispatched in PDF format to WhatsApp & Email within 15–30 mins.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Free date rescheduling if visa appointment moves.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50/60 border border-orange-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Complete Your Visa Application Packet</h3>
              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <Link href="/services/flight-reservation" className="text-[#E6582A] hover:underline">
                  Dummy Flight Ticket (₹299) →
                </Link>
                <Link href="/services/hotel-booking" className="text-[#E6582A] hover:underline">
                  Dummy Hotel Booking (₹249) →
                </Link>
                <Link href="/pricing" className="text-[#E6582A] hover:underline">
                  View All Packages & Pricing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
