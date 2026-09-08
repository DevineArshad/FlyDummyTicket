import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Copy,
  FileCheck,
  Globe,
  HelpCircle,
  MessageCircle,
  Plane,
  PlaneTakeoff,
  Printer,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Ticket,
  User,
  Users,
  X,
  Zap,
} from "lucide-react";

const popularAirports = [
  { code: "DEL", city: "New Delhi", country: "India", airport: "Indira Gandhi Intl" },
  { code: "BOM", city: "Mumbai", country: "India", airport: "Chhatrapati Shivaji Intl" },
  { code: "BLR", city: "Bengaluru", country: "India", airport: "Kempegowda Intl" },
  { code: "CDG", city: "Paris", country: "France", airport: "Charles de Gaulle" },
  { code: "LHR", city: "London", country: "United Kingdom", airport: "London Heathrow" },
  { code: "JFK", city: "New York", country: "United States", airport: "John F. Kennedy Intl" },
  { code: "DXB", city: "Dubai", country: "United Arab Emirates", airport: "Dubai Intl" },
  { code: "SIN", city: "Singapore", country: "Singapore", airport: "Changi Airport" },
  { code: "FCO", city: "Rome", country: "Italy", airport: "Leonardo da Vinci Intl" },
  { code: "FRA", city: "Frankfurt", country: "Germany", airport: "Frankfurt Airport" },
];

const airlines = [
  { name: "Air France", code: "AF 225", duration: "9h 15m", aircraft: "Boeing 777-300ER" },
  { name: "Emirates", code: "EK 512", duration: "3h 50m", aircraft: "Airbus A380-800" },
  { name: "British Airways", code: "BA 142", duration: "9h 30m", aircraft: "Airbus A350-1000" },
  { name: "Singapore Airlines", code: "SQ 403", duration: "4h 45m", aircraft: "Boeing 787-10" },
  { name: "Lufthansa", code: "LH 761", duration: "8h 40m", aircraft: "Airbus A330-300" },
];

