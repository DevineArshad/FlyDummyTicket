import { useState, useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  X,
} from "lucide-react";

// Crisp Student Graduation Cap Component matching reference
function StudentCapIcon() {
  return (
    <svg
      viewBox="0 0 36 32"
      className="w-10 h-7 object-contain drop-shadow-xs"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cap Skull/Mortarboard top */}
      <path
        d="M18 3L2 11L18 19L34 11L18 3Z"
        fill="url(#capGradLight)"
        stroke="#4338CA"
        strokeWidth="0.75"
      />
      {/* Cap Under-Brim */}
      <path
        d="M9 15.5V22.5C9 26.5 13 29.5 18 29.5C23 29.5 27 26.5 27 22.5V15.5L18 20.5L9 15.5Z"
        fill="#312E81"
      />
      {/* Tassel Center Button */}
      <circle cx="18" cy="11" r="1.5" fill="#F59E0B" />
      {/* Tassel String */}
      <path
        d="M18 11C21 12 23.5 14 24.5 17"
        stroke="#F59E0B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Golden Hanging Tassel */}
      <path
        d="M24.5 17L23.5 23.5C23.5 24.5 25.5 24.5 25.5 23.5L24.5 17Z"
        fill="#F59E0B"
      />
      <defs>
        <linearGradient id="capGradLight" x1="2" y1="3" x2="34" y2="19" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#4338CA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const majorVisaCards = [
  {
    id: "schengen",
    flagSrc: "/flags/eu.svg",
    isCustomIcon: false,
    title: "Schengen Visa",
    subtitle: "All 27 Countries Covered",
    desc: "France, Germany, Italy, Spain, Switzerland, etc. Article 14(1)(b) Schengen Visa Code strictly requires round-trip flight itineraries with verifiable PNR and confirmed hotel vouchers.",
    recommended: "Flight + Hotel Combo (₹499)",
    serviceHref: "/services/flight-hotel-package",
  },
  {
    id: "us",
    flagSrc: "/flags/us.svg",
    isCustomIcon: false,
    title: "United States Visa",
    subtitle: "B1 / B2 / F1 & More",
    desc: "US Embassy DS-160 interviews. Consular officers instruct applicants to demonstrate proposed travel dates without purchasing non-refundable tickets prior to interview approval.",
    recommended: "Dummy Flight Ticket (₹299)",
    serviceHref: "/services/flight-reservation",
  },
  {
    id: "canada",
    flagSrc: "/flags/ca.svg",
    isCustomIcon: false,
    title: "Canada Visa",
    subtitle: "Tourist & Student",
    desc: "Immigration, Refugees and Citizenship Canada (IRCC) guidelines accept tentative flight booking itineraries demonstrating intent to exit Canada before visa expiration.",
    recommended: "Dummy Flight Ticket (₹299)",
    serviceHref: "/services/flight-reservation",
  },
  {
    id: "uk",
    flagSrc: "/flags/gb.svg",
    isCustomIcon: false,
    title: "United Kingdom Visa",
    subtitle: "Standard & Priority",
    desc: "UK Visas and Immigration (UKVI) guidelines advise submitting tentative flight schedules and confirmed hotel accommodation matching your leave and bank statement durations.",
    recommended: "Flight + Hotel Combo (₹499)",
    serviceHref: "/services/flight-hotel-package",
  },
  {
    id: "australia",
    flagSrc: "/flags/au.svg",
    isCustomIcon: false,
    title: "Australia Visa",
    subtitle: "Visitor & Student",
    desc: "Australian Department of Home Affairs (Subclass 600) requires proof of genuine temporary visit. Verifiable round-trip booking satisfies travel plan proof on ImmiAccount.",
    recommended: "Dummy Flight Ticket (₹299)",
    serviceHref: "/services/flight-reservation",
  },
  {
    id: "dubai",
    flagSrc: "/flags/ae.svg",
    isCustomIcon: false,
    title: "Dubai / UAE Visa",
    subtitle: "Tourist & Transit",
    desc: "Airlines operating to Dubai, Abu Dhabi, Thailand, and Southeast Asia require a confirmed return or onward flight ticket before issuing boarding passes on one-way journeys.",
    recommended: "Cancellation Return Ticket (₹1,499)",
    serviceHref: "/services/return-ticket",
  },
  {
    id: "student",
    flagSrc: null,
    isCustomIcon: true,
    title: "Student Visa",
    subtitle: "All Major Destinations",
    desc: "International student visa applications for USA (F1), UK (Tier 4), Europe, and Canada requiring initial one-way or return flight itineraries and university city accommodation proof.",
    recommended: "Flight + Hotel Combo (₹499)",
    serviceHref: "/services/flight-hotel-package",
  },
];

function VisaCard({ visa, onSelect, isCarousel = false }) {
  return (
    <div
      onClick={() => onSelect(visa)}
      className={`group cursor-pointer rounded-2xl border border-slate-200/80 bg-white hover:border-[#EA580C]/60 hover:shadow-xl hover:-translate-y-1 p-5 sm:p-6 text-center transition-all duration-200 flex flex-col items-center justify-center min-h-[160px] sm:min-h-[170px] shadow-xs ${
        isCarousel ? "w-[72vw] max-w-[260px] shrink-0 snap-center" : ""
      }`}
    >
      <div className="h-8 mb-3 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
        {visa.isCustomIcon ? (
          <StudentCapIcon />
        ) : (
          <img
            src={visa.flagSrc}
            alt={visa.title}
            className="w-10 h-7 object-cover rounded-xs shadow-xs border border-slate-200/60"
            loading="lazy"
          />
        )}
      </div>
      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#EA580C] transition-colors">
        {visa.title}
      </h3>
      <p className="mt-1 text-xs text-slate-500 font-medium">
        {visa.subtitle}
      </p>
    </div>
  );
}

