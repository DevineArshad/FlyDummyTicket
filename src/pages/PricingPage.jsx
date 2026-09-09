import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BedDouble,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  HelpCircle,
  MessageCircle,
  Minus,
  Phone,
  Plane,
  RotateCcw,
  Shield,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const allServices = [
  {
    id: "flight",
    title: "Dummy Flight Ticket",
    priceInr: "₹299",
    priceUsd: "$4 USD",
    subtext: "per passenger",
    href: "/services/flight-reservation",
    icon: Plane,
    featured: false,
    badge: null,
    waText: "Hi FlyDummyTicket Team, I want to book a Dummy Flight Ticket for Visa (₹299 / $4).",
    points: [
      "Official IATA airline reservation with live PNR",
      "Verifiable directly on airline website (Manage Booking)",
      "100% Free date change & reschedule guarantee",
      "Accepted by all global embassies and consulates",
      "Standard IATA barcode and flight numbers",
      "Delivered in 10 to 30 minutes via WhatsApp & Email",
    ],
  },
  {
    id: "hotel",
    title: "Dummy Hotel Booking",
    priceInr: "₹249",
    priceUsd: "$3 USD",
    subtext: "per voucher",
    href: "/services/hotel-booking",
    icon: BedDouble,
    featured: false,
    badge: null,
    waText: "Hi FlyDummyTicket Team, I want to book a Dummy Hotel Booking Voucher (₹249 / $3).",
    points: [
      "Confirmed hotel reservation voucher",
      "Includes real hotel address, phone & confirmation number",
      "Synchronized check-in and check-out dates",
      "Meets Schengen Visa Code Article 14 proof of lodging",
      "Free date modifications if appointments shift",
      "Delivered in 10 to 30 minutes via WhatsApp & Email",
    ],
  },
  {
    id: "combo",
    title: "Flight + Hotel Combo",
    priceInr: "₹499",
    priceUsd: "$6 USD",
    subtext: "complete bundle",
    href: "/services/flight-hotel-package",
    icon: Building2,
    featured: true,
    badge: "Most Popular • Best Value",
    waText: "Hi FlyDummyTicket Team, I want to book a Flight + Hotel Combo Package (₹499 / $6).",
    points: [
      "Verifiable airline ticket + confirmed hotel voucher",
      "Checkable on airline portal & hotel reservation system",
      "Synchronized departure, check-in, check-out & return",
      "Covers both travel and lodging visa requirements",
      "Save money compared to ordering separately",
      "Priority WhatsApp express generation",
    ],
  },
  {
    id: "insurance",
    title: "Travel Medical Insurance",
    priceInr: "₹699",
    priceUsd: "$9 USD",
    subtext: "embassy compliant",
    href: "/services/travel-insurance",
    icon: Shield,
    featured: false,
    badge: "Schengen Article 15",
    waText: "Hi FlyDummyTicket Team, I want to book Travel Medical Insurance (₹699 / $9).",
    points: [
      "Minimum €30,000 / $50,000 emergency medical cover",
      "Meets mandatory Schengen Visa Article 15 rules",
      "Includes emergency evacuation & repatriation benefits",
      "Accepted across all 29 Schengen embassies worldwide",
      "Official certificate with unique policy ID & QR code",
      "Express 15-minute dispatch straight to WhatsApp",
    ],
  },
  {
    id: "return",
    title: "Cancellation Return Ticket",
    priceInr: "₹1,499",
    priceUsd: "$19 USD",
    subtext: "per ticket",
    href: "/services/return-ticket",
    icon: RotateCcw,
    featured: false,
    badge: "Airport Clearance",
    waText: "Hi FlyDummyTicket Team, I want to book a Cancellation Return Ticket (₹1,499 / $19).",
    points: [
      "Proof of onward/return travel for immigration desks",
      "Verifiable live on operating airline check-in systems",
      "Prevents denied boarding when flying on 1-way tickets",
      "Accepted for Dubai, Thailand, Singapore, Bali & Europe",
      "Built-in automatic cancellation protection",
      "24/7 priority boarding assistance hotline",
    ],
  },
];

const comparisonRows = [
  { feature: "Live Verifiable Airline PNR", flight: true, hotel: false, combo: true, insurance: false, returnTicket: true },
  { feature: "Checkable on Airline Website", flight: true, hotel: false, combo: true, insurance: false, returnTicket: true },
  { feature: "Confirmed Hotel Voucher", flight: false, hotel: true, combo: true, insurance: false, returnTicket: false },
  { feature: "€30,000 Medical Emergency Cover", flight: false, hotel: false, combo: false, insurance: true, returnTicket: false },
  { feature: "Proof of Return for Immigration", flight: true, hotel: false, combo: true, insurance: false, returnTicket: true },
  { feature: "Built-in Cancellation Protection", flight: false, hotel: false, combo: false, insurance: false, returnTicket: true },
  { feature: "100% Free Date Changes", flight: true, hotel: true, combo: true, insurance: true, returnTicket: true },
  { feature: "Delivery Speed (10–30 Mins)", flight: true, hotel: true, combo: true, insurance: true, returnTicket: true },
  { feature: "Embassy Compliant PDF with Barcode", flight: true, hotel: true, combo: true, insurance: true, returnTicket: true },
];

