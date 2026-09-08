import { useEffect, useState } from "react";
import heroBg from "../../assets/images/hero-bg.png";
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
  FileCheck2,
  FileText,
  Globe,
  Info,
  MapPin,
  MessageCircle,
  Plane,
  PlaneTakeoff,
  RotateCcw,
  Send,
  ShieldCheck,
  Ticket,
  User,
  Users,
  X,
  Zap,
} from "lucide-react";

// Curated realistic route database
const routesData = {
  "DEL-CDG": {
    originCity: "New Delhi",
    originAirport: "Indira Gandhi International",
    destCity: "Paris",
    destAirport: "Charles de Gaulle",
    airline: "Air France / Sample Airline",
    airlineShort: "Sample Airline",
    flightNo: "SA 271",
    pnr: "FD20261018",
    duration: "9h 15m",
    depTime: "10:30",
    arrTime: "16:20",
    baggage: "30 KG",
    aircraft: "Boeing 777-300ER",
  },
  "DEL-LHR": {
    originCity: "New Delhi",
    originAirport: "Indira Gandhi International",
    destCity: "London",
    destAirport: "London Heathrow",
    airline: "British Airways",
    airlineShort: "British Airways",
    flightNo: "BA 142",
    pnr: "FD20261018",
    duration: "9h 30m",
    depTime: "08:15",
    arrTime: "14:45",
    baggage: "32 KG",
    aircraft: "Airbus A350-1000",
  },
  "DEL-JFK": {
    originCity: "New Delhi",
    originAirport: "Indira Gandhi International",
    destCity: "New York",
    destAirport: "John F. Kennedy Intl",
    airline: "Emirates",
    airlineShort: "Emirates",
    flightNo: "EK 203",
    pnr: "FD20261018",
    duration: "14h 45m",
    depTime: "04:10",
    arrTime: "15:20",
    baggage: "2 x 23 KG",
    aircraft: "Airbus A380-800",
  },
  "DEL-DXB": {
    originCity: "New Delhi",
    originAirport: "Indira Gandhi International",
    destCity: "Dubai",
    destAirport: "Dubai International",
    airline: "Emirates",
    airlineShort: "Emirates",
    flightNo: "EK 511",
    pnr: "FD20261018",
    duration: "3h 50m",
    depTime: "09:40",
    arrTime: "12:30",
    baggage: "30 KG",
    aircraft: "Boeing 777-300ER",
  },
  "DEL-FCO": {
    originCity: "New Delhi",
    originAirport: "Indira Gandhi International",
    destCity: "Rome",
    destAirport: "Leonardo da Vinci–Fiumicino",
    airline: "ITA Airways",
    airlineShort: "ITA Airways",
    flightNo: "AZ 771",
    pnr: "FD20261018",
    duration: "8h 40m",
    depTime: "11:20",
    arrTime: "17:00",
    baggage: "30 KG",
    aircraft: "Airbus A330-900",
  },
  "BOM-LHR": {
    originCity: "Mumbai",
    originAirport: "Chhatrapati Shivaji Intl",
    destCity: "London",
    destAirport: "London Heathrow",
    airline: "Virgin Atlantic",
    airlineShort: "Virgin Atlantic",
    flightNo: "VS 355",
    pnr: "FD20261018",
    duration: "9h 40m",
    depTime: "02:40",
    arrTime: "07:30",
    baggage: "32 KG",
    aircraft: "Boeing 787-9",
  },
  "BLR-SIN": {
    originCity: "Bengaluru",
    originAirport: "Kempegowda International",
    destCity: "Singapore",
    destAirport: "Singapore Changi",
    airline: "Singapore Airlines",
    airlineShort: "Singapore Air",
    flightNo: "SQ 503",
    pnr: "FD20261018",
    duration: "4h 30m",
    depTime: "23:10",
    arrTime: "06:10",
    baggage: "30 KG",
    aircraft: "Airbus A350-900",
  },
};

