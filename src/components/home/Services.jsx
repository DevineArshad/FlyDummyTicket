import { Link } from "react-router-dom";
import {
  ArrowRight,
  BedDouble,
  Check,
  FileText,
  Headphones,
  Plane,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

import flightImg from "../../assets/images/service_flight.jpg";
import hotelImg from "../../assets/images/service_hotel.jpg";
import comboImg from "../../assets/images/service_combo.jpg";
import returnImg from "../../assets/images/service_return.jpg";

const packages = [
  {
    id: "flight",
    name: "Flight Reservation",
    description: "Verified flight itinerary for your visa application and travel planning.",
    price: "399",
    href: "/services/flight-reservation",
    image: flightImg,
    icon: Plane,
    iconColor: "text-[#1D68E2]",
    checkBg: "bg-[#1D68E2]",
    buttonText: "Get Flight Reservation",
    buttonClass:
      "bg-[#EAF2FE] text-[#1D68E2] hover:bg-[#DBEAFE] border border-blue-100 hover:border-blue-200",
    features: [
      "Realistic flight itinerary format",
      "Includes airline, route & timing",
      "Sample booking reference",
      "PDF delivered via Email & WhatsApp",
      "Valid for 7–14 days (as per plan)",
    ],
  },
  {
    id: "hotel",
    name: "Hotel Reservation",
    description: "Hotel booking confirmation for your travel and visa requirements.",
    price: "250",
    href: "/services/hotel-booking",
    image: hotelImg,
    icon: BedDouble,
    iconColor: "text-[#10B981]",
    checkBg: "bg-[#10B981]",
    buttonText: "Get Hotel Reservation",
    buttonClass:
      "bg-[#EAF8F0] text-[#0D9488] hover:bg-[#D1FAE5] border border-emerald-100 hover:border-emerald-200",
    features: [
      "Real hotel booking format",
      "Includes hotel details & address",
      "Accurate check-in & check-out dates",
      "Free date modifications",
      "PDF delivered via Email & WhatsApp",
    ],
  },
  {
    id: "combo",
    name: "Flight + Hotel Combo",
    description: "Complete travel itinerary in one package — ideal for visa applications.",
    price: "650",
    href: "/services/flight-hotel-package",
    featured: true,
    image: comboImg,
    checkBg: "bg-[#1D68E2]",
    buttonText: "Get Complete Package",
    buttonClass:
      "bg-[#1D68E2] text-white hover:bg-[#1556BE] shadow-[0_4px_14px_rgba(29,104,226,0.3)] hover:shadow-[0_6px_20px_rgba(29,104,226,0.4)]",
    features: [
      "Flight reservation with sample PNR",
      "Hotel booking confirmation",
      "Matching travel dates",
      "Editable dates (if required)",
      "PDF delivered via Email & WhatsApp",
      "Priority support",
    ],
  },
  {
    id: "onward",
    name: "Return / Onward Ticket",
    description: "Onward or return journey itinerary for a hassle-free travel plan.",
    price: "499",
    href: "/services/return-ticket",
    image: returnImg,
    icon: RotateCcw,
    iconColor: "text-[#8B5CF6]",
    checkBg: "bg-[#8B5CF6]",
    buttonText: "Get Return Ticket",
    buttonClass:
      "bg-[#F3EBFC] text-[#7C3AED] hover:bg-[#E9DCFA] border border-purple-100 hover:border-purple-200",
    features: [
      "Onward / return flight itinerary",
      "Realistic travel details",
      "Sample booking reference",
      "Quick delivery (within 10 minutes)",
      "Valid for visa application purpose",
    ],
  },
];

const trustHighlights = [
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "Your data is safe with us",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Always here to help",
  },
  {
    icon: FileText,
    title: "Instant Delivery",
    desc: "Get your documents quickly",
  },
];

