import SharedBookingCard from "../../src/components/common/SharedBookingCard";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Plane, FileCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Dummy Flight Ticket with Live Airline PNR | FlyDummyTicket",
  description:
    "Get a verified dummy flight ticket checkable on official airline websites. Ideal for visa appointments, travel proof, and airline check-in clearance starting at ₹299.",
  alternates: {
    canonical: "https://flydummyticket.com/dummy-flight-ticket",
  },
  openGraph: {
    title: "Dummy Flight Ticket with Live Airline PNR | FlyDummyTicket",
    description:
      "Get a verified dummy flight ticket checkable on official airline websites. Ideal for visa appointments, travel proof, and airline check-in clearance starting at ₹299.",
    url: "https://flydummyticket.com/dummy-flight-ticket",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://flydummyticket.com/dummy-flight-ticket#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is a dummy flight ticket different from a fake ticket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A fake ticket is an edited PDF created in graphic software that has no active booking behind it. When looked up on an airline website, it fails. A dummy flight ticket from FlyDummyTicket is booked in real airline GDS systems with an active 6-character PNR checkable online.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I use a dummy flight ticket for airport check-in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, if you need proof of onward or return travel to satisfy airline check-in agents before boarding a one-way flight, our Cancellation Return Ticket service is designed for this exact purpose.",
      },
    },
  ],
};

export default function DummyFlightTicketLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SharedBookingCard
        serviceType="flight"
        serviceTitle="Dummy Flight Ticket with Live PNR"
        price="₹299"
        badge="Active 6-Character Airline PNR"
        description="Authentic airline flight reservation checkable on Emirates, Qatar Airways, Lufthansa, Singapore Airlines, and Air India portals. Instant PDF delivery in 10-30 mins."
        features={[
          "Live 6-digit PNR verifiable under airline 'Manage Booking'",
          "Standard IATA format with barcodes, flight numbers & terminals",
          "Accepted worldwide for Schengen, US, UK, Canada & Gulf visas",
          "Includes 100% free date modification guarantee",
          "Sent straight to WhatsApp & Email in high-resolution PDF format",
        ]}
      />

      <section className="bg-white py-14 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Authentic GDS Flight Reservations vs. Unverifiable Tickets
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Visa officers handle dozens of applications every single day. Using automated verification terminals or direct airline portal access, visa processing staff can quickly detect when an itinerary is fabricated. Submitting a fake ticket with an invalid PNR is considered fraud and can lead to an automatic visa rejection and a multi-year entry ban.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                At <strong>FlyDummyTicket</strong>, every reservation is routed through official airline Global Distribution Systems (GDS). Your ticket holds a legitimate seat on scheduled commercial flights with an active 6-character PNR that will verify seamlessly under the airline&apos;s official booking management system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-[#E6582A]">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">How to Verify Your Ticket</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Navigate to the operating airline website.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Click on &quot;Manage Booking&quot; or &quot;My Trips&quot;.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Input your 6-character PNR and passenger surname.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Review your live flight reservation details.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Plane size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Common Use Cases</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Tourist, business, and family visit visa submissions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Proof of return when departing on one-way airline tickets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Ok-To-Board (OTB) clearance for UAE and Gulf travels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Passport renewal and emergency travel claim documentation.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-50/60 border border-orange-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Explore Related Services</h3>
              <div className="flex flex-wrap gap-3 text-xs font-semibold">
                <Link href="/services/flight-hotel-package" className="text-[#E6582A] hover:underline">
                  Flight + Hotel Combo (₹499) →
                </Link>
                <Link href="/services/return-ticket" className="text-[#E6582A] hover:underline">
                  Cancellation Return Ticket (₹1,499) →
                </Link>
                <Link href="/pricing" className="text-[#E6582A] hover:underline">
                  View All Pricing & Packages →
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">How is a dummy flight ticket different from a fake ticket?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    A fake ticket is an edited PDF created in graphic software that has no active booking behind it. When looked up on an airline website, it fails. A dummy flight ticket from FlyDummyTicket is booked in real airline GDS systems with an active 6-character PNR checkable online.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <h4 className="font-bold text-sm text-slate-900">Can I use a dummy flight ticket for airport check-in?</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Yes, if you need proof of onward or return travel to satisfy airline check-in agents before boarding a one-way flight, our Cancellation Return Ticket service is designed for this exact purpose.
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
