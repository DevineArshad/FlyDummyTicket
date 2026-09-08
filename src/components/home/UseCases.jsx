import { useState } from "react";
import parisImg from "../../assets/images/schengen_paris_travel.jpg";
import cloudsImg from "../../assets/images/airplane_sunrise_clouds.jpg";
import londonImg from "../../assets/images/london_travel.jpg";
import baliImg from "../../assets/images/bali_tropical_travel.jpg";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Compass,
  FileCheck2,
  Globe,
  MapPin,
  Plane,
  PlaneTakeoff,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const scenarios = [
  {
    id: "schengen",
    category: "schengen",
    badge: "VFS · BLS · TLScontact",
    flag: "🇪🇺",
    title: "Schengen Visa Applications",
    region: "29 European Nations (France, Germany, Italy, Spain)",
    description:
      "Official consulate guidelines explicitly instruct not to purchase real non-refundable tickets before visa approval. Our reservations give you the required roundtrip flight & accommodation proof.",
    recommendedDoc: "Flight + Hotel Combo",
    targetTab: "combo",
    image: parisImg,
    popularRoute: "DEL → CDG (Paris)",
    icon: Globe,
    highlights: ["Schengen Visa Code Art. 14", "Checkable Live PNR Hold"],
  },
  {
    id: "onward",
    category: "onward",
    badge: "Airline Check-in & Border Control",
    flag: "🌏",
    title: "Proof of Onward Travel",
    region: "Thailand, Bali, UK, UAE & Global Hubs",
    description:
      "Avoid getting denied boarding at airline check-in or questioned by border officers on a one-way flight. Authentic reservation verifiable by airline staff in real time on official systems.",
    recommendedDoc: "Return / Onward Ticket",
    targetTab: "onward",
    image: cloudsImg,
    popularRoute: "BOM → BKK (Bangkok)",
    icon: PlaneTakeoff,
    highlights: ["Accepted at Airport Check-in", "Immediate 10-Min Delivery"],
  },
  {
    id: "us-uk",
    category: "us-uk",
    badge: "Embassy Interview Ready",
    flag: "🇺🇸🇬🇧",
    title: "US B1/B2 & UK Visitor Visas",
    region: "US Embassy & UKVI Consulates",
    description:
      "Consular officers request tentative flight plans without purchasing real tickets prior to visa approval. Our reservations demonstrate genuine travel intent and realistic flight routings.",
    recommendedDoc: "Flight Reservation",
    targetTab: "flight",
    image: londonImg,
    popularRoute: "DEL → LHR (London)",
    icon: FileCheck2,
    highlights: ["IATA Official PDF Format", "Valid for Embassy Interviews"],
  },
  {
    id: "nomad",
    category: "nomad",
    badge: "Multi-City & Remote Travel",
    flag: "🏝️",
    title: "Digital Nomads & Island Hopping",
    region: "Southeast Asia, Latin America & Worldwide",
    description:
      "Travel flexibly across countries without fixed return dates. Secure legitimate entry proof whenever visa or airline regulations demand onward verification before departure.",
    recommendedDoc: "Onward Ticket Proof",
    targetTab: "onward",
    image: baliImg,
    popularRoute: "DXB → DPS (Bali)",
    icon: Compass,
    highlights: ["100% Refundable Guarantee", "Free Date Modification"],
  },
];

const categoryTabs = [
  { id: "all", label: "All Destinations" },
  { id: "schengen", label: "Schengen (Europe)" },
  { id: "onward", label: "Onward Travel" },
  { id: "us-uk", label: "US & UK Visas" },
  { id: "nomad", label: "Digital Nomads" },
];

