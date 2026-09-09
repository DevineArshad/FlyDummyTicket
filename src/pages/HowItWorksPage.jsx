import { useState } from "react";
import { Link } from "react-router-dom";
import HowItWorks from "../components/home/HowItWorks";
import {
  ArrowRight,
  BedDouble,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  ExternalLink,
  FileCheck2,
  Globe,
  HelpCircle,
  MessageCircle,
  Phone,
  Plane,
  RotateCcw,
  Search,
  Shield,
  ShieldCheck,
  Zap,
} from "lucide-react";

const serviceGuides = [
  {
    id: "flight",
    title: "Dummy Flight Ticket (₹299)",
    icon: Plane,
    badge: "Live Airline PNR",
    summary: "How flight reservations are issued and verified on airline websites",
    points: [
      "Issued through authorized airline Global Distribution Systems (GDS) such as Amadeus and Sabre.",
      "Comes with an active 6-character Passenger Name Record (PNR) verifiable in real-time.",
      "Formatted to official IATA standards with flight numbers, departure times, terminal info, and barcode.",
      "Status appears as 'Confirmed' or 'HK1' on the airline's official 'Manage Booking' webpage.",
      "100% accepted by Schengen, US, UK, Canada, Australia, and worldwide visa authorities.",
    ],
    href: "/services/flight-reservation",
  },
  {
    id: "hotel",
    title: "Dummy Hotel Booking (₹249)",
    icon: BedDouble,
    badge: "Confirmed Voucher",
    summary: "How hotel vouchers satisfy consular proof of accommodation",
    points: [
      "Issued with real hotel properties matching your destination and budget requirements.",
      "Contains authentic hotel contact telephone, full street address, and hotel booking reference number.",
      "Check-in and check-out dates are synchronized to match your proposed flight arrival and departure.",
      "Fulfills Article 14(1)(b) of the Schengen Visa Code for documentary proof of lodging.",
      "Zero risk of non-refundable hotel cancellation penalties if your visa is delayed.",
    ],
    href: "/services/hotel-booking",
  },
  {
    id: "combo",
    title: "Flight + Hotel Combo (₹499)",
    icon: Building2,
    badge: "Best Value Bundle",
    summary: "How the synchronized flight and hotel package works",
    points: [
      "Combines a verifiable flight reservation with confirmed hotel lodging vouchers in one order.",
      "Guarantees that arrival and departure timestamps match hotel check-in and check-out days seamlessly.",
      "Eliminates the #1 reason for documentation mismatch inquiries from consular visa officers.",
      "Includes priority WhatsApp express handling with instant dispatch in 10 to 30 minutes.",
      "Saves money compared to purchasing flight and hotel vouchers separately.",
    ],
    href: "/services/flight-hotel-package",
  },
  {
    id: "insurance",
    title: "Travel Medical Insurance (₹699)",
    icon: Shield,
    badge: "€30,000 Schengen Compliant",
    summary: "How embassy compliant travel health insurance is issued",
    points: [
      "Satisfies mandatory European Regulation (EC) No 810/2009 Article 15 for Schengen visa applicants.",
      "Guaranteed minimum €30,000 / $50,000 emergency medical expenses and hospital treatment coverage.",
      "Includes full medical repatriation of remains and emergency medical evacuation benefits.",
      "Issued with a unique policy certificate number, policyholder details, and scannable QR verification code.",
      "Valid across all 29 Schengen member states and approved by embassies worldwide.",
    ],
    href: "/services/travel-insurance",
  },
  {
    id: "return",
    title: "Cancellation Return Ticket (₹1,499)",
    icon: RotateCcw,
    badge: "Airport Border Clearance",
    summary: "How onward travel proofs clear airport check-in and immigration",
    points: [
      "Designed specifically for travelers flying on one-way tickets to countries requiring proof of exit.",
      "Verifiable live on operating airline check-in counter systems to prevent denied boarding.",
      "Accepted at border immigration checkpoints in Dubai/UAE, Thailand, Singapore, Bali, and Europe.",
      "Includes built-in automatic cancellation protection after you successfully cross immigration.",
      "Backed by our 24/7 emergency dispatch desk in case of immediate airport counter boarding requirements.",
    ],
    href: "/services/return-ticket",
  },
];

