import { useState } from "react";
import { Link } from "react-router-dom";
import hotelImg from "../../assets/images/service_hotel.jpg";
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
  FileCheck2,
  Hotel,
  MapPin,
  MessageCircle,
  Printer,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  Users,
  X,
  Zap,
} from "lucide-react";

const popularHotels = [
  {
    id: "paris",
    city: "Paris",
    country: "France",
    name: "Hôtel Le Grand Marais",
    address: "28 Rue de Rivoli, 4th arr., 75004 Paris",
    stars: 4,
    rating: "4.8/5 (Very Good)",
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    name: "The Kensington Crown Hotel",
    address: "14 Queensborough Terrace, Westminster, London W2 3SS",
    stars: 4,
    rating: "4.7/5 (Fabulous)",
  },
  {
    id: "rome",
    city: "Rome",
    country: "Italy",
    name: "Hotel Colosseo Palace",
    address: "Via Cavour 134, Rione Monti, 00184 Rome",
    stars: 4,
    rating: "4.8/5 (Superb)",
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    name: "Marina Grand Suites & Spa",
    address: "Al Marsa Street, Dubai Marina, Dubai",
    stars: 5,
    rating: "4.9/5 (Exceptional)",
  },
  {
    id: "nyc",
    city: "New York",
    country: "United States",
    name: "Manhattan Central Grand Hotel",
    address: "152 West 49th St, Times Square, New York, NY 10019",
    stars: 4,
    rating: "4.6/5 (Very Good)",
  },
  {
    id: "bali",
    city: "Bali",
    country: "Indonesia",
    name: "Ubud Sunset Valley Resort",
    address: "Jl. Raya Sanggingan, Ubud, Bali 80571",
    stars: 5,
    rating: "4.9/5 (Superb)",
  },
];

