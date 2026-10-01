import ReturnTicket from "../../../src/views/ReturnTicket";
import Link from "next/link";
import { CheckCircle2, RotateCcw, PlaneTakeoff } from "lucide-react";

export const metadata = {
  title: "Proof of Onward Travel & Return Ticket for Immigration | FlyDummyTicket",
  description:
    "Verifiable return flight ticket for airport check-in, airline boarding clearance, and immigration inspection when traveling on one-way or tourist visas.",
  alternates: {
    canonical: "https://flydummyticket.com/services/return-ticket",
  },
  openGraph: {
    title: "Proof of Onward Travel & Return Ticket for Immigration | FlyDummyTicket",
    description:
      "Verifiable return flight ticket for airport check-in, airline boarding clearance, and immigration inspection when traveling on one-way or tourist visas.",
    url: "https://flydummyticket.com/services/return-ticket",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://flydummyticket.com/services/return-ticket#service",
  "name": "Proof of Onward Travel / Return Ticket Documentation",
  "description":
    "Verifiable return flight ticket for airport check-in, airline boarding clearance, and immigration inspection when traveling on one-way or tourist visas.",
  "url": "https://flydummyticket.com/services/return-ticket",
  "provider": {
    "@type": "TravelAgency",
    "@id": "https://flydummyticket.com/#organization",
    "name": "FlyDummyTicket",
    "url": "https://flydummyticket.com/",
  },
};

export default function ReturnTicketPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ReturnTicket />

      <section className="bg-white py-14 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Proof of Onward Travel for Airline Check-in & Immigration
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                When traveling on a one-way ticket or tourist visa to popular international hubs—including Thailand, Indonesia (Bali), Singapore, the United Kingdom, the Schengen Area, and GCC countries (UAE, Saudi Arabia)—airline check-in counters are legally mandated to verify that passengers possess confirmed return or onward travel documentation.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Under international carrier liability laws (IATA Timatic rules), airlines face severe financial penalties if they transport a passenger who is later refused entry for lacking onward travel proof. As a result, check-in agents will refuse boarding passes unless you can present an active, verifiable flight reservation exiting the destination country.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E6582A]">
                    <PlaneTakeoff size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Why You Need It</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Avoid being offloaded or denied boarding at departure airport.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Mandatory for Ok To Board (OTB) clearance to Dubai & UAE.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Live checkable PNR verified on airline check-in terminals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Ideal for digital nomads and travelers on open-ended trips.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <RotateCcw size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Cancellation Protection</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Includes built-in automatic cancellation after border clearance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Zero cancellation penalty fees or hidden charges.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Delivered in 10 to 30 minutes via WhatsApp & Email.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>24/7 urgent boarding assistance hotline available.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50/60 border border-orange-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Helpful Resources</h3>
              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <Link href="/blog/do-i-need-a-flight-ticket-before-applying-for-a-visa" className="text-[#E6582A] hover:underline">
                  Do I Need a Ticket Before Visa Approval? →
                </Link>
                <Link href="/visa-guide" className="text-[#E6582A] hover:underline">
                  Gulf & GCC Ok To Board Requirements →
                </Link>
                <Link href="/pricing" className="text-[#E6582A] hover:underline">
                  View All Documentation Pricing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
