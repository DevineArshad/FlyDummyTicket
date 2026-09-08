import airportWindowImg from "../../assets/images/service_return.jpg";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Globe,
  MessageCircle,
  Plane,
  PlaneTakeoff,
  ShieldCheck,
  Star,
  Users,
  Zap,
} from "lucide-react";

const stats = [
  {
    value: "48,500+",
    label: "Travelers served",
    icon: Users,
    iconColor: "text-[#1D68E2]",
    iconBg: "bg-blue-50",
  },
  {
    value: "10–30 min",
    label: "Average delivery",
    icon: Clock,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    value: "100%",
    label: "Embassy acceptance",
    icon: ShieldCheck,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
  },
  {
    value: "4.9 / 5",
    label: "Customer rating",
    icon: Star,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
  },
];

const guarantees = [
  {
    icon: FileText,
    title: "Real 6-character",
    subtitle: "airline PNR included",
  },
  {
    icon: CheckCircle2,
    title: "Verifiable on all major",
    subtitle: "airline websites",
  },
  {
    icon: Globe,
    title: "100% Embassy & VFS",
    subtitle: "Global accepted",
  },
  {
    icon: Calendar,
    title: "Free date modifications",
    subtitle: "— no charge",
  },
];

function FinalCTA() {
  const handleScrollToPackages = () => {
    const el = document.getElementById("packages") || document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#services";
    }
  };

  return (
    <section
      id="start"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-[#F8FAFD] via-white to-[#F0F5FD] py-16 sm:py-20 lg:py-24"
    >
      {/* ─────────────────────────────────────────────────────────
          BACKGROUND WATERMARKS & AIRLINER CONTRAILS
      ───────────────────────────────────────────────────────── */}
      {/* Soft Blue Atmospheric Blurs */}
      <div className="pointer-events-none absolute -top-16 left-1/3 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full bg-indigo-50/50 blur-3xl" />

      {/* Center Flying Airplane with Dashed Contrail */}
      <div className="pointer-events-none absolute top-8 left-[45%] hidden select-none lg:block z-0">
        <svg className="w-48 h-16 text-blue-300" viewBox="0 0 180 60" fill="none">
          <path
            d="M 10 50 C 60 45, 110 30, 160 15"
            stroke="#93C5FD"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute right-0 top-1 text-blue-600 rotate-[22deg]">
          <Plane size={20} className="fill-blue-500 text-blue-600" />
        </div>
      </div>

      {/* Doodles: "Travel With Confidence" */}
      <div className="pointer-events-none absolute top-4 left-[38%] hidden select-none xl:block rotate-[-7deg] text-slate-500 font-handwriting text-2xl font-bold leading-tight z-10">
        Travel
        <br />
        <span className="text-slate-500">With Confidence</span>
      </div>

      {/* Doodles: "More Destinations Brighter Futures" */}
      <div className="pointer-events-none absolute top-3 left-[62%] hidden select-none xl:block rotate-[6deg] text-slate-500 font-handwriting text-2xl font-bold leading-tight z-10">
        More Destinations
        <br />
        <span className="text-slate-500">Brighter Futures</span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">
        
        {/* ─────────────────────────────────────────────────────────
            3-COLUMN MAIN HERO GRID
        ───────────────────────────────────────────────────────── */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr] xl:grid-cols-[1.1fr_0.95fr_0.85fr] items-center">
          
          {/* ═══════════════════════════════════════════════════════
              LEFT: HEADLINE, SUBTITLE & 2 ACTION BUTTONS
          ═══════════════════════════════════════════════════════ */}
          <div className="max-w-xl">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-700 shadow-xs">
              <Zap size={13} className="text-[#1D68E2] fill-[#1D68E2]" />
              <span>
                INSTANT DIGITAL DELIVERY{" "}
                <strong className="text-[#1D68E2]">IN 10 TO 30 MINUTES</strong>
              </span>
            </div>

            {/* Headline */}
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[#0F172A] sm:text-4xl lg:text-[44px] leading-[1.12]">
              Ready to secure your <br />
              <span className="text-[#1D68E2]">travel reservation?</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-500 font-normal">
              Join over 48,500 travelers who obtained their Schengen, US, UK, and
              Canadian visas with legitimate, airline-verifiable reservation
              records &mdash; starting from just{" "}
              <strong className="text-[#1D68E2] font-bold">₹250</strong>.
            </p>

            {/* Two Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary Blue Button */}
              <button
                type="button"
                onClick={handleScrollToPackages}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-[#1D68E2] hover:bg-[#1556BE] px-5 py-3.5 text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                    <PlaneTakeoff size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm font-bold leading-tight text-white">
                      Choose Your Package
                    </p>
                    <p className="text-[11px] text-blue-100 font-medium">From ₹250</p>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              {/* Secondary WhatsApp Button */}
              <a
                href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20team,%20I%20would%20like%20to%20book%20a%20travel%20reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50 px-5 py-3.5 text-slate-900 shadow-2xs transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <MessageCircle size={18} className="fill-emerald-500 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm font-bold leading-tight text-slate-900">
                      Chat on WhatsApp
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">Get instant help</p>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-slate-400 transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════
              MIDDLE: 2x2 FLOATING STAT CARDS
          ═══════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[22px] border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${stat.iconBg} ${stat.iconColor}`}
                    >
                      <Icon size={20} />
                    </div>
                  </div>
                  <p className="mt-3.5 text-2xl sm:text-[28px] font-extrabold tracking-tight text-slate-900 leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs text-slate-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ═══════════════════════════════════════════════════════
              RIGHT: SLANTED SUNSET RUNWAY WINDOW & LUGGAGE
          ═══════════════════════════════════════════════════════ */}
          <div className="relative hidden lg:flex flex-col items-center justify-center">
            {/* Slanted Container */}
            <div className="relative w-full max-w-[290px] h-[340px] rounded-[36px] overflow-hidden shadow-xl border-4 border-white">
              {/* Background Photo */}
              <img
                src={airportWindowImg}
                alt="Airport sunset window"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

              {/* Floating Pill: "Your Next Journey Awaits" */}
              <div className="absolute top-6 left-5 z-20">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 shadow-md border border-blue-100 text-[11px] font-extrabold text-slate-800">
                  <Plane size={12} className="text-[#1D68E2] rotate-45" />
                  <span>Your Next Journey Awaits</span>
                </div>
              </div>

              {/* Bottom Tilted Passport & Ticket Badge */}
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <div className="rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/20 p-3 text-white flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-10 rounded bg-[#14213D] border border-amber-300/40 p-1 flex flex-col justify-between">
                      <span className="text-[5px] font-bold text-amber-200 uppercase tracking-widest text-center">PASSPORT</span>
                      <div className="w-3.5 h-3.5 rounded-full border border-amber-300/40 mx-auto" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">Embassy Ready</p>
                      <p className="text-[10px] text-blue-200">GDS Active Reservation</p>
                    </div>
                  </div>
                  <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                    Live
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Caption */}
            <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400 text-center">
              PEOPLE EXPLORE THE WORLD
            </p>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────
            BOTTOM FEATURE REASSURANCE BAR
        ───────────────────────────────────────────────────────── */}
        <div className="mt-12 rounded-2xl border border-slate-200/90 bg-white p-5 sm:px-8 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {guarantees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D68E2]">
                    <Icon size={20} strokeWidth={1.9} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500 font-normal leading-snug">
                      {item.subtitle}
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

export default FinalCTA;