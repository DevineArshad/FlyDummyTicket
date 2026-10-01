import ComboPackage from "../../../src/views/ComboPackage";
import Link from "next/link";
import { CheckCircle2, Building2, Plane } from "lucide-react";

export const metadata = {
  title: "Flight and Hotel Reservation Combo for Visa Applications | FlyDummyTicket",
  description:
    "Combined flight itinerary and hotel accommodation voucher package for visa applications. Synchronized travel dates delivered in print-ready PDF format.",
  alternates: {
    canonical: "https://flydummyticket.com/services/flight-hotel-package",
  },
  openGraph: {
    title: "Flight and Hotel Reservation Combo for Visa Applications | FlyDummyTicket",
    description:
      "Combined flight itinerary and hotel accommodation voucher package for visa applications. Synchronized travel dates delivered in print-ready PDF format.",
    url: "https://flydummyticket.com/services/flight-hotel-package",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://flydummyticket.com/services/flight-hotel-package#service",
  "name": "Flight and Hotel Documentation Package",
  "description":
    "Combined flight itinerary and hotel accommodation voucher package for visa applications. Synchronized travel dates delivered in print-ready PDF format.",
  "url": "https://flydummyticket.com/services/flight-hotel-package",
  "provider": {
    "@type": "TravelAgency",
    "@id": "https://flydummyticket.com/#organization",
    "name": "FlyDummyTicket",
    "url": "https://flydummyticket.com/",
  },
};

export default function FlightHotelPackagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ComboPackage />

      <section className="bg-white py-14 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Synchronized Flight & Hotel Documentation Bundle
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Visa officers closely cross-reference arrival flight times with accommodation check-in timestamps. Any discrepancy between your inbound flight and hotel voucher dates can trigger embassy verification delays or file queries.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                The FlyDummyTicket Flight + Hotel Combo Bundle (₹499 / $6) guarantees 100% synchronization: your hotel check-in date matches your scheduled flight arrival, and your check-out date aligns with your outbound flight departure. Both documents feature active verification references and arrive in print-ready PDF format within 10 to 30 minutes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E6582A]">
                    <Plane size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Flight Reservation</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Verifiable airline PNR active on official airline websites.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Standard IATA e-ticket format matching consular rules.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Confirmed flight numbers, layovers, and airport terminals.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Building2 size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Hotel Voucher</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Registered hotel name, full address, and contact numbers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dates synchronized with your arrival and departure flights.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Satisfies Schengen Article 14 proof of lodging requirements.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50/60 border border-orange-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Need Travel Insurance Too?</h3>
              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <Link href="/services/travel-insurance" className="text-[#E6582A] hover:underline">
                  Travel Medical Insurance (₹699) →
                </Link>
                <Link href="/how-it-works" className="text-[#E6582A] hover:underline">
                  How Our 3-Step Verification Works →
                </Link>
                <Link href="/faq" className="text-[#E6582A] hover:underline">
                  Frequently Asked Questions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
