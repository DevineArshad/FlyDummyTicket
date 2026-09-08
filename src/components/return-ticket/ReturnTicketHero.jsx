import { useState } from "react";
import { Link } from "react-router-dom";
import returnImg from "../../assets/images/service_return.jpg";
import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Copy,
  FileCheck2,
  MessageCircle,
  Plane,
  PlaneTakeoff,
  Printer,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Ticket,
  User,
  X,
  Zap,
} from "lucide-react";

function ReturnTicketHero() {
  const [currentCity, setCurrentCity] = useState("Bangkok (BKK)");
  const [returnCity, setReturnCity] = useState("New Delhi (DEL)");
  const [returnDate, setReturnDate] = useState("2026-10-28");
  const [passengerName, setPassengerName] = useState("MR. ALEX KUMAR");
  const [airlineName, setAirlineName] = useState("Thai Airways • TG 315");
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pnrCode = "RET58210";

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(pnrCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi FlyDummyTicket Team, I need an urgent Return / Onward Ticket for Airport / Immigration Clearance:\n` +
      `• Departure City: ${currentCity}\n` +
      `• Onward Destination: ${returnCity}\n` +
      `• Date: ${returnDate}\n` +
      `• Passenger: ${passengerName}\n` +
      `• Airline: ${airlineName}\n` +
      `• Sample PNR: ${pnrCode}\n` +
      `Please issue my verified return ticket itinerary urgently.`
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F3FF] via-[#F8FAFD] to-white py-10 sm:py-14 lg:py-18">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-purple-200/35 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-[-100px] h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#7C3AED]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-slate-500">Services</span>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#7C3AED]">Return / Onward Ticket</span>
        </nav>

        {/* Page Top Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/90 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#7C3AED] shadow-xs backdrop-blur-sm">
            <RotateCcw size={13} className="text-[#8B5CF6]" />
            <span>PROOF OF ONWARD TRAVEL FOR IMMIGRATION</span>
          </div>

          <h1 className="mt-3.5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Rent a Return Ticket for <span className="text-[#7C3AED]">Airport Check-In & Visa</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Airlines and immigration officers routinely deny boarding to travelers without proof of return or onward journey. Rent a verifiable flight reservation with active PNR in 10 minutes.
          </p>

          {/* Quick Badges */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-purple-50 px-2.5 py-1 text-purple-800 border border-purple-200/80">
              <Check size={13} className="text-[#7C3AED]" /> Accepted by All Major Airlines
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-emerald-800 border border-emerald-200/80">
              <ShieldCheck size={13} className="text-emerald-600" /> Verifiable on Airline Website
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-2.5 py-1 text-amber-800 border border-amber-200/80">
              <Zap size={13} className="text-amber-600" /> Rapid 10-Minute Delivery
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1 text-blue-800 border border-blue-200/80">
              <Clock size={13} className="text-blue-600" /> Valid 48 Hours to 14 Days
            </span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            CONFIGURATOR + LIVE ONWARD TICKET PREVIEW
        ───────────────────────────────────────────────────────── */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-start">
          {/* LEFT: FORM (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
            <div className="border-b border-slate-100 pb-5">
              <h2 className="text-lg font-bold text-slate-900">Configure Onward Flight</h2>
              <p className="text-xs text-slate-500">Provide exit destination and travel date for airline boarding clearance</p>
            </div>

            <div className="mt-6 space-y-5">
              {/* Origin & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Departure / Current Airport
                  </label>
                  <select
                    value={currentCity}
                    onChange={(e) => setCurrentCity(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-100"
                  >
                    <option value="Bangkok (BKK)">Bangkok, Thailand (BKK)</option>
                    <option value="Bali (DPS)">Bali, Indonesia (DPS)</option>
                    <option value="Singapore (SIN)">Singapore (SIN)</option>
                    <option value="London (LHR)">London, UK (LHR)</option>
                    <option value="Paris (CDG)">Paris, France (CDG)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Return / Exit Destination
                  </label>
                  <select
                    value={returnCity}
                    onChange={(e) => setReturnCity(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-100"
                  >
                    <option value="New Delhi (DEL)">New Delhi, India (DEL)</option>
                    <option value="Kuala Lumpur (KUL)">Kuala Lumpur, Malaysia (KUL)</option>
                    <option value="Dubai (DXB)">Dubai, UAE (DXB)</option>
                    <option value="Mumbai (BOM)">Mumbai, India (BOM)</option>
                    <option value="Singapore (SIN)">Singapore (SIN)</option>
                  </select>
                </div>
              </div>

              {/* Date & Airline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Onward / Exit Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-100"
                    />
                    <Calendar size={15} className="pointer-events-none absolute right-3 top-3 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Operating Airline
                  </label>
                  <select
                    value={airlineName}
                    onChange={(e) => setAirlineName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-100"
                  >
                    <option value="Thai Airways • TG 315">Thai Airways • TG 315</option>
                    <option value="Singapore Airlines • SQ 502">Singapore Airlines • SQ 502</option>
                    <option value="Emirates • EK 385">Emirates • EK 385</option>
                    <option value="Air India • AI 333">Air India • AI 333</option>
                  </select>
                </div>
              </div>

              {/* Passenger Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Passenger Full Name (as on Passport)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value.toUpperCase())}
                    placeholder="e.g. MR. ALEX KUMAR"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-100"
                  />
                  <User size={15} className="pointer-events-none absolute right-3 top-3 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Pricing and Action */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">₹499</span>
                  <span className="text-xs text-slate-500 font-medium">/ approx. $6.20 USD</span>
                </div>
                <p className="text-[11px] text-purple-700 font-semibold mt-0.5">
                  ✓ Valid for immigration clearance & airport check-in
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
                  <span>Get Return Ticket</span>
                  <ArrowRight size={15} />
                </a>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] px-6 py-3 text-sm font-bold text-white shadow-md transition-all cursor-pointer"
                >
                  <Zap size={16} />
                  <span>Instant Order</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: LIVE ONWARD TICKET PREVIEW (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#7C3AED]" />
                  Live Boarding Pass Preview
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
                  Active PNR
                </span>
              </div>

              {/* Realistic Boarding Pass */}
              <div className="rounded-3xl border-2 border-purple-200 bg-white shadow-xl overflow-hidden">
                {/* Header Banner */}
                <div className="bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#8B5CF6] p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                        <RotateCcw size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black tracking-tight leading-none">ONWARD FLIGHT</h4>
                        <p className="text-[10px] text-purple-200 font-medium mt-0.5">Proof of Return Travel</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-purple-200 tracking-wider">BOOKING PNR</span>
                      <div className="flex items-center gap-1">
                        <span className="text-base font-black tracking-wider text-amber-300">{pnrCode}</span>
                        <button
                          type="button"
                          onClick={handleCopyCode}
                          title="Copy PNR"
                          className="text-white/80 hover:text-white p-0.5"
                        >
                          {copied ? <Check size={13} className="text-emerald-300" /> : <Copy size={13} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Route */}
                <div className="p-5 border-b border-dashed border-slate-200 bg-[#FAF8FF]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-black text-slate-900 tracking-tight">{currentCity.slice(-4, -1)}</p>
                      <p className="text-xs font-semibold text-slate-600">{currentCity.split(" ")[0]}</p>
                    </div>

                    <div className="flex-1 px-4 flex flex-col items-center">
                      <div className="flex items-center gap-1 text-[10px] font-bold text-purple-700 uppercase tracking-wider mb-1">
                        CONFIRMED EXIT
                      </div>
                      <div className="relative w-full flex items-center">
                        <div className="h-0.5 w-full bg-purple-200 border-t border-dashed border-purple-400" />
                        <div className="absolute left-1/2 -translate-x-1/2 bg-white px-1.5 text-purple-600">
                          <Plane size={15} />
                        </div>
                      </div>
                      <p className="text-[10px] font-bold text-slate-600 mt-1">{airlineName}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-black text-slate-900 tracking-tight">{returnCity.slice(-4, -1)}</p>
                      <p className="text-xs font-semibold text-slate-600">{returnCity.split(" ")[0]}</p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Passenger Name</span>
                      <p className="font-extrabold text-slate-800 text-xs truncate mt-0.5">{passengerName || "MR. ALEX KUMAR"}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Flight Date</span>
                      <p className="font-extrabold text-slate-800 text-xs mt-0.5">{returnDate}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center py-2 bg-purple-50/60 rounded-xl">
                    <div>
                      <span className="text-[9px] font-bold uppercase text-slate-400">Terminal</span>
                      <p className="font-black text-slate-800 text-xs">T3</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase text-slate-400">Gate</span>
                      <p className="font-black text-slate-800 text-xs">C12</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase text-slate-400">Status</span>
                      <p className="font-black text-emerald-700 text-xs">CONFIRMED</p>
                    </div>
                  </div>
                </div>

                {/* Barcode Strip */}
                <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1">
                      <ShieldCheck size={12} /> AIRLINE CHECK-IN ACCEPTED
                    </p>
                    <p className="text-[9px] text-slate-400 mt-0.5">Valid for immigration border entry</p>
                  </div>

                  <div className="flex gap-0.5 items-end h-7">
                    <span className="w-0.5 h-7 bg-white" />
                    <span className="w-1.5 h-7 bg-white" />
                    <span className="w-0.5 h-5 bg-white" />
                    <span className="w-1 h-7 bg-white" />
                    <span className="w-0.5 h-7 bg-white" />
                    <span className="w-2 h-7 bg-white" />
                    <span className="w-0.5 h-5 bg-white" />
                    <span className="w-1.5 h-7 bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            WHY YOU NEED ONWARD TICKET
        ───────────────────────────────────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-slate-900">Why Do Travelers Rent an Onward Ticket?</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Avoid boarding denial at the airport when traveling on a one-way ticket or digital nomad visa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 mb-4">
                <PlaneTakeoff size={22} />
              </div>
              <h4 className="text-base font-bold text-slate-900">Prevent Boarding Denial</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2">
                Airlines are fined if passengers are turned back at foreign borders. They require proof of onward departure before printing your boarding pass.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4">
                <ShieldCheck size={22} />
              </div>
              <h4 className="text-base font-bold text-slate-900">Genuine Active PNR</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2">
                We hold a real seat with the airline under your name. If the airline agent checks the PNR in their system, it verifies immediately.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
                <RotateCcw size={22} />
              </div>
              <h4 className="text-base font-bold text-slate-900">Digital Nomad Freedom</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2">
                Don't lock yourself into fixed return dates. Travel with full flexibility while satisfying all immigration legal requirements.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          RETURN TICKET ORDER & PRINT MODAL (STATIC-FRIENDLY)
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
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 text-[#7C3AED]">
                <RotateCcw size={22} />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 leading-tight">Return / Onward Flight Receipt</h3>
                <p className="text-xs text-slate-500">Proof of return travel for immigration</p>
              </div>
            </div>

            {/* Ticket Details Box */}
            <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-xs space-y-2.5">
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Onward Journey:</span>
                <span className="font-bold text-slate-900">{currentCity} ➔ {returnCity}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Operating Airline:</span>
                <span className="font-bold text-slate-900">{airlineName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Exit / Travel Date:</span>
                <span className="font-bold text-slate-900">{returnDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Passenger Name:</span>
                <span className="font-bold text-slate-900">{passengerName}</span>
              </div>
            </div>

            {/* PNR Code Pill */}
            <div className="mt-4 flex items-center justify-between rounded-xl bg-purple-50/80 border border-purple-100 px-4 py-3">
              <div>
                <span className="text-[10px] font-bold uppercase text-purple-700 block">Airline PNR Hold</span>
                <span className="text-base font-black tracking-widest text-purple-950 font-mono">{pnrCode}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyCode}
                className="flex items-center gap-1 text-xs font-bold text-[#7C3AED] bg-white px-3 py-1.5 rounded-lg border border-purple-200 shadow-xs"
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

export default ReturnTicketHero;
