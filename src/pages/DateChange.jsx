import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  HelpCircle,
  MessageCircle,
  RotateCcw,
  Send,
  ShieldCheck,
  User,
  Zap,
} from "lucide-react";

function DateChange() {
  const [form, setForm] = useState({
    bookingRef: "",
    fullName: "",
    contact: "",
    serviceType: "flight",
    newDepDate: "",
    newRetDate: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const serviceTypeLabels = {
    flight: "Flight Reservation Only",
    hotel: "Hotel Booking Only",
    combo: "Both Flight & Hotel (Combo)",
  };

  const formattedReschedule =
    `Hi FlyDummyTicket Team, I need to reschedule my travel dates:\n` +
    `• Booking Ref / PNR: ${form.bookingRef || "N/A"}\n` +
    `• Passenger Name: ${form.fullName}\n` +
    `• Contact (WhatsApp/Email): ${form.contact}\n` +
    `• Document Type: ${serviceTypeLabels[form.serviceType] || form.serviceType}\n` +
    `• New Departure / Check-In: ${form.newDepDate}\n` +
    (form.newRetDate ? `• New Return / Check-Out: ${form.newRetDate}\n` : "") +
    (form.notes ? `• Reason / Notes: ${form.notes}\n` : "") +
    `Please re-issue my updated itinerary PDF free of charge.`;

  const whatsappRescheduleUrl = `https://wa.me/919560099481?text=${encodeURIComponent(formattedReschedule)}`;
  const mailToRescheduleUrl = `mailto:support@flydummyticket.com?subject=${encodeURIComponent(
    `Free Date Reschedule Request - Ref: ${form.bookingRef || form.fullName}`
  )}&body=${encodeURIComponent(formattedReschedule)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(whatsappRescheduleUrl, "_blank");
  };

  return (
    <div className="bg-gradient-to-b from-[#F0F5FD] via-white to-[#F8FAFD] py-10 sm:py-14 lg:py-18">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#1D68E2]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-slate-500">Services</span>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#1D68E2]">Free Date Change</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1D68E2] shadow-xs">
            <RotateCcw size={13} className="text-[#1D68E2]" />
            <span>NO RESCHEDULING FEES</span>
          </div>

          <h1 className="mt-3.5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Free Itinerary <span className="text-[#1D68E2]">Date Rescheduling</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Visa appointment postponed or embassy processing delayed? We will update your flight dates and hotel stay period and re-issue your verified PDF documents at zero extra charge.
          </p>

          {/* Quick Badges */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-emerald-800 border border-emerald-200/80">
              <CheckCircle2 size={13} className="text-emerald-600" /> 100% Free of Charge
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1 text-blue-800 border border-blue-200/80">
              <Clock size={13} className="text-blue-600" /> Re-issued Within 2 Hours
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-purple-50 px-2.5 py-1 text-purple-800 border border-purple-200/80">
              <ShieldCheck size={13} className="text-purple-600" /> Fresh Active Airline PNR
            </span>
          </div>
        </div>

        {/* Form Container */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-start">
          {/* Form */}
          <div className="lg:col-span-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Rescheduling Request Form</h2>
            <p className="text-xs text-slate-500 mt-1">
              Enter your booking reference and desired new travel dates below.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-emerald-50/90 border border-emerald-200 p-6 sm:p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4 shadow-xs">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Reschedule Request Prepared!</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  We have prepared and opened your date change request for booking reference <strong>{form.bookingRef}</strong>. Our ticketing desk will re-issue your updated PDF at zero extra charge.
                </p>

                <div className="mt-4 rounded-xl border border-emerald-200/80 bg-white p-4 text-left text-xs text-slate-700 max-w-md mx-auto space-y-1.5 shadow-2xs">
                  <p><span className="font-bold text-slate-400 uppercase text-[10px]">Booking Ref:</span> {form.bookingRef}</p>
                  <p><span className="font-bold text-slate-400 uppercase text-[10px]">Passenger:</span> {form.fullName}</p>
                  <p><span className="font-bold text-slate-400 uppercase text-[10px]">New Departure:</span> {form.newDepDate}</p>
                  {form.newRetDate && <p><span className="font-bold text-slate-400 uppercase text-[10px]">New Return:</span> {form.newRetDate}</p>}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                  <a
                    href={whatsappRescheduleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D8746] hover:bg-[#0A7039] px-5 py-3 text-xs font-bold text-white shadow-sm transition"
                  >
                    <MessageCircle size={15} />
                    <span>Send via WhatsApp</span>
                  </a>

                  <a
                    href={mailToRescheduleUrl}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3 text-xs font-bold text-slate-700 shadow-2xs transition"
                  >
                    <span>Send via Email</span>
                  </a>
                </div>

                <div className="mt-5 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#1D68E2] hover:underline cursor-pointer"
                  >
                    ← Edit or submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Existing Booking Reference / PNR
                    </label>
                    <input
                      type="text"
                      required
                      value={form.bookingRef}
                      onChange={(e) => setForm({ ...form, bookingRef: e.target.value.toUpperCase() })}
                      placeholder="e.g. FD78491 or HTL948271"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Passenger Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value.toUpperCase() })}
                      placeholder="as on original booking"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      WhatsApp / Email for Delivery
                    </label>
                    <input
                      type="text"
                      required
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      placeholder="+91 98765 43210 or email@domain.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Document Type to Reschedule
                    </label>
                    <select
                      value={form.serviceType}
                      onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="flight">Flight Reservation Only</option>
                      <option value="hotel">Hotel Booking Only</option>
                      <option value="combo">Both Flight & Hotel (Combo)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      New Proposed Departure / Check-In Date
                    </label>
                    <input
                      type="date"
                      required
                      value={form.newDepDate}
                      onChange={(e) => setForm({ ...form, newDepDate: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      New Proposed Return / Check-Out Date (if round-trip)
                    </label>
                    <input
                      type="date"
                      value={form.newRetDate}
                      onChange={(e) => setForm({ ...form, newRetDate: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Reason for Change / Extra Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="e.g. Visa interview postponed from 15th Oct to 28th Oct..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#1D68E2] hover:bg-[#1556BE] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all cursor-pointer"
                  >
                    <RotateCcw size={16} />
                    <span>Request Free Date Change</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Support Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900">Need Immediate Rescheduling?</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                If your appointment is in the next few hours, chat directly with our dispatch team on WhatsApp for emergency queue priority.
              </p>

              <a
                href={`https://wa.me/919560099481?text=${whatsappReschedule}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0D8746] hover:bg-[#0A7039] px-5 py-3 text-xs font-bold text-white shadow-md transition-all cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Urgent WhatsApp Reschedule</span>
              </a>
            </div>

            <div className="rounded-3xl bg-blue-50/70 border border-blue-100 p-6">
              <h4 className="text-sm font-bold text-[#1D68E2] flex items-center gap-2">
                <ShieldCheck size={18} />
                Our Reschedule Guarantee
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                We allow unlimited date changes for all flight and hotel reservations within 30 days of initial order, completely free of charge.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DateChange;
