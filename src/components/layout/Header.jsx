import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  MessageCircle,
  Phone,
  Plane,
  X,
  Sparkles,
  BedDouble,
  Building2,
  RotateCcw,
  Shield,
} from "lucide-react";

const services = [
  {
    title: "Dummy Flight Ticket",
    description: "Verifiable flight reservation with live airline PNR",
    price: "₹299",
    href: "/services/flight-reservation",
    icon: Plane,
  },
  {
    title: "Dummy Hotel Booking",
    description: "Confirmed hotel voucher for visa accommodation proof",
    price: "₹249",
    href: "/services/hotel-booking",
    icon: BedDouble,
  },
  {
    title: "Flight + Hotel Combo",
    description: "Matching flight + hotel reservation bundle",
    price: "₹499",
    badge: "Popular",
    href: "/services/flight-hotel-package",
    icon: Building2,
  },
  {
    title: "Travel Medical Insurance",
    description: "Schengen €30,000 & embassy compliant medical cover",
    price: "₹699",
    href: "/services/travel-insurance",
    icon: Shield,
  },
  {
    title: "Cancellation Return Ticket",
    description: "Proof of return for immigration & airline check-in",
    price: "₹1,499",
    badge: "Airport Clearance",
    href: "/services/return-ticket",
    icon: RotateCcw,
  },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const servicesRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 180);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const closeMenus = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const scrollToBooking = () => {
    closeMenus();
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* ─────────────────────────────────────────────────────────────
          TOPBAR: SLEEK EXECUTIVE NAVY (Indian Support Only)
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#0F172A] text-slate-300 border-b border-slate-800">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 text-[11px] font-semibold">
          {/* INDIAN SUPPORT HELPLINE */}
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
            <a href="tel:+919560099481" className="text-white hover:text-orange-400 transition shrink-0 flex items-center gap-1.5 font-bold">
              <Phone size={11} className="text-orange-400 shrink-0" />
              <span className="hidden sm:inline">India Helpline: +91 95600 99481</span>
              <span className="sm:hidden text-[10px] sm:text-[11px]">+91 95600 99481</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-[10px] text-slate-400 hidden sm:inline">24/7 Immediate Ticket Generation</span>
          </div>

          {/* WHATSAPP ACTION */}
          <a
            href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20need%20a%20dummy%20ticket"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-1.5 font-bold text-emerald-400 hover:text-emerald-300 hover:underline shrink-0 ml-2"
          >
            <MessageCircle size={13} className="shrink-0" />
            <span className="hidden min-[380px]:inline">WhatsApp Support</span>
            <span className="min-[380px]:hidden inline text-[10px]">WhatsApp</span>
            <ArrowRight size={11} className="shrink-0 hidden min-[380px]:inline" />
          </a>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN NAVBAR
      ───────────────────────────────────────────────────────────── */}
      <div className="border-b border-slate-200/80 bg-white shadow-xs">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
          
          {/* BRAND LOGO */}
          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center gap-2 shrink-0 min-w-0"
          >
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#E6582A] text-white shadow-sm shadow-[#E6582A]/30 shrink-0">
              <Plane size={18} className="rotate-[-45deg] sm:hidden" />
              <Plane size={20} className="rotate-[-45deg] hidden sm:block" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-black text-base sm:text-lg tracking-tight text-slate-900 leading-tight">
                FLY<span className="text-[#E6582A]">DUMMY</span>TICKET
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 tracking-wider uppercase -mt-0.5 truncate hidden min-[360px]:block">
                Original tickets • Verifiable PNR
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              to="/"
              className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-[#E6582A] transition rounded-lg"
            >
              Home
            </Link>

            {/* SERVICES DROPDOWN */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1 px-3 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                  isServicesOpen ? "text-[#E6582A] bg-orange-50" : "text-slate-700 hover:text-[#E6582A]"
                }`}
              >
                Services
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-[#E6582A]" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 top-full z-50 pt-2 animate-in fade-in duration-150">
                  <div className="w-88 rounded-2xl border border-slate-200 bg-white p-2.5 shadow-xl">
                    <div className="grid gap-1">
                      {services.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.title}
                            to={s.href}
                            onClick={closeMenus}
                            className="group flex items-center justify-between rounded-xl p-2.5 hover:bg-orange-50/70 transition"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#E6582A]">
                                <Icon size={14} />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-slate-900 group-hover:text-[#E6582A] transition">
                                  {s.title}
                                </p>
                                <p className="text-[10px] text-slate-400">{s.description}</p>
                              </div>
                            </div>
                            <span className="text-xs font-black text-[#E6582A] ml-2 shrink-0">{s.price}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-[#E6582A] transition rounded-lg"
            >
              Pricing
            </Link>

            <Link
              to="/how-it-works"
              className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-[#E6582A] transition rounded-lg"
            >
              How It Works
            </Link>

            <Link
              to="/visa-guide"
              className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-[#E6582A] transition rounded-lg"
            >
              Visa Guide
            </Link>

            <Link
              to="/faq"
              className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-[#E6582A] transition rounded-lg"
            >
              FAQs
            </Link>

            <Link
              to="/contact"
              className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-[#E6582A] transition rounded-lg"
            >
              Contact
            </Link>
          </nav>

          {/* RIGHT ACTION BUTTON */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <a
              href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20want%20to%20order%20a%20ticket"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-emerald-700 shadow-xs transition"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={scrollToBooking}
              className="inline-flex items-center gap-1 sm:gap-1.5 rounded-xl bg-[#E6582A] px-2.5 sm:px-4 py-2 text-[11px] sm:text-xs font-bold text-white shadow-md shadow-[#E6582A]/25 hover:bg-[#C9441B] transition cursor-pointer"
            >
              <span>Buy Ticket</span>
              <ArrowRight size={12} className="hidden min-[380px]:inline" />
            </button>

            {/* MOBILE TOGGLE */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 lg:hidden shrink-0 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-4 shadow-xl lg:hidden animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                Our 5 Services
              </p>
              <div className="space-y-1">
                {services.map((s) => (
                  <Link
                    key={s.title}
                    to={s.href}
                    onClick={closeMenus}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-slate-800 hover:bg-orange-50"
                  >
                    <span>{s.title}</span>
                    <span className="font-extrabold text-[#E6582A]">{s.price}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                Navigation
              </p>
              <div className="grid grid-cols-2 gap-1">
                <Link to="/" onClick={closeMenus} className="rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">
                  Home
                </Link>
                <Link to="/pricing" onClick={closeMenus} className="rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">
                  Pricing
                </Link>
                <Link to="/how-it-works" onClick={closeMenus} className="rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">
                  How It Works
                </Link>
                <Link to="/visa-guide" onClick={closeMenus} className="rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">
                  Visa Guide
                </Link>
                <Link to="/faq" onClick={closeMenus} className="rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">
                  FAQs
                </Link>
                <Link to="/contact" onClick={closeMenus} className="rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">
                  Contact
                </Link>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-3 space-y-2">
              <button
                type="button"
                onClick={scrollToBooking}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#E6582A] text-xs font-bold text-white shadow-xs"
              >
                <span>Buy Dummy Ticket Now (₹299)</span>
                <ArrowRight size={14} />
              </button>

              <a
                href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20need%20a%20dummy%20ticket"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenus}
                className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 text-xs font-bold text-white shadow-xs"
              >
                <MessageCircle size={15} />
                <span>Chat on WhatsApp (+91 95600 99481)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;