const verificationSteps = [
  {
    step: "1",
    title: "Open Official Airline Website",
    desc: "Navigate to the official website of the airline shown on your ticket PDF (e.g. emirates.com, lufthansa.com, airfrance.com, or airindia.com).",
  },
  {
    step: "2",
    title: "Click 'Manage Booking'",
    desc: "Look for 'Manage Booking', 'My Trips', or 'Find Reservation' on the airline's main homepage navigation.",
  },
  {
    step: "3",
    title: "Enter PNR & Passenger Last Name",
    desc: "Type in your 6-character booking reference (e.g. FD78491) and the passenger last name exactly as printed on your ticket.",
  },
  {
    step: "4",
    title: "View Confirmed Itinerary Live",
    desc: "Your flight reservation will appear with genuine flight numbers, operating carrier, travel dates, and 'Confirmed' reservation status.",
  },
];

const howItWorksFaqs = [
  {
    q: "What exactly is a dummy flight ticket?",
    a: "A dummy flight ticket is a genuine flight reservation with an active Passenger Name Record (PNR) held directly in airline reservation databases. It contains real flight numbers, departure and arrival times, and passenger details, but is not yet converted into a paid commercial boarding pass.",
  },
  {
    q: "Why do embassies accept dummy tickets instead of real tickets?",
    a: "Embassies and consulates (including VFS Global and Schengen authorities) explicitly advise applicants NOT to buy expensive non-refundable flight tickets before their visa is granted. A verifiable flight itinerary proves your planned travel route and dates without financial risk if your visa processing is delayed.",
  },
  {
    q: "Can I use a dummy ticket to board the aircraft?",
    a: "No. A dummy ticket reservation is strictly for visa application submissions, immigration onward travel proof, and passport renewal requirements. To board a flight, the reservation must be converted into a fully paid commercial airline ticket.",
  },
  {
    q: "What if my visa appointment is postponed?",
    a: "We offer a 100% Free Date Change guarantee within 30 days of purchase. Simply submit a request through our Free Date Change page or message our Indian support desk on WhatsApp (+91 95600 99481), and we will re-issue your verified itinerary at zero extra cost.",
  },
];

