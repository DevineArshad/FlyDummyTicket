import { Link } from "react-router-dom";
import { ArrowLeft, Home, Plane, Building2, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-orange-50/40 via-white to-slate-50 px-4 py-16 sm:py-24">
      <div className="max-w-xl text-center">
        <span className="inline-flex items-center rounded-full bg-orange-100 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-[#E6582A]">
          404 Error
        </span>

        <h1 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          The page you requested could not be located or may have been moved. You can navigate back to the homepage or explore our visa documentation services below.
        </p>

        {/* Action Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#E6582A] hover:bg-[#C9441B] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#E6582A]/25 transition-all"
          >
            <Home size={16} />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/services/flight-reservation"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3 text-xs sm:text-sm font-bold text-slate-700 transition-all"
          >
            <Plane size={16} />
            <span>Flight Reservations</span>
          </Link>
        </div>

        {/* Quick Service Links */}
        <div className="mt-10 pt-8 border-t border-slate-200">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Popular Travel Services
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-700">
            <Link to="/services/hotel-booking" className="hover:text-[#E6582A] transition">
              Hotel Bookings
            </Link>
            <span>•</span>
            <Link to="/services/flight-hotel-package" className="hover:text-[#E6582A] transition">
              Flight + Hotel Combo
            </Link>
            <span>•</span>
            <Link to="/visa-guide" className="hover:text-[#E6582A] transition">
              Visa Itinerary Guide
            </Link>
            <span>•</span>
            <Link to="/faq" className="hover:text-[#E6582A] transition">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
