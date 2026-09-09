import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Copy,
  ExternalLink,
  FileText,
  MapPin,
  MessageCircle,
  Plane,
  PlaneTakeoff,
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

export default function SharedBookingCard({
  serviceType = "flight",
  serviceTitle = "Dummy Flight Ticket",
  price = "₹299",
  badge = "Verifiable PNR",
  description = "Embassy verifiable airline PNR reservation delivered in 10-30 minutes.",
  features = [],
}) {
  const [tripType, setTripType] = useState("round-trip");
  const [origin, setOrigin] = useState("DEL");
  const [destination, setDestination] = useState("CDG");
  const [departureDate, setDepartureDate] = useState("2026-10-18");
  const [returnDate, setReturnDate] = useState("2026-10-28");
  const [passengerName, setPassengerName] = useState("MR. ALEX KUMAR");
  const [passengerCount, setPassengerCount] = useState("1");
  const [copied, setCopied] = useState(false);

  const originCity = airportsList.find((a) => a.code === origin)?.city || origin;
  const destCity = airportsList.find((a) => a.code === destination)?.city || destination;
  const samplePnr = serviceType === "insurance" ? "INS-78491" : "FD78491";

  const formattedDep = formatDateDisplay(departureDate);
  const formattedRet = formatDateDisplay(returnDate);
  const datesSummary = tripType === "round-trip" || serviceType === "hotel" || serviceType === "insurance" ? `${formattedDep} – ${formattedRet}` : formattedDep;

  const handleCopyPnr = () => {
    navigator.clipboard?.writeText(samplePnr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi FlyDummyTicket Team, I want to book: ${serviceTitle} (${price}):\n` +
    `• Service: ${serviceTitle}\n` +
    `• Route / Region: ${origin} (${originCity}) → ${destination} (${destCity})\n` +
    `• Format: ${serviceType === "hotel" ? "Hotel Accommodation" : serviceType === "insurance" ? "Travel Medical Insurance" : tripType === "round-trip" ? "Round Trip" : "One Way"}\n` +
    `• Dates / Period: ${datesSummary}\n` +
    `• Traveler / Insured: ${passengerName} (${passengerCount} PAX)\n` +
    `Please generate my booking PDF.`
  );

  return (
    <section className="bg-gradient-to-b from-orange-50/40 via-white to-slate-50 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-semibold">
          <Link to="/" className="hover:text-[#E6582A] transition">Home</Link>
          <span>/</span>
          <span>Services</span>
          <span>/</span>
          <span className="text-[#E6582A]">{serviceTitle}</span>
        </nav>

        {/* HEADER */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-bold text-[#E6582A] mb-3">
            <ShieldCheck size={13} />
            <span>{badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            {serviceTitle}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
            {description}
          </p>
        </div>

        {/* 2-COLUMN GRID */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* LEFT: BOOKING FORM (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-card-clean">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Service Selected
                </span>
                <h3 className="text-base font-black text-slate-900">{serviceTitle}</h3>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-[#E6582A]">{price}</span>
                <span className="text-[10px] text-slate-400 block font-semibold">All-inclusive</span>
              </div>
            </div>

            {/* TRIP TYPE */}
            {serviceType !== "hotel" && serviceType !== "insurance" && (
              <div className="flex items-center gap-6 text-xs font-bold text-slate-700 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="stTripType"
                    value="round-trip"
                    checked={tripType === "round-trip"}
                    onChange={() => setTripType("round-trip")}
                    className="accent-[#E6582A] h-4 w-4 cursor-pointer"
                  />
                  <span>Round Trip</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="stTripType"
                    value="one-way"
                    checked={tripType === "one-way"}
                    onChange={() => setTripType("one-way")}
                    className="accent-[#E6582A] h-4 w-4 cursor-pointer"
                  />
                  <span>One Way</span>
                </label>
              </div>
            )}

            {/* FROM & TO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  {serviceType === "hotel"
                    ? "City / Destination"
                    : serviceType === "insurance"
                    ? "Country of Residence"
                    : "Origin"}
                </label>
                <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 focus-within:border-[#E6582A]">
                  <PlaneTakeoff size={16} className="text-slate-400 mr-2 shrink-0" />
                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 outline-none pr-5 cursor-pointer"
                  >
                    {airportsList.map((a) => (
                      <option key={`sh-from-${a.code}`} value={a.code}>
                        {a.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="pointer-events-none absolute right-3 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  {serviceType === "hotel"
                    ? "Hotel Location"
                    : serviceType === "insurance"
                    ? "Travel Destination / Area"
                    : "Destination"}
                </label>
                <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 focus-within:border-[#E6582A]">
                  <MapPin size={16} className="text-slate-400 mr-2 shrink-0" />
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 outline-none pr-5 cursor-pointer"
                  >
                    {airportsList.map((a) => (
                      <option key={`sh-to-${a.code}`} value={a.code}>
                        {a.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="pointer-events-none absolute right-3 text-slate-400" />
                </div>
              </div>
            </div>

            {/* DATES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  {serviceType === "hotel"
                    ? "Check-in"
                    : serviceType === "insurance"
                    ? "Coverage Start Date"
                    : "Departure"}
                </label>
                <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 focus-within:border-[#E6582A]">
                  <Calendar size={16} className="text-[#E6582A] mr-2 shrink-0" />
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

              {tripType === "round-trip" || serviceType === "hotel" || serviceType === "insurance" ? (
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {serviceType === "hotel"
                      ? "Check-out"
                      : serviceType === "insurance"
                      ? "Coverage End Date"
                      : "Return"}
                  </label>
                  <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 focus-within:border-[#E6582A]">
                    <Calendar size={16} className="text-[#E6582A] mr-2 shrink-0" />
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
              ) : null}
            </div>

            {/* PASSENGERS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  {serviceType === "insurance" ? "Insured Persons" : "Travellers"}
                </label>
                <div className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                  <User size={16} className="text-slate-400 mr-2 shrink-0" />
                  <select
                    value={passengerCount}
                    onChange={(e) => {
                      setPassengerCount(e.target.value);
                      if (e.target.value === "1") setPassengerName("MR. ALEX KUMAR");
                      else setPassengerName(`MR. ALEX KUMAR + ${Number(e.target.value) - 1} PAX`);
                    }}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 outline-none pr-5 cursor-pointer"
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4+ Family</option>
                  </select>
                  <ChevronDown size={14} className="pointer-events-none absolute right-3 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Passenger Name (Passport)
                </label>
                <div className="flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                  <input
                    type="text"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 outline-none uppercase"
                  />
                </div>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="border-t border-slate-100 pt-4">
              <a
                href={`https://wa.me/919560099481?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] h-auto py-3.5 px-4 w-full items-center justify-center gap-2 rounded-xl bg-[#E6582A] text-xs font-black uppercase tracking-wider text-white shadow-md shadow-[#E6582A]/30 hover:bg-[#C9441B] transition cursor-pointer text-center leading-tight"
              >
                <MessageCircle size={17} className="shrink-0" />
                <span>Confirm on WhatsApp ({price})</span>
                <ArrowRight size={15} className="shrink-0" />
              </a>
              <p className="mt-2 text-center text-[11px] text-slate-400 font-medium">
                Delivered straight to WhatsApp & Email within 10 to 30 minutes
              </p>
            </div>

          </div>

          {/* RIGHT: TICKET PREVIEW & INCLUDED HIGHLIGHTS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* TICKET SUMMARY CARD */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <span className="text-xs font-black text-slate-900">Itinerary Summary</span>
                <span className="font-mono text-xs font-black text-[#E6582A] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                  PNR: {samplePnr}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex flex-col sm:flex-row sm:justify-between text-slate-600 gap-0.5 sm:gap-2">
                  <span>Route:</span>
                  <strong className="text-slate-800 break-words">{origin} ({originCity}) → {destination} ({destCity})</strong>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-slate-600 gap-0.5 sm:gap-2">
                  <span>Dates:</span>
                  <strong className="text-slate-800 break-words">{datesSummary}</strong>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-slate-600 gap-0.5 sm:gap-2">
                  <span>Passenger:</span>
                  <strong className="text-slate-800 break-words">{passengerName}</strong>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-slate-600 gap-0.5 sm:gap-2">
                  <span>Status:</span>
                  <strong className="text-emerald-600">Active / Confirmed HK1</strong>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="/sample-eticket.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#E6582A] hover:underline inline-flex items-center gap-1"
                >
                  <FileText size={13} />
                  <span>Inspect Sample PDF</span>
                  <ExternalLink size={11} />
                </a>
                <button
                  type="button"
                  onClick={handleCopyPnr}
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer p-1"
                >
                  {copied ? "Copied!" : "Copy PNR"}
                </button>
              </div>
            </div>

            {/* INCLUDED FEATURES */}
            {features.length > 0 && (
              <div className="rounded-3xl border border-slate-200 bg-[#F7F8FA] p-5 sm:p-6">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
                  Included in this package:
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