function Services() {
  const handleSelectPackage = (packageId) => {
    // Dispatch tab selection for Hero booking configurator
    window.dispatchEvent(
      new CustomEvent("select-service-tab", {
        detail: { tabId: packageId === "return" ? "onward" : packageId },
      })
    );

    // Scroll smoothly to booking configurator
    const bookingElement = document.getElementById("booking");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#booking";
    }
  };

  return (
    <section
      id="services"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-[#F0F5FD] via-[#F8FAFD] to-white py-20 sm:py-24 lg:py-28"
    >
      <span id="packages" className="absolute -top-20" />

      {/* ─────────────────────────────────────────────────────────
          BACKGROUND ATMOSPHERE & ARTISTIC TRAVEL DOODLES
      ───────────────────────────────────────────────────────── */}
      {/* Soft atmospheric cloud blur highlights */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[800px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-[-100px] h-80 w-80 rounded-full bg-indigo-50/50 blur-3xl" />

      {/* Top Left Doodle: "Your Journey Starts Here ↗" */}
      <div className="pointer-events-none absolute top-12 left-6 hidden select-none lg:left-14 xl:left-24 xl:flex items-center gap-2 text-slate-400">
        <div className="text-center rotate-[-8deg]">
          <span className="font-handwriting text-2xl font-bold tracking-wide text-slate-500/80">
            Your Journey
            <br />
            Starts Here
          </span>
        </div>
        <svg
          className="h-10 w-10 -rotate-12 text-slate-400"
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 30 C 18 30, 26 22, 28 10" strokeDasharray="3 3" />
          <path d="M20 10 L 29 10 L 29 19" />
        </svg>
      </div>

      {/* Top Right Doodle: Airplane with contrail & "Explore the World" */}
      <div className="pointer-events-none absolute top-10 right-6 hidden select-none lg:right-12 xl:right-20 lg:flex items-center gap-4">
        <div className="relative">
          {/* Plane & Flight Path */}
          <svg
            className="w-48 h-20 text-blue-300/80"
            viewBox="0 0 200 80"
            fill="none"
          >
            <path
              d="M 10 70 C 60 65, 120 40, 160 20"
              stroke="#93C5FD"
              strokeWidth="2"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute right-4 top-2 text-blue-600 rotate-[22deg]">
            <Plane size={24} className="fill-blue-500 text-blue-600" />
          </div>
        </div>
        <div className="rotate-[5deg] text-center pt-2">
          <span className="font-handwriting text-2xl font-bold tracking-wide text-slate-500/80">
            Explore
            <br />
            the World
          </span>
        </div>
      </div>

      {/* Bottom Left: Passport & Boarding Pass Illustration */}
      <div className="pointer-events-none absolute bottom-4 left-4 hidden select-none lg:block xl:left-10 z-0">
        <div className="relative w-36 h-28 opacity-85 transition-opacity hover:opacity-100">
          {/* Boarding Passes Underneath */}
          <div className="absolute left-6 bottom-4 w-28 h-18 -rotate-12 rounded-lg bg-white/95 border border-slate-200 shadow-md p-2 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-100 pb-1">
              <Plane size={11} className="text-blue-600 rotate-45" />
              <span className="text-[7px] font-bold text-slate-400 uppercase tracking-wider">BOARDING PASS</span>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[9px] font-black text-slate-800">DEL → CDG</p>
                <p className="text-[6px] text-slate-400">GATE 24A &bull; SEAT 14B</p>
              </div>
              <div className="flex gap-0.5 items-end h-3">
                <span className="w-0.5 h-3 bg-slate-800" />
                <span className="w-1 h-3 bg-slate-800" />
                <span className="w-0.5 h-2 bg-slate-800" />
                <span className="w-1 h-3 bg-slate-800" />
                <span className="w-0.5 h-3 bg-slate-800" />
              </div>
            </div>
          </div>

          {/* Realistic Navy Passport */}
          <div className="absolute left-0 bottom-0 w-24 h-32 rotate-[-4deg] rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-slate-700/60 shadow-[0_10px_25px_rgba(15,23,42,0.25)] p-2.5 text-white flex flex-col justify-between">
            <div>
              <p className="text-[8px] font-extrabold tracking-[0.2em] text-amber-200/90 uppercase text-center">
                PASSPORT
              </p>
            </div>
            {/* Golden Globe Emblem */}
            <div className="my-auto flex justify-center">
              <div className="w-8 h-8 rounded-full border border-amber-300/40 flex items-center justify-center relative">
                <div className="w-6 h-6 rounded-full border border-amber-300/30" />
                <div className="absolute inset-x-0 top-1/2 h-[0.5px] bg-amber-300/40" />
                <div className="absolute inset-y-0 left-1/2 w-[0.5px] bg-amber-300/40" />
              </div>
            </div>
            {/* Biometric symbol */}
            <div className="flex justify-center">
              <div className="w-4 h-2.5 border border-amber-300/40 rounded-xs flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-300/40" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Doodle: "Smooth Travel Happier You" */}
      <div className="pointer-events-none absolute bottom-8 right-6 hidden select-none lg:block xl:right-14 text-right">
        <p className="font-handwriting text-2xl font-bold tracking-wide text-slate-500/80 rotate-[-5deg]">
          Smooth
          <br />
          Travel
          <br />
          Happier You
        </p>
      </div>

      {/* ─────────────────────────────────────────────────────────
          MAIN SECTION CONTENT
      ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-4 py-1.5 shadow-[0_2px_12px_rgba(37,99,235,0.06)] backdrop-blur-sm">
            <Plane className="h-3.5 w-3.5 text-[#1D68E2] -rotate-45" />
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1D68E2]">
              TRAVEL SMART &bull; PLAN CONFIDENTLY
            </span>
          </div>

          {/* Headline */}
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[#0F172A] sm:text-4xl lg:text-[44px] leading-[1.12]">
            Your Travel Plans, <span className="text-[#1D68E2]">Simplified</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto">
            Get verified travel itineraries, hotel bookings and return plans — designed
            for a smooth visa application journey.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────
            4 SERVICE CARDS GRID
        ───────────────────────────────────────────────────────── */}
        <div className="mt-12 lg:mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            const isFeatured = pkg.featured;

            if (isFeatured) {
              return (
                <article
                  key={pkg.id}
                  className="group relative flex flex-col justify-between rounded-3xl border-2 border-[#1D68E2] bg-white shadow-[0_12px_36px_rgba(29,104,226,0.18)] hover:shadow-[0_20px_48px_rgba(29,104,226,0.25)] transition-all duration-300 overflow-visible"
                >
                  {/* Floating "★ MOST POPULAR" Pill */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1D68E2] px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md">
                      ★ MOST POPULAR
                    </span>
                  </div>

                  {/* Upper Section with Eiffel Tower night photo & dark blue overlay */}
                  <div className="relative min-h-[180px] rounded-t-[22px] overflow-hidden bg-[#0A2558] p-5 pt-8 flex flex-col justify-between">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081F48] via-[#081F48]/85 to-[#0A2558]/70" />

                    {/* Dual Combo Badges: Plane + Bed */}
                    <div className="relative z-10 flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xs">
                        <Plane size={17} />
                      </div>
                      <span className="text-white/80 font-bold text-sm">+</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xs">
                        <BedDouble size={17} />
                      </div>
                    </div>

                    {/* Header Title & Subtitle */}
                    <div className="relative z-10 mt-3">
                      <h3 className="text-xl font-extrabold text-white tracking-tight">
                        {pkg.name}
                      </h3>
                      <p className="mt-1 text-xs text-blue-100/85 leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>
                  </div>

                  {/* Lower Section (White Background) */}
                  <div className="p-6 pt-5 flex-1 flex flex-col justify-between bg-white rounded-b-[22px]">
                    <div>
                      {/* Features List with Royal Blue Check Circles */}
                      <ul className="space-y-3">
                        {pkg.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-[13px] font-medium text-slate-700 leading-snug"
                          >
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1D68E2] text-white">
                              <Check size={10} strokeWidth={3.5} />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & CTA */}
                    <div className="mt-7">
                      <div className="pt-4 border-t border-slate-100 flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-[32px] font-extrabold text-slate-900 tracking-tight">
                          ₹{pkg.price}
                        </span>
                        <span className="text-xs font-normal text-slate-400">
                          / person
                        </span>
                      </div>

                      <Link
                        to={pkg.href}
                        className={`mt-4 w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${pkg.buttonClass}`}
                      >
                        <span>{pkg.buttonText}</span>
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            }

            // Regular Cards (Flight, Hotel, Return)
            return (
              <article
                key={pkg.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.1)] transition-all duration-300 overflow-hidden"
              >
                {/* Card Top Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />

                  {/* Floating Circular Icon Badge */}
                  <div className="absolute -bottom-5 left-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-slate-100">
                    <Icon size={20} className={pkg.iconColor} />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Description */}
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {pkg.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed min-h-[36px]">
                      {pkg.description}
                    </p>

                    {/* Features List with Color-Coded Check Circles */}
                    <ul className="mt-5 space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-[13px] font-medium text-slate-700 leading-snug"
                        >
                          <span
                            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white ${pkg.checkBg}`}
                          >
                            <Check size={10} strokeWidth={3.5} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-7">
                    <div className="pt-4 border-t border-slate-100 flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-[32px] font-extrabold text-slate-900 tracking-tight">
                        ₹{pkg.price}
                      </span>
                      <span className="text-xs font-normal text-slate-400">
                        / person
                      </span>
                    </div>

                    <Link
                      to={pkg.href}
                      className={`mt-4 w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${pkg.buttonClass}`}
                    >
                      <span>{pkg.buttonText}</span>
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
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