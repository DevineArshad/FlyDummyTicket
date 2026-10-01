import HotelBooking from "../../../src/views/HotelBooking";
import Link from "next/link";
import { CheckCircle2, Building2, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Hotel Booking Voucher for Visa Application | Proof of Accommodation | FlyDummyTicket",
  description:
    "Confirmed hotel booking vouchers for Schengen, GCC, UK, and worldwide visa applications. Complete hotel address, contact details, and confirmation numbers.",
  alternates: {
    canonical: "https://flydummyticket.com/services/hotel-booking",
  },
  openGraph: {
    title: "Hotel Booking Voucher for Visa Application | Proof of Accommodation | FlyDummyTicket",
    description:
      "Confirmed hotel booking vouchers for Schengen, GCC, UK, and worldwide visa applications. Complete hotel address, contact details, and confirmation numbers.",
    url: "https://flydummyticket.com/services/hotel-booking",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://flydummyticket.com/services/hotel-booking#service",
  "name": "Hotel Accommodation Proof for Visa Applications",
  "description":
    "Confirmed hotel booking vouchers for Schengen, GCC, UK, and worldwide visa applications. Complete hotel address, contact details, and confirmation numbers.",
  "url": "https://flydummyticket.com/services/hotel-booking",
  "provider": {
    "@type": "TravelAgency",
    "@id": "https://flydummyticket.com/#organization",
    "name": "FlyDummyTicket",
    "url": "https://flydummyticket.com/",
  },
};

export default function HotelBookingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HotelBooking />

      <section className="bg-white py-14 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Proof of Accommodation for Visa Applications
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Under Article 14(1)(b) of the Schengen Visa Code and standard consular regulations worldwide, applicants must provide verifiable evidence of accommodation covering the entire duration of their intended stay. Pre-paying non-refundable hotel rooms before obtaining visa clearance poses a major financial risk.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                FlyDummyTicket issues confirmed hotel booking vouchers that display registered hotel names, complete street addresses, telephone contact numbers, and unique reservation confirmation references. Check-in and check-out dates are precisely synchronized with your flight itinerary to ensure seamless consular compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E6582A]">
                    <Building2 size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">What Vouchers Include</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Real hotel name, full physical address, and contact number.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Lead guest passport name and guest count.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Unique booking reservation reference number.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Synchronized check-in and check-out dates matching flights.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Embassy Acceptance</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Accepted by all 29 Schengen member states.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Meets UKVI, US B1/B2, Canada, and Australia requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Valid for GCC tourist visas (UAE, Saudi Arabia, Qatar).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Free date changes if appointment dates shift.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50/60 border border-orange-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Combine with Flights & Save</h3>
              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <Link href="/services/flight-hotel-package" className="text-[#E6582A] hover:underline">
                  Flight + Hotel Combo Package (₹499) →
                </Link>
                <Link href="/services/flight-reservation" className="text-[#E6582A] hover:underline">
                  Dummy Flight Ticket (₹299) →
                </Link>
                <Link href="/pricing" className="text-[#E6582A] hover:underline">
                  Compare All Pricing Plans →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
