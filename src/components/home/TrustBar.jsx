import cloudsImg from "../../assets/images/airplane_sunrise_clouds.jpg";
import {
  Check,
  CheckCircle2,
  FileText,
  Globe,
  Plane,
  Shield,
  ShieldCheck,
  Users,
  X,
  Zap,
} from "lucide-react";

const fullTicketPoints = [
  {
    title: "₹45,000 – ₹85,000+ per passenger",
    desc: "High upfront cost",
  },
  {
    title: "Full ticket cost lost, or ₹12,000+ cancellation fee",
    desc: "Risk of visa rejection",
  },
  {
    title: "Checkable on airline website",
    desc: "Shows as confirmed booking",
  },
  {
    title: "Uncertain acceptance",
    desc: "May not be required, but costly",
  },
  {
    title: "₹5,000 – ₹15,000 airline penalty + fare difference",
    desc: "Charges for date changes",
  },
  {
    title: "Immediate full payment required",
    desc: "Financial commitment",
  },
];

const dummyTicketPoints = [
  {
    title: "Just ₹350 flat fee",
    desc: "Affordable for everyone",
  },
  {
    title: "Zero risk. Your money stays in your account",
    desc: "No cancellation loss",
  },
  {
    title: "Checkable on airline website (GDS active)",
    desc: "Looks like a real itinerary",
  },
  {
    title: "100% accepted under Schengen Visa Code Article 14",
    desc: "Meets embassy requirements",
  },
  {
    title: "Free date modifications",
    desc: "If your travel plans change",
  },
  {
    title: "Get your itinerary in 10–15 minutes",
    desc: "No waiting, no stress",
  },
];

const airlines = [
  {
    name: "Emirates",
    renderLogo: () => (
      <span className="font-serif font-black text-rose-600 text-sm tracking-tight">
        Emirates
      </span>
    ),
  },
  {
    name: "Qatar Airways",
    renderLogo: () => (
      <span className="font-bold text-[#5c0632] text-xs tracking-wider uppercase">
        QATAR <span className="font-light text-[10px]">AIRWAYS</span>
      </span>
    ),
  },
  {
    name: "Lufthansa",
    renderLogo: () => (
      <div className="flex items-center gap-1 text-[#05164d]">
        <div className="h-4 w-4 rounded-full border border-[#05164d] flex items-center justify-center">
          <Plane size={9} className="rotate-45" />
        </div>
        <span className="font-bold text-xs tracking-tight">Lufthansa</span>
      </div>
    ),
  },
  {
    name: "Singapore Airlines",
    renderLogo: () => (
      <div className="flex items-center gap-1 text-[#00205b]">
        <span className="text-amber-500 font-black text-sm">✦</span>
        <span className="font-bold text-[11px] uppercase tracking-tight">
          SINGAPORE <span className="text-[9px] font-medium">AIRLINES</span>
        </span>
      </div>
    ),
  },
  {
    name: "Air France",
    renderLogo: () => (
      <div className="flex items-center gap-1">
        <span className="font-black text-xs text-[#002157] tracking-wider">
          AIRFRANCE
        </span>
        <span className="h-3 w-1 bg-red-600 skew-x-[-20deg]" />
      </div>
    ),
  },
  {
    name: "British Airways",
    renderLogo: () => (
      <div className="flex items-center gap-1">
        <span className="font-semibold text-xs text-[#075aaa] tracking-wider">
          BRITISH AIRWAYS
        </span>
        <span className="h-2 w-3 rounded-tr-full bg-rose-500" />
      </div>
    ),
  },
  {
    name: "KLM",
    renderLogo: () => (
      <div className="flex items-center gap-0.5 text-[#00a1de]">
        <span className="text-[10px]">👑</span>
        <span className="font-black text-xs tracking-wider">KLM</span>
      </div>
    ),
  },
  {
    name: "Turkish Airlines",
    renderLogo: () => (
      <div className="flex items-center gap-1 text-[#c70000]">
        <div className="h-3.5 w-3.5 rounded-full bg-[#c70000] text-white flex items-center justify-center text-[8px] font-black">
          ✈
        </div>
        <span className="font-bold text-[10px] uppercase tracking-tight text-slate-800">
          TURKISH AIRLINES
        </span>
      </div>
    ),
  },
  {
    name: "EgyptAir",
    renderLogo: () => (
      <div className="flex items-center gap-1.5 text-[#002855]">
        <div className="h-4 w-4 rounded-full bg-[#002855] text-white flex items-center justify-center text-[9px] font-bold">
          ✈
        </div>
        <span className="font-extrabold text-xs tracking-wider uppercase text-[#002855]">
          EGYPT<span className="text-blue-600 font-black">AIR</span>
        </span>
      </div>
    ),
  },
];

