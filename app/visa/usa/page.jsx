import SharedBookingCard from "../../../src/components/common/SharedBookingCard";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Plane } from "lucide-react";

export const metadata = {
  title: "Flight Reservation for US Visa (B1/B2) | FlyDummyTicket",
  description:
    "Flight itinerary for US B1/B2 tourist and business visa interviews. Aligned with US Department of State advice not to make non-refundable travel arrangements.",
  alternates: {
    canonical: "https://flydummyticket.com/visa/usa",
  },
  openGraph: {
    title: "Flight Reservation for US Visa (B1/B2) | FlyDummyTicket",
    description:
      "Flight itinerary for US B1/B2 tourist and business visa interviews. Aligned with US Department of State advice not to make non-refundable travel arrangements.",
    url: "https://flydummyticket.com/visa/usa",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://flydummyticket.com/visa/usa#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does the US Embassy require a flight ticket for a B1/B2 interview?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "No. The US Department of State explicitly cautions visa applicants against purchasing non-refundable airfare until the visa is granted and stamped in their passport.",
      },
    },
    {
      "@type": "Question",
      "name": "What should I enter for travel plans on the DS-160 form?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "On the DS-160 form, you can declare your intended arrival date, planned length of stay, and entry city. Bringing a verifiable flight itinerary to your consular interview provides physical backing for these stated dates.",
      },
    },
  ],
};

export default function USAVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SharedBookingCard
        serviceType="flight"
        serviceTitle="Flight Reservation for US Visa (B1/B2)"
        price="₹299"
        badge="US Consular Compliant • DS-160 Itinerary"
        description="Official airline flight itinerary checkable on airline portals. Aligned with US State Department guidelines advising against pre-purchasing tickets."
        features={[
          "Live 6-digit PNR checkable directly on airline websites",
          "Accepted by US Consulates & Embassies worldwide",
          "Includes standard IATA barcodes, flight numbers & US port of entry",
          "100% Free date change guarantee if appointment is postponed",
          "Delivered via WhatsApp & Email in print-ready PDF within 10-30 mins",
        ]}
      />

      <section className="bg-white py-14 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                US Department of State Visa Travel Advice
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                When preparing for a US B1/B2 tourist or business visa interview, one of the most critical warnings from the **US Department of State (Bureau of Consular Affairs)** is:
              </p>
              <blockquote className="my-4 border-l-4 border-[#E6582A] pl-4 py-2 italic text-slate-700 bg-orange-50/50 rounded-r-xl text-sm">
                &quot;Do not make non-refundable travel arrangements until you have received your visa. A consular officer may request an itinerary of your planned journey during the visa interview.&quot;
              </blockquote>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Purchasing a flight to New York (JFK), San Francisco (SFO), Los Angeles (LAX), or Chicago (ORD) before your interview is unnecessary and financially reckless. Having a verifiable flight itinerary demonstrates preparedness and a clear intent to depart the United States within your authorized duration of status.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E6582A]">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">DS-160 Synchronization</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Arrival date matches the intended travel date on your DS-160.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Return flight confirms intended stay duration (e.g. 2-3 weeks).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Checkable PNR verifiable on airline systems during review.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Plane size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Consular Interview Tips</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Carry your print-ready FlyDummyTicket PDF in your interview folder.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>If the officer asks for your travel plan, present the itinerary.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Free date changes if wait times cause your interview to shift.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50/60 border border-orange-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Recommended Packages for US Visa Applicants</h3>
              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <Link href="/services/flight-reservation" className="text-[#E6582A] hover:underline">
                  US Dummy Flight Ticket (₹299) →
                </Link>
                <Link href="/services/hotel-booking" className="text-[#E6582A] hover:underline">
                  US Hotel Voucher (₹249) →
                </Link>
                <Link href="/pricing" className="text-[#E6582A] hover:underline">
                  View All Documentation Pricing →
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">Does the US Embassy require a flight ticket for a B1/B2 interview?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    No. The US Department of State explicitly cautions visa applicants against purchasing non-refundable airfare until the visa is granted and stamped in their passport.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">What should I enter for travel plans on the DS-160 form?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    On the DS-160 form, you can declare your intended arrival date, planned length of stay, and entry city. Bringing a verifiable flight itinerary to your consular interview provides physical backing for these stated dates.
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