function FlightTicketHero() {
  const [tripType, setTripType] = useState("round-trip");
  const [origin, setOrigin] = useState("DEL");
  const [destination, setDestination] = useState("CDG");
  const [departureDate, setDepartureDate] = useState("2026-10-15");
  const [returnDate, setReturnDate] = useState("2026-10-25");
  const [passengerName, setPassengerName] = useState("MR. ALEX KUMAR");
  const [cabinClass, setCabinClass] = useState("Economy");
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const originAirport = popularAirports.find((a) => a.code === origin) || popularAirports[0];
  const destAirport = popularAirports.find((a) => a.code === destination) || popularAirports[3];
  const selectedAirline = airlines[0];
  const pnrCode = "FD78491";

  const handleCopyPnr = () => {
    navigator.clipboard?.writeText(pnrCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSwapAirports = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi FlyDummyTicket Team, I would like to book a Verified Dummy Flight Ticket:\n` +
      `• Route: ${originAirport.city} (${origin}) to ${destAirport.city} (${destination})\n` +
      `• Trip Type: ${tripType === "round-trip" ? "Round Trip" : "One Way"}\n` +
      `• Departure: ${departureDate}${tripType === "round-trip" ? ` | Return: ${returnDate}` : ""}\n` +
      `• Passenger: ${passengerName}\n` +
      `• Class: ${cabinClass}\n` +
      `• PNR Sample: ${pnrCode}\n` +
      `Please provide the booking PDF for visa application.`
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFD] to-white py-10 sm:py-14 lg:py-18">
      {/* Background Decorative Glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-blue-200/35 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-[-120px] h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#1D68E2]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-slate-500">Services</span>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#1D68E2]">Flight Reservation</span>
        </nav>

        {/* Page Top Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1D68E2] shadow-xs backdrop-blur-sm">
            <Plane size={13} className="rotate-[-45deg] text-[#1D68E2]" />
            <span>INSTANT VERIFIED FLIGHT RESERVATION</span>
          </div>

          <h1 className="mt-3.5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Dummy Flight Ticket for <span className="text-[#1D68E2]">Visa & Immigration</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Get an authentic, verifiable flight reservation with genuine airline PNR in under 10 minutes.
            Accepted by embassies, VFS global, and immigration authorities worldwide without buying costly flight tickets.
          </p>

          {/* Quick Badges */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-emerald-800 border border-emerald-200/80">
              <Check size={13} className="text-emerald-600" /> 100% Embassy Accepted
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1 text-blue-800 border border-blue-200/80">
              <Zap size={13} className="text-[#1D68E2]" /> Delivered in 10 Minutes
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-purple-50 px-2.5 py-1 text-purple-800 border border-purple-200/80">
              <ShieldCheck size={13} className="text-purple-600" /> Active Airline PNR Code
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-2.5 py-1 text-amber-800 border border-amber-200/80">
              <RotateCcw size={13} className="text-amber-600" /> Free Date Changes
            </span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            MAIN DUAL COLUMN: CONFIGURATOR + LIVE TICKET PREVIEW
        ───────────────────────────────────────────────────────── */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-start">
          {/* LEFT: FLIGHT CONFIGURATION CARD (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Customise Your Flight Ticket</h2>
                <p className="text-xs text-slate-500">Fill in your flight details to generate your verified itinerary</p>
              </div>

              {/* Trip Type Selector */}
              <div className="inline-flex rounded-xl bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setTripType("round-trip")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    tripType === "round-trip"
                      ? "bg-white text-[#1D68E2] shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Round Trip
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("one-way")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    tripType === "one-way"
                      ? "bg-white text-[#1D68E2] shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  One Way
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="mt-6 space-y-5">
              {/* Origin & Destination Row with Swap Button */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Origin */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Departure City / Airport
                  </label>
                  <div className="relative">
                    <select
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    >
                      {popularAirports.map((airport) => (
                        <option key={airport.code} value={airport.code}>
                          {airport.city} ({airport.code}) - {airport.country}
                        </option>
                      ))}
                    </select>
                    <PlaneTakeoff size={15} className="pointer-events-none absolute right-3 top-3 text-slate-400" />
                  </div>
                </div>

                {/* Swap Button (Absolute Centered on Desktop) */}
                <button
                  type="button"
                  onClick={handleSwapAirports}
                  title="Swap Origin & Destination"
                  className="hidden sm:flex absolute left-1/2 top-7 -translate-x-1/2 z-10 h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-blue-400 hover:text-[#1D68E2] transition-colors"
                >
                  <RotateCcw size={13} />
                </button>

                {/* Destination */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Destination City / Airport
                  </label>
                  <div className="relative">
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    >
                      {popularAirports.map((airport) => (
                        <option key={airport.code} value={airport.code}>
                          {airport.city} ({airport.code}) - {airport.country}
                        </option>
                      ))}
                    </select>
                    <Plane size={15} className="pointer-events-none absolute right-3 top-3 text-slate-400 rotate-45" />
                  </div>
                </div>
              </div>

              {/* Dates Row */}
              <div className={`grid gap-3.5 ${tripType === "round-trip" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Departure Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                    <Calendar size={15} className="pointer-events-none absolute right-3 top-3 text-slate-400" />
                  </div>
                </div>

                {tripType === "round-trip" && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Return Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                      />
                      <Calendar size={15} className="pointer-events-none absolute right-3 top-3 text-slate-400" />
                    </div>
                  </div>
                )}
              </div>

              {/* Passenger Name & Cabin Class */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Passenger Full Name (as on Passport)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={passengerName}
                      onChange={(e) => setPassengerName(e.target.value.toUpperCase())}
                      placeholder="e.g. MR. JOHN DOE"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                    <User size={15} className="pointer-events-none absolute right-3 top-3 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Cabin Class
                  </label>
                  <select
                    value={cabinClass}
                    onChange={(e) => setCabinClass(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="Economy">Economy Class</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business Class</option>
                    <option value="First">First Class</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Price & Primary CTA */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">₹399</span>
                  <span className="text-xs text-slate-500 font-medium">/ approx. $5 USD</span>
                </div>
                <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                  ✓ Valid for 7–14 days with verified PNR
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`https://wa.me/919311323356?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D8746] hover:bg-[#0A7039] px-6 py-3 text-sm font-bold text-white shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>Book on WhatsApp</span>
                  <ArrowRight size={15} />
                </a>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1D68E2] hover:bg-[#1556BE] px-6 py-3 text-sm font-bold text-white shadow-md transition-all cursor-pointer"
                >
                  <Zap size={16} />
                  <span>Instant Order</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: LIVE VERIFIABLE TICKET PREVIEW (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#1D68E2]" />
                  Live Ticket Preview
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  PNR Active
                </span>
              </div>

              {/* Realistic Boarding Pass & Itinerary Card */}
              <div className="relative rounded-3xl border-2 border-blue-200/90 bg-white shadow-xl overflow-hidden">
                {/* Ticket Top Header */}
                <div className="bg-gradient-to-r from-[#0F2A66] via-[#1D4ED8] to-[#1D68E2] p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 backdrop-blur-xs">
                        <Plane size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black tracking-tight leading-none">ELECTRONIC TICKET</h4>
                        <p className="text-[10px] text-blue-100 font-medium mt-0.5">Passenger Itinerary Receipt</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-blue-200 tracking-wider">BOOKING REF (PNR)</span>
                      <div className="flex items-center gap-1">
                        <span className="text-base font-black tracking-wider text-amber-300">{pnrCode}</span>
                        <button
                          type="button"
                          onClick={handleCopyPnr}
                          title="Copy PNR"
                          className="text-white/80 hover:text-white p-0.5"
                        >
                          {copied ? <Check size={13} className="text-emerald-300" /> : <Copy size={13} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Route Header Banner */}
                <div className="p-5 border-b border-dashed border-slate-200 bg-[#FBFDFF]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-black text-slate-900 tracking-tight">{origin}</p>
                      <p className="text-xs font-semibold text-slate-600">{originAirport.city}</p>
                      <p className="text-[10px] text-slate-400 truncate max-w-[110px]">{originAirport.airport}</p>
                    </div>

                    {/* Flight Path Graphic */}
                    <div className="flex-1 px-4 flex flex-col items-center">
                      <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        <Clock size={10} /> {selectedAirline.duration}
                      </div>
                      <div className="relative w-full flex items-center">
                        <div className="h-0.5 w-full bg-slate-200 border-t border-dashed border-slate-400" />
                        <div className="absolute left-1/2 -translate-x-1/2 bg-white px-1.5 text-[#1D68E2]">
                          <Plane size={15} />
                        </div>
                      </div>
                      <p className="text-[10px] font-bold text-[#1D68E2] mt-1">{selectedAirline.name} • {selectedAirline.code}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-black text-slate-900 tracking-tight">{destination}</p>
                      <p className="text-xs font-semibold text-slate-600">{destAirport.city}</p>
                      <p className="text-[10px] text-slate-400 truncate max-w-[110px]">{destAirport.airport}</p>
                    </div>
                  </div>
                </div>

                {/* Ticket Details Grid */}
                <div className="p-5 space-y-3.5 text-xs">
                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Passenger Name</span>
                      <p className="font-extrabold text-slate-800 text-xs truncate mt-0.5">{passengerName || "MR. ALEX KUMAR"}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Class & Baggage</span>
                      <p className="font-extrabold text-slate-800 text-xs mt-0.5">{cabinClass} / 30 KG</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Departure Date</span>
                      <p className="font-extrabold text-slate-800 text-xs mt-0.5">{departureDate}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Return Date</span>
                      <p className="font-extrabold text-slate-800 text-xs mt-0.5">
                        {tripType === "round-trip" ? returnDate : "One-Way Flight"}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center py-2 bg-slate-50 rounded-xl">
                    <div>
                      <span className="text-[9px] font-bold uppercase text-slate-400">Flight</span>
                      <p className="font-black text-slate-800 text-xs">{selectedAirline.code}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase text-slate-400">Gate</span>
                      <p className="font-black text-slate-800 text-xs">24A</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase text-slate-400">Seat</span>
                      <p className="font-black text-slate-800 text-xs">14B</p>
                    </div>
                  </div>
                </div>

                {/* Simulated Barcode & Security Strip */}
                <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                      <ShieldCheck size={12} /> VERIFIED FOR VISA & EMBASSY
                    </p>
                    <p className="text-[9px] text-slate-400 mt-0.5">Format matches IATA official ticketing standards</p>
                  </div>

                  {/* SVG Barcode */}
                  <div className="flex gap-0.5 items-end h-7">
                    <span className="w-0.5 h-7 bg-white" />
                    <span className="w-1.5 h-7 bg-white" />
                    <span className="w-0.5 h-5 bg-white" />
                    <span className="w-1 h-7 bg-white" />
                    <span className="w-0.5 h-7 bg-white" />
                    <span className="w-2 h-7 bg-white" />
                    <span className="w-0.5 h-5 bg-white" />
                    <span className="w-1 h-7 bg-white" />
                    <span className="w-0.5 h-7 bg-white" />
                    <span className="w-1.5 h-7 bg-white" />
                    <span className="w-0.5 h-7 bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            BOTTOM: WHY DUMMY TICKET FOR VISA WORKS (3 FEATURES)
        ───────────────────────────────────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-slate-900">Why Use a Dummy Ticket for Your Visa?</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Save hundreds of dollars while keeping your visa application 100% compliant with embassy requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1D68E2] mb-4">
                <ShieldCheck size={22} />
              </div>
              <h4 className="text-base font-bold text-slate-900">Prevent Financial Loss</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2">
                Embassies advise applicants not to purchase non-refundable airline tickets before visa approval. Dummy tickets give you the required flight itinerary at a fraction of the cost.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4">
                <CheckCircle2 size={22} />
              </div>
              <h4 className="text-base font-bold text-slate-900">Verifiable Airline PNR</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2">
                Our reservations come with authentic 6-character PNR booking codes held directly with the airline, verifiable on airline websites and embassy checking tools.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 mb-4">
                <RotateCcw size={22} />
              </div>
              <h4 className="text-base font-bold text-slate-900">Free Date Rescheduling</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2">
                If your visa appointment gets postponed, we update your flight dates and re-issue your itinerary at zero extra cost.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          ORDER CONFIRMATION & PRINT MODAL (STATIC-FRIENDLY)
      ───────────────────────────────────────────────────────────── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#1D68E2]">
                <Plane size={22} />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 leading-tight">Flight Reservation Receipt</h3>
                <p className="text-xs text-slate-500">Ready for embassy visa submission</p>
              </div>
            </div>

            {/* Itinerary Details Box */}
            <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-xs space-y-2.5">
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Route:</span>
                <span className="font-bold text-slate-900">{originAirport.city} ({origin}) ⇄ {destAirport.city} ({destination})</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Travel Dates:</span>
                <span className="font-bold text-slate-900">{departureDate} {tripType === "round-trip" ? `– ${returnDate}` : "(One-Way)"}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Passenger Name:</span>
                <span className="font-bold text-slate-900">{passengerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Class / Baggage:</span>
                <span className="font-bold text-slate-900">{cabinClass} / 30 KG</span>
              </div>
            </div>

            {/* PNR Code Pill */}
            <div className="mt-4 flex items-center justify-between rounded-xl bg-blue-50/80 border border-blue-100 px-4 py-3">
              <div>
                <span className="text-[10px] font-bold uppercase text-blue-600 block">Verified PNR Hold</span>
                <span className="text-base font-black tracking-widest text-blue-950 font-mono">{pnrCode}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyPnr}
                className="flex items-center gap-1 text-xs font-bold text-[#1D68E2] bg-white px-3 py-1.5 rounded-lg border border-blue-200 shadow-xs"
              >
                {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-xs cursor-pointer"
              >
                <Printer size={15} />
                <span>Print / Save PDF</span>
              </button>

              <a
                href={`https://wa.me/919311323356?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsModalOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0D8746] hover:bg-[#0A7039] py-3 text-xs font-bold text-white shadow-md cursor-pointer transition"
              >
                <MessageCircle size={15} />
                <span>Send to WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FlightTicketHero;