const pricingFaqs = [
  {
    q: "Are there any hidden fees or extra charges?",
    a: "None at all. All our prices (₹299, ₹249, ₹499, ₹699, ₹1,499) are 100% all-inclusive with zero tax surprises or booking convenience fees.",
  },
  {
    q: "What happens if my visa interview date changes?",
    a: "We provide 100% free date changes within 30 days of purchase. Simply visit our Free Date Change page or message us on WhatsApp, and we will update your itinerary without any fee.",
  },
  {
    q: "How fast do I receive my ticket or voucher?",
    a: "Our automated booking system and ticketing desk deliver your verified PDF straight to WhatsApp and Email within 10 to 30 minutes after confirmation.",
  },
  {
    q: "How can I verify the dummy ticket myself?",
    a: "Every dummy flight ticket comes with an authentic 6-character PNR code. Go to the operating airline's official website (e.g. Emirates, Air France, Lufthansa, or Air India), click 'Manage Booking', and enter your PNR and last name to see your live itinerary.",
  },
];

function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-gradient-to-b from-orange-50/40 via-white to-slate-50 py-10 sm:py-14 lg:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#E6582A]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#E6582A]">Pricing Plans</span>
        </nav>

        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#E6582A] shadow-xs mb-3">
            <Zap size={13} className="text-[#E6582A]" />
            <span>TRANSPARENT & AFFORDABLE RATES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-[1.15]">
            Simple, Transparent <span className="text-[#E6582A]">Pricing Plans</span>
          </h1>

          <div className="mt-3.5 mx-auto h-1 w-16 bg-[#E6582A] rounded-full" />

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
            No hidden charges, zero subscription fees. Select the embassy-verifiable travel documentation you need.
          </p>
        </div>

        {/* 5 PRICING CARDS (3 on top row, 2 centered on second row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-8">
          {allServices.slice(0, 3).map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl bg-white p-5 sm:p-7 transition-all duration-200 ${
                  plan.featured
                    ? "border-2 border-[#E6582A] shadow-xl shadow-[#E6582A]/10 md:-translate-y-2"
                    : "border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="rounded-full bg-[#E6582A] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-xs">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-center gap-2 pb-3 border-b border-slate-100">
                    <Icon size={16} className={plan.featured ? "text-[#E6582A]" : "text-slate-600"} />
                    <h3 className="text-sm font-black tracking-wider uppercase text-slate-800">
                      {plan.title}
                    </h3>
                  </div>

                  <div className="py-5 text-center">
                    <span className="text-4xl font-black text-slate-900">{plan.priceInr}</span>
                    <p className="text-xs text-slate-400 font-bold mt-1">
                      {plan.priceUsd} • {plan.subtext}
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600 mb-6">
                    {plan.points.map((pt, i) => (
                      <li
                        key={pt}
                        className={`flex items-center gap-2 p-2 rounded-lg ${
                          i % 2 === 0 ? "bg-[#F7F8FA]" : "bg-transparent"
                        }`}
                      >
                        <Check size={14} className="text-emerald-600 shrink-0" />
                        <span className="leading-tight">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <a
                    href={`https://wa.me/919560099481?text=${encodeURIComponent(plan.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex min-h-[44px] h-auto py-2.5 px-3 w-full items-center justify-center gap-2 rounded-xl text-xs font-black uppercase tracking-wider transition text-center ${
                      plan.featured
                        ? "bg-[#E6582A] text-white hover:bg-[#C9441B] shadow-md shadow-[#E6582A]/30"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    <MessageCircle size={15} className="shrink-0" />
                    <span>Order Now ({plan.priceInr})</span>
                  </a>

                  <Link
                    to={plan.href}
                    className="flex h-9 w-full items-center justify-center text-xs font-bold text-slate-500 hover:text-slate-800"
                  >
                    <span>View full requirements</span>
                    <ArrowRight size={12} className="ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM 2 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {allServices.slice(3, 5).map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className="relative flex flex-col justify-between rounded-3xl bg-white p-5 sm:p-7 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="rounded-full bg-slate-900 px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-xs">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-center gap-2 pb-3 border-b border-slate-100">
                    <Icon size={16} className="text-[#E6582A]" />
                    <h3 className="text-sm font-black tracking-wider uppercase text-slate-800">
                      {plan.title}
                    </h3>
                  </div>

                  <div className="py-5 text-center">
                    <span className="text-4xl font-black text-slate-900">{plan.priceInr}</span>
                    <p className="text-xs text-slate-400 font-bold mt-1">
                      {plan.priceUsd} • {plan.subtext}
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600 mb-6">
                    {plan.points.map((pt, i) => (
                      <li
                        key={pt}
                        className={`flex items-center gap-2 p-2 rounded-lg ${
                          i % 2 === 0 ? "bg-[#F7F8FA]" : "bg-transparent"
                        }`}
                      >
                        <Check size={14} className="text-emerald-600 shrink-0" />
                        <span className="leading-tight">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <a
                    href={`https://wa.me/919560099481?text=${encodeURIComponent(plan.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] h-auto py-2.5 px-3 w-full items-center justify-center gap-2 rounded-xl text-xs font-black uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 transition text-center"
                  >
                    <MessageCircle size={15} className="shrink-0" />
                    <span>Order Now ({plan.priceInr})</span>
                  </a>

                  <Link
                    to={plan.href}
                    className="flex h-9 w-full items-center justify-center text-xs font-bold text-slate-500 hover:text-slate-800"
                  >
                    <span>View full requirements</span>
                    <ArrowRight size={12} className="ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* DETAILED COMPARISON TABLE */}
        <div className="mb-16 rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-lg font-black text-slate-900">Feature Comparison Across Services</h3>
              <p className="text-xs text-slate-500">Compare our 5 services to pick the exact documentation required by your embassy.</p>
            </div>
            <span className="sm:hidden text-[11px] font-bold text-[#E6582A] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/70 inline-flex items-center gap-1 w-max">
              👈 Swipe table horizontally 👉
            </span>
          </div>

          <div className="overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                  <th className="py-3 px-3">Service Feature</th>
                  <th className="py-3 px-2 text-center">Flight (₹299)</th>
                  <th className="py-3 px-2 text-center">Hotel (₹249)</th>
                  <th className="py-3 px-2 text-center bg-orange-50/70 text-[#E6582A] rounded-t-xl">Combo (₹499)</th>
                  <th className="py-3 px-2 text-center">Insurance (₹699)</th>
                  <th className="py-3 px-2 text-center">Return (₹1,499)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-50/60 transition">
                    <td className="py-3 px-3 font-semibold text-slate-700">{row.feature}</td>
                    <td className="py-3 px-2 text-center">
                      {row.flight ? <Check size={16} className="text-emerald-600 mx-auto" /> : <Minus size={14} className="text-slate-300 mx-auto" />}
                    </td>
                    <td className="py-3 px-2 text-center">
                      {row.hotel ? <Check size={16} className="text-emerald-600 mx-auto" /> : <Minus size={14} className="text-slate-300 mx-auto" />}
                    </td>
                    <td className="py-3 px-2 text-center bg-orange-50/40">
                      {row.combo ? <Check size={16} className="text-[#E6582A] font-bold mx-auto" /> : <Minus size={14} className="text-slate-300 mx-auto" />}
                    </td>
                    <td className="py-3 px-2 text-center">
                      {row.insurance ? <Check size={16} className="text-emerald-600 mx-auto" /> : <Minus size={14} className="text-slate-300 mx-auto" />}
                    </td>
                    <td className="py-3 px-2 text-center">
                      {row.returnTicket ? <Check size={16} className="text-emerald-600 mx-auto" /> : <Minus size={14} className="text-slate-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PRICING FAQS */}
        <div className="mb-16 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-slate-900">Frequently Asked Pricing Questions</h3>
            <p className="text-xs text-slate-500 mt-1">Clear answers to common questions about payment, delivery, and date modifications.</p>
          </div>

          <div className="space-y-3">
            {pricingFaqs.map((faq, i) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-4 transition">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{faq.q}</span>
                  <ChevronRight
                    size={16}
                    className={`text-slate-400 transition-transform ${openFaq === i ? "rotate-90 text-[#E6582A]" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* DIRECT INDIAN SUPPORT HELPLINE BANNER */}
        <div className="rounded-3xl bg-[#0F172A] p-6 sm:p-8 text-white text-center sm:text-left sm:flex sm:items-center sm:justify-between shadow-xl">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-orange-400 block mb-1">
              Need Assistance With Your Order?
            </span>
            <h3 className="text-lg sm:text-xl font-bold">Call Our India Desk: +91 95600 99481</h3>
            <p className="text-xs text-slate-300 mt-1">
              Available 24/7 for urgent visa application documentation and instant ticket dispatch.
            </p>
          </div>
          <div className="mt-5 sm:mt-0 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20have%20a%20pricing%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-3 text-xs font-bold text-white shadow-md transition"
            >
              <MessageCircle size={15} />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="tel:+919560099481"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#E6582A] hover:bg-[#C9441B] px-5 py-3 text-xs font-bold text-white shadow-md transition"
            >
              <Phone size={14} />
              <span>Call +91 95600 99481</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PricingPage;
