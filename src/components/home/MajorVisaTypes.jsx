import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  FileCheck2,
  Globe,
  GraduationCap,
  Info,
  MapPin,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const visaCategories = [
  {
    id: "schengen",
    flag: "🇪🇺",
    name: "Schengen Visa",
    subtitle: "29 European Countries (France, Germany, Italy, Spain, Switzerland)",
    embassyClause: "Article 14(1)(b) Schengen Visa Code",
    requirement:
      "Embassies require proof of transport (round-trip flight itinerary) and proof of lodging (hotel voucher) covering your entire stay. Consulates strictly recommend NOT buying actual expensive tickets until your visa is stamped.",
    checklist: [
      "Round-trip flight reservation with entry & exit dates",
      "Confirmed hotel booking voucher with hotel address & phone",
      "IATA standard PDF format with active airline PNR",
      "Matches travel insurance coverage of min €30,000",
    ],
    recommendedDoc: "Flight + Hotel Combo",
    recommendedPrice: "₹500",
    waServiceParam: "Schengen Visa Flight + Hotel Combo (₹500)",
  },
  {
    id: "us",
    flag: "🇺🇸",
    name: "United States Visa",
    subtitle: "B1/B2 Tourist & Business, DS-160 Embassy Interview",
    embassyClause: "US Dept of State Consular Guidance",
    requirement:
      "During the consular interview, officers look for planned travel dates and clear intent to return to your home country. A tentative verifiable flight reservation satisfies travel itinerary requirements without financial risk.",
    checklist: [
      "Proposed flight itinerary matching DS-160 travel dates",
      "Designated US port of entry (JFK, SFO, ORD, LAX, etc.)",
      "Verifiable return flight to prove non-immigrant intent",
      "Confirmed hotel reservation for initial port of stay",
    ],
    recommendedDoc: "Flight Reservation",
    recommendedPrice: "₹350",
    waServiceParam: "US B1/B2 Visa Flight Reservation (₹350)",
  },
  {
    id: "canada",
    flag: "🇨🇦",
    name: "Canada Visa",
    subtitle: "Temporary Resident Visa (TRV) & Super Visa",
    embassyClause: "Immigration, Refugees and Citizenship Canada (IRCC)",
    requirement:
      "IRCC specifies that applicants should provide a clear itinerary showing arrival and return flights. Purchasing non-refundable tickets prior to passport submission is strongly discouraged by immigration officials.",
    checklist: [
      "Detailed flight itinerary showing flight numbers & carrier",
      "Planned return journey timeline",
      "Hotel reservation or host invitation alignment",
      "Valid airline reservation for background checks",
    ],
    recommendedDoc: "Flight Reservation",
    recommendedPrice: "₹350",
    waServiceParam: "Canada Visa Flight Reservation (₹350)",
  },
  {
    id: "australia",
    flag: "🇦🇺",
    name: "Australia Visa",
    subtitle: "Visitor Visa (Subclass 600) Tourist & Business Stream",
    embassyClause: "Department of Home Affairs Guidelines",
    requirement:
      "Australian immigration requires applicants to demonstrate genuine temporary stay. A tentative flight booking demonstrates your planned itinerary without requiring you to pay full airfare in advance.",
    checklist: [
      "Tentative roundtrip flight itinerary with valid PNR",
      "Planned travel schedule matching leave approvals",
      "Hotel accommodation vouchers in Sydney, Melbourne, etc.",
      "Accepted through the ImmiAccount online portal",
    ],
    recommendedDoc: "Flight Reservation",
    recommendedPrice: "₹350",
    waServiceParam: "Australia Subclass 600 Flight Reservation (₹350)",
  },
  {
    id: "dubai",
    flag: "🇦🇪",
    name: "Dubai / UAE Visa",
    subtitle: "30 & 60-Day Tourist Visa, Transit & Ok To Board (OTB)",
    embassyClause: "GDRFA & ICP UAE Immigration Rules",
    requirement:
      "UAE immigration and airlines (Emirates, flydubai, Air India Express, IndiGo) mandate a confirmed return flight ticket and Ok To Board (OTB) verification before boarding outbound flights to Dubai, Abu Dhabi, and Sharjah.",
    checklist: [
      "Confirmed onward or return ticket for airport clearance",
      "Ok To Board (OTB) clearance updated in airline PNR",
      "Hotel booking voucher for immigration counter checks",
      "Rapid 10 to 30-minute delivery available",
    ],
    recommendedDoc: "Return Ticket + OTB Clearance",
    recommendedPrice: "₹350 + ₹250 OTB",
    waServiceParam: "Dubai/UAE Return Ticket and OTB Clearance",
  },
  {
    id: "student",
    flag: "🎓",
    name: "Student Visa",
    subtitle: "USA F-1, UK Student Route, Canada Study Permit, Australia Subclass 500",
    embassyClause: "International Student Immigration Clearances",
    requirement:
      "International students often require proof of travel arrangements or flexible one-way itineraries for their initial intake. Our flexible reservation allows students to satisfy embassy requirements with free date adjustments.",
    checklist: [
      "One-way or flexible return flight reservation",
      "Dated 2–4 weeks before course commencement date",
      "100% Free date change if visa or CAS/I-20 arrives late",
      "Accepted at VFS and consular interview counters",
    ],
    recommendedDoc: "Student Flight Reservation",
    recommendedPrice: "₹350",
    waServiceParam: "Student Visa Flight Reservation (₹350)",
  },
];

