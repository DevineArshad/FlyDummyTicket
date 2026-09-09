import { ArrowRight, CheckCircle2, FileText, Plane } from "lucide-react";

function AboutDummyTicket() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          
          {/* ═══════════════════════════════════════════════════════════
              COLUMN 1: WHAT IS A DUMMY TICKET? (dummyticket.com style)
          ═══════════════════════════════════════════════════════════ */}
          <div className="rounded-3xl border border-slate-200 bg-[#FAFCFF] p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-orange-100 text-[#E6582A] shrink-0">
                <Plane size={20} className="rotate-[-45deg]" />
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 leading-tight">
                What is a <span className="text-[#E6582A]">Dummy ticket?</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 mb-4">
              A <strong>dummy ticket</strong> looks typically like a regular airline ticket and has a valid <strong>PNR</strong> (booking code or booking reference number). A PNR code is a 6-digit alpha-numeric code provided by the airline.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 mb-5">
              They can be verified on the airline's official website when looked up using the <em>"Manage my booking"</em> or <em>"My trips"</em> tool. A dummy ticket is also commonly known as a <strong>flight reservation</strong> or <strong>travel itinerary</strong>.
            </p>

            <div className="rounded-2xl bg-white p-3.5 sm:p-4 border border-slate-200/90 text-xs text-slate-700 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Genuine 6-digit PNR checkable directly on airline websites</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Standard IATA e-ticket format matching embassy guidelines</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>High-resolution print-ready PDF delivered to WhatsApp & Email</span>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              COLUMN 2: WHAT IS A DUMMY TICKET USED FOR?
          ═══════════════════════════════════════════════════════════ */}
          <div className="rounded-3xl border border-slate-200 bg-[#FAFCFF] p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shrink-0">
                <FileText size={20} />
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 leading-tight">
                What is a <span className="text-[#E6582A]">Dummy ticket used for?</span>
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 mb-4">
              The main use of a dummy ticket is for <strong>visa applications</strong>. Many embassies, consulates, or visa application centers like <strong>VFS Global</strong> or <strong>BLS International</strong> ask for a flight reservation during the visa process. Dummy tickets are also used for <strong>proof of return</strong> at immigration.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-6">
              <li className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E6582A] font-black text-xs mt-0.5">✓</span>
                <span><strong>Gulf visa applications:</strong> UAE / Dubai, Saudi Arabia (Umrah/Tourist), Qatar, Oman, Kuwait & Bahrain</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E6582A] font-black text-xs mt-0.5">✓</span>
                <span><strong>Proof of return / onward travel:</strong> Show at airport check-in when flying on a one-way ticket</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E6582A] font-black text-xs mt-0.5">✓</span>
                <span><strong>Expedite passport renewal:</strong> Present to passport authorities as proof of upcoming departure</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E6582A] font-black text-xs mt-0.5">✓</span>
                <span><strong>Leave approvals:</strong> Provide official travel documentation to your company HR or manager</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#E6582A] font-black text-xs mt-0.5">✓</span>
                <span><strong>Exit visa & transit procedures:</strong> Required for airport clearance and transit visas</span>
              </li>
            </ul>

            <div>
              <a
                href="#booking"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E6582A] hover:underline"
              >
                <span>Book your dummy ticket now</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutDummyTicket;
