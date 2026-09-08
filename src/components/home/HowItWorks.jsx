import {
  ArrowRight,
  BedDouble,
  Calendar,
  Check,
  Download,
  Package,
  Plane,
  Search,
  Send,
  Settings,
  Zap,
} from "lucide-react";

import santoriniImg from "../../assets/images/santorini_travel.jpg";
import flightImg from "../../assets/images/service_flight.jpg";

function HowItWorks() {
  const handleCreatePlan = () => {
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#booking";
    }
  };

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-white via-[#F8FAFD] to-[#F1F6FD] py-20 sm:py-24 lg:py-28"
    >
      {/* ─────────────────────────────────────────────────────────
          TOP-RIGHT SCENIC TRAVEL ARTWORK (SANTORINI & AIRLINER)
      ───────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute top-4 right-0 hidden select-none lg:block w-[450px] xl:w-[520px] h-[280px] overflow-hidden z-0">
        <div className="relative w-full h-full">
          {/* Paper Airplane with Dashed Curved Contrail */}
          <div className="absolute left-6 top-16 z-10 flex items-center gap-2">
            <svg
              className="w-36 h-20 text-blue-300"
              viewBox="0 0 140 70"
              fill="none"
            >
              <path
                d="M 10 55 C 45 50, 90 35, 125 10"
                stroke="#93C5FD"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute left-0 bottom-1 text-blue-500 rotate-[-10deg]">
              <svg
                className="w-6 h-6 fill-blue-500 text-blue-600"
                viewBox="0 0 24 24"
              >
                <path d="M2 12l20-9-9 20-3-8z" />
              </svg>
            </div>
          </div>

          {/* Doodles: "Plan Today, Explore Tomorrow" */}
          <div className="absolute left-10 top-2 rotate-[-6deg] text-slate-500 font-handwriting text-2xl font-bold leading-tight">
            Plan Today
            <br />
            <span className="text-slate-500">Explore Tomorrow</span>
          </div>

          {/* Unified Organic Curved Travel Card */}
          <div className="absolute right-0 top-6 w-80 xl:w-96 h-56 rounded-bl-[60px] rounded-tl-[80px] overflow-hidden shadow-xl border-l-4 border-b-4 border-white/95">
            {/* Top sky with commercial jet airliner */}
            <div className="relative h-28 w-full overflow-hidden">
              <img
                src={flightImg}
                alt="Airliner in Sky"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30" />
            </div>

            {/* Bottom Santorini coastal landscape */}
            <div className="relative h-28 w-full overflow-hidden">
              <img
                src={santoriniImg}
                alt="Santorini Scenic Coast"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent" />
            </div>
          </div>

          {/* Doodle: "Good Trips Ahead" */}
          <div className="absolute right-6 top-36 rotate-[-8deg] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] font-handwriting text-2xl font-bold leading-tight z-20">
            Good
            <br />
            Trips
            <br />
            Ahead
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">
        {/* ─────────────────────────────────────────────────────────
            SECTION HEADER
        ───────────────────────────────────────────────────────── */}
        <div className="max-w-2xl">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#1D68E2] shadow-xs backdrop-blur-xs">
            <Zap size={13} className="fill-[#1D68E2] text-[#1D68E2]" />
            <span>FAST &bull; SIMPLE &bull; RELIABLE</span>
          </div>

          {/* Headline */}
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[#0F172A] sm:text-4xl lg:text-[46px] leading-[1.12]">
            Get Your Travel Plan <br />
            in <span className="text-[#1D68E2]">3 Simple Steps</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-500 font-normal">
            Create your travel itinerary in just a few minutes. A hassle-free way
            to plan your next trip with confidence.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────
            3 STEP CARDS GRID
        ───────────────────────────────────────────────────────── */}
        <div className="mt-12 lg:mt-14 grid gap-6 md:grid-cols-3 items-stretch">
          
          {/* ═══════════════════════════════════════════════════════
              STEP 1: Choose Your Travel Plan
          ═══════════════════════════════════════════════════════ */}
          <div className="group rounded-[28px] border border-slate-200/90 bg-white p-7 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.09)] transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Header: Step Number + Right Icon */}
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D68E2] text-sm font-extrabold text-white shadow-xs">
                  01
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 transition-colors group-hover:text-[#1D68E2] group-hover:bg-blue-50">
                  <Search size={18} />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="mt-6 text-xl font-extrabold tracking-tight text-slate-900">
                Choose Your Travel Plan
              </h3>
              <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-500 min-h-[44px]">
                Select flight, hotel, or a combination. Enter your travel details
                like destination, dates, and traveler information.
              </p>
            </div>

            {/* Bottom Graphic & Bullets */}
            <div className="mt-8 pt-5 border-t border-slate-100/90 flex items-center justify-between gap-3">
              {/* Mini UI Window Graphic */}
              <div className="relative w-36 h-32 shrink-0 rounded-2xl bg-gradient-to-br from-blue-50/90 to-indigo-50/60 border border-blue-100/90 p-2.5 shadow-xs flex flex-col justify-between select-none">
                <div className="flex items-center gap-1 pb-1 border-b border-blue-100/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-200" />
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-200" />
                </div>

                <div className="space-y-1.5">
                  <div className="relative flex items-center gap-1.5 rounded-lg bg-white px-2 py-1 shadow-xs border border-blue-200/80">
                    <Plane size={10} className="text-[#1D68E2]" />
                    <span className="text-[9px] font-bold text-slate-800">Flight</span>
                    <span className="absolute -top-1 -right-1 text-blue-500 text-[10px]">✦</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg bg-white/70 px-2 py-1 text-slate-500">
                    <BedDouble size={10} className="text-slate-400" />
                    <span className="text-[9px] font-medium text-slate-600">Hotel</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg bg-white/70 px-2 py-1 text-slate-500">
                    <Package size={10} className="text-slate-400" />
                    <span className="text-[9px] font-medium text-slate-600">Flight + Hotel</span>
                  </div>
                </div>

                {/* Hand cursor clicking pointer */}
                <div className="absolute right-1 top-6 drop-shadow-md text-blue-600">
                  <svg className="w-6 h-6 fill-white text-blue-600" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                  </svg>
                </div>
              </div>

              {/* 3 Green Checkmark Bullets */}
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span>Multiple options</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span>Flexible dates</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span>Quick & easy form</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════
              STEP 2: Generate Your Itinerary
          ═══════════════════════════════════════════════════════ */}
          <div className="group rounded-[28px] border border-slate-200/90 bg-white p-7 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.09)] transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Header: Step Number + Right Icon */}
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B5CF6] text-sm font-extrabold text-white shadow-xs">
                  02
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 transition-colors group-hover:text-[#8B5CF6] group-hover:bg-purple-50">
                  <Settings size={18} />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="mt-6 text-xl font-extrabold tracking-tight text-slate-900">
                Generate Your Itinerary
              </h3>
              <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-500 min-h-[44px]">
                Our system creates a travel itinerary based on your details,
                including a unique booking reference for your plan.
              </p>
            </div>

            {/* Bottom Graphic & Bullets */}
            <div className="mt-8 pt-5 border-t border-slate-100/90 flex items-center justify-between gap-3">
              {/* Mini Itinerary Document Card */}
              <div className="relative w-36 h-32 shrink-0 rounded-2xl bg-white border border-slate-200/90 p-2.5 shadow-xs flex flex-col justify-between select-none">
                <div className="flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                  <Plane size={11} className="text-[#1D68E2]" />
                  <span className="text-[9px] font-bold text-slate-800">Travel Itinerary</span>
                </div>

                <div className="space-y-1">
                  <div className="h-1.5 w-3/4 rounded-full bg-slate-200" />
                  <div className="h-1.5 w-1/2 rounded-full bg-slate-100" />
                </div>

                {/* Unique Booking Reference Pill */}
                <div className="my-1 rounded-lg bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 text-center">
                  <span className="font-mono text-[9px] font-extrabold text-emerald-700 tracking-wider">
                    REF-7A3B2C
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="h-1.5 w-full rounded-full bg-slate-200" />
                  <div className="h-1.5 w-4/5 rounded-full bg-slate-100" />
                </div>
              </div>

              {/* 3 Green Checkmark Bullets */}
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span>Auto-generated details</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span>Unique reference</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span>Ready in minutes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════
              STEP 3: Receive & Save
          ═══════════════════════════════════════════════════════ */}
          <div className="group rounded-[28px] border border-slate-200/90 bg-white p-7 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.09)] transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Header: Step Number + Right Icon */}
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10B981] text-sm font-extrabold text-white shadow-xs">
                  03
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 transition-colors group-hover:text-[#10B981] group-hover:bg-emerald-50">
                  <Send size={18} />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="mt-6 text-xl font-extrabold tracking-tight text-slate-900">
                Receive & Save
              </h3>
              <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-500 min-h-[44px]">
                Get your itinerary delivered instantly via email or WhatsApp.
                Download the PDF and keep it for your records.
              </p>
            </div>

            {/* Bottom Graphic & Bullets */}
            <div className="mt-8 pt-5 border-t border-slate-100/90 flex items-center justify-between gap-3">
              {/* Mini PDF Document Card with Download Action */}
              <div className="relative w-36 h-32 shrink-0 rounded-2xl bg-white border border-slate-200/90 p-2.5 shadow-xs flex flex-col justify-between select-none">
                {/* Back stacked sheet */}
                <div className="absolute -top-1.5 left-2 right-2 h-3 rounded-t-xl bg-slate-100 border border-slate-200/60 -z-10" />

                <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <span className="rounded bg-rose-500 px-1.5 py-0.5 text-[8px] font-black tracking-wider text-white uppercase">
                    PDF
                  </span>
                  <span className="text-[8px] font-medium text-slate-400">Official</span>
                </div>

                <div className="space-y-1.5 my-auto">
                  <div className="h-1.5 w-full rounded-full bg-slate-200" />
                  <div className="h-1.5 w-5/6 rounded-full bg-slate-200" />
                  <div className="h-1.5 w-2/3 rounded-full bg-slate-100" />
                </div>

                {/* Floating Download Button */}
                <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#1D68E2] text-white shadow-md border-2 border-white">
                  <Download size={13} strokeWidth={2.5} />
                </div>
              </div>

              {/* 3 Green Checkmark Bullets */}
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span>Instant delivery</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span>Download PDF</span>
                </li>
                <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span>Edit dates (if needed)</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────
            BOTTOM REASSURANCE / DATE CHANGE ACTION BANNER
        ───────────────────────────────────────────────────────── */}
        <div className="mt-10 rounded-2xl border border-slate-200/90 bg-white p-5 sm:px-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D68E2]">
              <Calendar size={22} strokeWidth={2} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Need to change your travel dates?
              </h4>
              <p className="mt-0.5 text-xs text-slate-500 font-normal">
                We offer free date modifications — no need to create a new request.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCreatePlan}
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] px-6 text-xs sm:text-sm font-bold text-white transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            <span>Create Your Travel Plan</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;