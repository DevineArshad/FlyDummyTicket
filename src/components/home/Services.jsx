import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BedDouble,
  Building2,
  Check,
  CheckCircle2,
  ExternalLink,
  Eye,
  FileCheck2,
  FileText,
  Headphones,
  HeartHandshake,
  MessageCircle,
  Plane,
  PlaneTakeoff,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import flightImg from "../../assets/images/service_flight.jpg";
import hotelImg from "../../assets/images/service_hotel.jpg";
import comboImg from "../../assets/images/service_combo.jpg";
import returnImg from "../../assets/images/service_return.jpg";

const packages = [
  {
    id: "flight",
    name: "Dummy Flight Ticket",
    category: "visa",
    description: "Embassy-approved verifiable flight itinerary with active airline PNR hold.",
    price: "350",
    unit: "/ person",
    href: "/services/flight-reservation",
    image: flightImg,
    icon: Plane,
    iconColor: "text-[#1D68E2]",
    checkBg: "bg-[#1D68E2]",
    badge: "Most Popular",
    buttonText: "Get Flight Ticket",
    buttonClass:
      "bg-[#EAF2FE] text-[#1D68E2] hover:bg-[#DBEAFE] border border-blue-100 hover:border-blue-200",
    features: [
      "Verifiable live airline PNR hold",
      "IATA standard PDF format with barcode",
      "Accepted at Schengen, US, UK, Canada & UAE embassies",
      "Delivered to WhatsApp & Email in 10 mins",
      "100% Free date change guarantee",
    ],
  },
  {
    id: "hotel",
    name: "Dummy Hotel Booking",
    category: "visa",
    description: "Confirmed hotel voucher for visa applications and embassy accommodation proof.",
    price: "250",
    unit: "/ person",
    href: "/services/hotel-booking",
    image: hotelImg,
    icon: BedDouble,
    iconColor: "text-[#10B981]",
    checkBg: "bg-[#10B981]",
    buttonText: "Get Hotel Voucher",
    buttonClass:
      "bg-[#EAF8F0] text-[#0D9488] hover:bg-[#D1FAE5] border border-emerald-100 hover:border-emerald-200",
    features: [
      "Official hotel booking voucher format",
      "Includes hotel address, contact & confirmation codes",
      "Synchronized check-in & check-out dates",
      "Accepted for all global visa applications",
      "Delivered straight to WhatsApp in 10 mins",
    ],
  },
  {
    id: "combo",
    name: "Flight + Hotel Combo",
    category: "visa",
    featured: true,
    description: "Complete matching travel itinerary in one package — ideal for all visa types.",
    price: "500",
    unit: "/ bundle",
    href: "/services/flight-hotel-package",
    image: comboImg,
    checkBg: "bg-[#1D68E2]",
    badge: "★ BEST VALUE COMBO",
    buttonText: "Get Complete Package",
    buttonClass:
      "bg-[#1D68E2] text-white hover:bg-[#1556BE] shadow-[0_4px_14px_rgba(29,104,226,0.3)] hover:shadow-[0_6px_20px_rgba(29,104,226,0.4)]",
    features: [
      "Flight reservation with sample PNR",
      "Confirmed hotel booking voucher",
      "Perfect matching travel dates & cities",
      "Both documents in high-resolution PDF",
      "Save ₹100 compared to individual booking",
      "Priority WhatsApp dispatch support",
    ],
  },
  {
    id: "onward",
    name: "Proof of Return (Immigration)",
    category: "immigration",
    description: "Return ticket for international airport check-in counters & border clearance.",
    price: "1000",
    unit: "/ person",
    href: "/services/return-ticket",
    image: returnImg,
    icon: RotateCcw,
    iconColor: "text-[#8B5CF6]",
    checkBg: "bg-[#8B5CF6]",
    buttonText: "Get Return Ticket",
    buttonClass:
      "bg-[#F3EBFC] text-[#7C3AED] hover:bg-[#E9DCFA] border border-purple-100 hover:border-purple-200",
    features: [
      "Accepted at airline check-in & immigration",
      "Real-time verifiable onward reservation",
      "Prevents boarding denial on one-way flights",
      "For Thailand, Bali, UK, UAE & worldwide travel",
      "Immediate 10-minute emergency delivery",
    ],
  },
  {
    id: "cancellation-return",
    name: "Cancellation Return Ticket",
    category: "immigration",
    description: "Authentic cancellable airline reservation for rigorous border control checks.",
    price: "1500",
    unit: "/ ticket",
    href: `https://wa.me/919560099481?text=${encodeURIComponent(
      "Hi FlyDummyTicket Team, I need a Cancellation Return Ticket (₹1500) for airport immigration."
    )}`,
    isExternal: true,
    image: returnImg,
    icon: ShieldCheck,
    iconColor: "text-amber-600",
    checkBg: "bg-amber-600",
    buttonText: "Book on WhatsApp (₹1500)",
    buttonClass:
      "bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200",
    features: [
      "Genuine cancellable airline booking hold",
      "Checkable directly on airline website portal",
      "Automated cancellation handled with zero penalty",
      "Recommended for strict border jurisdictions",
      "24/7 airport emergency priority queue",
    ],
  },
  {
    id: "insurance",
    name: "Travel Medical Insurance",
    category: "visa",
    description: "Schengen & embassy approved travel insurance with zero deductible coverage.",
    price: "400",
    unit: "/ person",
    href: `https://wa.me/919560099481?text=${encodeURIComponent(
      "Hi FlyDummyTicket Team, I want to book Travel Insurance (₹400 / Schengen ₹700) for my visa."
    )}`,
    isExternal: true,
    image: hotelImg,
    icon: HeartHandshake,
    iconColor: "text-rose-600",
    checkBg: "bg-rose-600",
    buttonText: "Get Insurance on WhatsApp",
    buttonClass:
      "bg-rose-50 text-rose-800 hover:bg-rose-100 border border-rose-200",
    features: [
      "Meets €30,000 / $50,000 embassy requirements",
      "Comprehensive Schengen coverage available at ₹700",
      "COVID-19 & emergency hospitalization covered",
      "Accepted at all VFS, BLS & Consular centers",
      "Delivered instantly as verifiable PDF policy",
    ],
  },
  {
    id: "otb",
    name: "Ok To Board (OTB) Clearance",
    category: "immigration",
    description: "Mandatory airline verification clearance for flights to Dubai, UAE & Gulf nations.",
    price: "250",
    unit: "/ person",
    href: `https://wa.me/919560099481?text=${encodeURIComponent(
      "Hi FlyDummyTicket Team, I need Ok To Board (OTB) clearance (₹250) for my flight."
    )}`,
    isExternal: true,
    image: flightImg,
    icon: CheckCircle2,
    iconColor: "text-[#1D68E2]",
    checkBg: "bg-[#1D68E2]",
    buttonText: "Get OTB on WhatsApp (₹250)",
    buttonClass:
      "bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200",
    features: [
      "Mandatory for UAE/Gulf visit & employment visas",
      "Updated directly in airline reservation system",
      "Air India Express, IndiGo, SpiceJet, flydubai",
      "Fast processing within 2–4 hours",
      "Confirmation update sent via WhatsApp",
    ],
  },
];

