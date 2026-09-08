import { Link } from "react-router-dom";
import airportCanopyImg from "../../assets/images/airport_terminal_canopy.jpg";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  CreditCard,
  FileCheck2,
  FileText,
  Globe,
  Headphones,
  HelpCircle,
  Home,
  Hotel,
  Mail,
  MapPin,
  MessageCircle,
  Newspaper,
  Phone,
  Plane,
  RefreshCw,
  Settings,
  Shield,
  ShieldCheck,
  Tag,
  Ticket,
} from "lucide-react";

const services = [
  {
    label: "Dummy Flight Ticket (₹350)",
    icon: Plane,
    href: "/services/flight-reservation",
  },
  {
    label: "Dummy Hotel Booking (₹250)",
    icon: Hotel,
    href: "/services/hotel-booking",
  },
  {
    label: "Flight + Hotel Combo (₹500)",
    icon: Ticket,
    href: "/services/flight-hotel-package",
  },
  {
    label: "Return Ticket for Immigration (₹1,000)",
    icon: RefreshCw,
    href: "/services/return-ticket",
  },
  {
    label: "Travel Medical Insurance (₹400)",
    icon: Shield,
    href: "/contact",
  },
  {
    label: "Ok To Board (OTB) Clearance (₹250)",
    icon: CheckCircle2,
    href: "/contact",
  },
  {
    label: "Free Date Change Service",
    icon: Clock,
    href: "/services/date-change",
  },
  {
    label: "Inspect Air India Sample PDF",
    icon: FileText,
    href: "/sample-eticket.pdf",
    isExternal: true,
  },
];

const quickLinks = [
  { label: "Home", icon: Home, href: "/" },
  { label: "How It Works", icon: Settings, href: "/how-it-works" },
  { label: "Pricing & Packages", icon: Tag, href: "/#services" },
  { label: "Visa & Embassies", icon: FileCheck2, href: "/visa-guide" },
  { label: "Frequently Asked Questions", icon: HelpCircle, href: "/faq" },
  { label: "Travel Blog", icon: Newspaper, href: "/blog" },
  { label: "Contact Us", icon: Phone, href: "/contact" },
];