function UseCases() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredScenarios =
    activeCategory === "all"
      ? scenarios
      : scenarios.filter((s) => s.category === activeCategory);

  const handleBookForScenario = (targetTab) => {
    // Dispatch tab selection to Hero booking configurator
    window.dispatchEvent(
      new CustomEvent("select-service-tab", {
        detail: { tabId: targetTab },
      })
    );

    // Scroll smoothly to booking configurator
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#booking";
    }
  };

  return (
    <section
      id="visa"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-[#F8FAFD] via-white to-[#F0F5FD] py-20 sm:py-24 lg:py-28"
    >
      {/* ─────────────────────────────────────────────────────────
          BACKGROUND TRAVEL DOODLES & ATMOSPHERE
      ───────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-72 w-72 rounded-full bg-indigo-50/50 blur-3xl" />

      {/* Handwritten Doodle Accents */}
      <div className="pointer-events-none absolute top-12 right-10 hidden select-none xl:flex items-center gap-2 text-slate-400 rotate-[4deg]">
        <span className="font-handwriting text-2xl font-bold tracking-wide text-slate-500/80">
          Accepted Worldwide
        </span>
        <Sparkles size={18} className="text-amber-400" />
      </div>

      <div className="pointer-events-none absolute bottom-16 left-8 hidden select-none xl:block rotate-[-6deg]">
        <span className="font-handwriting text-2xl font-bold tracking-wide text-slate-500/80">
          100% Embassy Approved
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">

        {/* ─────────────────────────────────────────────────────────
            SECTION HEADER
        ───────────────────────────────────────────────────────── */}
        <div className="flex flex-col justify-between gap-8 pb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#1D68E2] shadow-xs">
              <Globe size={13} className="text-[#1D68E2]" />
              <span>OFFICIAL EMBASSY & IMMIGRATION COMPLIANCE</span>
            </div>

            {/* Headline */}
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[#0F172A] sm:text-4xl lg:text-[44px] leading-[1.12]">
              One Verifiable Document, <br className="hidden sm:inline" />
              <span className="text-[#1D68E2]">Every Visa Destination.</span>
            </h2>
          </div>

          <div className="max-w-md lg:text-right">
            <p className="text-sm sm:text-[15px] leading-relaxed text-slate-500 font-normal">
              Official consulates explicitly instruct:{" "}
              <strong className="text-slate-800 font-semibold">
                "Do not purchase non-refundable airline tickets before visa issuance."
              </strong>{" "}
              Our genuine reservations fulfill embassy checklist proof seamlessly.
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            INTERACTIVE DESTINATION CATEGORY PILLS
        ───────────────────────────────────────────────────────── */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#1D68E2] text-white shadow-md shadow-blue-500/20"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────────────────
            SCENARIO CARDS GRID
        ───────────────────────────────────────────────────────── */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 items-stretch">
          {filteredScenarios.map((scenario) => {
            return (
              <article
                key={scenario.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.11)] transition-all duration-300"
              >
                {/* Photo Header with Badges */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={scenario.image}
                    alt={scenario.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                  {/* Glassmorphic Top Left Badge */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-bold text-white shadow-sm border border-white/20">
                      <span>{scenario.flag}</span>
                      <span>{scenario.badge}</span>
                    </span>
                  </div>

                  {/* Top Right Popular Route Badge */}
                  <div className="absolute right-4 top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-extrabold text-[#1D68E2] shadow-sm border border-blue-100">
                      <Plane size={11} className="rotate-45" />
                      <span>{scenario.popularRoute}</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7 justify-between">
                  <div>
                    {/* Region Tag */}
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#1D68E2]">
                      {scenario.region}
                    </p>

                    {/* Scenario Title */}
                    <h3 className="mt-1.5 text-xl sm:text-[22px] font-extrabold tracking-tight text-slate-900">
                      {scenario.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                      {scenario.description}
                    </p>

                    {/* Key Highlights Pills */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {scenario.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 border border-slate-200/80 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                        >
                          <Check size={12} className="text-emerald-600 shrink-0" strokeWidth={2.5} />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Recommended Doc + CTA */}
                  <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Recommended Document
                      </p>
                      <p className="mt-0.5 text-xs sm:text-sm font-bold text-emerald-600 flex items-center gap-1">
                        <span>✓</span>
                        <span>{scenario.recommendedDoc}</span>
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleBookForScenario(scenario.targetTab)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#EAF2FE] hover:bg-[#1D68E2] text-[#1D68E2] hover:text-white px-4 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
                    >
                      <span>Book For Visa</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────────────────
            EMBASSY COMPLIANCE & GUARANTEE BANNER
        ───────────────────────────────────────────────────────── */}
        <div className="mt-10 rounded-2xl border border-slate-200/90 bg-white p-6 sm:px-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <ShieldCheck size={24} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  100% Embassy & VFS Global Format Guaranteed
                </h4>
                <p className="mt-0.5 text-xs sm:text-[13px] leading-relaxed text-slate-500">
                  All flight itineraries include official IATA reservation codes, airline details, flight numbers,
                  and passenger data recognized by visa officers under Schengen Visa Code Article 14.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleBookForScenario("combo")}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] px-5 py-3 text-xs sm:text-sm font-bold text-white transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>View Recommended Bundles</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default UseCases;