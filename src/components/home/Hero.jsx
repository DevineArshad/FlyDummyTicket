import { useState } from "react";
import {
  ArrowRight,
  BedDouble,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Copy,
  ExternalLink,
  MapPin,
  MessageCircle,
  Plane,
  PlaneTakeoff,
  RotateCcw,
  Shield,
  ShieldCheck,
  User,
} from "lucide-react";

const airportsList = [
  { code: "DEL", city: "New Delhi", label: "New Delhi (DEL)" },
  { code: "CDG", city: "Paris", label: "Paris (CDG)" },
  { code: "LHR", city: "London", label: "London Heathrow (LHR)" },
  { code: "JFK", city: "New York", label: "New York (JFK)" },
  { code: "DXB", city: "Dubai", label: "Dubai (DXB)" },
  { code: "FCO", city: "Rome", label: "Rome (FCO)" },
  { code: "SIN", city: "Singapore", label: "Singapore (SIN)" },
  { code: "BOM", city: "Mumbai", label: "Mumbai (BOM)" },
  { code: "BLR", city: "Bengaluru", label: "Bengaluru (BLR)" },
  { code: "BKK", city: "Bangkok", label: "Bangkok (BKK)" },
  { code: "FRA", city: "Frankfurt", label: "Frankfurt (FRA)" },
  { code: "SYD", city: "Sydney", label: "Sydney (SYD)" },
];

const serviceConfig = {
  flight: {
    id: "flight",
    name: "Dummy Flight Ticket",
    price: "₹299",
    priceUsd: "$4",
    tabLabel: "Flight",
    icon: Plane,
  },
  hotel: {
    id: "hotel",
    name: "Hotel Booking",
    price: "₹249",
    priceUsd: "$3",
    tabLabel: "Hotel",
    icon: BedDouble,
  },
  combo: {
    id: "combo",
    name: "Flight + Hotel Combo",
    price: "₹499",
    priceUsd: "$6",
    tabLabel: "Combo",
    badge: "Popular",
    icon: Building2,
  },
  insurance: {
    id: "insurance",
    name: "Travel Medical Insurance",
    price: "₹699",
    priceUsd: "$9",
    tabLabel: "Insurance",
    icon: Shield,
  },
  return: {
    id: "return",
    name: "Cancellation Return Ticket",
    price: "₹1,499",
    priceUsd: "$19",
    tabLabel: "Return Ticket",
    icon: RotateCcw,
  },
};

function formatDateDisplay(dateStr) {
  if (!dateStr) return "";
  try {
    const [year, month, day] = dateStr.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const m = months[parseInt(month, 10) - 1] || "Oct";
    return `${parseInt(day, 10)} ${m} ${year}`;
  } catch {
    return dateStr;
  }
}

