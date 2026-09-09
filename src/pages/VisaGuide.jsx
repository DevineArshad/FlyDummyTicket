import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
} from "lucide-react";

const countryRequirements = [
  {
    id: "dubai",
    flag: "🇦🇪",
    title: "United Arab Emirates (Dubai & Abu Dhabi)",
    countries: "Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah",
    clause: "GDRFA, ICP & Airline Ok To Board (OTB) Mandate",
    details:
      "Airlines flying to the UAE (Emirates, flydubai, Air Arabia, IndiGo, Air India Express) mandate that all passengers holding 30-day, 60-day tourist visas, or transit visas hold a confirmed return or onward flight ticket and valid Ok To Board (OTB) clearance. Without an active return booking, airport check-in counters will refuse boarding.",
    requirementList: [
      "Confirmed round-trip or onward airline reservation with live PNR",
      "Valid Ok To Board (OTB) airline reservation update",
      "Confirmed hotel booking voucher matching your planned duration of stay",
      "Instant WhatsApp delivery for last-minute airport boarding verification",
    ],
  },
  {
    id: "saudi",
    flag: "🇸🇦",
    title: "Saudi Arabia (Tourist, Umrah & Business)",
    countries: "Riyadh, Jeddah, Makkah, Madinah, Dammam, Al-Ula",
    clause: "Saudi MOFA, Nusuk & Muqeem Portal Requirements",
    details:
      "The Saudi Ministry of Foreign Affairs (MOFA) and Nusuk pilgrimage portal require tourist eVisa holders, Umrah pilgrims, and commercial visitors to hold confirmed return flight tickets and verified hotel accommodations before traveling. Immigration officers at JED and RUH airports verify exit bookings upon arrival.",
    requirementList: [
      "Round-trip flight booking with active 6-digit PNR verifiable on airline website",
      "Hotel reservation voucher in Makkah, Madinah, or destination city",
      "Dates perfectly synchronized with your proposed visa period",
      "Free date changes if your Umrah or business meetings get rescheduled",
    ],
  },
  {
    id: "qatar",
    flag: "🇶🇦",
    title: "Qatar (Hayya Entry & Transit Visa)",
    countries: "Doha, Al Wakrah, Al Rayyan, Hamad International Airport (DOH)",
    clause: "Qatar MOI & Hayya Portal Regulations",
    details:
      "Under Qatar Ministry of Interior regulations and the Hayya Portal, international visitors must possess a valid return flight ticket back to their home country or onward destination, alongside hotel accommodation booking, before obtaining entry clearance at Hamad International Airport.",
    requirementList: [
      "Confirmed return flight itinerary checkable on Qatar Airways or partner airlines",
      "Hotel booking voucher covering the declared duration in Qatar",
      "Passport details and full name matching Hayya application exactly",
      "Accepted by Qatar Visa Centers (QVC) and immigration counters",
    ],
  },
  {
    id: "oman",
    flag: "🇴🇲",
    title: "Oman (Tourist eVisa 26A / 26B)",
    countries: "Muscat, Salalah, Sohar, Nizwa, Khasab",
    clause: "Royal Oman Police (ROP) eVisa Guidelines",
    details:
      "Royal Oman Police (ROP) specifies that tourists and GCC residents applying for eVisas must upload a confirmed round-trip flight booking and hotel reservation. Airline counters also inspect return itineraries before boarding passengers traveling to Muscat or Salalah.",
    requirementList: [
      "Confirmed return or onward air ticket with valid booking reference",
      "Hotel booking voucher for Muscat or intended stay cities",
      "Clear itinerary timeline complying with 10-day or 30-day visa validity",
      "100% Free date change if your visa grant takes longer than expected",
    ],
  },
  {
    id: "kuwait",
    flag: "🇰🇼",
    title: "Kuwait (Tourist eVisa & Commercial)",
    countries: "Kuwait City, Hawalli, Al Ahmadi, Farwaniya",
    clause: "Kuwait Ministry of Interior (MOI) Mandate",
    details:
      "Kuwait MOI mandates that foreign visitors entering Kuwait on tourist e-visas or commercial visit visas present a confirmed return airline ticket and registered hotel voucher. Airlines flying to Kuwait International Airport (KWI) enforce strict boarding controls.",
    requirementList: [
      "Return flight reservation with verifiable PNR on Kuwait Airways, Jazeera, etc.",
      "Hotel accommodation voucher covering the duration of stay",
      "Full passenger name matching passport biographical page",
      "Delivered in 10 to 30 minutes in IATA format with printable barcode",
    ],
  },
  {
    id: "bahrain",
    flag: "🇧🇭",
    title: "Bahrain (Tourist eVisa & On-Arrival)",
    countries: "Manama, Muharraq, Riffa, Bahrain International Airport (BAH)",
    clause: "Bahrain NPRA Visa Guidelines",
    details:
      "Bahrain Nationality, Passports and Residence Affairs (NPRA) requires visa applicants to submit confirmed return flight itineraries and verified hotel accommodations. Boarding on one-way tickets without return proof is strictly prohibited by Gulf Air and regional carriers.",
    requirementList: [
      "Confirmed round-trip airline reservation verifiable online",
      "Confirmed hotel reservation voucher in Manama or surrounding areas",
      "Meets NPRA online eVisa application documentary requirements",
      "Rapid PDF delivery to WhatsApp and email with free date revisions",
    ],
  },
];

