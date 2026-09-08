import { useState } from "react";
import { Link } from "react-router-dom";
import comboImg from "../../assets/images/service_combo.jpg";
import {
  ArrowRight,
  BedDouble,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Copy,
  FileCheck,
  Hotel,
  MapPin,
  MessageCircle,
  Plane,
  Printer,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  X,
  Zap,
} from "lucide-react";

function ComboPackageHero() {
  const [origin, setOrigin] = useState("New Delhi (DEL)");
  const [destination, setDestination] = useState("Paris (CDG)");
  const [hotelName, setHotelName] = useState("Hôtel Le Grand Paris ★★★★");
  const [departureDate, setDepartureDate] = useState("2026-10-15");
  const [returnDate, setReturnDate] = useState("2026-10-25");
  const [passengerName, setPassengerName] = useState("MR. ALEX KUMAR");
  const [activePreviewTab, setActivePreviewTab] = useState("combo"); // 'combo', 'flight', 'hotel'
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pnrCode = "CMB89201";
  const hotelRef = "HTL77312";

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(`${pnrCode} / ${hotelRef}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi FlyDummyTicket Team, I want to book the Flight + Hotel Combo Package for my Visa:\n` +
      `• Flight Route: ${origin} to ${destination}\n` +
      `• Hotel Property: ${hotelName}\n` +
      `• Travel Dates: ${departureDate} to ${returnDate} (10 Days)\n` +
      `• Passenger / Guest: ${passengerName}\n` +
      `• Combo Ref: ${pnrCode}\n` +
      `Please provide the matching flight itinerary & hotel voucher.`
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFD] to-white py-10 sm:py-14 lg:py-18">
      {/* Atmosphere glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-blue-200/35 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-[-100px] h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#1D68E2]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-slate-500">Services</span>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#1D68E2]">Flight + Hotel Combo</span>
        </nav>

        {/* Page Top Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1D68E2] shadow-xs backdrop-blur-sm">
            <Sparkles size={13} className="text-amber-500" />
            <span>★ MOST POPULAR VISA DOCUMENTATION BUNDLE</span>
          </div>

          <h1 className="mt-3.5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Flight + Hotel Combo for <span className="text-[#1D68E2]">Visa Applications</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Get perfectly synchronized flight reservation with active PNR and matching hotel accommodation voucher in one comprehensive package. Embassies require both documents to match precisely.
          </p>

          {/* Quick Badges */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1 text-blue-800 border border-blue-200/80">
              <Plane size={13} className="text-[#1D68E2]" /> Flight Itinerary with Live PNR
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-emerald-800 border border-emerald-200/80">
              <BedDouble size={13} className="text-emerald-600" /> Confirmed Hotel Stay Voucher
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-purple-50 px-2.5 py-1 text-purple-800 border border-purple-200/80">
              <Check size={13} className="text-purple-600" /> 100% Matching Dates
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-2.5 py-1 text-amber-800 border border-amber-200/80">
              <ShieldCheck size={13} className="text-amber-600" /> Priority WhatsApp Support
            </span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            CONFIGURATOR + LIVE DUAL PREVIEW
        ───────────────────────────────────────────────────────── */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-start">
          {/* LEFT: COMBO FORM (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border-2 border-[#1D68E2]/30 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(29,104,226,0.08)]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Customise Combo Package</h2>
                <p className="text-xs text-slate-500">We synchronize your flight schedule and hotel reservation dates</p>
              </div>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-[#1D68E2]">
                Save 25% Bundle
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {/* Route */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Flight Origin City
                  </label>
                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="New Delhi (DEL)">New Delhi (DEL)</option>
                    <option value="Mumbai (BOM)">Mumbai (BOM)</option>
                    <option value="Bengaluru (BLR)">Bengaluru (BLR)</option>
                    <option value="Dubai (DXB)">Dubai (DXB)</option>
                    <option value="London (LHR)">London (LHR)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Destination City
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="Paris (CDG)">Paris, France (CDG)</option>
                    <option value="London (LHR)">London, UK (LHR)</option>
                    <option value="Rome (FCO)">Rome, Italy (FCO)</option>
                    <option value="Frankfurt (FRA)">Frankfurt, Germany (FRA)</option>
                    <option value="New York (JFK)">New York, USA (JFK)</option>
                  </select>
                </div>
              </div>

              {/* Synchronized Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Departure Flight & Check-In Date
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

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Return Flight & Check-Out Date
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
              </div>

              {/* Hotel Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Hotel Accommodation in {destination.split(" ")[0]}
                </label>
                <select
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                >
                  <option value="Hôtel Le Grand Paris ★★★★">Hôtel Le Grand (4-Star Central)</option>
                  <option value="Novotel City Suites ★★★★">Novotel City Suites (4-Star)</option>
                  <option value="Hilton Embassy Plaza ★★★★★">Hilton Embassy Plaza (5-Star Luxury)</option>
                  <option value="Holiday Inn Express ★★★">Holiday Inn Express (3-Star Comfort)</option>
                </select>
              </div>

              {/* Passenger Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Passenger & Guest Full Name (as on Passport)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value.toUpperCase())}
                    placeholder="e.g. MR. ALEX KUMAR"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                  <User size={15} className="pointer-events-none absolute right-3 top-3 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Pricing and Action */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Combo Total Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">₹650</span>
                  <span className="text-xs text-slate-500 font-medium">/ approx. $8 USD</span>
                  <span className="line-through text-xs text-slate-400">₹850</span>
                </div>
                <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                  ✓ Flight PNR + Hotel Voucher (Both Included)
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
                  <span>Get Complete Package</span>
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

          {/* RIGHT: DUAL PREVIEW (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              {/* Preview Toggle Tabs */}
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#1D68E2]" />
                  Live Bundle Preview
                </span>
                <div className="flex rounded-lg bg-slate-100 p-0.5 text-[11px] font-bold">
                  <button
                    type="button"
                    onClick={() => setActivePreviewTab("combo")}
                    className={`rounded-md px-2.5 py-1 transition ${
                      activePreviewTab === "combo" ? "bg-white text-[#1D68E2] shadow-xs" : "text-slate-500"
                    }`}
                  >
                    Both
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePreviewTab("flight")}
                    className={`rounded-md px-2.5 py-1 transition ${
                      activePreviewTab === "flight" ? "bg-white text-[#1D68E2] shadow-xs" : "text-slate-500"
                    }`}
                  >
                    Flight
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePreviewTab("hotel")}
                    className={`rounded-md px-2.5 py-1 transition ${
                      activePreviewTab === "hotel" ? "bg-white text-[#1D68E2] shadow-xs" : "text-slate-500"
                    }`}
                  >
                    Hotel
                  </button>
                </div>
              </div>

              {/* Combo Unified Card */}
              <div className="rounded-3xl border-2 border-blue-200 bg-white shadow-xl overflow-hidden">
                {/* Header Banner */}
                <div className="bg-gradient-to-r from-[#0F2A66] via-[#1D4ED8] to-[#1D68E2] p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                        <Plane size={15} className="text-white" />
                      </div>
                      <span className="text-white font-bold">+</span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                        <BedDouble size={15} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black tracking-tight leading-none">TRAVEL BUNDLE</h4>
                        <p className="text-[10px] text-blue-100 font-medium mt-0.5">Flight + Hotel Sync</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-blue-200 tracking-wider">COMBO PNR</span>
                      <div className="flex items-center gap-1">
                        <span className="text-base font-black tracking-wider text-amber-300">{pnrCode}</span>
                        <button
                          type="button"
                          onClick={handleCopyCode}
                          title="Copy Code"
                          className="text-white/80 hover:text-white p-0.5"
                        >
                          {copied ? <Check size={13} className="text-emerald-300" /> : <Copy size={13} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-4 text-xs">
                  {/* Flight Section */}
                  {(activePreviewTab === "combo" || activePreviewTab === "flight") && (
                    <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-3.5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-extrabold uppercase text-[#1D68E2] flex items-center gap-1">
                          <Plane size={12} /> Flight Itinerary
                        </span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                          PNR Active
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-slate-800 font-bold">
                        <span>{origin.split(" ")[0]}</span>
                        <span className="text-slate-400 font-normal">⇄</span>
                        <span>{destination.split(" ")[0]}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">
                        Dates: {departureDate} – {returnDate} • Passenger: {passengerName || "MR. ALEX KUMAR"}
                      </p>
                    </div>
                  )}

                  {/* Hotel Section */}
                  {(activePreviewTab === "combo" || activePreviewTab === "hotel") && (
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-3.5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-extrabold uppercase text-emerald-700 flex items-center gap-1">
                          <BedDouble size={12} /> Hotel Voucher
                        </span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                          Ref: {hotelRef}
                        </span>
                      </div>
                      <p className="font-bold text-slate-800">{hotelName}</p>
                      <p className="text-[10px] text-slate-500 mt-1">
                        Stay: {departureDate} to {returnDate} • Matching Flight Dates
                      </p>
                    </div>
                  )}

                  {/* Synchronized Guarantee */}
                  <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-2.5 text-[11px] font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Travel dates & city are synchronized across both documents for 100% embassy approval.</span>
                  </div>
                </div>

                {/* Footer Security Strip */}
                <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1">
                      <ShieldCheck size={12} /> EMBASSY RECOMMENDED COMBO
                    </p>
                    <p className="text-[9px] text-slate-400 mt-0.5">Dual PDF delivery within 10 minutes</p>
                  </div>

                  <span className="text-xs font-extrabold text-white bg-blue-600 px-2.5 py-1 rounded-lg">
                    ₹650 Package
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            BENEFITS ROW
        ───────────────────────────────────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-slate-900">Why Most Applicants Choose The Combo?</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Consulates strictly cross-examine your flight landing dates against your hotel check-in dates. One discrepancy can cause visa delay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1D68E2] mb-4">
                <CheckCircle2 size={22} />
              </div>
              <h4 className="text-base font-bold text-slate-900">Zero Discrepancy Guarantee</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2">
                We guarantee your flight arrival time matches your hotel check-in, and departure time matches checkout, eliminating consular doubts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4">
                <ShieldCheck size={22} />
              </div>
              <h4 className="text-base font-bold text-slate-900">Maximum Savings</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2">
                Save money compared to buying individual flight and hotel documents separately, with full priority handling.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 mb-4">
                <RotateCcw size={22} />
              </div>
              <h4 className="text-base font-bold text-slate-900">Free Combined Date Rescheduling</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2">
                If your visa slot shifts, both your flight and hotel documents are updated together at zero additional fee.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          COMBO PACKAGE ORDER & PRINT MODAL (STATIC-FRIENDLY)
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
                <Sparkles size={22} />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 leading-tight">Flight + Hotel Combo Bundle</h3>
                <p className="text-xs text-slate-500">Matching flight and hotel itinerary</p>
              </div>
            </div>

            {/* Bundle Details Box */}
            <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-xs space-y-2.5">
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Flight Route:</span>
                <span className="font-bold text-slate-900">{origin} ⇄ {destination}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Hotel Accommodation:</span>
                <span className="font-bold text-slate-900">{hotelName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Synchronized Dates:</span>
                <span className="font-bold text-slate-900">{departureDate} – {returnDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Primary Traveler:</span>
                <span className="font-bold text-slate-900">{passengerName}</span>
              </div>
            </div>

            {/* Combo Code Pill */}
            <div className="mt-4 flex items-center justify-between rounded-xl bg-blue-50/80 border border-blue-100 px-4 py-3">
              <div>
                <span className="text-[10px] font-bold uppercase text-blue-600 block">Flight PNR / Hotel Ref</span>
                <span className="text-base font-black tracking-widest text-blue-950 font-mono">{pnrCode} / {hotelRef}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyCode}
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

export default ComboPackageHero;
