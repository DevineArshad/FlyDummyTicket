import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, RotateCcw, ShieldCheck } from "lucide-react";

function RefundPolicy() {
  return (
    <div className="bg-gradient-to-b from-orange-50/40 via-white to-slate-50 py-10 sm:py-14 lg:py-18">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#E6582A]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#E6582A]">Refund Policy</span>
        </nav>

        {/* Header */}
        <div className="border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0D9488] shadow-xs">
            <ShieldCheck size={13} className="text-[#10B981]" />
            <span>TRANSPARENT GUARANTEE</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Refund & Cancellation Policy
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Last Updated: September 2026 • 100% Risk-Free Commitment
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-8 space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">1. Our Commitment to You</h2>
            <p>
              At FlyDummyTicket, our goal is to deliver genuine, verifiable travel documents with active PNRs that give you complete confidence during your visa application. If we fail to fulfill your requested booking, we stand by our 100% money-back guarantee.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">2. Full Refund Eligibility</h2>
            <p>You are entitled to a complete 100% refund in any of the following events:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong>Delivery Failure:</strong> We fail to deliver your confirmed ticket or voucher PDF within our guaranteed timeframe.</li>
              <li><strong>PNR Technical Invalidation:</strong> An issued PNR cannot be retrieved or verified on the operating airline’s official portal within the initial validity period.</li>
              <li><strong>Duplicate Payment:</strong> You were inadvertently billed twice due to a payment gateway glitch.</li>
              <li><strong>Cancellation Before Generation:</strong> You contact us to cancel prior to our ticketing agents issuing your reservation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">3. Free Modifications in Lieu of Cancellation</h2>
            <p>
              If your travel plans change or your visa appointment is rescheduled, you do not need to cancel and re-order. We provide <strong>100% free date changes and name corrections</strong> within 30 days of purchase through our <Link to="/services/date-change" className="text-[#E6582A] font-semibold underline">Free Date Change Service</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">4. Non-Refundable Scenarios</h2>
            <p>Refunds cannot be issued under the following circumstances:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>The booking document was successfully generated and verified, and has already been submitted to the embassy.</li>
              <li>Visa refusal based on non-itinerary reasons (such as financial insufficiency, incomplete personal documents, or consular discretion).</li>
              <li>Requests initiated more than 14 days after document delivery where no prior issue was flagged.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">5. Refund Processing Timeline</h2>
            <p>
              Approved refunds are credited back to the original payment source (UPI, Credit/Debit Card, NetBanking, or PayPal) within <strong>24 to 48 hours</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">6. How to Request a Refund</h2>
            <p>
              To initiate a refund, please send your booking reference and reason for cancellation to <strong>refunds@flydummyticket.com</strong> or message our support team on WhatsApp at <strong>+91 95600 99481</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;