function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-gradient-to-b from-orange-50/40 via-white to-slate-50 py-10 sm:py-14 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#E6582A]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#E6582A]">How It Works</span>
        </nav>

        {/* PAGE HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#E6582A] shadow-xs mb-3">
            <ShieldCheck size={13} className="text-[#E6582A]" />
            <span>SIMPLE, TRANSPARENT & EMBASSY APPROVED</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 leading-[1.15]">
            How Our Verifiable Dummy Ticket <br className="hidden sm:inline" />
            <span className="text-[#E6582A]">Services Work</span>
          </h1>

          <div className="mt-3.5 mx-auto h-1 w-16 bg-[#E6582A] rounded-full" />

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
            Learn how our ticketing agents issue authentic GDS airline reservations, confirmed hotel vouchers, and Schengen travel insurance in 3 effortless steps.
          </p>
        </div>

        {/* 3-STEP PROCESS SECTION */}
        <div className="mb-16">
          <HowItWorks />
        </div>

        {/* DETAILED 5-SERVICE EXPLANATION CARDS */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              How Each of Our 5 Services Works
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium">
              Every document is strictly tailored to fulfill embassy and immigration compliance criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {serviceGuides.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#E6582A] border border-orange-100 shrink-0">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-base font-black text-slate-900">{item.title}</h3>
                          <p className="text-[11px] text-slate-400 font-semibold">{item.summary}</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[10px] font-black uppercase text-[#E6582A] shrink-0">
                        {item.badge}
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                      {item.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <Link
                      to={item.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E6582A] hover:underline"
                    >
                      <span>Book {item.title.split(" ")[0]}</span>
                      <ArrowRight size={13} />
                    </Link>

                    <a
                      href={`https://wa.me/919560099481?text=${encodeURIComponent(`Hi FlyDummyTicket Team, I have questions about ${item.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-slate-500 hover:text-slate-800"
                    >
                      Ask on WhatsApp →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* STEP-BY-STEP AIRLINE PNR VERIFICATION GUIDE */}
        <div className="mb-20 rounded-3xl border border-slate-200 bg-white p-5 sm:p-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#E6582A] block mb-1">
              SELF-VERIFICATION WALKTHROUGH
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              How to Verify Your PNR on Official Airline Websites
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
              Every dummy ticket we issue comes with an authentic 6-character PNR code you can check yourself in under 60 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {verificationSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-slate-100 bg-[#F7F8FA] p-4 sm:p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E6582A] text-white font-black text-xs mb-3 shadow-xs">
                    {step.step}
                  </span>
                  <h4 className="text-sm font-black text-slate-900 mb-1.5">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SUPPORTED AIRLINE BADGES */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
              Verifiable across major global airlines including:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-bold text-slate-700">
              <span className="rounded-xl bg-slate-100 px-3 py-1.5 border border-slate-200">Emirates</span>
              <span className="rounded-xl bg-slate-100 px-3 py-1.5 border border-slate-200">Qatar Airways</span>
              <span className="rounded-xl bg-slate-100 px-3 py-1.5 border border-slate-200">Lufthansa</span>
              <span className="rounded-xl bg-slate-100 px-3 py-1.5 border border-slate-200">Air France</span>
              <span className="rounded-xl bg-slate-100 px-3 py-1.5 border border-slate-200">British Airways</span>
              <span className="rounded-xl bg-slate-100 px-3 py-1.5 border border-slate-200">Air India</span>
              <span className="rounded-xl bg-slate-100 px-3 py-1.5 border border-slate-200">KLM</span>
              <span className="rounded-xl bg-slate-100 px-3 py-1.5 border border-slate-200">Singapore Airlines</span>
            </div>
          </div>
        </div>

        {/* 100% FREE DATE CHANGES SECTION */}
        <div className="mb-20 rounded-3xl bg-gradient-to-r from-orange-50 via-white to-orange-50/50 border border-orange-200 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E6582A] px-3 py-0.5 text-[10px] font-bold uppercase text-white">
              <RotateCcw size={12} />
              100% Free Date Guarantee
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Visa Appointment Postponed? We Reschedule Free.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Never worry about embassy delays. If your appointment shifts, we re-issue your verifiable flight and hotel itineraries at zero extra charge within 30 days of purchase.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              to="/services/date-change"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#E6582A] hover:bg-[#C9441B] px-5 py-3 text-xs font-bold text-white shadow-md transition text-center"
            >
              <span>Free Date Change Portal</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* FAQS ACCORDION */}
        <div className="mb-16 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-500 mt-1">Answers to common questions about dummy tickets and visa compliance.</p>
          </div>

          <div className="space-y-3">
            {howItWorksFaqs.map((faq, i) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-4 transition">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{faq.q}</span>
                  <ChevronRight
                    size={16}
                    className={`text-slate-400 transition-transform ${openFaq === i ? "rotate-90 text-[#E6582A]" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM INDIAN HELPLINE CTA BANNER */}
        <div className="rounded-3xl bg-[#0F172A] p-6 sm:p-10 text-white text-center sm:text-left sm:flex sm:items-center sm:justify-between shadow-xl">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-orange-400 block mb-1">
              Have a Specific Embassy Inquiry?
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              Call Our India Support Desk: +91 95600 99481
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Our travel specialists are available 24/7 to guide you through your exact visa documentation and booking needs.
            </p>
          </div>

          <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20have%20a%20question%20about%20how%20dummy%20tickets%20work"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-3 text-xs font-bold text-white shadow-md transition text-center"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Us</span>
            </a>

            <Link
              to="/services/flight-reservation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#E6582A] hover:bg-[#C9441B] px-5 py-3 text-xs font-bold text-white shadow-md transition text-center"
            >
              <span>Book Ticket (₹299)</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HowItWorksPage;
