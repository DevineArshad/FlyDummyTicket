import { Link } from "react-router-dom";
import { ChevronRight, Lock, ShieldCheck } from "lucide-react";

function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-b from-orange-50/40 via-white to-slate-50 py-10 sm:py-14 lg:py-18">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#E6582A]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#E6582A]">Privacy Policy</span>
        </nav>

        {/* Header */}
        <div className="border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#E6582A] shadow-xs">
            <Lock size={13} className="text-[#E6582A]" />
            <span>DATA PROTECTION & PRIVACY</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Privacy Policy
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Last Updated: September 2026 • Effective Date: January 1, 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-8 space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">1. Overview</h2>
            <p>
              FlyDummyTicket (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is dedicated to safeguarding your personal data and respecting your privacy rights. This Privacy Policy clarifies how we gather, utilize, store, and disclose information when you utilize our dummy flight ticket, hotel reservation, and travel itinerary generation services.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">2. Information We Collect</h2>
            <p>To produce verifiable travel reservations, we strictly collect minimal necessary details:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong>Passenger Details:</strong> Full name, title (Mr./Ms./Mrs.), and traveler counts as specified on your passport.</li>
              <li><strong>Contact Information:</strong> Email address and WhatsApp telephone number for instant PDF itinerary delivery.</li>
              <li><strong>Travel Preferences:</strong> Departure airport, destination city, preferred travel dates, and cabin/room class.</li>
              <li><strong>Payment Records:</strong> Transaction IDs and payment confirmation status (we do not retain or store credit card numbers).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">3. How We Use Your Information</h2>
            <p>We process your personal information solely for legitimate operational purposes:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Reserving temporary verifiable airline and hotel bookings in global reservation systems (GDS).</li>
              <li>Generating official electronic itinerary receipts and delivering them via WhatsApp and Email.</li>
              <li>Processing free date modification requests and customer assistance queries.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">4. Data Security & Storage</h2>
            <p>
              We implement industry-standard 256-bit SSL encryption across all data transmissions. Your passport names and travel dates are stored on secure cloud servers and are never rented, sold, or shared with third-party advertisers or marketing affiliates.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">5. Data Retention & Deletion Rights</h2>
            <p>
              Booking information is retained for 60 days following your scheduled travel dates to support any visa reschedule requests. You may at any point request the immediate permanent deletion of your booking records by emailing <strong>privacy@flydummyticket.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">6. Contact Our Privacy Officer</h2>
            <p>
              For any questions regarding our data handling practices or GDPR inquiries, please write to us at <strong>privacy@flydummyticket.com</strong> or visit our office at B32, Gali No. 3, East Azad Nagar, Delhi, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