function VisaGuide() {
  const [activeTab, setActiveTab] = useState("dubai");
  const selectedGuide =
    countryRequirements.find((c) => c.id === activeTab) || countryRequirements[0];

  return (
    <div className="bg-gradient-to-b from-orange-50/40 via-white to-slate-50 py-10 sm:py-14 lg:py-18">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#E6582A]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#E6582A]">Gulf Visa Itinerary Guide</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#E6582A] shadow-xs">
            <FileCheck2 size={13} className="text-[#E6582A]" />
            <span>GULF & GCC VISA COMPLIANCE</span>
          </div>

          <h1 className="mt-3.5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Gulf Countries Flight & Hotel <span className="text-[#E6582A]">Requirements</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Learn what Gulf embassies, GDRFA, Saudi MOFA, Hayya, and regional airlines require regarding flight reservations, hotel vouchers, and Ok To Board (OTB) clearance.
          </p>
        </div>

        {/* Country Tabs (6 Gulf Countries) */}
        <div className="mt-8 flex overflow-x-auto no-scrollbar gap-2 border-b border-slate-200 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {countryRequirements.map((country) => (
            <button
              key={country.id}
              type="button"
              onClick={() => setActiveTab(country.id)}
              className={`rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0 sm:shrink ${
                activeTab === country.id
                  ? "bg-[#EA580C] text-white shadow-md shadow-orange-500/25"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span>{country.flag}</span>
              <span className="whitespace-nowrap">{country.title.split("(")[0]}</span>
            </button>
          ))}
        </div>

        {/* Guide Content Card */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 sm:p-10 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="text-2xl sm:text-4xl mr-2">{selectedGuide.flag}</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 inline">{selectedGuide.title}</h2>
              <p className="text-xs text-slate-500 mt-1">{selectedGuide.countries}</p>
            </div>
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-bold text-[#E6582A]">
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
              Need these documents for your upcoming Gulf visa or airport check-in?
            </p>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link
                to="/services/flight-reservation"
                className="flex-1 sm:flex-initial rounded-xl bg-[#E6582A] hover:bg-[#C9441B] px-5 py-3 text-xs font-bold text-white shadow-md shadow-[#E6582A]/25 text-center transition-all"
              >
                Get Flight Itinerary (₹299)
              </Link>
              <Link
                to="/services/flight-hotel-package"
                className="flex-1 sm:flex-initial rounded-xl bg-slate-900 hover:bg-slate-800 px-5 py-3 text-xs font-bold text-white shadow-md text-center transition-all"
              >
                Get Flight + Hotel (₹499)
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default VisaGuide;
