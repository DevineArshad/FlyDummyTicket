import { useState, useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  X,
} from "lucide-react";

const majorVisaCards = [
  {
    id: "dubai",
    flagSrc: "/flags/ae.svg",
    title: "United Arab Emirates",
    subtitle: "Dubai, Abu Dhabi & Sharjah",
    desc: "Airlines operating to Dubai and UAE airports strictly require a confirmed return or onward flight ticket for Ok-To-Board (OTB) clearance and counter boarding pass issuance on tourist, job seeker & transit visas.",
    recommended: "Cancellation Return Ticket (₹1,499)",
    serviceHref: "/services/return-ticket",
    rules: [
      "Confirmed return or onward ticket required by airline check-in counters",
      "Mandatory for Ok To Board (OTB) clearance",
      "Accepted by GDRFA & Federal Authority for Identity (ICP)",
      "Instant delivery on WhatsApp for urgent airport verification",
    ],
  },
  {
    id: "saudi",
    flagSrc: "/flags/sa.svg",
    title: "Saudi Arabia (KSA)",
    subtitle: "Tourist, Umrah & Business eVisa",
    desc: "Saudi Ministry of Foreign Affairs (MOFA) and Muqeem portal require tourists, pilgrims (Umrah), and commercial visitors to provide verifiable round-trip flight bookings and registered hotel accommodations in Riyadh, Jeddah, Makkah, or Madinah.",
    recommended: "Flight + Hotel Combo (₹499)",
    serviceHref: "/services/flight-hotel-package",
    rules: [
      "Valid for Saudi eVisa, Nusuk platform & Umrah travel",
      "Active 6-digit PNR verifiable on Saudia, Flynas, Emirates, etc.",
      "Synchronized hotel voucher covering stay in Makkah / Madinah / Riyadh",
      "Free travel date modification if pilgrimage plans change",
    ],
  },
  {
    id: "qatar",
    flagSrc: "/flags/qa.svg",
    title: "Qatar",
    subtitle: "Hayya Entry & Transit Visa",
    desc: "Qatar Ministry of Interior and Hayya Portal mandate round-trip flight itineraries with valid airline booking codes and Discover Qatar approved accommodation proof for tourist, transit, and family visit visas at Hamad International Airport (DOH).",
    recommended: "Flight + Hotel Combo (₹499)",
    serviceHref: "/services/flight-hotel-package",
    rules: [
      "Accepted on Hayya Portal and Qatar Visa Centers (QVC)",
      "Includes confirmed return flight booking to home country",
      "Hotel reservation voucher meeting Discover Qatar requirements",
      "Checkable directly on Qatar Airways and partner airlines",
    ],
  },
  {
    id: "oman",
    flagSrc: "/flags/om.svg",
    title: "Oman",
    subtitle: "Tourist eVisa (26A/26B)",
    desc: "Royal Oman Police (ROP) eVisa portal and Muscat Airport immigration require incoming travelers and GCC residents to hold confirmed round-trip airline tickets and hotel reservations prior to boarding flights to Muscat or Salalah.",
    recommended: "Dummy Flight Ticket (₹299)",
    serviceHref: "/services/flight-reservation",
    rules: [
      "Compliant with Royal Oman Police (ROP) eVisa submission",
      "Meets airline counter proof of onward/return travel mandate",
      "Checkable live reservation on Oman Air, SalamAir & Gulf carriers",
      "100% Free date change if visa approval is delayed",
    ],
  },
  {
    id: "kuwait",
    flagSrc: "/flags/kw.svg",
    title: "Kuwait",
    subtitle: "Tourist eVisa & Commercial Visit",
    desc: "Kuwait Ministry of Interior (MOI) guidelines require international visitors and business delegates to hold confirmed round-trip flight itineraries and verified hotel accommodations before traveling to Kuwait International Airport (KWI).",
    recommended: "Dummy Flight Ticket (₹299)",
    serviceHref: "/services/flight-reservation",
    rules: [
      "Fulfills Kuwait MOI eVisa and commercial visit documentation",
      "Verifiable return flight ticket preventing airport boarding denial",
      "Includes genuine GDS booking code with active e-ticket format",
      "Quick 10-30 minute express issuance directly to WhatsApp",
    ],
  },
  {
    id: "bahrain",
    flagSrc: "/flags/bh.svg",
    title: "Bahrain",
    subtitle: "eVisa & On-Arrival Return Proof",
    desc: "Bahrain Nationality, Passports and Residence Affairs (NPRA) mandates that tourist and business visa applicants submit confirmed return flight tickets and registered hotel accommodation bookings before visa issuance.",
    recommended: "Flight + Hotel Combo (₹499)",
    serviceHref: "/services/flight-hotel-package",
    rules: [
      "Accepted by Bahrain NPRA eVisa portal & embassy submissions",
      "Confirmed round-trip flight booking verifiable on Gulf Air & airlines",
      "Synchronized hotel reservation voucher for Manama stay",
      "Free date modifications included at zero extra cost",
    ],
  },
];

