import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "flight",
    message: "",
  });
  const serviceLabels = {
    flight: "Dummy Flight Ticket (₹350)",
    hotel: "Dummy Hotel Booking (₹250)",
    combo: "Flight + Hotel Combo (₹500)",
    return: "Return Ticket for Immigration (₹1,000)",
    "cancellation-return": "Cancellation Return Ticket (₹1,500)",
    insurance: "Travel Medical Insurance (₹400 / ₹700)",
    otb: "Ok To Board (OTB) Clearance (₹250)",
    "date-change": "Free Date Change Request",
    other: "General Embassy / Visa Question",
  };

  const formattedMessage =
    `Hi FlyDummyTicket Team, I have an inquiry:\n` +
    `• Name: ${formData.name}\n` +
    `• Email: ${formData.email}\n` +
    `• WhatsApp / Phone: ${formData.phone || "Not provided"}\n` +
    `• Service Interested In: ${serviceLabels[formData.service] || formData.service}\n` +
    `• Message: ${formData.message}`;

  const inquiryWhatsAppUrl = `https://wa.me/919560099481?text=${encodeURIComponent(formattedMessage)}`;
  const inquiryMailToUrl = `mailto:support@flydummyticket.com?subject=${encodeURIComponent(
    `Inquiry from ${formData.name} - ${serviceLabels[formData.service] || formData.service}`
  )}&body=${encodeURIComponent(formattedMessage)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Open WhatsApp in a new tab
    window.open(inquiryWhatsAppUrl, "_blank");
  };

  const whatsappDirect = encodeURIComponent(
    "Hi FlyDummyTicket Team, I have an inquiry regarding your dummy travel ticket services."
  );

  return (
    <div className="bg-gradient-to-b from-[#F0F5FD] via-[#F8FAFD] to-white py-10 sm:py-14 lg:py-18">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#1D68E2]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#1D68E2]">Contact & Support</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1D68E2] shadow-xs backdrop-blur-sm">
            <Headphones size={13} className="text-[#1D68E2]" />
            <span>24/7 CUSTOMER SUPPORT HUB</span>
          </div>

          <h1 className="mt-3.5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            We’re Here to Help With <span className="text-[#1D68E2]">Your Travel Plans</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Have questions about your embassy requirements, PNR validity, or urgent travel reservations? Chat with our travel specialists or send us a message below.
          </p>
        </div>

        {/* Grid: Left Info & WhatsApp Card, Right Contact Form */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-start">
          {/* LEFT: CONTACT DETAILS & WHATSAPP CARD (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Callout */}
            <div className="rounded-3xl border-2 border-emerald-500 bg-gradient-to-br from-emerald-600 to-[#0A7039] p-6 text-white shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                  <MessageCircle size={26} className="text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">Instant Assistance</span>
                  <h3 className="text-xl font-black">Chat on WhatsApp</h3>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-emerald-100">
                Our fastest channel! Most inquiries are answered within 2–5 minutes by an experienced travel documentation consultant.
              </p>

              <a
                href={`https://wa.me/919560099481?text=${whatsappDirect}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-extrabold text-[#0A7039] shadow-md hover:bg-emerald-50 transition-colors"
              >
                <span>Open WhatsApp Chat</span>
                <ArrowRight size={16} />
              </a>

              <p className="mt-2 text-center text-[11px] text-emerald-200">
                +91 95600 99481 • Available 24/7
              </p>
            </div>

            {/* Direct Information Details */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Contact Information
              </h3>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-600">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D68E2]">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-400">Email Support</span>
                  <p className="font-semibold text-slate-800">support@flydummyticket.com</p>
                  <span className="text-[11px] text-slate-400">Replies within 1 hour</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-600">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D68E2]">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-400">Direct Helpline</span>
                  <p className="font-semibold text-slate-800">+91 95600 99481</p>
                  <span className="text-[11px] text-slate-400">Mon - Sun, 9:00 AM - 9:00 PM (IST)</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-600">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D68E2]">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-400">Office Location</span>
                  <p className="font-semibold text-slate-800">B32, Gali No. 3, East Azad Nagar</p>
                  <span className="text-[11px] text-slate-400">Delhi, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
            <h2 className="text-lg font-bold text-slate-900">Send an Inquiry</h2>
            <p className="text-xs text-slate-500">Fill out this quick form and our team will get back to you promptly</p>

            {submitted ? (
              <div className="mt-6 rounded-2xl bg-emerald-50/90 border border-emerald-200 p-6 sm:p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3 shadow-xs">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Inquiry Prepared for Support Desk!</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry has been formatted and opened for our 24/7 WhatsApp dispatch team.
                </p>

                <div className="mt-4 rounded-xl border border-emerald-200/80 bg-white p-4 text-left text-xs text-slate-700 max-w-md mx-auto space-y-1.5 shadow-2xs">
                  <p><span className="font-bold text-slate-400 uppercase text-[10px]">Service:</span> {serviceLabels[formData.service] || formData.service}</p>
                  <p><span className="font-bold text-slate-400 uppercase text-[10px]">Email:</span> {formData.email}</p>
                  {formData.phone && <p><span className="font-bold text-slate-400 uppercase text-[10px]">WhatsApp:</span> {formData.phone}</p>}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                  <a
                    href={inquiryWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D8746] hover:bg-[#0A7039] px-5 py-3 text-xs font-bold text-white shadow-sm transition"
                  >
                    <MessageCircle size={15} />
                    <span>Open in WhatsApp</span>
                  </a>

                  <a
                    href={inquiryMailToUrl}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3 text-xs font-bold text-slate-700 shadow-2xs transition"
                  >
                    <Mail size={15} />
                    <span>Send via Email</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-xs font-bold text-[#1D68E2] hover:underline cursor-pointer"
                >
                  ← Edit or send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Kumar"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="flight">Dummy Flight Ticket (₹350)</option>
                      <option value="hotel">Dummy Hotel Booking (₹250)</option>
                      <option value="combo">Flight + Hotel Combo (₹500)</option>
                      <option value="return">Return Ticket for Immigration (₹1,000)</option>
                      <option value="cancellation-return">Cancellation Return Ticket (₹1,500)</option>
                      <option value="insurance">Travel Medical Insurance (₹400 / ₹700)</option>
                      <option value="otb">Ok To Board (OTB) Clearance (₹250)</option>
                      <option value="date-change">Free Date Change Request</option>
                      <option value="other">General Embassy / Visa Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your visa type, travel dates, and any specific airline/hotel preferences..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#1D68E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#1D68E2] hover:bg-[#1556BE] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all cursor-pointer"
                >
                  <Send size={16} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