const airportsList = [
  { code: "DEL", city: "New Delhi", label: "New Delhi (DEL)" },
  { code: "CDG", city: "Paris", label: "Paris (CDG)" },
  { code: "LHR", city: "London", label: "London (LHR)" },
  { code: "JFK", city: "New York", label: "New York (JFK)" },
  { code: "DXB", city: "Dubai", label: "Dubai (DXB)" },
  { code: "FCO", city: "Rome", label: "Rome (FCO)" },
  { code: "SIN", city: "Singapore", label: "Singapore (SIN)" },
  { code: "BOM", city: "Mumbai", label: "Mumbai (BOM)" },
  { code: "BLR", city: "Bengaluru", label: "Bengaluru (BLR)" },
  { code: "BKK", city: "Bangkok", label: "Bangkok (BKK)" },
];

const serviceTabs = [
  { id: "flight", label: "Flight Ticket", icon: Plane, price: "₹350" },
  { id: "hotel", label: "Hotel Voucher", icon: BedDouble, price: "₹250" },
  { id: "combo", label: "Flight + Hotel", icon: Building2, price: "₹500" },
  { id: "onward", label: "Return Ticket", icon: RotateCcw, price: "₹1,000" },
];

function formatDateForDisplay(dateStr) {
  if (!dateStr) return "";
  try {
    const [year, month, day] = dateStr.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const m = months[parseInt(month, 10) - 1] || "Oct";
    return `${m} ${parseInt(day, 10)}, ${year}`;
  } catch {
    return dateStr;
  }
}