function HotelBookingHero() {
  const [selectedHotelId, setSelectedHotelId] = useState("paris");
  const [checkInDate, setCheckInDate] = useState("2026-10-15");
  const [checkOutDate, setCheckOutDate] = useState("2026-10-22");
  const [guestName, setGuestName] = useState("MR. ALEX KUMAR");
  const [guestsCount, setGuestsCount] = useState("1 Adult");
  const [roomType, setRoomType] = useState("Deluxe Double Room (City View)");
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedHotel =
    popularHotels.find((h) => h.id === selectedHotelId) || popularHotels[0];
  const bookingId = "HTL948271";

  // Calculate nights
  const calculateNights = () => {
    try {
      const d1 = new Date(checkInDate);
      const d2 = new Date(checkOutDate);
      const diffTime = Math.abs(d2 - d1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays || 7;
    } catch {
      return 7;
    }
  };

  const nights = calculateNights();

  const handleCopyBookingId = () => {
    navigator.clipboard?.writeText(bookingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi FlyDummyTicket Team, I want to book a Verified Dummy Hotel Reservation for my Visa:\n` +
      `• City & Hotel: ${selectedHotel.city} - ${selectedHotel.name}\n` +
      `• Check-In: ${checkInDate} | Check-Out: ${checkOutDate} (${nights} Nights)\n` +
      `• Guest Name: ${guestName} (${guestsCount})\n` +
      `• Room Type: ${roomType}\n` +
      `• Booking Ref: ${bookingId}\n` +
      `Please generate my embassy-valid hotel confirmation voucher.`
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#ECFDF5] via-[#F8FAFD] to-white py-10 sm:py-14 lg:py-18">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-[-100px] h-80 w-80 rounded-full bg-teal-100/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#10B981]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-slate-500">Services</span>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#0D9488]">Hotel Reservation</span>
        </nav>

        {/* Page Top Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0D9488] shadow-xs backdrop-blur-sm">
            <BedDouble size={14} className="text-[#10B981]" />
            <span>CONFIRMED HOTEL RESERVATION VOUCHER</span>
          </div>

          <h1 className="mt-3.5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Dummy Hotel Booking for <span className="text-[#0D9488]">Visa Application</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Get a genuine hotel booking voucher with an active reservation code, valid hotel address, and full guest details. Accepted worldwide by Schengen, UK, US, and Canadian visa consulates.
          </p>

          {/* Quick Badges */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-emerald-800 border border-emerald-200/80">
              <Check size={13} className="text-emerald-600" /> 100% Embassy Accepted
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-teal-50 px-2.5 py-1 text-teal-800 border border-teal-200/80">
              <Hotel size={13} className="text-teal-600" /> Real Hotel Address & Contacts
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1 text-blue-800 border border-blue-200/80">
              <RotateCcw size={13} className="text-blue-600" /> Free Date Adjustments
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-2.5 py-1 text-amber-800 border border-amber-200/80">
              <Zap size={13} className="text-amber-600" /> Instant PDF Delivery
            </span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            CONFIGURATOR + LIVE HOTEL VOUCHER PREVIEW
        ───────────────────────────────────────────────────────── */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-start">
          {/* LEFT: HOTEL BOOKING FORM (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
            <div className="border-b border-slate-100 pb-5">
              <h2 className="text-lg font-bold text-slate-900">Customise Your Hotel Voucher</h2>
              <p className="text-xs text-slate-500">Specify your destination, dates and guest name for the booking confirmation</p>
            </div>

            <div className="mt-6 space-y-5">
              {/* Hotel / City Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Select City & Hotel Property
                </label>
                <div className="relative">
                  <select
                    value={selectedHotelId}
                    onChange={(e) => setSelectedHotelId(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  >
                    {popularHotels.map((hotel) => (
                      <option key={hotel.id} value={hotel.id}>
                        {hotel.city} ({hotel.country}) - {hotel.name} ★★★★
                      </option>
                    ))}
                  </select>
                  <Building2 size={15} className="pointer-events-none absolute right-3 top-3 text-slate-400" />
                </div>
                <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                  <MapPin size={11} className="text-slate-400 shrink-0" />
                  {selectedHotel.address}
                </p>
              </div>

              {/* Check-In and Check-Out Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Check-In Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                    <Calendar size={15} className="pointer-events-none absolute right-3 top-3 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Check-Out Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                    <Calendar size={15} className="pointer-events-none absolute right-3 top-3 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Guest Name & Guests Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Primary Guest Name (as on Passport)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value.toUpperCase())}
                      placeholder="e.g. MR. ALEX KUMAR"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                    <User size={15} className="pointer-events-none absolute right-3 top-3 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Guests / Travellers
                  </label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="1 Adult">1 Adult (Single Room)</option>
                    <option value="2 Adults">2 Adults (Double / Twin)</option>
                    <option value="2 Adults, 1 Child">2 Adults + 1 Child</option>
                    <option value="Family (4 Guests)">Family (4 Guests)</option>
                  </select>
                </div>
              </div>

              {/* Room Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Room Category
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="Deluxe Double Room (City View)">Deluxe Double Room with City View</option>
                  <option value="Executive King Suite">Executive King Suite</option>
                  <option value="Superior Twin Room">Superior Twin Room</option>
                  <option value="Standard Single Room">Standard Single Room</option>
                </select>
              </div>
            </div>

            {/* Pricing and Action */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">₹250</span>
                  <span className="text-xs text-slate-500 font-medium">/ approx. $3.20 USD</span>
                </div>
                <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                  ✓ Instant PDF voucher via WhatsApp & Email
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] px-6 py-3 text-sm font-bold text-white shadow-md transition-all cursor-pointer"
                >
                  <Zap size={16} />
                  <span>Instant Order</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: LIVE HOTEL VOUCHER PREVIEW (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#0D9488]" />
                  Live Voucher Preview
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Confirmed Booking
                </span>
              </div>

              {/* Realistic Hotel Voucher Document */}
              <div className="rounded-3xl border-2 border-emerald-200 bg-white shadow-xl overflow-hidden">
                {/* Header Banner */}
                <div className="bg-gradient-to-r from-[#064E3B] via-[#0D9488] to-[#10B981] p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 backdrop-blur-xs">
                        <Hotel size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black tracking-tight leading-none">HOTEL RESERVATION</h4>
                        <p className="text-[10px] text-emerald-100 font-medium mt-0.5">Confirmed Stay Voucher</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-emerald-200 tracking-wider">BOOKING CONFIRMATION</span>
                      <div className="flex items-center gap-1">
                        <span className="text-base font-black tracking-wider text-amber-300">{bookingId}</span>
                        <button
                          type="button"
                          onClick={handleCopyBookingId}
                          title="Copy Booking ID"
                          className="text-white/80 hover:text-white p-0.5"
                        >
                          {copied ? <Check size={13} className="text-emerald-300" /> : <Copy size={13} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hotel Summary Strip */}
                <div className="relative h-32 w-full overflow-hidden bg-slate-900">
                  <img
                    src={hotelImg}
                    alt={selectedHotel.name}
                    className="h-full w-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent p-4 flex flex-col justify-end">
                    <div className="flex items-center gap-1 text-amber-400 mb-1">
                      {[...Array(selectedHotel.stars)].map((_, i) => (
                        <Star key={i} size={13} className="fill-amber-400" />
                      ))}
                      <span className="text-[11px] text-white font-bold ml-1">{selectedHotel.rating}</span>
                    </div>
                    <h3 className="text-lg font-black text-white leading-tight">{selectedHotel.name}</h3>
                    <p className="text-[11px] text-slate-300 truncate mt-0.5 flex items-center gap-1">
                      <MapPin size={11} className="text-emerald-400 shrink-0" />
                      {selectedHotel.address}
                    </p>
                  </div>
                </div>

                {/* Dates & Details */}
                <div className="p-5 space-y-4 text-xs">
                  {/* Checkin / Checkout row */}
                  <div className="grid grid-cols-2 gap-3 p-3 bg-emerald-50/70 rounded-2xl border border-emerald-100 text-center">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Check-In</span>
                      <p className="font-extrabold text-slate-900 text-sm mt-0.5">{checkInDate}</p>
                      <span className="text-[10px] text-slate-500">From 14:00</span>
                    </div>
                    <div className="border-l border-emerald-200 pl-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Check-Out</span>
                      <p className="font-extrabold text-slate-900 text-sm mt-0.5">{checkOutDate}</p>
                      <span className="text-[10px] text-slate-500">Until 12:00</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Lead Guest</span>
                      <p className="font-extrabold text-slate-800 text-xs truncate mt-0.5">{guestName || "MR. ALEX KUMAR"}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Duration</span>
                      <p className="font-extrabold text-slate-800 text-xs mt-0.5">{nights} Nights • {guestsCount}</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Room Details</span>
                    <p className="font-bold text-slate-800 text-xs mt-0.5">{roomType}</p>
                    <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">✓ Free Cancellation & Date Changes Included</p>
                  </div>
                </div>

                {/* Embassy Acceptance Seal Strip */}
                <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                      <ShieldCheck size={12} /> VISA COMPLIANT RESERVATION
                    </p>
                    <p className="text-[9px] text-slate-400 mt-0.5">Valid for Schengen, UK, US, & Canada Embassies</p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-300">
                    <FileCheck2 size={20} />
                  </div>
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
            <h3 className="text-2xl font-black text-slate-900">Why Get a Dummy Hotel Voucher for Visa?</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Consulates require proof of accommodation for all days of your trip. Our vouchers fulfill all embassy criteria without locking your funds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4">
                <ShieldCheck size={22} />
              </div>
              <h4 className="text-base font-bold text-slate-900">Zero Cancellation Penalties</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2">
                Don't risk non-refundable hotel deposits before knowing your visa outcome. Use our verified reservation voucher safely.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 mb-4">
                <CheckCircle2 size={22} />
              </div>
              <h4 className="text-base font-bold text-slate-900">Authentic Hotel Contacts</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2">
                Includes official hotel address, telephone, email and booking confirmation codes for embassy document verification.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
                <RotateCcw size={22} />
              </div>
              <h4 className="text-base font-bold text-slate-900">Free Date Rescheduling</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2">
                Visa appointment postponed? We change your check-in and check-out dates and re-issue the voucher free of charge.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          HOTEL VOUCHER ORDER & PRINT MODAL (STATIC-FRIENDLY)
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
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Hotel size={22} />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 leading-tight">Hotel Reservation Voucher</h3>
                <p className="text-xs text-slate-500">Confirmed stay for visa application</p>
              </div>
            </div>

            {/* Voucher Details Box */}
            <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-xs space-y-2.5">
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Hotel Property:</span>
                <span className="font-bold text-slate-900">{selectedHotel.name}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Location:</span>
                <span className="font-bold text-slate-900">{selectedHotel.city}, {selectedHotel.country}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Stay Dates:</span>
                <span className="font-bold text-slate-900">{checkInDate} to {checkOutDate} ({nights} Nights)</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-medium">Guest Name:</span>
                <span className="font-bold text-slate-900">{guestName} ({guestsCount})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Room Type:</span>
                <span className="font-bold text-slate-900">{roomType}</span>
              </div>
            </div>

            {/* Booking ID Pill */}
            <div className="mt-4 flex items-center justify-between rounded-xl bg-emerald-50/80 border border-emerald-100 px-4 py-3">
              <div>
                <span className="text-[10px] font-bold uppercase text-emerald-700 block">Booking Reference ID</span>
                <span className="text-base font-black tracking-widest text-emerald-950 font-mono">{bookingId}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyBookingId}
                className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-white px-3 py-1.5 rounded-lg border border-emerald-200 shadow-xs"
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

export default HotelBookingHero;