function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200/80 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* ─────────────────────────────────────────────────────────────
            TOP SECTION: Headlines + Passport / Visa Approved Illustration
        ───────────────────────────────────────────────────────────── */}
        <div className="relative grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          
          <div>
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-lg border border-blue-200/80 bg-blue-50/80 px-3.5 py-1.5 shadow-xs">
              <ShieldCheck size={14} className="text-[#2563eb]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                Trusted By Travellers Worldwide
              </span>
            </div>

            {/* Main Section Headline */}
            <h2 className="mt-4 text-[38px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0f172a] sm:text-[48px] lg:text-[52px]">
              Smarter Travel Plans <br />
              for a <span className="text-[#2563eb]">Smoother Visa Journey</span>
            </h2>

            {/* Subheadline */}
            <p className="mt-3.5 max-w-[620px] text-[15px] sm:text-[16px] leading-relaxed text-slate-500 font-normal">
              Avoid high costs, uncertainty and last-minute stress. Get a professional travel itinerary — the smart and safe choice for your visa application.
            </p>

            {/* 4 Feature Value Badges Row */}
            <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
              {/* Badge 1: Visa Friendly */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-500 shadow-xs">
                  <Shield size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 leading-tight">Visa Friendly</p>
                  <p className="text-[11px] text-slate-400 font-medium">Accepted Worldwide</p>
                </div>
              </div>

              {/* Badge 2: Instant & Easy */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-500 shadow-xs">
                  <Zap size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 leading-tight">Instant & Easy</p>
                  <p className="text-[11px] text-slate-400 font-medium">Get in Minutes</p>
                </div>
              </div>

              {/* Badge 3: Secure & Reliable */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-xs">
                  <Globe size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 leading-tight">Secure & Reliable</p>
                  <p className="text-[11px] text-slate-400 font-medium">Your Data is Safe</p>
                </div>
              </div>

              {/* Badge 4: Trusted by */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 shadow-xs">
                  <Users size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 leading-tight">Trusted by</p>
                  <p className="text-[11px] text-slate-400 font-medium">10,000+ Travellers</p>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              TOP RIGHT ILLUSTRATION: Passport + Approved Visa + Airplane
          ───────────────────────────────────────────────────────────── */}
          <div className="relative hidden lg:flex items-center justify-center h-full min-h-[220px]">
            {/* Cursive text: Plan Today, Travel Tomorrow */}
            <div className="absolute left-6 top-1 text-center select-none">
              <p className="font-handwriting text-2xl font-bold text-slate-700 -rotate-6">
                Plan Today, <br />
                <span className="text-[#2563eb]">Travel Tomorrow</span>
              </p>
              {/* Flight path curve */}
              <svg className="w-32 h-12 text-[#2563eb] -mt-1 -ml-2" viewBox="0 0 120 40" fill="none">
                <path
                  d="M10,35 Q60,5 110,15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            {/* Little soaring airplane */}
            <div className="absolute left-32 top-8 text-[#2563eb] -rotate-12 animate-pulse">
              <Plane size={24} className="fill-blue-500 text-blue-600" />
            </div>

            {/* 3D Passport & Visa Approved Document Group */}
            <div className="relative right-4 flex items-center justify-center">
              {/* Approved Visa Paper Sheet behind passport */}
              <div className="relative -mr-12 -mt-4 w-44 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg rotate-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-black tracking-widest text-slate-800">VISA</span>
                  <span className="rounded-md border-2 border-emerald-500 bg-emerald-50 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-emerald-700">
                    APPROVED
                  </span>
                </div>
                <div className="mt-2.5 space-y-1.5 opacity-60">
                  <div className="h-1.5 w-3/4 rounded-full bg-slate-300" />
                  <div className="h-1.5 w-full rounded-full bg-slate-200" />
                  <div className="h-1.5 w-5/6 rounded-full bg-slate-200" />
                  <div className="h-1.5 w-1/2 rounded-full bg-slate-200" />
                </div>
              </div>

              {/* Blue Passport Book */}
              <div className="relative z-10 flex h-48 w-34 flex-col items-center justify-between rounded-2xl border border-blue-950 bg-gradient-to-br from-[#1e3a8a] via-[#172554] to-[#0f172a] p-4 text-white shadow-2xl -rotate-6 transition-transform hover:rotate-0 duration-300">
                <div className="h-1 w-6 rounded-full bg-blue-300/40" />
                
                {/* Gold Globe Emblem */}
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-amber-300/80 p-2 shadow-inner">
                    <Globe size={28} className="text-amber-300" />
                  </div>
                  <p className="mt-2 text-[11px] font-black uppercase tracking-[0.25em] text-amber-200">
                    PASSPORT
                  </p>
                </div>

                <div className="h-1.5 w-10 rounded-full bg-amber-400/40" />
              </div>
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            3 COMPARISON & INSPIRATION CARDS GRID
        ───────────────────────────────────────────────────────────── */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3 items-stretch">

          {/* ═══════════════════════════════════════════════════════════
              CARD 1: BUYING A FULL-PRICE TICKET (DANGER / RED)
          ═══════════════════════════════════════════════════════════ */}
          <div className="flex flex-col justify-between rounded-3xl border border-rose-100/90 bg-[#fef7f7] p-6 shadow-xs sm:p-7">
            <div>
              {/* Card Header */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-500 shadow-xs">
                  <Plane size={20} className="rotate-45" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                    Buying a Full-Price Ticket
                  </h3>
                  <p className="text-xs font-semibold text-rose-500">
                    Higher cost. Higher risk.
                  </p>
                </div>
              </div>

              {/* Points List */}
              <div className="mt-6 space-y-4">
                {fullTicketPoints.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500 mt-0.5">
                      <X size={13} strokeWidth={2.8} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 leading-tight">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              CARD 2: FLYDUMMYTICKET ITINERARY (SUCCESS / GREEN)
          ═══════════════════════════════════════════════════════════ */}
          <div className="flex flex-col justify-between rounded-3xl border border-emerald-100/90 bg-[#f3faf6] p-6 shadow-xs sm:p-7">
            <div>
              {/* Card Header */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-xs">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                    FlyDummyTicket Itinerary
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600">
                    Smarter choice. Zero risk.
                  </p>
                </div>
              </div>

              {/* Points List */}
              <div className="mt-6 space-y-4">
                {dummyTicketPoints.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5">
                      <Check size={13} strokeWidth={2.8} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 leading-tight">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              CARD 3: TRAVEL WITH CONFIDENCE (INSPIRATION / BLUE)
          ═══════════════════════════════════════════════════════════ */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-blue-100/90 bg-gradient-to-b from-[#ebf3ff] via-[#e2edff] to-white p-6 shadow-xs sm:p-7">
            <div>
              {/* Top Tag */}
              <div className="flex items-center gap-1.5 text-[#2563eb]">
                <ShieldCheck size={15} />
                <span className="text-[10px] font-bold uppercase tracking-[0.14em]">
                  Travel With Confidence
                </span>
              </div>

              {/* Card Headline */}
              <h3 className="mt-2 text-[22px] font-extrabold leading-tight text-slate-900 sm:text-[24px]">
                A simple step today for bigger tomorrow.
              </h3>

              {/* Subtext */}
              <p className="mt-2 text-xs leading-relaxed text-slate-600 font-medium">
                Get a professional travel itinerary that meets embassy requirements and keeps your plans flexible.
              </p>
            </div>

            {/* Scenic Image of Airplane Window / Clouds */}
            <div className="relative my-4 h-40 overflow-hidden rounded-2xl border border-white/80 shadow-md">
              <img
                src={cloudsImg}
                alt="Airplane soaring over clouds and mountains"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Bottom Glassmorphism Quote Box */}
            <div className="rounded-2xl border border-white/90 bg-white/95 p-4 shadow-sm backdrop-blur-md">
              <div className="flex items-start gap-2.5">
                <span className="font-serif text-2xl font-black text-[#2563eb] leading-none">
                  ❝
                </span>
                <p className="text-xs font-semibold italic text-slate-700 leading-relaxed">
                  A well-prepared itinerary brings you one step closer to your dream destination.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            BOTTOM AIRLINE COMPATIBILITY STRIP
        ───────────────────────────────────────────────────────────── */}
        <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:p-5">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            <div className="shrink-0">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                Verified & <br className="hidden sm:inline" />
                Accepted by Leading <br className="hidden sm:inline" />
                Airlines
              </p>
            </div>

            {/* Airline Badges Grid/Row */}
            <div className="flex flex-wrap items-center gap-2.5 flex-1">
              {airlines.map((airline) => (
                <div
                  key={airline.name}
                  className="flex h-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white px-3.5 shadow-2xs hover:border-blue-200 transition"
                >
                  {airline.renderLogo()}
                </div>
              ))}
            </div>
          </div>

          {/* Central Disclaimer Notice */}
          <p className="mt-3.5 text-center text-xs text-slate-400 font-medium">
            Our itineraries follow international standards and are accepted by embassies and visa application centres worldwide.
          </p>
        </div>

      </div>
    </section>
  );
}

export default TrustBar;