function MajorVisaTypes() {
  const [selectedVisa, setSelectedVisa] = useState(null);
  const scrollRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToBooking = () => {
    setSelectedVisa(null);
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.72));
      setActiveSlide(Math.min(index, majorVisaCards.length - 1));
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
    const next = (activeSlide + 1) % majorVisaCards.length;
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = (activeSlide - 1 + majorVisaCards.length) % majorVisaCards.length;
    scrollToSlide(prev);
  };

  return (
    <section className="bg-[#F8FAFC] py-14 sm:py-24 border-b border-slate-200/80 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-[#EA580C] bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60 mb-2">
            Global Destinations
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-tight">
            Dummy Tickets for All Major Visa Types
          </h2>
          <p className="mt-2.5 text-xs sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Whether you are heading to Europe, North America, or the Middle East — we have got your visa documentation covered.
          </p>

          {/* MOBILE SWIPE TIP & CONTROLS */}
          <div className="mt-4 flex items-center justify-between sm:hidden px-1">
            <span className="text-[11px] font-semibold text-slate-400">
              👈 Swipe destination cards
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous visa"
                className="h-7 w-7 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-2xs cursor-pointer"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next visa"
                className="h-7 w-7 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-2xs cursor-pointer"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            MOBILE CAROUSEL VIEW (< sm)
        ═══════════════════════════════════════════════════════════ */}
        <div className="sm:hidden mb-6">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-3 pt-1 -mx-4 px-4"
          >
            {majorVisaCards.map((visa) => (
              <VisaCard
                key={`mobile-${visa.id}`}
                visa={visa}
                onSelect={setSelectedVisa}
                isCarousel={true}
              />
            ))}
          </div>

          {/* PAGINATION DOTS */}
          <div className="flex justify-center items-center gap-1.5 mt-2">
            {majorVisaCards.map((visa, idx) => (
              <button
                key={`dot-${visa.id}`}
                type="button"
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeSlide === idx
                    ? "w-6 bg-[#EA580C]"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            TABLET & DESKTOP GRID VIEW (sm and above)
        ═══════════════════════════════════════════════════════════ */}
        <div className="hidden sm:block space-y-5">
          {/* ROW 1: 4 CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {majorVisaCards.slice(0, 4).map((visa) => (
              <VisaCard
                key={`desktop-${visa.id}`}
                visa={visa}
                onSelect={setSelectedVisa}
              />
            ))}
          </div>

          {/* ROW 2: 3 CARDS CENTERED */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {majorVisaCards.slice(4, 7).map((visa) => (
              <VisaCard
                key={`desktop-${visa.id}`}
                visa={visa}
                onSelect={setSelectedVisa}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM HELPFUL NOTE */}
        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-xs font-semibold text-slate-500">
            Click or tap any destination card above to view embassy requirements and recommended reservations.
          </p>
        </div>

      </div>

      {/* VISA DETAILS MODAL (When card is clicked) */}
      {selectedVisa && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 text-slate-900 shadow-2xl animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            
            <button
              type="button"
              onClick={() => setSelectedVisa(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 sm:top-5 sm:right-5 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-3.5 mb-4 pr-8">
              <div className="h-10 w-14 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
                {selectedVisa.isCustomIcon ? (
                  <StudentCapIcon />
                ) : (
                  <img
                    src={selectedVisa.flagSrc}
                    alt={selectedVisa.title}
                    className="w-10 h-7 object-cover rounded-xs shadow-xs"
                  />
                )}
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-bold text-slate-900 leading-tight">{selectedVisa.title}</h3>
                <p className="text-xs text-[#EA580C] font-bold">{selectedVisa.subtitle}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              {selectedVisa.desc}
            </p>

            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/80 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Recommended Reservation:
              </span>
              <p className="text-sm font-black text-slate-900">
                {selectedVisa.recommended}
              </p>
              <p className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                <CheckCircle2 size={13} />
                <span>100% Embassy Verifiable with Active Airline PNR</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={scrollToBooking}
                className="flex-1 inline-flex min-h-[44px] h-auto py-2.5 px-4 items-center justify-center gap-2 rounded-xl bg-[#EA580C] text-xs font-bold text-white shadow-md shadow-orange-500/20 hover:bg-[#C2410C] transition cursor-pointer text-center"
              >
                <span>Book for {selectedVisa.title}</span>
                <ArrowRight size={14} className="shrink-0" />
              </button>

              <a
                href={`https://wa.me/919560099481?text=${encodeURIComponent(`Hi FlyDummyTicket Team, I need a verifiable dummy ticket for ${selectedVisa.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] h-auto py-2.5 px-4 items-center justify-center gap-2 rounded-xl bg-emerald-600 text-xs font-bold text-white hover:bg-emerald-700 transition text-center"
              >
                <MessageCircle size={15} className="shrink-0" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

export default MajorVisaTypes;
