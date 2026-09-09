import { CheckCircle2, Clock, ShieldCheck, Zap } from "lucide-react";

const reasons = [
  {
    title: "Quick 10–30 Min Delivery",
    desc: "Fast automated issuance. Your high-resolution PDF itinerary lands directly in your WhatsApp and Email in minutes.",
    icon: Clock,
  },
  {
    title: "Verifiable Flight Reservations",
    desc: "Every ticket includes an active 6-digit airline PNR checkable directly on official airline portals under 'Manage My Booking'.",
    icon: CheckCircle2,
  },
  {
    title: "100% Gulf Embassy Acceptance",
    desc: "Strictly compliant with UAE, Saudi Arabia, Qatar, Oman, Kuwait & Bahrain visa regulations, Ok-To-Board (OTB) and airport immigration clearance.",
    icon: ShieldCheck,
  },
  {
    title: "Free Travel Date Changes",
    desc: "If your visa appointment or travel date gets postponed, we update and re-issue your travel reservation at zero additional charge.",
    icon: Zap,
  },
];

const airlines = [
  { name: "Emirates", logo: "/airlines/emirates.svg" },
  { name: "Qatar Airways", logo: "/airlines/qatar.svg" },
  { name: "Lufthansa", logo: "/airlines/lufthansa.svg" },
  { name: "Singapore Airlines", logo: "/airlines/singapore.svg" },
  { name: "British Airways", logo: "/airlines/british-airways.svg" },
  { name: "Air France", logo: "/airlines/air-france.svg" },
  { name: "Air India", logo: "/airlines/air-india.svg" },
  { name: "KLM", logo: "/airlines/klm.svg" },
  { name: "Turkish Airlines", logo: "/airlines/turkish-airlines.svg" },
];

function TrustBar() {
  return (
    <section className="bg-white py-14 sm:py-20 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs font-black uppercase tracking-widest text-[#E6582A] mb-1">
            WHY FLYDUMMYTICKET
          </p>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            Specialized for Gulf Country Visas
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 bg-[#E6582A] rounded-full" />
          <p className="mt-3 text-xs sm:text-sm text-slate-500 font-medium">
            Serving travellers across the Gulf with genuine airline reservations, verified PNRs, and 24/7 WhatsApp assistance.
          </p>
        </div>

        {/* 4 REASONS GRID */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10 sm:mb-12">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-[#FAFCFF] p-5 sm:p-6 transition hover:border-orange-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-orange-100 text-[#E6582A] mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 9 OFFICIAL AIRLINE LOGOS */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-5 sm:p-7">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-4 text-center md:text-left mb-5">
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#EA580C]">
                Official Airline Reservations
              </p>
              <h3 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
                Verifiable on Leading International & Gulf Airlines
              </h3>
            </div>
            <p className="text-[11px] font-semibold text-slate-400">
              Live 6-digit PNR checkable under &apos;Manage Booking&apos;
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 sm:gap-3 items-center">
            {airlines.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-center p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-orange-300 transition-all duration-200 group h-14"
                title={a.name}
              >
                <img
                  src={a.logo}
                  alt={`${a.name} Logo`}
                  className="max-h-8 max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default TrustBar;