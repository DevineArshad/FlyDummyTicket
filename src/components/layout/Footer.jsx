import { Link } from "react-router-dom";
import {
  CheckCircle2,
  FileText,
  Mail,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
  Zap,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800">
      {/* MAIN FOOTER CONTENT */}
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-24 sm:pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* COL 1: BRAND INFO */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E6582A] text-white">
                <Plane size={18} className="rotate-[-45deg]" />
              </div>
              <span className="font-black text-lg tracking-tight text-white">
                FLY<span className="text-[#E6582A]">DUMMY</span>TICKET
              </span>
            </Link>

            <p className="text-xs leading-relaxed text-slate-400">
              The original verifiable dummy ticket booking engine. Providing authentic flight reservations, hotel vouchers, and proof of return for visa applications and airport border clearance worldwide.
            </p>

            <div className="pt-1">
              <a
                href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20need%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition"
              >
                <MessageCircle size={14} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* COL 2: SERVICES */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3">
              Services & Pricing
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/services/flight-reservation" className="hover:text-orange-400 transition flex items-center justify-between">
                  <span>Dummy Flight Ticket</span>
                  <span className="font-bold text-slate-200">₹299</span>
                </Link>
              </li>
              <li>
                <Link to="/services/hotel-booking" className="hover:text-orange-400 transition flex items-center justify-between">
                  <span>Dummy Hotel Booking</span>
                  <span className="font-bold text-slate-200">₹249</span>
                </Link>
              </li>
              <li>
                <Link to="/services/flight-hotel-package" className="hover:text-orange-400 transition flex items-center justify-between">
                  <span>Flight + Hotel Combo</span>
                  <span className="font-bold text-slate-200">₹499</span>
                </Link>
              </li>
              <li>
                <Link to="/services/travel-insurance" className="hover:text-orange-400 transition flex items-center justify-between">
                  <span>Travel Medical Insurance</span>
                  <span className="font-bold text-slate-200">₹699</span>
                </Link>
              </li>
              <li>
                <Link to="/services/return-ticket" className="hover:text-orange-400 transition flex items-center justify-between">
                  <span>Cancellation Return Ticket</span>
                  <span className="font-bold text-slate-200">₹1,499</span>
                </Link>
              </li>
              <li>
                <Link to="/services/date-change" className="hover:text-orange-400 transition flex items-center justify-between">
                  <span>Free Date Change Service</span>
                  <span className="font-bold text-emerald-400">FREE</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3: QUICK LINKS */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/pricing" className="hover:text-orange-400 transition">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-orange-400 transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/visa-guide" className="hover:text-orange-400 transition">
                  Embassy Visa Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-orange-400 transition">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <a
                  href="/sample-eticket.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  Download Sample e-Ticket (PDF)
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 4: CUSTOMER SUPPORT (Indian Support Only) */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3">
              Customer Helpline & Support
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[#E6582A] shrink-0" />
                <a href="tel:+919560099481" className="hover:text-white transition font-bold text-slate-200">
                  +91 95600 99481
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={13} className="text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20need%20assistance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp: +91 95600 99481
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#E6582A] shrink-0" />
                <a href="mailto:support@flydummyticket.com" className="hover:text-white transition">
                  support@flydummyticket.com
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-800/80">
                <p>24/7 Global Ticket Dispatch Desk</p>
                <p className="mt-0.5">East Azad Nagar, Delhi, India</p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL & DISCLAIMER */}
        <div className="mt-10 border-t border-slate-800/80 pt-6 text-[11px] leading-relaxed text-slate-500">
          <p className="mb-3">
            <strong className="text-slate-400">Disclaimer:</strong> FlyDummyTicket provides legitimate temporary airline reservations and hotel booking vouchers intended for visa application submissions and proof of onward travel. We do not issue confirmed commercial boarding passes. All reservations carry active airline PNR codes verifiable on official airline portals during validity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800/60 pt-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} FlyDummyTicket. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-slate-400">
              <Link to="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms-conditions" className="hover:text-white transition">
                Terms of Service
              </Link>
              <span>•</span>
              <Link to="/refund-policy" className="hover:text-white transition">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;