function Footer() {
  const handleScrollToBooking = () => {
    const el = document.getElementById("booking") || document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#services";
    }
  };

  return (
    <footer className="relative bg-[#FAFCFF] text-slate-700 border-t border-slate-200/80">
      
      {/* ─────────────────────────────────────────────────────────
          TOP PRE-FOOTER: "WE'RE HERE TO HELP" SUPPORT BANNER
      ───────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/50 py-12 lg:py-16">
        
        {/* Right Airport Terminal Scenic Window & Plane */}
        <div className="pointer-events-none absolute top-0 right-0 hidden lg:block w-[420px] xl:w-[480px] h-full overflow-hidden select-none z-0">
          <div className="relative w-full h-full">
            {/* Terminal Photo Cutout */}
            <div className="absolute right-0 top-0 w-80 xl:w-96 h-full rounded-bl-[80px] overflow-hidden border-l-4 border-b-4 border-white shadow-xl">
              <img
                src={airportCanopyImg}
                alt="Airport Terminal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Flying Airplane */}
            <div className="absolute left-10 top-6 z-10">
              <div className="relative">
                <svg className="w-36 h-16 text-blue-300" viewBox="0 0 140 60" fill="none">
                  <path
                    d="M 10 50 C 45 45, 80 30, 120 12"
                    stroke="#93C5FD"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute -right-2 top-0 text-blue-600 rotate-[22deg]">
                  <Plane size={20} className="fill-blue-500 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Doodle: "Your Journey Our Support" */}
            <div className="absolute left-16 top-2 rotate-[-8deg] font-handwriting text-2xl font-bold text-slate-500/85 leading-tight z-10">
              Your Journey
              <br />
              <span className="text-slate-500/85">Our Support</span>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1.1fr_0.8fr] items-center">
            
            {/* Headline */}
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                STILL HAVE QUESTIONS?
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                We’re here to help <br />
                with your <span className="text-[#1D68E2]">travel plans.</span>
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
                Get instant support from our travel experts on WhatsApp. We typically reply within a few minutes.
              </p>
            </div>

            {/* 3 Middle Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3">
              {/* Feature 1 */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100/70 text-[#1D68E2]">
                  <Headphones size={20} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    Real Support
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Chat with travel experts
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100/70 text-[#1D68E2]">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    Quick Response
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Usually within few minutes
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100/70 text-emerald-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    Guidance You Can Trust
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Accurate & updated info
                  </p>
                </div>
              </div>
            </div>

            {/* Right WhatsApp Button */}
            <div className="flex flex-col items-start lg:items-end">
              <a
                href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20team,%20I%20have%20a%20question%20about%20travel%20reservations."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#0D8746] hover:bg-[#0A7039] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <MessageCircle size={18} className="fill-white text-white" />
                <span>Chat on WhatsApp</span>
                <ArrowRight size={15} />
              </a>
              <p className="mt-2 text-[11px] font-medium text-slate-500 text-center lg:text-right">
                Available 24/7 for your travel queries
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          MAIN 4-COLUMN FOOTER
      ───────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_0.9fr_1.1fr] xl:grid-cols-[1.4fr_1fr_0.9fr_1.1fr] lg:gap-12">
          
          {/* ═══════════════════════════════════════════════════════
              COLUMN 1: BRAND OVERVIEW & 4 TRUST BADGES
          ═══════════════════════════════════════════════════════ */}
          <div>
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1D68E2] text-white shadow-xs">
                <Plane size={18} className="rotate-[-20deg]" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Fly<span className="text-[#1D68E2]">Dummy</span>Ticket
              </span>
            </Link>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1">
              Travel Smart. Plan Confidently.
            </p>

            <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-slate-500">
              We provide verifiable flight and hotel reservation services with authentic airline
              PNR codes. Designed to support visa applications, travel planning, and onward journey
              requirements &mdash; without purchasing full-price tickets.
            </p>

            {/* 4 Feature Badges in 2x2 Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                <span>Secure & Reliable</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Globe size={16} className="text-[#1D68E2] shrink-0" />
                <span>Worldwide Service</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Headphones size={16} className="text-emerald-600 shrink-0" />
                <span>Expert Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CreditCard size={16} className="text-[#1D68E2] shrink-0" />
                <span>Multiple Payment Options</span>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════
              COLUMN 2: OUR SERVICES
          ═══════════════════════════════════════════════════════ */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
              Our Services
            </h3>

            <ul className="mt-5 space-y-2.5">
              {services.map((item, i) => {
                const Icon = item.icon;
                if (item.isExternal) {
                  return (
                    <li key={i}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between text-xs sm:text-[13px] text-slate-600 hover:text-[#1D68E2] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon size={15} className="text-slate-400 group-hover:text-[#1D68E2] transition-colors" />
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight size={14} className="text-slate-300 group-hover:text-[#1D68E2] group-hover:translate-x-0.5 transition-all" />
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={i}>
                    <Link
                      to={item.href}
                      onClick={() => {
                        if (item.href.includes("#")) handleScrollToBooking();
                      }}
                      className="group flex items-center justify-between text-xs sm:text-[13px] text-slate-600 hover:text-[#1D68E2] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon size={15} className="text-slate-400 group-hover:text-[#1D68E2] transition-colors" />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight size={14} className="text-slate-300 group-hover:text-[#1D68E2] group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ═══════════════════════════════════════════════════════
              COLUMN 3: QUICK LINKS
          ═══════════════════════════════════════════════════════ */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i}>
                    <Link
                      to={item.href}
                      className="group flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-600 hover:text-[#1D68E2] transition-colors"
                    >
                      <Icon size={15} className="text-slate-400 group-hover:text-[#1D68E2] transition-colors" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ═══════════════════════════════════════════════════════
              COLUMN 4: GET IN TOUCH & SOCIALS
          ═══════════════════════════════════════════════════════ */}
          <div id="support">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
              Get in Touch
            </h3>

            <div className="mt-5 space-y-3.5 text-xs sm:text-[13px] text-slate-600">
              {/* Mail */}
              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-slate-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:support@flydummyticket.com"
                  className="hover:text-[#1D68E2] transition-colors font-medium"
                >
                  support@flydummyticket.com
                </a>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href="https://wa.me/919560099481"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 hover:text-[#1D68E2] transition-colors"
                  >
                    +91 95600 99481
                  </a>
                  <p className="text-[11px] text-slate-400">Chat on WhatsApp (24/7)</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-2.5">
                <Clock size={16} className="text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800">
                    Mon - Sun, 9:00 AM - 9:00 PM (IST)
                  </p>
                  <p className="text-[11px] text-slate-400">We usually reply within a few minutes.</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-slate-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-snug">
                  B32, Gali No. 3, East Azad Nagar, Delhi, India
                </p>
              </div>
            </div>

            {/* Follow Us */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Follow Us
              </h4>
              <div className="mt-3 flex items-center gap-2.5">
                {/* Facebook */}
                <a
                  href="https://facebook.com/flydummyticket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M9.198 21.5h4v-8.01h2.672l.4-3.1h-3.072V8.41c0-.898.249-1.51 1.537-1.51h1.642V4.124C16.096 4.085 15.11 4 13.978 4c-2.38 0-4.01 1.453-4.01 4.122v2.268H7.28v3.1h2.698v8.01z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com/flydummyticket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com/@flydummyticket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white hover:opacity-90 transition-opacity"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/flydummyticket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.92 0-1.66-.74-1.66-1.66s.74-1.66 1.66-1.66 1.66.74 1.66 1.66-.74 1.66-1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a
                  href="https://x.com/flydummyticket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white hover:opacity-90 transition-opacity"
                  aria-label="X"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────
            PAYMENTS & APP DOWNLOAD BAR
        ───────────────────────────────────────────────────────── */}
        <div className="mt-14 rounded-2xl border border-slate-200/90 bg-white p-5 sm:px-6 shadow-xs">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Safe Payments Callout */}
            <div className="flex items-center gap-3.5 shrink-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1D68E2]">
                <Shield size={20} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Safe & Secure Payments
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Your transactions are encrypted and 100% secure.
                </p>
              </div>
            </div>

            {/* Payment Provider Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {/* UPI */}
              <div className="flex items-center gap-1 font-black text-sm italic tracking-tight text-slate-800">
                <span className="text-[#0D8746] font-mono not-italic text-base">⫸</span> UPI
              </div>

              {/* VISA */}
              <div className="font-extrabold text-base tracking-wider text-[#1A1F71] italic">
                VISA
              </div>

              {/* Mastercard */}
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-[#EB001B] opacity-90 -mr-2" />
                <div className="w-5 h-5 rounded-full bg-[#F79E1B] opacity-90" />
              </div>

              {/* RuPay */}
              <div className="font-extrabold text-sm tracking-tight text-slate-800 flex items-center gap-0.5">
                Ru<span className="text-[#0D8746]">Pay</span>
                <span className="text-amber-500">▶</span>
              </div>

              {/* NetBanking */}
              <div className="flex items-center gap-1 text-[11px] font-bold text-[#1A365D]">
                <div className="flex gap-0.5 items-end h-3">
                  <span className="w-1 h-3 bg-[#1A365D]" />
                  <span className="w-1 h-3 bg-[#1A365D]" />
                  <span className="w-1 h-3 bg-[#1A365D]" />
                </div>
                <div className="leading-none text-left">
                  <span className="text-[8px] block">NET</span>
                  <span className="text-[9px] block font-extrabold">BANKING</span>
                </div>
              </div>

              {/* PayPal */}
              <div className="font-bold text-sm text-[#003087] italic tracking-tight">
                Pay<span className="text-[#0079C1]">Pal</span>
              </div>
            </div>

            {/* Fast Delivery & Trust Badge (Static Website) */}
            <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 border border-emerald-200/80 px-4 py-2.5 text-xs text-emerald-900 shadow-xs">
              <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
              <div className="leading-tight">
                <span className="font-extrabold block">Instant Delivery via WhatsApp & Email</span>
                <span className="text-[11px] text-emerald-700 font-medium">Valid 6-character PNR • 100% Embassy Accepted</span>
              </div>
            </div>

          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            BOTTOM COPYRIGHT & LEGAL LINKS BAR
        ───────────────────────────────────────────────────────── */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} FlyDummyTicket. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-300">|</span>
            <Link to="/terms-conditions" className="hover:text-slate-900 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-300">|</span>
            <Link to="/refund-policy" className="hover:text-slate-900 transition-colors">
              Refund Policy
            </Link>
            <span className="text-slate-300">|</span>
            <Link to="/" className="hover:text-slate-900 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;