function VisaCard({ visa, onSelect, isCarousel = false }) {
  return (
    <div
      onClick={() => onSelect(visa)}
      className={`group cursor-pointer rounded-2xl border border-slate-200/80 bg-white hover:border-[#EA580C]/60 hover:shadow-xl hover:-translate-y-1 p-5 sm:p-6 text-center transition-all duration-200 flex flex-col items-center justify-center min-h-[165px] sm:min-h-[175px] shadow-xs ${
        isCarousel ? "w-[72vw] max-w-[260px] shrink-0 snap-center" : ""
      }`}
    >
      <div className="h-8 mb-3 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
        <img
          src={visa.flagSrc}
          alt={`${visa.title} Flag`}
          className="w-10 h-7 object-cover rounded-xs shadow-xs border border-slate-200/60"
          loading="lazy"
        />
      </div>
      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#EA580C] transition-colors leading-snug">
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
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveSlide(index);
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
            GULF & GCC COUNTRIES
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-tight">
            Dummy Tickets for All Gulf Country Visas
          </h2>
          <p className="mt-2.5 text-xs sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            We specialize exclusively in Gulf Cooperation Council (GCC) visas — UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain with 100% airline & immigration clearance.
          </p>

          {/* MOBILE SWIPE TIP & CONTROLS */}
          <div className="mt-4 flex items-center justify-between sm:hidden px-1">
            <span className="text-[11px] font-semibold text-slate-400">
              👈 Swipe Gulf destination cards
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Gulf country"
                className="h-7 w-7 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-2xs cursor-pointer"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Gulf country"
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
            TABLET & DESKTOP GRID VIEW (6 GULF COUNTRIES)
        ═══════════════════════════════════════════════════════════ */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {majorVisaCards.map((visa) => (
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
            Click or tap any Gulf destination above to view visa itinerary requirements and recommended reservations.
          </p>
        </div>

      </div>

      {/* GULF VISA DETAILS MODAL */}
      {selectedVisa && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 text-slate-900 shadow-2xl animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVisa(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 h-9 w-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={selectedVisa.flagSrc}
                alt={`${selectedVisa.title} Flag`}
                className="w-11 h-8 object-cover rounded-xs shadow-xs border border-slate-200"
              />
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  {selectedVisa.title}
                </h3>
                <span className="text-xs font-bold text-[#E6582A] block">
                  {selectedVisa.subtitle}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>{selectedVisa.desc}</p>

              {/* Requirement Checklist */}
              {selectedVisa.rules && (
                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-3.5 space-y-2">
                  <span className="text-xs font-black text-slate-800 uppercase tracking-wider block mb-1">
                    Mandatory Travel Proof Checklist:
                  </span>
                  {selectedVisa.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Recommended Package */}
              <div className="rounded-2xl bg-orange-50/70 border border-orange-200/80 p-3.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#E6582A] block">
                  Recommended Service For This Visa
                </span>
                <span className="font-black text-slate-900 text-sm mt-0.5 block">
                  {selectedVisa.recommended}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={selectedVisa.serviceHref}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#E6582A] py-3 px-4 text-xs sm:text-sm font-extrabold text-white shadow-md shadow-[#E6582A]/25 hover:bg-[#C9441B] transition cursor-pointer text-center"
              >
                <span>Book for {selectedVisa.title}</span>
                <ArrowRight size={15} />
              </a>

              <a
                href={`https://wa.me/919560099481?text=${encodeURIComponent(
                  `Hi FlyDummyTicket Team, I need visa reservation assistance for: ${selectedVisa.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 px-4 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
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
