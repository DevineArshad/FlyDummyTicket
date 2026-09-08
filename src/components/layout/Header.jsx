import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Headphones,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

const services = [
  {
    title: "Dummy Flight Ticket",
    description: "Flight reservation for travel documentation",
    href: "/services/flight-reservation",
  },
  {
    title: "Dummy Hotel Booking",
    description: "Hotel reservation for your travel plan",
    href: "/services/hotel-booking",
  },
  {
    title: "Flight + Hotel Package",
    description: "Combined travel documentation package",
    href: "/services/flight-hotel-package",
  },
  {
    title: "Return Ticket",
    description: "For immigration and proof of return",
    href: "/services/return-ticket",
  },
  {
    title: "Free Date Change",
    description: "Reschedule travel dates for your visa",
    href: "/services/date-change",
  },
  {
    title: "Visa & Embassy Guidance",
    description: "Consulate requirements & checklists",
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

  const closeMenus = () => {
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
            href="https://wa.me/919311323356?text=Hi%20FlyDummyTicket%20Team%2C%20I%20need%20assistance"
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
          <nav className="mx-auto hidden h-full items-center 2xl:flex">
            <div className="relative h-full">
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex h-full items-center gap-1.5 px-5 text-sm font-semibold text-heading transition-colors hover:text-brand-blue"
                aria-expanded={isServicesOpen}
              >
                Services

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 top-[calc(100%-8px)] w-[560px] rounded-2xl border border-border bg-white p-3 shadow-floating">
                  <div className="border-b border-border px-3 pb-3 pt-2">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
                      Our Services
                    </p>

                    <p className="mt-1 text-sm text-body">
                      Choose the travel document you need.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-1 pt-3">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="group rounded-xl p-4 transition-colors hover:bg-surface-soft"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-sm font-bold text-heading">
                              {service.title}
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-body">
                              {service.description}
                            </p>
                          </div>

                          <ArrowRight
                            size={16}
                            className="mt-1 shrink-0 text-body transition-transform group-hover:translate-x-1 group-hover:text-brand-blue"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex h-full items-center px-5 text-sm font-semibold text-heading transition-colors hover:text-brand-blue"
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
              className="hidden items-center gap-2 text-sm font-semibold text-heading transition-colors hover:text-brand-blue 2xl:flex"
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
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-heading transition-colors hover:bg-surface-soft 2xl:hidden"
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
        <div className="absolute left-0 top-full w-full border-b border-border bg-white shadow-floating 2xl:hidden">
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
                      <h3 className="text-[15px] font-bold text-heading">
                        {service.title}
                      </h3>

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
                href="https://wa.me/919311323356?text=Hi%20FlyDummyTicket%20Team%2C%20I%20need%20help"
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