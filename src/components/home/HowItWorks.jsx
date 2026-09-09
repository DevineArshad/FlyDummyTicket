import { ArrowRight, CheckCircle2, Clock, FileCheck, MessageCircle, Send } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Select Service & Travel Dates",
    desc: "Choose from Flight (₹299), Hotel (₹249), Combo (₹499), Insurance (₹699), or Return (₹1,499). Enter travel dates and passenger passport names.",
    icon: FileCheck,
  },
  {
    step: "02",
    title: "Instant GDS Airline Processing",
    desc: "Our ticketing team issues your reservation directly inside airline Global Distribution Systems (GDS) with a genuine 6-character live PNR.",
    icon: Clock,
  },
  {
    step: "03",
    title: "Receive Verifiable PDF in Minutes",
    desc: "Your official, embassy-compliant PDF document with live barcode is dispatched straight to your WhatsApp and Email in 10 to 30 minutes.",
    icon: Send,
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#E6582A] mb-1 block">
            SIMPLE 3-STEP PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            How FlyDummyTicket Works
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 bg-[#E6582A] rounded-full" />
          <p className="mt-3 text-sm text-slate-500 font-medium">
            Get embassy-approved, checkable travel documentation in minutes without risking thousands on non-refundable tickets.
          </p>
        </div>

        {/* 3 STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs transition hover:border-[#E6582A]/50 hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#E6582A]/25">
                    {item.step}
                  </span>
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#E6582A] border border-orange-100">
                    <Icon size={20} />
                  </div>
                </div>

                <h3 className="text-base font-black text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-10 text-center">
          <a
            href="#booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#E6582A] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#E6582A]/25 hover:bg-[#C9441B] transition text-center"
          >
            <span>Book Your Dummy Ticket Now (₹299)</span>
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;