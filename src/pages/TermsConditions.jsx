import { Link } from "react-router-dom";
import { ChevronRight, FileText, Scale } from "lucide-react";

function TermsConditions() {
  return (
    <div className="bg-gradient-to-b from-[#F0F5FD] via-white to-[#F8FAFD] py-10 sm:py-14 lg:py-18">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#1D68E2]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#1D68E2]">Terms & Conditions</span>
        </nav>

        {/* Header */}
        <div className="border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1D68E2] shadow-xs">
            <Scale size={13} className="text-[#1D68E2]" />
            <span>CUSTOMER AGREEMENT</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Terms & Conditions
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Last Updated: September 2026 • Effective Immediately
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-8 space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing our website or placing an order for flight reservations, hotel vouchers, or return ticket documents through FlyDummyTicket, you acknowledge that you have reviewed, understood, and agreed to be bound by these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">2. Scope and Nature of Services</h2>
            <p>
              FlyDummyTicket acts as an authorized travel booking documentation agency. Our services provide temporary, confirmed verifiable flight reservations with active Passenger Name Records (PNRs) issued directly with airlines and verified hotel vouchers intended for visa applications, travel planning, and proof of onward journey.
            </p>
            <div className="mt-3 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs font-semibold">
              Notice: A dummy ticket reservation is NOT a fully paid airline passenger ticket and cannot be utilized to board an actual aircraft without purchasing the commercial airline ticket fare.
            </div>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">3. Accuracy of Customer Information</h2>
            <p>
              The customer is solely responsible for ensuring that all names submitted match the spelling on their passport. FlyDummyTicket will re-issue documents without fee if an error is brought to our attention before embassy submission.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">4. PNR Validity & Reservation Timelines</h2>
            <p>
              Verifiable dummy flight ticket validity depends on your journey route and journey date, generally remaining active for 2–3 weeks (with a maximum of 2 flights). We offer unlimited free date adjustments if your visa appointment date changes within 30 days of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">5. Embassy Visa Decisions</h2>
            <p>
              While our reservations fulfill official embassy documentary requirements, FlyDummyTicket does not guarantee visa approval. Final decisions regarding visa issuance rest exclusively with embassy consular officers.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">6. Customer Support & Inquiries</h2>
            <p>
              If you have any questions regarding these terms, please contact our legal desk at <strong>support@flydummyticket.com</strong> or via 24/7 WhatsApp at <strong>+91 95600 99481</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;
