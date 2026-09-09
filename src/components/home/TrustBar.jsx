import { CheckCircle2, Clock, Globe, Headphones, ShieldCheck, Zap } from "lucide-react";

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
    title: "100% Embassy & VFS Acceptance",
    desc: "Strictly compliant with Schengen Visa Code (Article 14), US, UK, Canada, Australia & global visa requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Free Travel Date Changes",
    desc: "If your visa appointment gets postponed, we update and re-issue your travel reservation at zero additional charge.",
    icon: Zap,
  },
];

const airlines = [
  "Emirates",
  "Qatar Airways",
  "Lufthansa",
  "Singapore Airlines",
  "British Airways",
  "Air France",
  "Air India",
  "KLM",
  "Turkish Airlines",
];

function TrustBar() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER (dummyticket.com style) */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-black uppercase tracking-widest text-[#E6582A] mb-1">
            WHY FLYDUMMYTICKET
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Reasons to Choose Us
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 bg-[#E6582A] rounded-full" />
          <p className="mt-3 text-sm text-slate-500 font-medium">
            Serving travellers globally with genuine travel reservations, multi-currency pricing, and 24/7 assistance.
          </p>
        </div>

        {/* 4 REASONS GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-[#FAFCFF] p-6 transition hover:border-orange-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-[#E6582A] mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* AIRLINE LOGOS / BADGES */}
        <div className="rounded-2xl border border-slate-200 bg-[#F7F8FA] p-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-slate-600">
                Checkable on 50+ Global Airline Portals
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Verifiable in real-time under Manage Booking or My Trips
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {airlines.map((a) => (
                <span
                  key={a}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-700 shadow-2xs"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TrustBar;