import { Link } from "react-router-dom";
import FAQ from "../components/home/FAQ";
import {
  ArrowRight,
  ChevronRight,
  Headphones,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

function FAQPage() {
  return (
    <div className="bg-gradient-to-b from-[#F0F5FD] via-white to-[#F8FAFD]">
      {/* Top Banner & Breadcrumb */}
      <div className="pt-10 pb-4 px-5 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#1D68E2]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#1D68E2]">Frequently Asked Questions</span>
        </nav>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1D68E2] shadow-xs">
            <HelpCircle size={13} className="text-[#1D68E2]" />
            <span>HELP & KNOWLEDGE BASE</span>
          </div>

          <h1 className="mt-3.5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Everything You Need to Know About <span className="text-[#1D68E2]">Dummy Tickets</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Find immediate answers regarding airline PNR validity, embassy acceptance, hotel confirmation vouchers, and fast document delivery.
          </p>
        </div>
      </div>

      {/* Main FAQ Section */}
      <FAQ />

      {/* WhatsApp Help Strip */}
      <section className="pb-16 px-5 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0D8746] text-white shadow-md">
              <MessageCircle size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Still have an unanswered question?</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Our support team is available on WhatsApp 24/7 to advise on your exact visa situation.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20have%20a%20question%20regarding%20my%20visa%20itinerary"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#0D8746] hover:bg-[#0A7039] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all shrink-0 cursor-pointer"
          >
            <span>Ask on WhatsApp</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default FAQPage;