function Hero() {
  const [activeTab, setActiveTab] = useState("flight");
  const [tripType, setTripType] = useState("round-trip");
  const [origin, setOrigin] = useState("DEL");
  const [destination, setDestination] = useState("CDG");
  const [departureDate, setDepartureDate] = useState("2026-10-18");
  const [returnDate, setReturnDate] = useState("2026-10-28");
  const [passengerName, setPassengerName] = useState("MR. ALEX KUMAR");
  const [passengerCount, setPassengerCount] = useState("1");
  const [copied, setCopied] = useState(false);

  const activeService = serviceConfig[activeTab] || serviceConfig.flight;
  const originCity = airportsList.find((a) => a.code === origin)?.city || origin;
  const destCity = airportsList.find((a) => a.code === destination)?.city || destination;
  const samplePnr = "FD78491";

  const formattedDep = formatDateDisplay(departureDate);
  const formattedRet = formatDateDisplay(returnDate);
  const datesSummary =
    tripType === "round-trip" || activeTab === "hotel" || activeTab === "insurance"
      ? `${formattedDep} – ${formattedRet}`
      : formattedDep;

  const handleCopyPnr = () => {
    navigator.clipboard?.writeText(samplePnr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi FlyDummyTicket Team, I want to book: ${activeService.name} (${activeService.price}):\n` +
    `• Service: ${activeService.name}\n` +
    `• Route / Destination: ${origin} (${originCity}) → ${destination} (${destCity})\n` +
    `• Format: ${activeTab === "hotel" ? "Hotel Voucher" : activeTab === "insurance" ? "Travel Medical Insurance" : tripType === "round-trip" ? "Round Trip" : "One Way"}\n` +
    `• Dates: ${datesSummary}\n` +
    `• Traveler: ${passengerName} (${passengerCount} PAX)\n` +
    `Please issue my official itinerary PDF.`
  );

  return (
    <section className="relative overflow-hidden bg-[#FAFCFF] border-b border-slate-200/80 py-10 sm:py-14 lg:py-16">
      {/* MINIMALIST SUBTLE AMBIENT ACCENTS */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-orange-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-slate-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start w-full min-w-0">
          
          {/* ═══════════════════════════════════════════════════════════
              LEFT COLUMN: VALUE PROPOSITION & LIVE PREVIEW (6 cols)
          ═══════════════════════════════════════════════════════════ */}
          <div className="col-span-1 lg:col-span-6 space-y-5 sm:space-y-6 w-full min-w-0">
            
            {/* VALUE PROPOSITION BADGE */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 sm:px-3.5 py-1 text-[11px] sm:text-xs font-bold text-[#E6582A] shadow-2xs max-w-full">
              <ShieldCheck size={14} className="text-[#E6582A] shrink-0" />
              <span className="truncate">Verifiable Dummy Tickets starting at just ₹299</span>
            </div>

            {/* MAIN HEADLINE */}
            <div>
              <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-[1.18] break-words">
                Get Your Dummy Ticket with <span className="text-[#E6582A]">Verifiable PNR</span>
              </h1>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-600 font-medium leading-relaxed">
                Genuine airline flight reservations, hotel vouchers & travel insurance for visa applications, proof of return at immigration & passport renewals. Delivered in 10 to 30 minutes.
              </p>
            </div>

            {/* 4 CORE TRUST BULLETS */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 text-[10px] sm:text-xs font-bold text-slate-700 w-full min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 rounded-xl bg-white p-2 sm:p-2.5 border border-slate-200/80 shadow-2xs min-w-0">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span className="leading-tight truncate">Checkable on Airline</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 rounded-xl bg-white p-2 sm:p-2.5 border border-slate-200/80 shadow-2xs min-w-0">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span className="leading-tight truncate">100% Embassy Approved</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 rounded-xl bg-white p-2 sm:p-2.5 border border-slate-200/80 shadow-2xs min-w-0">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span className="leading-tight truncate">10–30 Mins Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 rounded-xl bg-white p-2 sm:p-2.5 border border-slate-200/80 shadow-2xs min-w-0">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span className="leading-tight truncate">Free Date Changes</span>
              </div>
            </div>

            {/* LIVE TICKET PREVIEW CARD */}
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-3.5 sm:p-5 shadow-card-clean w-full min-w-0 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 gap-2 min-w-0">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E6582A] text-white shrink-0">
                    <Plane size={15} className="rotate-[-45deg]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-black text-slate-900 block leading-tight truncate">Live Reservation Sample</span>
                    <span className="text-[10px] text-slate-400 font-semibold block truncate">IATA Standard Format</span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Booking Reference</span>
                  <span className="font-mono text-xs font-black text-[#E6582A] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200 inline-block">
                    {samplePnr}
                  </span>
                </div>
              </div>

              {/* ROUTE DISPLAY */}
              <div className="my-3 sm:my-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 p-2.5 sm:p-3.5 min-w-0">
                <div className="flex items-center justify-between text-center gap-1 sm:gap-2 min-w-0">
                  <div className="text-left min-w-0 flex-1">
                    <span className="text-lg sm:text-2xl font-black text-slate-900 block leading-tight">{origin}</span>
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-600 truncate">{originCity}</p>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 truncate">{formattedDep}</p>
                  </div>

                  <div className="flex flex-col items-center px-1 sm:px-2 shrink-0">
                    <span className="text-[7px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider">NON-STOP</span>
                    <div className="relative my-1 w-8 sm:w-20 flex items-center justify-center">
                      <div className="h-0.5 w-full bg-slate-200" />
                      <Plane size={11} className="text-[#E6582A] absolute" />
                    </div>
                    <span className="rounded-full bg-emerald-50 px-1.5 sm:px-2 py-0.2 text-[7px] sm:text-[8px] font-bold text-emerald-700 border border-emerald-200 whitespace-nowrap">
                      Confirmed / HK1
                    </span>
                  </div>

                  <div className="text-right min-w-0 flex-1">
                    <span className="text-lg sm:text-2xl font-black text-slate-900 block leading-tight">{destination}</span>
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-600 truncate">{destCity}</p>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 truncate">{tripType === "round-trip" ? formattedRet : "DIRECT"}</p>
                  </div>
                </div>
              </div>

              {/* DETAILS & ACTIONS */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs pt-2 border-t border-slate-100 min-w-0">
                <div className="text-slate-600 truncate min-w-0 text-[11px] sm:text-xs">
                  <span>Passenger: </span>
                  <strong className="text-slate-800 font-bold">{passengerName}</strong>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyPnr}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-[10px] sm:text-[11px] font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={11} className="text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={11} />
                        <span>Copy PNR</span>
                      </>
                    )}
                  </button>

                  <a
                    href="/sample-eticket.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] sm:text-[11px] font-bold text-[#E6582A] hover:underline inline-flex items-center gap-0.5"
                  >
                    <span>Sample PDF</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════════
              RIGHT COLUMN: 5-SERVICES BOOKING ENGINE (6 cols)
          ═══════════════════════════════════════════════════════════ */}
          <div id="booking" className="col-span-1 lg:col-span-6 scroll-mt-24 w-full min-w-0">
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-card-clean w-full min-w-0">
              
              {/* TOP ENGINE TABS (5 services: Flight, Hotel, Combo, Insurance, Return) */}
              <div className="flex overflow-x-auto no-scrollbar gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-2xl bg-slate-100/90 mb-5 sm:grid sm:grid-cols-5 sm:gap-1 w-full min-w-0">
                {Object.values(serviceConfig).map((s) => {
                  const isActive = activeTab === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveTab(s.id)}
                      className={`relative flex flex-col items-center justify-center py-1.5 sm:py-2 px-2 sm:px-1 rounded-xl text-center transition-all cursor-pointer shrink-0 min-w-[62px] sm:min-w-0 sm:shrink ${
                        isActive
                          ? "bg-white text-slate-900 font-black shadow-sm"
                          : "text-slate-600 hover:text-slate-900 font-semibold"
                      }`}
                    >
                      <span className="text-[10px] sm:text-xs truncate max-w-full">{s.tabLabel}</span>
                      <span className={`text-[9px] sm:text-[10px] font-bold ${isActive ? "text-[#EA580C]" : "text-slate-400"}`}>
                        {s.price}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* RADIO TRIP TYPE (when not hotel or insurance) */}
              {activeTab !== "hotel" && activeTab !== "insurance" && (
                <div className="flex items-center gap-5 text-xs font-bold text-slate-700 mb-4 pb-3 border-b border-slate-100">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="tripRadio"
                      value="round-trip"
                      checked={tripType === "round-trip"}
                      onChange={() => setTripType("round-trip")}
                      className="accent-[#E6582A] h-4 w-4 cursor-pointer"
                    />
                    <span>Round Trip</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="tripRadio"
                      value="one-way"
                      checked={tripType === "one-way"}
                      onChange={() => setTripType("one-way")}
                      className="accent-[#E6582A] h-4 w-4 cursor-pointer"
                    />
                    <span>One Way</span>
                  </label>
                </div>
              )}

              {/* ROUTE / DESTINATION SELECTORS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {activeTab === "hotel"
                      ? "City / Destination"
                      : activeTab === "insurance"
                      ? "Resident Country"
                      : "From"}
                  </label>
                  <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 focus-within:border-[#E6582A] focus-within:ring-2 focus-within:ring-orange-100">
                    <PlaneTakeoff size={15} className="text-slate-400 mr-2 shrink-0" />
                    <select
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 outline-none pr-5 cursor-pointer"
                    >
                      {airportsList.map((a) => (
                        <option key={`hero-from-${a.code}`} value={a.code}>
                          {a.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="pointer-events-none absolute right-3 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {activeTab === "hotel"
                      ? "Hotel Location"
                      : activeTab === "insurance"
                      ? "Travel Destination"
                      : "To"}
                  </label>
                  <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 focus-within:border-[#E6582A] focus-within:ring-2 focus-within:ring-orange-100">
                    <MapPin size={15} className="text-slate-400 mr-2 shrink-0" />
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 outline-none pr-5 cursor-pointer"
                    >
                      {airportsList.map((a) => (
                        <option key={`hero-to-${a.code}`} value={a.code}>
                          {a.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="pointer-events-none absolute right-3 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* DATES ROW */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {activeTab === "hotel"
                      ? "Check In"
                      : activeTab === "insurance"
                      ? "Coverage Start Date"
                      : "Departure Date"}
                  </label>
                  <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 focus-within:border-[#E6582A] focus-within:ring-2 focus-within:ring-orange-100">
                    <Calendar size={15} className="text-[#E6582A] mr-2 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900 flex-1">
                      {formatDateDisplay(departureDate)}
                    </span>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    />
                  </div>
                </div>

                {tripType === "round-trip" || activeTab === "hotel" || activeTab === "insurance" ? (
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      {activeTab === "hotel"
                        ? "Check Out"
                        : activeTab === "insurance"
                        ? "Coverage End Date"
                        : "Return Date"}
                    </label>
                    <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 focus-within:border-[#E6582A] focus-within:ring-2 focus-within:ring-orange-100">
                      <Calendar size={15} className="text-[#E6582A] mr-2 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-900 flex-1">
                        {formatDateDisplay(returnDate)}
                      </span>
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Trip Type
                    </label>
                    <div className="flex items-center rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-xs text-slate-400">
                      <span>One Way / Onward Journey</span>
                    </div>
                  </div>
                )}
              </div>

              {/* TRAVELLERS & PASSENGER NAME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Travellers / Insured
                  </label>
                  <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                    <User size={15} className="text-slate-400 mr-2 shrink-0" />
                    <select
                      value={passengerCount}
                      onChange={(e) => {
                        setPassengerCount(e.target.value);
                        if (e.target.value === "1") setPassengerName("MR. ALEX KUMAR");
                        else if (e.target.value === "2") setPassengerName("MR. ALEX KUMAR & 1 PAX");
                        else setPassengerName(`MR. ALEX KUMAR + ${Number(e.target.value) - 1} PAX`);
                      }}
                      className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 outline-none pr-5 cursor-pointer"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4+ Family / Group</option>
                    </select>
                    <ChevronDown size={14} className="pointer-events-none absolute right-3 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Primary Name (as on Passport)
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                    <input
                      type="text"
                      value={passengerName}
                      onChange={(e) => setPassengerName(e.target.value)}
                      placeholder="e.g. MR. JOHN DOE"
                      className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 outline-none uppercase"
                    />
                  </div>
                </div>
              </div>

              {/* TOTAL AMOUNT & ACTION BUTTON */}
              <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Total Price</span>
                  <div className="flex items-baseline justify-center sm:justify-start gap-1.5">
                    <span className="text-3xl font-black text-[#E6582A]">{activeService.price}</span>
                    <span className="text-xs text-slate-400 font-semibold">({activeService.priceUsd}) • All Inclusive</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919560099481?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex min-h-[48px] h-auto py-3 px-5 sm:px-7 items-center justify-center gap-2 rounded-xl bg-[#E6582A] text-xs sm:text-sm font-extrabold text-white shadow-md shadow-[#E6582A]/30 hover:bg-[#C9441B] transition cursor-pointer text-center leading-tight"
                >
                  <MessageCircle size={16} className="shrink-0" />
                  <span>Buy {activeService.tabLabel} ({activeService.price})</span>
                  <ArrowRight size={14} className="shrink-0" />
                </a>
              </div>

              <p className="mt-3 text-[11px] text-slate-400 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1">
                <Check size={13} className="text-emerald-600" />
                <span>Delivered within 10–30 minutes directly to WhatsApp & Email.</span>
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;