const trustHighlights = [
  {
    icon: ShieldCheck,
    title: "100% Embassy Accepted",
    desc: "Meets official IATA & consular standards",
  },
  {
    icon: Headphones,
    title: "24/7 WhatsApp Support",
    desc: "Direct help on +91 95600 99481",
  },
  {
    icon: FileText,
    title: "Rapid 10-Minute Delivery",
    desc: "Instant high-resolution PDF generation",
  },
];

function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPackages =
    activeCategory === "all"
      ? packages
      : packages.filter((pkg) => pkg.category === activeCategory);

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-[#F4F8FD] via-white to-[#F0F5FD] py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div id="packages" className="absolute -top-10" />
      {/* Background doodles */}
      <div className="pointer-events-none absolute top-10 right-10 hidden select-none lg:block opacity-60">
        <span className="font-handwriting text-2xl font-bold tracking-wide text-slate-500/80 rotate-[5deg] block">
          Travel with Confidence
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-4 py-1.5 shadow-[0_2px_12px_rgba(37,99,235,0.06)] backdrop-blur-sm">
            <Plane className="h-3.5 w-3.5 text-[#1D68E2] -rotate-45" />
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1D68E2]">
              TRANSPARENT PRICING &bull; ALL-INCLUSIVE
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[#0F172A] sm:text-4xl lg:text-[44px] leading-[1.12]">
            Our Complete Service & <span className="text-[#1D68E2]">Pricing Catalog</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto">
            Choose from verified dummy itineraries, hotel vouchers, immigration proof of return, and travel insurance designed for 100% embassy compliance.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-7 inline-flex rounded-2xl bg-slate-100 p-1 text-xs sm:text-sm font-extrabold shadow-inner">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-xl px-4 sm:px-6 py-2 transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#1D68E2] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Services ({packages.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("visa")}
              className={`rounded-xl px-4 sm:px-6 py-2 transition-all cursor-pointer ${
                activeCategory === "visa"
                  ? "bg-[#1D68E2] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Visa & Embassy ({packages.filter((p) => p.category === "visa").length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("immigration")}
              className={`rounded-xl px-4 sm:px-6 py-2 transition-all cursor-pointer ${
                activeCategory === "immigration"
                  ? "bg-[#1D68E2] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Immigration & Airport ({packages.filter((p) => p.category === "immigration").length})
            </button>
          </div>

          {/* Sample PDF Notice Strip */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-50 border border-blue-200 px-4 py-2 text-xs font-semibold text-blue-900">
            <Eye size={14} className="text-[#1D68E2]" />
            <span>Want to see what an official ticket looks like?</span>
            <a
              href="/sample-eticket.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-[#1D68E2] underline hover:text-blue-800 flex items-center gap-1"
            >
              Inspect Air India Sample PDF (PNR: 72DB6I)
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            SERVICE CARDS GRID (8 Services)
        ───────────────────────────────────────────────────────── */}
        <div className="mt-12 lg:mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
          {filteredPackages.map((pkg) => {
            const Icon = pkg.icon;
            const isFeatured = pkg.featured;

            if (isFeatured) {
              return (
                <article
                  key={pkg.id}
                  className="group relative flex flex-col justify-between rounded-3xl border-2 border-[#1D68E2] bg-white shadow-[0_12px_36px_rgba(29,104,226,0.18)] hover:shadow-[0_20px_48px_rgba(29,104,226,0.25)] transition-all duration-300 overflow-visible"
                >
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1D68E2] px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md">
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="relative min-h-[170px] rounded-t-[22px] overflow-hidden bg-[#0A2558] p-5 pt-8 flex flex-col justify-between">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081F48] via-[#081F48]/85 to-[#0A2558]/70" />

                    <div className="relative z-10 flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xs">
                        <Plane size={16} />
                      </div>
                      <span className="text-white/80 font-bold text-sm">+</span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xs">
                        <BedDouble size={16} />
                      </div>
                    </div>

                    <div className="relative z-10 mt-2">
                      <h3 className="text-xl font-extrabold text-white tracking-tight">
                        {pkg.name}
                      </h3>
                      <p className="mt-1 text-xs text-blue-100/85 leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-5 flex-1 flex flex-col justify-between bg-white rounded-b-[22px]">
                    <div>
                      <ul className="space-y-2.5">
                        {pkg.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs font-semibold text-slate-800 leading-snug"
                          >
                            <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#1D68E2] text-white">
                              <Check size={9} strokeWidth={3.5} />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <div className="pt-3 border-t border-slate-100 flex items-baseline gap-1.5">
                        <span className="text-3xl font-black text-[#1D68E2]">
                          ₹{pkg.price}
                        </span>
                        <span className="text-xs font-medium text-slate-400">
                          {pkg.unit}
                        </span>
                        <span className="line-through text-xs text-slate-400 ml-auto">₹650</span>
                      </div>

                      <Link
                        to={pkg.href}
                        className={`mt-4 w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${pkg.buttonClass}`}
                      >
                        <span>{pkg.buttonText}</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            }

            // Standard Service Card
            return (
              <article
                key={pkg.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.1)] transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />

                  <div className="absolute -bottom-4 left-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md border border-slate-100">
                    <Icon size={18} className={pkg.iconColor} />
                  </div>
                </div>

                <div className="p-6 pt-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug">
                      {pkg.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed min-h-[34px]">
                      {pkg.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs font-medium text-slate-700 leading-snug"
                        >
                          <span
                            className={`mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full text-white ${pkg.checkBg}`}
                          >
                            <Check size={9} strokeWidth={3.5} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <div className="pt-3 border-t border-slate-100 flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900">
                        ₹{pkg.price}
                      </span>
                      <span className="text-xs font-medium text-slate-400">
                        {pkg.unit}
                      </span>
                    </div>

                    {pkg.isExternal ? (
                      <a
                        href={pkg.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-4 w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${pkg.buttonClass}`}
                      >
                        <MessageCircle size={15} />
                        <span>{pkg.buttonText}</span>
                      </a>
                    ) : (
                      <Link
                        to={pkg.href}
                        className={`mt-4 w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${pkg.buttonClass}`}
                      >
                        <span>{pkg.buttonText}</span>
                        <ArrowRight size={15} />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────────────────
            BOTTOM TRUST / FEATURE HIGHLIGHTS BAR
        ───────────────────────────────────────────────────────── */}
        <div className="mt-14 pt-4">
          <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center sm:text-left justify-items-center sm:justify-items-stretch">
            {trustHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 justify-center sm:justify-start"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100/80 text-slate-800">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-normal mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;