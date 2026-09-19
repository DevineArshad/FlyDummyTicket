import { ArrowRight, CheckCircle2, MessageCircle, Plane, ShieldCheck, Zap } from "lucide-react";

function FinalCTA() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-14 sm:py-20 border-t border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* LUXURIOUS FLOATING HERO CONTAINER */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-6 sm:p-12 lg:p-14 text-white shadow-2xl border border-slate-800 text-center">
          
          {/* AMBIENT GLOW ACCENTS */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

          {/* SUBTLE BACKGROUND GRID PATTERN */}
          <div
            className="pointer-events-none absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative mx-auto max-w-3xl">
            
            {/* TOP BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xs px-4 py-1 text-xs font-bold text-orange-400 border border-white/15 mb-4">
              <Plane size={13} className="rotate-[-45deg]" />
              <span>Delivered within 10–30 Minutes</span>
            </div>

            {/* HEADLINE */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight text-white">
              Ready to Get Your Verifiable <br className="hidden sm:inline" />
              <span className="text-[#EA580C]">Dummy Ticket</span> Today?
            </h2>

            {/* SUBTITLE */}
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Avoid risking thousands on non-refundable flight tickets before your visa is approved. Get an authentic, verifiable reservation with active airline PNR starting at just ₹299 / $4.
            </p>

            {/* TRUST HIGHLIGHTS */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-200">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3.5 py-1 border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" />
                Live Verifiable PNR
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3.5 py-1 border border-white/10">
                <ShieldCheck size={15} className="text-emerald-400" />
                100% Embassy Accepted
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3.5 py-1 border border-white/10">
                <Zap size={15} className="text-emerald-400" />
                Free Date Modifications
              </span>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={scrollToBooking}
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#EA580C] px-8 text-sm font-extrabold text-white shadow-lg shadow-orange-500/25 hover:bg-[#C2410C] hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Buy Dummy Ticket (₹299)</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20want%20to%20order%20a%20ticket"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle size={16} />
                <span>Order via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FinalCTA;