import { Link } from "react-router-dom";
import HowItWorks from "../components/home/HowItWorks";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Globe,
  HelpCircle,
  Plane,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";

function HowItWorksPage() {
  return (
    <div className="bg-gradient-to-b from-[#F0F5FD] via-white to-[#F8FAFD]">
      {/* Top Banner & Breadcrumb */}
      <div className="pt-10 pb-6 px-5 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#1D68E2]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#1D68E2]">How It Works</span>
        </nav>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1D68E2] shadow-xs">
            <ShieldCheck size={13} className="text-[#1D68E2]" />
            <span>SIMPLE & TRANSPARENT PROCESS</span>
          </div>

          <h1 className="mt-3.5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            How Dummy Flight & Hotel <span className="text-[#1D68E2]">Reservations Work</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            A dummy flight ticket is a genuine flight reservation with an active Passenger Name Record (PNR) held directly in airline Global Distribution Systems (GDS). Learn how we issue and verify them in 3 simple steps.
          </p>
        </div>
      </div>

      {/* Main How It Works Component */}
      <HowItWorks />

      {/* Step-by-Step PNR Verification Guide */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              How to Verify Your PNR on Official Airline Websites
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Every dummy ticket we issue comes with an authentic 6-character PNR code you can check yourself in 60 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-[#1D68E2] font-black text-sm mb-4">
                1
              </span>
              <h3 className="text-base font-bold text-slate-900">Visit Operating Airline Website</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Open the official website of the airline shown on your itinerary (e.g. Emirates, Air France, Lufthansa, or British Airways).
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-[#1D68E2] font-black text-sm mb-4">
                2
              </span>
              <h3 className="text-base font-bold text-slate-900">Click &quot;Manage Booking&quot;</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Enter your 6-character booking reference (PNR) and your passenger last name as printed on the PDF ticket.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-[#1D68E2] font-black text-sm mb-4">
                3
              </span>
              <h3 className="text-base font-bold text-slate-900">View Active Itinerary</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Your flight status will show as &quot;Confirmed&quot; or &quot;Reserved&quot; with genuine flight numbers, departure times, and passenger details.
              </p>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="mt-12 rounded-3xl bg-brand-navy p-8 text-white text-center sm:text-left sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold">Ready to secure your visa itinerary?</h3>
              <p className="text-xs text-slate-300 mt-1">
                Delivered straight to your WhatsApp and Email in under 10 minutes.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex gap-3 justify-center">
              <Link
                to="/services/flight-reservation"
                className="rounded-xl bg-[#1D68E2] hover:bg-[#1556BE] px-5 py-3 text-xs font-bold text-white transition-all shadow-md flex items-center gap-1.5"
              >
                <span>Book Flight Ticket</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/services/flight-hotel-package"
                className="rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 text-xs font-bold text-white transition-all"
              >
                <span>View Combo Package</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorksPage;
