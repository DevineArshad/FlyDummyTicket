import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Headphones,
  Menu,
  MessageCircle,
  X,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Dummy Flight Ticket",
    description: "Embassy verifiable airline PNR reservation",
    price: "₹350",
    href: "/services/flight-reservation",
  },
  {
    title: "Dummy Hotel Booking",
    description: "Confirmed hotel voucher for visa proof",
    price: "₹250",
    href: "/services/hotel-booking",
  },
  {
    title: "Flight + Hotel Package",
    description: "Complete matching travel itinerary bundle",
    price: "₹500",
    href: "/services/flight-hotel-package",
  },
  {
    title: "Proof of Return Ticket",
    description: "For immigration counters & border clearance",
    price: "₹1,000",
    href: "/services/return-ticket",
  },
  {
    title: "Travel Medical Insurance",
    description: "Schengen & embassy approved medical cover",
    price: "₹400",
    href: "/contact",
  },
  {
    title: "Visa & Embassy Guidance",
    description: "Consulate requirements & document checklists",
    price: "Guide",
    href: "/visa-guide",
  },
];

const navItems = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Visa Guidance", href: "/visa-guide" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [currency, setCurrency] = useState("INR");

  const servicesRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  // Close on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const closeMenus = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* TOP TRUST BAR */}
      <div className="bg-brand-navy">
        <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-between px-5 sm:px-6 lg:px-8">
          <p className="text-[11px] font-medium text-slate-300 sm:text-xs">
            <span className="hidden sm:inline">
              Travel reservations for visa, immigration & travel documentation
            </span>
            <span className="sm:hidden">
              Travel documentation made simple
            </span>
          </p>

          <a
            href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20need%20assistance"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-semibold text-white transition-opacity hover:opacity-80 sm:text-xs"
          >
            <MessageCircle size={14} />
            <span className="hidden md:inline">Need help?</span>
            WhatsApp
            <ArrowRight size={13} />
          </a>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="border-b border-border/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center px-5 sm:px-6 lg:px-8">
          
          {/* BRAND */}
          <Link
            to="/"
            onClick={closeMenus}
            aria-label="FlyDummyTicket Home"
            className="flex shrink-0 items-center"
          >
            <span className="text-[18px] font-extrabold tracking-[-0.065em] text-heading sm:text-[20px]">
              FLY
            </span>

            <span className="text-[18px] font-extrabold tracking-[-0.065em] text-brand-blue sm:text-[20px]">
              DUMMY
            </span>

            <span className="text-[18px] font-extrabold tracking-[-0.065em] text-heading sm:text-[20px]">
              TICKET
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="mx-auto hidden h-full items-stretch xl:flex">
            {/* SERVICES DROPDOWN WITH HOVER & CLICK SUPPORT */}
            <div
              ref={servicesRef}
              className="services-nav-group relative flex h-full items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className={`services-nav-button flex h-full items-center gap-1.5 px-4 text-sm font-semibold transition-colors ${
                  isServicesOpen ? "is-open text-brand-blue" : "text-heading"
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                id="services-menu-trigger"
              >
                Services
                <ChevronDown
                  size={15}
                  className={`services-chevron transition-transform duration-200 ${
                    isServicesOpen ? "is-open text-brand-blue" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN MENU CONTAINER */}
              <div
                className={`services-dropdown-menu absolute left-0 top-full z-50 pt-1 ${
                  isServicesOpen ? "is-open" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[580px] rounded-2xl border border-border bg-white p-3.5 shadow-floating">
                  <div className="flex items-center justify-between border-b border-border/80 px-3 pb-3 pt-1.5">
                    <div>
                      <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
                        <Sparkles size={13} />
                        Our Services & Pricing
                      </p>
                      <p className="mt-0.5 text-xs text-body">
                        Embassy-accepted travel reservations with verifiable PNR
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200/80">
                      ● Active Airline PNR
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 pt-3">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        onClick={closeMenus}
                        className="group rounded-xl p-3 transition-all duration-150 hover:bg-surface-soft hover:shadow-xs border border-transparent hover:border-border/60"
                      >
                        <div className="flex items-start justify-between gap-2.5">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="text-sm font-bold text-heading group-hover:text-brand-blue transition-colors truncate">
                                {service.title}
                              </h3>
                              {service.price && (
                                <span className={`shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-bold ${
                                  service.price === "FREE"
                                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                    : service.price === "Guide"
                                    ? "bg-purple-50 text-purple-700 border border-purple-200"
                                    : "bg-blue-50 text-brand-blue border border-blue-200"
                                }`}>
                                  {service.price}
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-xs leading-4.5 text-body">
                              {service.description}
                            </p>
                          </div>

                          <ArrowRight
                            size={15}
                            className="mt-1 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-blue"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* QUICK WHATSAPP ASSISTANCE FOOTER */}
                  <div className="mt-2.5 flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2.5 border border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Need instant booking or custom route quote?</span>
                    </div>
                    <a
                      href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20need%20assistance%20with%20a%20ticket"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      WhatsApp Us <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex h-full items-center px-4 text-sm font-semibold text-heading transition-colors hover:text-brand-blue"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="ml-auto flex shrink-0 items-center gap-2.5">
            
            {/* TABLET + DESKTOP CURRENCY */}
            <div className="hidden items-center rounded-full border border-border bg-surface-soft p-1 md:flex">
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                  currency === "INR"
                    ? "bg-white text-heading shadow-sm"
                    : "text-body"
                }`}
              >
                🇮🇳 INR
              </button>

              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                  currency === "USD"
                    ? "bg-white text-heading shadow-sm"
                    : "text-body"
                }`}
              >
                USD
              </button>
            </div>

            {/* DESKTOP SUPPORT */}
            <Link
              to="/contact"
              className="hidden items-center gap-2 text-sm font-semibold text-heading transition-colors hover:text-brand-blue xl:flex"
            >
              <Headphones size={17} />
              Support
            </Link>

            {/* BOOK NOW - TABLET AND DESKTOP */}
            <Link
              to="/services/flight-reservation"
              className="hidden h-11 items-center gap-2 rounded-xl bg-brand-navy px-5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue md:inline-flex"
            >
              Book Now
              <ArrowRight size={17} strokeWidth={2.4} />
            </Link>

            {/* MENU */}
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setIsServicesOpen(false);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-heading transition-colors hover:bg-surface-soft xl:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={21} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* TABLET / MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-border bg-white shadow-floating xl:hidden">
          <div className="mx-auto max-w-[1440px] px-5 py-6 sm:px-6 lg:px-8">

            {/* CURRENCY ONLY ON MOBILE */}
            <div className="mb-6 flex items-center justify-between md:hidden">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-body">
                Currency
              </span>

              <div className="flex rounded-full border border-border bg-surface-soft p-1">
                <button
                  type="button"
                  onClick={() => setCurrency("INR")}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                    currency === "INR"
                      ? "bg-white text-heading shadow-sm"
                      : "text-body"
                  }`}
                >
                  🇮🇳 INR
                </button>

                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                    currency === "USD"
                      ? "bg-white text-heading shadow-sm"
                      : "text-body"
                  }`}
                >
                  USD
                </button>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
                Services
              </p>

              <div className="border-y border-border">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    to={service.href}
                    onClick={closeMenus}
                    className="group flex items-center justify-between border-b border-border py-4 last:border-b-0"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-[15px] font-bold text-heading">
                          {service.title}
                        </h3>
                        {service.price && (
                          <span className={`shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-bold ${
                            service.price === "FREE"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : service.price === "Guide"
                              ? "bg-purple-50 text-purple-700 border border-purple-200"
                              : "bg-blue-50 text-brand-blue border border-blue-200"
                          }`}>
                            {service.price}
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-xs text-body">
                        {service.description}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      className="shrink-0 text-body transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* NAVIGATION */}
            <nav className="mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={closeMenus}
                  className="block border-b border-border py-4 text-[15px] font-bold text-heading"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20need%20help"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenus}
                className="flex items-center gap-2 py-4 text-[15px] font-bold text-heading"
              >
                <Headphones size={18} />
                Help & Support
              </a>
            </nav>

            {/* MOBILE CTA */}
            <Link
              to="/services/flight-reservation"
              onClick={closeMenus}
              className="mt-3 flex h-[54px] items-center justify-center gap-2 rounded-xl bg-brand-navy text-sm font-bold text-white md:hidden"
            >
              Book Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;