export default function MajorVisaTypes() {
  const [activeTab, setActiveTab] = useState("schengen");
  const currentVisa = visaCategories.find((v) => v.id === activeTab) || visaCategories[0];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-800 shadow-2xs mb-3">
            <Globe size={14} className="text-emerald-600" />
            <span>GLOBAL EMBASSY COMPLIANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Dummy Tickets for All Major Visa Types
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Tailored itineraries crafted precisely to satisfy the official checklist requirements of consulates, VFS Global, and immigration authorities.
          </p>
        </div>

        {/* Visa Category Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {visaCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#1D68E2] text-white shadow-md shadow-blue-500/25 scale-[1.02]"
                    : "bg-slate-100/90 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                <span className="text-base sm:text-lg">{cat.flag}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Visa Details Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white to-[#F8FAFD] p-6 sm:p-10 shadow-lg shadow-slate-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Requirements & Official Guidance (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl">{currentVisa.flag}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                      {currentVisa.name}
                    </h3>
                    <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-extrabold uppercase text-[#1D68E2] border border-blue-200">
                      100% Accepted
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">
                    {currentVisa.subtitle}
                  </p>
                </div>
              </div>

              {/* Embassy Guideline Box */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1D68E2] uppercase tracking-wider mb-1">
                  <ShieldCheck size={15} />
                  <span>{currentVisa.embassyClause}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {currentVisa.requirement}
                </p>
              </div>

              {/* Checklist */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                  Document Checklist for Approval
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentVisa.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Recommended Booking CTA Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-md">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block mb-3">
                  RECOMMENDED FOR {currentVisa.name.toUpperCase()}
                </span>

                <h4 className="text-xl font-black text-slate-900 leading-tight">
                  {currentVisa.recommendedDoc}
                </h4>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">
                    {currentVisa.recommendedPrice}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ complete verified itinerary</span>
                </div>

                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Generated with authentic airline booking codes, downloadable IATA format PDF, delivered straight to your WhatsApp in 10 to 30 minutes.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={`https://wa.me/919560099481?text=${encodeURIComponent(
                      `Hi FlyDummyTicket Team, I want to book a ${currentVisa.waServiceParam} for my visa application.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0D8746] hover:bg-[#0A7039] py-3.5 px-5 text-sm font-extrabold text-white shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle size={17} />
                    <span>Order on WhatsApp ({currentVisa.recommendedPrice})</span>
                    <ArrowRight size={15} />
                  </a>

                  <a
                    href="/sample-eticket.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 py-2.5 text-xs font-bold text-slate-700 transition"
                  >
                    <FileCheck2 size={14} className="text-[#1D68E2]" />
                    <span>Inspect Sample Air India eTicket (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
