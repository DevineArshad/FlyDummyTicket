import { useState } from "react";
import travelerImg from "../../assets/images/traveler_airport_window.jpg";
import {
  ArrowRight,
  BedDouble,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  FileCheck,
  FileText,
  Layers,
  LayoutGrid,
  MessageCircle,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const faqCategories = [
  { id: "all", label: "All Questions", icon: LayoutGrid },
  { id: "visa", label: "Visa & Embassies", icon: FileCheck },
  { id: "pnr", label: "PNR Verification", icon: Plane },
  { id: "validity", label: "Validity & Delivery", icon: Calendar },
];

const faqs = [
  {
    id: 1,
    category: "visa",
    icon: Plane,
    question: "Is a flight reservation legal and accepted by embassies for visas?",
    answer:
      "Yes, a flight reservation (with a valid PNR) is generally accepted by most embassies as part of your visa application. It shows your intended travel plans without requiring you to purchase an expensive non-refundable ticket prior to approval.",
  },
  {
    id: 2,
    category: "pnr",
    icon: Search,
    question: "Can I verify the 6-character PNR code directly on airline websites?",
    answer:
      "Yes. Every flight reservation comes with a genuine 6-character airline booking reference (PNR). You can go to the official website of the operating airline (e.g., Emirates, Qatar Airways, Lufthansa, British Airways), navigate to 'Manage Booking', enter your surname and PNR, and view the active verifiable flight reservation.",
  },
  {
    id: 3,
    category: "validity",
    icon: Calendar,
    question: "How long is the dummy ticket flight reservation valid?",
    answer:
      "Dummy ticket validity depends on your journey route and journey date, generally for 2-3 weeks. Reservations support a maximum of 2 flights. When placing your order, you can specify your visa submission date so we schedule generation for maximum validity during your embassy review.",
  },
  {
    id: 4,
    category: "validity",
    icon: Clock,
    question: "What if my visa appointment is postponed or rescheduled?",
    answer:
      "We offer free date modifications! Simply message our support team on WhatsApp or reply to your confirmation email with your new required dates, and we will update your itinerary and re-issue the PDF at zero additional charge.",
  },
  {
    id: 5,
    category: "visa",
    icon: FileText,
    question: "Can I use this ticket as proof of onward travel at airport check-in?",
    answer:
      "Yes. If you are flying on a one-way ticket to countries that require proof of onward travel (such as Thailand, Indonesia/Bali, UK, UAE, or Latin America), our reservations provide an active verifiable PNR that airline check-in agents can verify in real-time to issue your boarding pass.",
  },
  {
    id: 6,
    category: "validity",
    icon: Zap,
    question: "How quickly do I receive the document after ordering?",
    answer:
      "Our automated dispatch system generates and sends your official IATA-compliant PDF itinerary between 10 to 30 minutes of payment directly to your WhatsApp and Email. You can print it out immediately in high resolution.",
  },
  {
    id: 7,
    category: "pnr",
    icon: Layers,
    question: "What is the difference between a dummy ticket and a real ticket?",
    answer:
      "A dummy ticket is a real seat reservation with a live GDS booking reference (PNR), but without paying the full non-refundable ticket price. It provides genuine proof of travel plans without financial risk. If your visa is delayed or rejected, you only lose a small reservation fee instead of full airfare.",
  },
  {
    id: 8,
    category: "visa",
    icon: BedDouble,
    question: "Do you also provide verifiable hotel booking vouchers?",
    answer:
      "Yes. Our hotel booking reservations are confirmed accommodation vouchers with unique voucher reference codes, hotel contact details, and dates synchronized with your flight itinerary. They meet all accommodation requirements for Schengen, UK, and global visas.",
  },
];

function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleScrollToPackages = () => {
    const el = document.getElementById("packages") || document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#services";
    }
  };

  return (
    <section
      id="help"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-white via-[#F8FAFD] to-[#F0F5FD] py-20 sm:py-24 lg:py-28"
    >
      {/* ─────────────────────────────────────────────────────────
          TOP-RIGHT SCENIC TRAVEL ARTWORK (WINDOW & AIRLINER)
      ───────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute top-4 right-0 hidden select-none lg:block w-[460px] xl:w-[500px] h-[260px] overflow-hidden z-0">
        <div className="relative w-full h-full">
          {/* Curved Flight Path with Plane */}
          <div className="absolute left-8 top-16 z-10">
            <svg
              className="w-32 h-16 text-blue-300"
              viewBox="0 0 120 60"
              fill="none"
            >
              <path
                d="M 10 50 C 40 45, 75 30, 110 15"
                stroke="#93C5FD"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute -right-2 top-2 text-blue-600 rotate-[25deg]">
              <Plane size={18} className="fill-blue-500 text-blue-600" />
            </div>
          </div>

          {/* Doodles: "Your Smoother Journey Starts Here" */}
          <div className="absolute left-10 top-3 rotate-[-7deg] text-slate-500 font-handwriting text-2xl font-bold leading-tight">
            Your Smoother
            <br />
            <span className="text-slate-500">Journey Starts Here</span>
          </div>

          {/* Masked Scenic Airport Window Image */}
          <div className="absolute right-0 top-6 w-72 h-44 rounded-bl-[60px] rounded-tl-[70px] overflow-hidden shadow-xl border-l-4 border-b-4 border-white/95">
            <img
              src={travelerImg}
              alt="Traveler at airport window"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />
          </div>

          {/* Floating Pill: "Travel Prepared Confidently" */}
          <div className="absolute right-4 top-8 z-20">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 shadow-md border border-blue-100 text-[11px] font-extrabold text-[#1D68E2]">
              <Sparkles size={11} className="text-amber-400" />
              <span>Travel Prepared Confidently</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">
        
        {/* ─────────────────────────────────────────────────────────
            SECTION HEADER
        ───────────────────────────────────────────────────────── */}
        <div className="max-w-2xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
            COMMON QUESTIONS &mdash;
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-[#0F172A] sm:text-4xl lg:text-[44px] leading-[1.12]">
            Frequently asked <br className="hidden sm:inline" />
            questions, <span className="text-[#1D68E2]">answered clearly.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
            Get clear answers about embassy guidelines, document validity, booking
            details and more &mdash; all in one place.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────
            CATEGORY TABS & SEARCH INPUT BAR
        ───────────────────────────────────────────────────────── */}
        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {faqCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenIndex(0);
                  }}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0F172A] text-white shadow-sm"
                      : "bg-white border border-slate-200/90 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-white" : "text-slate-500"} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Search Bar */}
          <div className="relative w-full max-w-sm">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIndex(0);
              }}
              placeholder="Search your question..."
              className="w-full rounded-xl border border-slate-200/90 bg-white/95 py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-2xs outline-none transition-all focus:border-[#1D68E2] focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────
            MAIN 2-COLUMN LAYOUT: FAQ ACCORDIONS + SIDEBAR CARD
        ───────────────────────────────────────────────────────── */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.45fr_0.85fr] lg:gap-10 items-start">
          
          {/* ═══════════════════════════════════════════════════════
              LEFT COLUMN: FAQ ACCORDIONS LIST
          ═══════════════════════════════════════════════════════ */}
          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
                <p className="text-sm font-semibold text-slate-600">
                  No questions found matching "{searchQuery}"
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-3 text-xs font-bold text-[#1D68E2] hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const Icon = faq.icon;
                return (
                  <div
                    key={faq.id}
                    className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                      isOpen
                        ? "border-blue-200/90 bg-white shadow-[0_4px_16px_rgba(29,104,226,0.06)]"
                        : "border-slate-200/80 bg-white hover:border-slate-300 shadow-2xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5">
                        {/* Circular Icon on the Left */}
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                            isOpen
                              ? "bg-blue-50 text-[#1D68E2]"
                              : "bg-slate-50 text-slate-600 group-hover:bg-blue-50"
                          }`}
                        >
                          <Icon size={18} />
                        </div>
                        <span className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug">
                          {faq.question}
                        </span>
                      </div>

                      {/* Right Chevron */}
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                          isOpen
                            ? "bg-blue-50 text-[#1D68E2]"
                            : "bg-slate-50 text-slate-400"
                        }`}
                      >
                        {isOpen ? (
                          <ChevronUp size={16} strokeWidth={2.5} />
                        ) : (
                          <ChevronDown size={16} strokeWidth={2.5} />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 pl-[66px]">
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* ═══════════════════════════════════════════════════════
              RIGHT COLUMN: "STILL HAVE QUESTIONS?" CARD & SECURITY
          ═══════════════════════════════════════════════════════ */}
          <div className="space-y-4 lg:sticky lg:top-28">
            {/* Top Support Card */}
            <div className="relative rounded-[28px] border border-blue-100 bg-[#F4F8FE] p-7 sm:p-8 shadow-xs">
              {/* WhatsApp Floating Circle Badge */}
              <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#3B82F6] text-white shadow-md">
                <MessageCircle size={22} className="fill-white" />
              </div>

              {/* Tag */}
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#1D68E2]">
                STILL HAVE QUESTIONS?
              </p>

              {/* Heading */}
              <h3 className="mt-2 text-xl font-extrabold text-slate-900 leading-tight pr-12">
                Our travel specialists are here to help.
              </h3>

              {/* Bullet Checklist */}
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1D68E2] text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span>Get answers from real experts</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1D68E2] text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span>Available 24/7 on WhatsApp</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1D68E2] text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span>Quick and reliable support</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1D68E2] text-white">
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span>No automated replies</span>
                </li>
              </ul>

              {/* Handwritten Doodle on the right */}
              <div className="mt-5 text-right font-handwriting text-xl font-bold text-slate-500/80 leading-snug rotate-[-5deg]">
                Real People
                <br />
                Real Support Always
              </div>

              {/* Buttons */}
              <div className="mt-6 space-y-2.5">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20team,%20I%20have%20a%20question%20about%20visa%20reservations."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0D8746] hover:bg-[#0A7039] py-3.5 px-6 text-sm font-bold text-white shadow-sm transition-all cursor-pointer"
                >
                  <MessageCircle size={16} className="fill-white text-white" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight size={14} />
                </a>

                {/* View All Packages Button */}
                <button
                  type="button"
                  onClick={handleScrollToPackages}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 py-3.5 px-6 text-sm font-bold text-slate-800 transition-all cursor-pointer shadow-2xs"
                >
                  <span>View All Packages</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Bottom Trusted & Secure Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 flex items-center justify-between gap-3.5 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white shadow-xs">
                  <ShieldCheck size={22} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">
                    TRUSTED &bull; SECURE
                  </p>
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                    Your information is always safe with us.
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    We follow strict data privacy and security standards.
                  </p>
                </div>
              </div>

              <div className="text-emerald-600 shrink-0">
                <ChevronRight size={18} />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;