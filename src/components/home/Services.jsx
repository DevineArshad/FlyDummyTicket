import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BedDouble,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Plane,
  RotateCcw,
  Shield,
} from "lucide-react";

const allServices = [
  {
    id: "flight",
    title: "DUMMY FLIGHT TICKET",
    priceInr: "₹299",
    priceUsd: "$4 USD",
    subtext: "per person",
    href: "/services/flight-reservation",
    icon: Plane,
    waText: "Hi FlyDummyTicket Team, I would like to order a Dummy Flight Ticket for Visa (₹299 / $4).",
    featured: false,
    points: [
      "Flight reservation with live airline PNR",
      "Verifiable directly on airline website",
      "100% Free date changes allowed",
      "Use for visa application / embassy interview",
      "IATA standard PDF with barcode",
      "Delivered in 10 to 30 minutes",
    ],
  },
  {
    id: "hotel",
    title: "DUMMY HOTEL BOOKING",
    priceInr: "₹249",
    priceUsd: "$3 USD",
    subtext: "per voucher",
    href: "/services/hotel-booking",
    icon: BedDouble,
    waText: "Hi FlyDummyTicket Team, I would like to order a Dummy Hotel Booking Voucher (₹249 / $3).",
    featured: false,
    points: [
      "Confirmed hotel booking voucher",
      "Real hotel address, telephone & confirmation number",
      "Synchronized check-in & check-out dates",
      "Meets Schengen Visa Code Article 14 lodging proof",
      "Free date modifications if appointments shift",
      "Instant PDF delivery on WhatsApp & Email",
    ],
  },
  {
    id: "combo",
    title: "FLIGHT + HOTEL COMBO",
    priceInr: "₹499",
    priceUsd: "$6 USD",
    subtext: "bundle package",
    href: "/services/flight-hotel-package",
    icon: Building2,
    waText: "Hi FlyDummyTicket Team, I would like to order a Flight + Hotel Combo Package (₹499 / $6).",
    featured: true,
    badge: "Most Popular • Best Value",
    points: [
      "Actual verifiable flight + hotel reservations",
      "Checkable on airline & hotel booking portals",
      "Accommodation voucher up to 30 days",
      "Perfect synchronized travel dates",
      "Free date modifications included",
      "Priority express WhatsApp dispatch",
    ],
  },
  {
    id: "insurance",
    title: "TRAVEL INSURANCE",
    priceInr: "₹699",
    priceUsd: "$9 USD",
    subtext: "embassy compliant",
    href: "/services/travel-insurance",
    icon: Shield,
    waText: "Hi FlyDummyTicket Team, I would like to order Travel Medical Insurance for Visa (₹699 / $9).",
    featured: false,
    points: [
      "Minimum €30,000 / $50,000 medical emergency cover",
      "Meets Schengen Article 15 visa requirements",
      "Includes emergency medical evacuation & repatriation",
      "Accepted by all 29 Schengen embassies worldwide",
      "Official certificate with verification QR code",
      "Delivered within 15 to 30 minutes",
    ],
  },
  {
    id: "return",
    title: "CANCELLATION RETURN",
    priceInr: "₹1,499",
    priceUsd: "$19 USD",
    subtext: "per ticket",
    href: "/services/return-ticket",
    icon: RotateCcw,
    waText: "Hi FlyDummyTicket Team, I would like to order a Cancellation Return Ticket for Immigration (₹1,499 / $19).",
    featured: false,
    badge: "Airport Clearance",
    points: [
      "Return ticket for airport immigration clearance",
      "Verifiable live on airline check-in systems",
      "Prevents denied boarding on 1-way flights",
      "Accepted at airport borders worldwide",
      "Built-in cancellation protection",
      "24/7 priority boarding assistance support",
    ],
  },
];

const additionalServices = [
  {
    title: "Past Dated Tickets",
    desc: "For travel claims & tax proof",
    price: "₹2,400 (35 USD)",
    href: "/contact",
  },
  {
    title: "Schengen Plus UK",
    desc: "Dummy ticket with official e-receipt",
    price: "39 GBP",
    href: "/contact",
  },
  {
    title: "Ticket with e-Ticket Number",
    desc: "Issued with 13-digit e-ticket code",
    price: "₹3,500 (49 USD)",
    href: "/contact",
  },
  {
    title: "Free Date Change Service",
    desc: "100% free if appointment changes",
    price: "FREE (₹0)",
    href: "/services/date-change",
  },
];