function formatDateForTicket(dateStr) {
  if (!dateStr) return "";
  try {
    const [year, month, day] = dateStr.split("-");
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const m = months[parseInt(month, 10) - 1] || "OCT";
    return `${day} ${m} ${year}`;
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
  const [passengerCount, setPassengerCount] = useState("1");
  const [passengerName, setPassengerName] = useState("MR. ALEX KUMAR");
  const [cabinClass, setCabinClass] = useState("Economy");
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleSelectService = (e) => {
      const tabId = e.detail?.tabId;
      if (tabId && serviceTabs.some((t) => t.id === tabId)) {
        setActiveTab(tabId);
      }
    };
    window.addEventListener("select-service-tab", handleSelectService);
    return () => window.removeEventListener("select-service-tab", handleSelectService);
  }, []);

  const activeService = serviceTabs.find((s) => s.id === activeTab) || serviceTabs[0];

  const routeKey = `${origin}-${destination}`;
  const currentRoute =
    routesData[routeKey] || {
      originCity: airportsList.find((a) => a.code === origin)?.city || origin,
      destCity: airportsList.find((a) => a.code === destination)?.city || destination,
      airline: "Sample Airline",
      airlineShort: "Sample Airline",
      flightNo: "SA 271",
      pnr: "FD20261018",
      duration: "9h 15m",
      depTime: "10:30",
      arrTime: "16:20",
      baggage: "30 KG",
      aircraft: "Boeing 787-9 Dreamliner",
    };

  const handleCopyPnr = (code) => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const formattedDepTicket = formatDateForTicket(departureDate) || "18 OCT 2026";
  const formattedRetTicket = formatDateForTicket(returnDate) || "28 OCT 2026";
  const datesSummary =
    tripType === "round-trip"
      ? `${formattedDepTicket} – ${formattedRetTicket}`
      : `${formattedDepTicket}`;

  const referenceNo = "FD20261018";

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi FlyDummyTicket Team, I want to book a ${activeService.label}:\n` +
      `• Route: ${origin} (${currentRoute.originCity}) to ${destination} (${currentRoute.destCity})\n` +
      `• Dates: ${datesSummary}\n` +
      `• Passenger: ${passengerName} (${passengerCount} Traveller)\n` +
      `• Cabin: ${cabinClass}\n` +
      `• Reference: ${referenceNo}\n` +
      `Please issue my official itinerary PDF.`
  );

  return (
    <section id="home" className="relative overflow-hidden bg-[#f8faff]">
      {/* ─────────────────────────────────────────────────────────────
          BACKGROUND LAYER: Airplane soaring across Paris sky
      ───────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        {/* High-res Paris Sky & Airplane Background */}
        <img
          src={heroBg}
          alt="Paris Flight Travel Sky"
          className="absolute right-0 top-0 h-full w-full object-cover object-[82%_top] opacity-90 sm:opacity-95 lg:opacity-100"
        />

        {/* Soft gradient masks to keep left side razor sharp and legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20 lg:via-white/75 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent" />

        {/* Floating Cursive Paris Quote beside Eiffel Tower */}
        <div className="absolute right-4 sm:right-8 lg:right-10 top-[390px] lg:top-[430px] hidden xl:block text-right z-10 pointer-events-none select-none">
          <p className="font-handwriting text-2xl lg:text-[28px] font-bold text-slate-800 leading-none drop-shadow-xs -rotate-3">
            Paris <br />
            <span className="text-slate-700 text-xl lg:text-[22px]">is always</span> <br />
            a good idea <span className="text-rose-500">❤️</span>
          </p>
        </div>

        {/* Circular Travel Stamp beside bottom of Eiffel Tower */}
        <div className="absolute right-4 sm:right-8 bottom-6 sm:bottom-8 hidden xl:flex items-center gap-1.5 opacity-60 pointer-events-none select-none z-10">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-slate-500 text-slate-600">
            <div className="absolute inset-1 rounded-full border border-slate-400" />
            <span className="absolute top-1 text-[7px] font-black tracking-[0.2em]">
              TRAVEL
            </span>
            <Plane size={15} className="rotate-45 text-slate-700" />
            <span className="absolute bottom-1 text-[7px] font-black tracking-[0.18em]">
              THE WORLD
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-6 rounded-full bg-slate-400" />
            <span className="h-0.5 w-10 rounded-full bg-slate-400" />
            <span className="h-0.5 w-7 rounded-full bg-slate-400" />
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT CONTAINER
      ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-7 pb-16 lg:pt-10 lg:pb-20">
        
        {/* 2-Column Responsive Layout */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 xl:gap-14">

          {/* ═══════════════════════════════════════════════════════════
              LEFT COLUMN: Header, Badges & Booking Configurator Card
          ═══════════════════════════════════════════════════════════ */}
          <div className="max-w-[620px]">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-lg border border-blue-200/80 bg-blue-50/90 px-3.5 py-1.5 shadow-xs backdrop-blur-xs">
              <Building2 size={13} className="text-[#2563eb]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                Travel Itinerary For Visa & Documentation
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-4 text-[42px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0f172a] sm:text-[52px] lg:text-[58px]">
              Your Journey <br />
              Starts Here<span className="text-[#2563eb]">.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-3.5 text-[15px] sm:text-[16px] leading-relaxed text-slate-500 font-normal">
              Get a professional travel itinerary for visa application, immigration or personal travel planning. Fast, simple and globally accepted.
            </p>

            {/* 4 Feature Highlights Row */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100/70 text-[#2563eb]">
                  <ShieldCheck size={16} strokeWidth={2.2} />
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  Visa Friendly <br className="hidden sm:inline" />Format
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100/70 text-[#2563eb]">
                  <Zap size={16} strokeWidth={2.2} />
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  Instant <br className="hidden sm:inline" />Preview
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100/70 text-[#2563eb]">
                  <Globe size={16} strokeWidth={2.2} />
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  Accepted <br className="hidden sm:inline" />Worldwide
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100/70 text-[#2563eb]">
                  <FileCheck2 size={16} strokeWidth={2.2} />
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  Professional <br className="hidden sm:inline" />& Accurate
                </span>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────
                MAIN BOOKING CONFIGURATOR CARD
            ───────────────────────────────────────────────────────── */}
            <div id="booking" className="mt-8 scroll-mt-28 rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-[0_15px_40px_rgba(20,33,61,0.06)] backdrop-blur-md sm:p-6">
              
              {/* Service Type Tabs Header */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {serviceTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center justify-center gap-1.5 rounded-xl px-2.5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? "bg-blue-50/90 text-[#2563eb] border border-blue-200 shadow-xs"
                          : "bg-slate-50/70 text-slate-500 hover:bg-slate-100 hover:text-slate-700 border border-transparent"
                      }`}
                    >
                      <Icon size={14} className={isActive ? "text-[#2563eb]" : "text-slate-400"} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Trip Type Radios */}
              {activeTab !== "hotel" && (
                <div className="mt-4 flex items-center gap-6 text-xs font-semibold text-slate-700">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="tripType"
                      value="round-trip"
                      checked={tripType === "round-trip"}
                      onChange={() => setTripType("round-trip")}
                      className="h-4 w-4 accent-[#2563eb] cursor-pointer"
                    />
                    <span>
                      Round Trip{" "}
                      <span className="font-normal text-slate-400">
                        (Recommended for Visa)
                      </span>
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="tripType"
                      value="one-way"
                      checked={tripType === "one-way"}
                      onChange={() => setTripType("one-way")}
                      className="h-4 w-4 accent-[#2563eb] cursor-pointer"
                    />
                    <span>One Way / Onward</span>
                  </label>
                </div>
              )}

              {/* From / To Airport Selectors */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">
                    From
                  </label>
                  <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-[#2563eb] focus-within:ring-2 focus-within:ring-blue-100">
                    <PlaneTakeoff size={15} className="text-slate-400 mr-2 shrink-0" />
                    <select
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full bg-transparent text-sm font-bold text-slate-800 outline-none cursor-pointer pr-4"
                    >
                      {airportsList.map((a) => (
                        <option key={`orig-${a.code}`} value={a.code}>
                          {a.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="pointer-events-none absolute right-3 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">
                    To
                  </label>
                  <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-[#2563eb] focus-within:ring-2 focus-within:ring-blue-100">
                    <MapPin size={15} className="text-slate-400 mr-2 shrink-0" />
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-transparent text-sm font-bold text-slate-800 outline-none cursor-pointer pr-4"
                    >
                      {airportsList.map((a) => (
                        <option key={`dest-${a.code}`} value={a.code}>
                          {a.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="pointer-events-none absolute right-3 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Dates Row with Clean Format & Native Picker */}
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">
                    Departure Date
                  </label>
                  <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-[#2563eb] focus-within:ring-2 focus-within:ring-blue-100">
                    <Calendar size={15} className="text-[#2563eb] mr-2 shrink-0" />
                    <span className="text-sm font-bold text-slate-800 flex-1">
                      {formatDateForDisplay(departureDate)}
                    </span>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    />
                  </div>
                </div>

                {tripType === "round-trip" && activeTab !== "hotel" ? (
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">
                      Return Date
                    </label>
                    <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-[#2563eb] focus-within:ring-2 focus-within:ring-blue-100">
                      <Calendar size={15} className="text-[#2563eb] mr-2 shrink-0" />
                      <span className="text-sm font-bold text-slate-800 flex-1">
                        {formatDateForDisplay(returnDate)}
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
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">
                      Return Date
                    </label>
                    <div className="flex items-center rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-xs text-slate-400">
                      <span>One Way / Onward Ticket</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Travellers & Class Row */}
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">
                    Travellers
                  </label>
                  <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-[#2563eb] focus-within:ring-2 focus-within:ring-blue-100">
                    <User size={15} className="text-slate-400 mr-2 shrink-0" />
                    <select
                      value={passengerCount}
                      onChange={(e) => {
                        setPassengerCount(e.target.value);
                        if (e.target.value === "1") setPassengerName("MR. ALEX KUMAR");
                        else if (e.target.value === "2") setPassengerName("MR. ALEX KUMAR & 1 PAX");
                        else setPassengerName(`MR. ALEX KUMAR + ${Number(e.target.value) - 1} PAX`);
                      }}
                      className="w-full bg-transparent text-sm font-bold text-slate-800 outline-none cursor-pointer pr-4"
                    >
                      <option value="1">1 Traveller</option>
                      <option value="2">2 Travellers</option>
                      <option value="3">3 Travellers</option>
                      <option value="4">4+ Family / Group</option>
                    </select>
                    <ChevronDown size={14} className="pointer-events-none absolute right-3 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">
                    Class
                  </label>
                  <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-[#2563eb] focus-within:ring-2 focus-within:ring-blue-100">
                    <Ticket size={15} className="text-slate-400 mr-2 shrink-0" />
                    <select
                      value={cabinClass}
                      onChange={(e) => setCabinClass(e.target.value)}
                      className="w-full bg-transparent text-sm font-bold text-slate-800 outline-none cursor-pointer pr-4"
                    >
                      <option value="Economy">Economy</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business">Business</option>
                      <option value="First">First Class</option>
                    </select>
                    <ChevronDown size={14} className="pointer-events-none absolute right-3 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Total Amount & Action CTA Row */}
              <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold text-slate-400">Total Amount</p>
                  <p className="text-3xl sm:text-4xl font-black text-[#2563eb] leading-tight">
                    {activeService.price}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleOpenModal}
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-7 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-600/35 active:scale-[0.98] cursor-pointer"
                >
                  <span>Generate My Itinerary</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Disclaimer Note */}
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                <Info size={13} className="text-[#2563eb] shrink-0" />
                <span>No real booking is made. This is a dummy itinerary for documentation purposes only.</span>
              </div>
            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════════
              RIGHT COLUMN: Authentic Ticket Preview & Trust Badges
          ═══════════════════════════════════════════════════════════ */}
          <div className="relative w-full max-w-[530px] lg:pt-20 xl:pt-24 lg:ml-auto">
            
            {/* ─────────────────────────────────────────────────────────
                REALISTIC TRAVEL ITINERARY TICKET CARD
            ───────────────────────────────────────────────────────── */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_50px_rgba(20,33,61,0.10)]">
              
              {/* Notched perforated ticket cuts on left and right borders */}
              <div className="pointer-events-none absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full border border-slate-300 bg-[#f8faff] shadow-inner z-20" />
              <div className="pointer-events-none absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full border border-slate-300 bg-[#f8faff] shadow-inner z-20" />

              {/* Ticket Top Header */}
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                {/* Brand / Logo */}
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563eb] text-white">
                    <Send size={15} className="-rotate-12" />
                  </div>
                  <div>
                    <p className="text-base font-extrabold tracking-tight text-slate-900 leading-none">
                      FlyDoc
                    </p>
                    <p className="text-[9px] font-bold text-slate-400 tracking-wider">
                      Travel Made Simple
                    </p>
                  </div>
                </div>

                {/* Center Title */}
                <div className="text-center hidden sm:block">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-[#1d4ed8]">
                    Travel Itinerary
                  </p>
                  <p className="text-[10px] font-medium text-slate-400">
                    For Visa & Documentation
                  </p>
                </div>

                {/* Reference Number Box */}
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-right">
                  <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400">
                    Reference No.
                  </p>
                  <p className="font-mono text-xs font-black text-slate-800">
                    {referenceNo}
                  </p>
                </div>
              </div>

              {/* Passenger & Travel Dates Bar */}
              <div className="grid grid-cols-2 border-b border-slate-100 bg-slate-50/70 px-6 py-2.5 text-xs">
                <div className="flex items-center gap-2">
                  <User size={13} className="text-[#2563eb]" />
                  <div>
                    <span className="block text-[8px] font-bold uppercase text-slate-400 leading-none">
                      Passenger
                    </span>
                    <span className="font-bold text-slate-800 text-[11px] truncate">
                      {passengerName}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 justify-self-end">
                  <Calendar size={13} className="text-[#2563eb]" />
                  <div className="text-right">
                    <span className="block text-[8px] font-bold uppercase text-slate-400 leading-none">
                      Travel Dates
                    </span>
                    <span className="font-bold text-slate-800 text-[11px]">
                      {datesSummary}
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Flight Route Block */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  {/* Origin */}
                  <div>
                    <p className="text-4xl font-black tracking-tight text-slate-900 leading-none">
                      {origin}
                    </p>
                    <p className="mt-1 text-xs font-bold text-slate-700">
                      {currentRoute.originCity}
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-slate-400">
                      {formattedDepTicket}
                    </p>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      {currentRoute.depTime}
                    </p>
                  </div>

                  {/* Flight Trajectory Center */}
                  <div className="flex flex-1 flex-col items-center px-4">
                    <span className="text-[11px] font-semibold text-slate-400">
                      {currentRoute.duration}
                    </span>
                    <div className="relative my-2 w-full max-w-[130px]">
                      <div className="h-0.5 w-full border-t border-dashed border-slate-300" />
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-1 text-[#2563eb]">
                        <Plane size={13} className="rotate-90" />
                      </div>
                    </div>
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-[#2563eb]">
                      Non Stop
                    </span>
                  </div>

                  {/* Destination */}
                  <div className="text-right">
                    <p className="text-4xl font-black tracking-tight text-slate-900 leading-none">
                      {destination}
                    </p>
                    <p className="mt-1 text-xs font-bold text-slate-700">
                      {currentRoute.destCity}
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-slate-400">
                      {tripType === "round-trip" ? formattedRetTicket : "DIRECT"}
                    </p>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      {currentRoute.arrTime}
                    </p>
                  </div>
                </div>

                {/* Flight Metadata Row */}
                <div className="mt-6 grid grid-cols-4 gap-2 border-t border-slate-100 pt-4 text-left">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
                      Airline
                    </p>
                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" />
                      <p className="text-xs font-bold text-slate-800 truncate">
                        {currentRoute.airlineShort}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
                      Flight No.
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-slate-800">
                      {currentRoute.flightNo}
                    </p>
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
                      Class
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-slate-800">
                      {cabinClass}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
                      Baggage
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-slate-800">
                      {currentRoute.baggage}
                    </p>
                  </div>
                </div>

                {/* Handwritten Stamp & Barcode section */}
                <div className="relative mt-5 pt-3">
                  {/* Handwritten Accent in Blue */}
                  <div className="absolute right-1 -top-2 z-10 select-none pointer-events-none">
                    <p className="font-handwriting text-2xl lg:text-[27px] font-bold text-[#1d4ed8] -rotate-6 tracking-wide drop-shadow-xs">
                      Explore <br />
                      More <br />
                      <span className="text-[#2563eb]">Worry Less!</span>
                    </p>
                  </div>

                  {/* Realistic Barcode */}
                  <div className="flex flex-col items-start pr-28">
                    <div className="flex h-9 items-end gap-[2.5px] opacity-85">
                      {[3, 1, 4, 2, 5, 2, 4, 1, 6, 2, 4, 2, 5, 1, 3, 2, 6, 1, 4, 2, 5, 3].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="bg-slate-900 w-[2px] rounded-xs"
                            style={{ height: `${h * 4 + 8}px` }}
                          />
                        )
                      )}
                    </div>
                    <p className="mt-2 text-[10px] text-slate-400 font-medium">
                      This is a sample itinerary. Not a valid boarding pass.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────
                4 CIRCULAR TRUST BADGES UNDERNEATH TICKET
            ───────────────────────────────────────────────────────── */}
            <div className="mt-6 grid grid-cols-4 gap-2 text-center">
              {/* Badge 1: Green */}
              <div className="flex flex-col items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-xs">
                  <CheckCircle2 size={20} />
                </div>
                <p className="mt-2 text-[11px] font-bold text-slate-700 leading-tight">
                  Trusted by <br />
                  10,000+ Travellers
                </p>
              </div>

              {/* Badge 2: Pink */}
              <div className="flex flex-col items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100 text-pink-600 shadow-xs">
                  <Users size={20} />
                </div>
                <p className="mt-2 text-[11px] font-bold text-slate-700 leading-tight">
                  Quick & Easy <br />
                  Process
                </p>
              </div>

              {/* Badge 3: Cyan/Blue */}
              <div className="flex flex-col items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sky-600 shadow-xs">
                  <Globe size={20} />
                </div>
                <p className="mt-2 text-[11px] font-bold text-slate-700 leading-tight">
                  Globally <br />
                  Accepted Format
                </p>
              </div>

              {/* Badge 4: Amber/Yellow */}
              <div className="flex flex-col items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-600 shadow-xs">
                  <FileText size={20} />
                </div>
                <p className="mt-2 text-[11px] font-bold text-slate-700 leading-tight">
                  PDF Itinerary <br />
                  in Seconds
                </p>
              </div>
            </div>

            {/* Quick Sample PDF Inspection Strip */}
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-blue-200/90 bg-blue-50/90 px-4 py-2.5 text-xs text-blue-900 shadow-2xs">
              <div className="flex items-center gap-2 font-bold">
                <FileText size={15} className="text-[#1D68E2]" />
                <span>Want to see what an authentic ticket looks like?</span>
              </div>
              <a
                href="/sample-eticket.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-[#1D68E2] hover:underline flex items-center gap-1 shrink-0"
              >
                <span>Air India Sample (PDF)</span>
                <ExternalLink size={12} />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          INSTANT ITINERARY PREVIEW & DOWNLOAD MODAL (NO BACKEND NEEDED)
      ───────────────────────────────────────────────────────────── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-base font-extrabold text-slate-900">
                  Sample Travel Itinerary Ready
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-700 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-900 uppercase tracking-wider">
                    {activeService.label}
                  </span>
                  <span className="font-mono font-bold text-[#2563eb]">
                    REF: {referenceNo}
                  </span>
                </div>
                <p className="mt-1 text-sm font-black text-slate-900">
                  {origin} ({currentRoute.originCity}) ✈ {destination} ({currentRoute.destCity})
                </p>
                <p className="mt-0.5 text-xs text-slate-600">
                  Dates: {datesSummary} • {cabinClass} Class
                </p>
                <p className="mt-0.5 text-xs text-slate-600 font-semibold">
                  Passenger: {passengerName}
                </p>
              </div>

              {/* PNR Copy Box */}
              <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Live Booking Reference (PNR)
                  </p>
                  <p className="font-mono text-lg font-black tracking-widest text-slate-900">
                    {currentRoute.pnr}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyPnr(currentRoute.pnr)}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer shadow-xs transition"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy PNR</span>
                    </>
                  )}
                </button>
              </div>

              {/* Instructions */}
              <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                This document is formatted to satisfy embassy visa checklists (Schengen, US, UK, Canada, Australia) and immigration onward ticket verification.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 space-y-2.5">
                <a
                  href={`https://wa.me/919560099481?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/25 hover:bg-blue-700 cursor-pointer transition"
                >
                  <MessageCircle size={16} />
                  <span>Order on WhatsApp ({activeService.price})</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="/sample-eticket.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
                >
                  <FileText size={14} className="text-[#1D68E2]" />
                  <span>Inspect Real Air India eTicket Sample (PDF)</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;