import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  Globe,
  Info,
  Plane,
  ShieldCheck,
  Zap,
} from "lucide-react";

const countryRequirements = [
  {
    id: "schengen",
    flag: "🇪🇺",
    title: "Schengen Visa (29 European Countries)",
    countries: "France, Germany, Italy, Switzerland, Spain, Netherlands, Greece, etc.",
    clause: "Article 14(1)(b) of the Schengen Visa Code",
    details:
      "The Schengen Visa Code states that applicants must provide proof of means of transport (flight itinerary with confirmed return) and proof of accommodation (hotel voucher) for all nights spent in the Schengen territory. Embassies explicitly recommend submitting flight reservations rather than fully paid non-refundable tickets.",
    requirementList: [
      "Round-trip flight reservation showing entry and exit points",
      "Valid airline PNR verifiable online",
      "Confirmed hotel voucher matching arrival and departure dates",
      "Matching traveler name exactly as in passport",
    ],
  },
  {
    id: "uk",
    flag: "🇬🇧",
    title: "United Kingdom (Standard Visitor Visa)",
    countries: "England, Scotland, Wales, Northern Ireland",
    clause: "UKVI Official Application Guidance",
    details:
      "UK Visas and Immigration (UKVI) officially warns applicants: 'You do not need to buy travel tickets before you make an application. We strongly advise that you do not buy tickets or pay for accommodation until you get your visa.' A verifiable travel itinerary satisfies this requirement perfectly.",
    requirementList: [
      "Detailed flight itinerary showing proposed travel dates",
      "Valid return or onward flight booking",
      "Hotel reservation or host accommodation address",
      "Consistent timeline with your employment leave approval",
    ],
  },
  {
    id: "us",
    flag: "🇺🇸",
    title: "United States (B1 / B2 Tourist Visa)",
    countries: "All 50 US States and Territories",
    clause: "US Department of State Travel Guidelines",
    details:
      "For US visa interviews, consular officers assess your intent to return to your home country. Having a tentative round-trip flight reservation and hotel plan shows planned travel without risking money on non-refundable tickets before visa approval.",
    requirementList: [
      "Flight itinerary with proposed port of entry (e.g. JFK, LAX, SFO)",
      "Confirmed hotel reservation voucher for initial stay",
      "Estimated dates matching Form DS-160 information",
      "Clear proof of scheduled return journey",
    ],
  },
  {
    id: "canada",
    flag: "🇨🇦",
    title: "Canada (Temporary Resident Visa / Visitor)",
    countries: "Provinces & Territories across Canada",
    clause: "IRCC (Immigration, Refugees and Citizenship Canada)",
    details:
      "IRCC requires a flight itinerary showing dates and airline details to understand your travel timeframe. Fully paid non-refundable tickets are discouraged before receiving your passport request.",
    requirementList: [
      "Flight itinerary with booking reference number",
      "Hotel reservation voucher covering duration of stay",
      "Detailed travel itinerary/day-by-day plan",
    ],
  },
];

function VisaGuide() {
  const [activeTab, setActiveTab] = useState("schengen");
  const selectedGuide =
    countryRequirements.find((c) => c.id === activeTab) || countryRequirements[0];

  return (
    <div className="bg-gradient-to-b from-[#F0F5FD] via-white to-[#F8FAFD] py-10 sm:py-14 lg:py-18">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#1D68E2]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#1D68E2]">Visa & Embassy Guidance</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1D68E2] shadow-xs">
            <FileCheck2 size={13} className="text-[#1D68E2]" />
            <span>GLOBAL EMBASSY COMPLIANCE</span>
          </div>

          <h1 className="mt-3.5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Embassy Flight & Hotel <span className="text-[#1D68E2]">Requirements</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Learn what global embassies, VFS Global, and consulates officially require regarding flight reservations and hotel bookings for visa applications.
          </p>
        </div>

        {/* Country Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-slate-200 pb-3">
          {countryRequirements.map((country) => (
            <button
              key={country.id}
              type="button"
              onClick={() => setActiveTab(country.id)}
              className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === country.id
                  ? "bg-[#1D68E2] text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span>{country.flag}</span>
              <span>{country.title.split("(")[0]}</span>
            </button>
          ))}
        </div>

        {/* Guide Content Card */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="text-3xl sm:text-4xl mr-2">{selectedGuide.flag}</span>
              <h2 className="text-2xl font-black text-slate-900 inline">{selectedGuide.title}</h2>
              <p className="text-xs text-slate-500 mt-1">{selectedGuide.countries}</p>
            </div>
            <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-[#1D68E2]">
              {selectedGuide.clause}
            </span>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Official Requirement Overview</h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
              {selectedGuide.details}
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200/80 p-6">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              Required Documentation Checklist
            </h3>
            <ul className="mt-4 space-y-2.5">
              {selectedGuide.requirementList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              Need these documents for your upcoming visa appointment?
            </p>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link
                to="/services/flight-reservation"
                className="flex-1 sm:flex-initial rounded-xl bg-[#1D68E2] hover:bg-[#1556BE] px-5 py-3 text-xs font-bold text-white shadow-md text-center transition-all"
              >
                Get Flight Itinerary (₹399)
              </Link>
              <Link
                to="/services/flight-hotel-package"
                className="flex-1 sm:flex-initial rounded-xl bg-[#0D9488] hover:bg-[#0F766E] px-5 py-3 text-xs font-bold text-white shadow-md text-center transition-all"
              >
                Get Flight + Hotel (₹650)
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default VisaGuide;