function PricingCard({ plan, isCarousel = false }) {
  const Icon = plan.icon;
  return (
    <div
      className={`relative flex flex-col justify-between rounded-3xl bg-white p-5 sm:p-7 transition-all duration-200 ${
        isCarousel
          ? "w-[85vw] max-w-[340px] shrink-0 snap-center shadow-md border border-slate-200"
          : "border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md"
      } ${
        plan.featured
          ? "border-2 border-[#EA580C] shadow-xl shadow-orange-500/10"
          : ""
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="rounded-full bg-[#EA580C] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-xs">
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        {/* PLAN TITLE */}
        <div className="flex items-center justify-center gap-2 pb-3 border-b border-slate-100">
          <Icon size={16} className={plan.featured ? "text-[#EA580C]" : "text-slate-600"} />
          <h3 className="text-xs sm:text-sm font-black tracking-wider uppercase text-slate-800">
            {plan.title}
          </h3>
        </div>

        {/* PRICE */}
        <div className="py-5 text-center">
          <span className="text-3xl sm:text-4xl font-black text-slate-900">{plan.priceInr}</span>
          <p className="text-xs text-slate-400 font-bold mt-1">
            {plan.priceUsd} • {plan.subtext}
          </p>
        </div>

        {/* POINTS LIST */}
        <ul className="space-y-2 text-xs text-slate-600 mb-6">
          {plan.points.map((pt, i) => (
            <li
              key={pt}
              className={`flex items-center gap-2 p-2 rounded-lg ${
                i % 2 === 0 ? "bg-[#F8FAFC]" : "bg-transparent"
              }`}
            >
              <Check size={14} className="text-emerald-600 shrink-0" />
              <span className="leading-tight">{pt}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ACTION BUTTON */}
      <div className="space-y-2">
        <a
          href={`https://wa.me/919560099481?text=${encodeURIComponent(plan.waText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex h-11 w-full items-center justify-center gap-2 rounded-xl text-xs font-black uppercase tracking-wider transition ${
            plan.featured
              ? "bg-[#EA580C] text-white hover:bg-[#C2410C] shadow-md shadow-orange-500/25"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          <MessageCircle size={15} />
          <span>BUY NOW ({plan.priceInr})</span>
        </a>

        <Link
          to={plan.href}
          className="flex h-9 w-full items-center justify-center text-xs font-bold text-slate-500 hover:text-slate-800"
        >
          <span>More details & requirements</span>
          <ArrowRight size={12} className="ml-1" />
        </Link>
      </div>
    </div>
  );
}

function Services() {
  const scrollRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveSlide(Math.min(index, allServices.length - 1));
    }
  };

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[index];
      if (card) {
        card.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
      setActiveSlide(index);
    }
  };

  const nextSlide = () => {
    const next = (activeSlide + 1) % allServices.length;
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = (activeSlide - 1 + allServices.length) % allServices.length;
    scrollToSlide(prev);
  };

  return (
    <section id="pricing" className="scroll-mt-20 bg-[#F8FAFC] py-14 sm:py-20 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-[#EA580C] bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60 mb-2">
            AFFORDABLE & TRANSPARENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            Our 5 Official Services & Pricing Plans
          </h2>
          <p className="mt-3 text-sm text-slate-600 font-medium leading-relaxed">
            No hidden charges, zero taxes added at checkout. Choose the reservation you need for your embassy visa or airport clearance.
          </p>

          {/* MOBILE SWIPE TIP & ARROWS */}
          <div className="mt-4 flex items-center justify-between lg:hidden px-2">
            <span className="text-xs font-semibold text-slate-400">
              👈 Swipe to compare all 5 services
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous plan"
                className="h-8 w-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-2xs cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next plan"
                className="h-8 w-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-2xs cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            MOBILE / TABLET CAROUSEL VIEW (< lg)
        ═══════════════════════════════════════════════════════════ */}
        <div className="lg:hidden mb-10">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {allServices.map((plan) => (
              <PricingCard key={`mobile-${plan.id}`} plan={plan} isCarousel={true} />
            ))}
          </div>

          {/* PAGINATION DOTS */}
          <div className="flex justify-center items-center gap-2 mt-3">
            {allServices.map((plan, idx) => (
              <button
                key={`dot-${plan.id}`}
                type="button"
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeSlide === idx
                    ? "w-7 bg-[#EA580C]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            DESKTOP GRID VIEW (lg and above)
        ═══════════════════════════════════════════════════════════ */}
        <div className="hidden lg:block mb-12">
          {/* TOP 3 PRIMARY SERVICES */}
          <div className="grid grid-cols-3 gap-6 items-stretch mb-6">
            {allServices.slice(0, 3).map((plan) => (
              <PricingCard key={`desktop-${plan.id}`} plan={plan} />
            ))}
          </div>

          {/* BOTTOM 2 SPECIALIZED SERVICES */}
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
            {allServices.slice(3, 5).map((plan) => (
              <PricingCard key={`desktop-${plan.id}`} plan={plan} />
            ))}
          </div>
        </div>

        {/* ADDITIONAL SERVICES STRIP */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4">
            Additional Travel & Documentation Services
          </h4>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-4 transition hover:border-slate-200"
              >
                <h5 className="text-xs font-black text-slate-900 mb-1">{item.title}</h5>
                <p className="text-[11px] text-slate-500 mb-2">{item.desc}</p>
                <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                  <span className="text-xs font-extrabold text-[#EA580C]">{item.price}</span>
                  <Link to={item.href} className="text-[11px] font-bold text-slate-600 hover:underline">
                    Inquire →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;