import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  ExternalLink,
  Eye,
  FileCheck,
  FileText,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

export default function SampleTicketShowcase() {
  const [activeView, setActiveView] = useState("overview");

  const sampleTicket = {
    airline: "Air India",
    alliance: "Star Alliance Member",
    pnr: "72DB6I",
    eTicketNo: "098-2451892014",
    passenger: "MR. ALEX KUMAR",
    flightNo: "AI 143",
    route: "DEL → CDG",
    originCity: "New Delhi (DEL)",
    destCity: "Paris Charles de Gaulle (CDG)",
    depTime: "13:15",
    arrTime: "18:45",
    cabin: "Economy (V)",
    baggage: "2 x 23 KG",
    status: "CONFIRMED / HK1",
  };

  const whatsappSampleOrder =
    "https://wa.me/919560099481?text=" +
    encodeURIComponent(
      "Hi FlyDummyTicket Team, I reviewed your Air India Sample eTicket (PNR: 72DB6I). I would like to order a verified dummy ticket for my visa application."
    );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFD] via-white to-[#F0F5FD] py-16 sm:py-20 lg:py-24 border-y border-slate-200/80">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1D68E2] shadow-2xs mb-4">
            <Sparkles size={14} className="text-[#1D68E2]" />
            <span>100% Genuine Document Transparency</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            See Exactly What You Receive Before You Order
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Inspect our authentic, IATA-standard airline eTicket sample. Accepted by all major embassies worldwide, VFS Global, BLS International, and airport border control.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Ticket Spec Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl shadow-slate-900/5 relative overflow-hidden">
              {/* Airline Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#9b1c1c] to-[#e02424] text-white font-black text-xl shadow-md shadow-red-500/20">
                    <Plane size={22} className="rotate-[-45deg]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-black text-slate-900">{sampleTicket.airline}</h3>
                      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-extrabold text-emerald-700 border border-emerald-200">
                        <CheckCircle2 size={11} className="text-emerald-600" />
                        Live Verified PNR
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-semibold">{sampleTicket.alliance}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Booking Reference (PNR)
                  </span>
                  <span className="font-mono text-xl font-black text-[#1D68E2] tracking-widest bg-blue-50 px-3 py-1 rounded-xl border border-blue-200/80 inline-block">
                    {sampleTicket.pnr}
                  </span>
                </div>
              </div>

              {/* Route & Flight Visual */}
              <div className="my-6 rounded-2xl bg-slate-50/90 border border-slate-100 p-5">
                <div className="flex items-center justify-between text-center sm:text-left">
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">DEL</span>
                    <p className="text-xs font-semibold text-slate-500">{sampleTicket.originCity}</p>
                    <p className="text-sm font-bold text-slate-700 mt-1">{sampleTicket.depTime}</p>
                  </div>

                  <div className="flex flex-col items-center px-4 flex-1 max-w-[200px]">
                    <span className="text-[11px] font-bold text-slate-400 mb-1">Non-Stop • 8h 30m</span>
                    <div className="relative w-full flex items-center">
                      <div className="h-[2px] w-full bg-slate-300" />
                      <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-full p-1 border border-slate-300 text-[#1D68E2]">
                        <Plane size={14} className="rotate-90" />
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#1D68E2] mt-1">{sampleTicket.flightNo}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">CDG</span>
                    <p className="text-xs font-semibold text-slate-500">{sampleTicket.destCity}</p>
                    <p className="text-sm font-bold text-slate-700 mt-1">{sampleTicket.arrTime}</p>
                  </div>
                </div>
              </div>

              {/* Ticket Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs border-y border-slate-100 py-4">
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Passenger</span>
                  <span className="font-bold text-slate-800 truncate block">{sampleTicket.passenger}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">e-Ticket No</span>
                  <span className="font-mono font-bold text-slate-800">{sampleTicket.eTicketNo}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Cabin & Class</span>
                  <span className="font-bold text-slate-800">{sampleTicket.cabin}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Baggage Allowance</span>
                  <span className="font-bold text-slate-800">{sampleTicket.baggage}</span>
                </div>
              </div>

              {/* Trust Features Checklist */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Verifiable directly on airline website</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Official IATA 2D barcode included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Valid for Schengen, US, UK, Canada & UAE visas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Delivered via WhatsApp & Email in 10 to 30 minutes</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href="/sample-eticket.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#1D68E2] bg-blue-50/70 hover:bg-blue-100/70 px-5 py-3.5 text-xs sm:text-sm font-bold text-[#1D68E2] transition-all cursor-pointer shadow-xs"
                >
                  <Eye size={16} />
                  <span>View Official Sample PDF</span>
                  <ExternalLink size={13} className="text-[#1D68E2]/70" />
                </a>

                <a
                  href={whatsappSampleOrder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D8746] hover:bg-[#0A7039] px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>Order on WhatsApp (₹350)</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Why Sample Matters & Trust Checklist (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Visual PDF Preview Callout */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-7 text-white shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 text-[11px] font-extrabold text-emerald-300">
                  <ShieldCheck size={13} />
                  <span>EMBASSY VERIFIED FORMAT</span>
                </div>
                <span className="text-xs font-mono text-slate-400">PDF • 568 KB</span>
              </div>

              <h4 className="text-xl font-bold text-white leading-snug">
                Download or Inspect the Full Air India eTicket
              </h4>

              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Click below to view the exact high-resolution PDF document we dispatch to your WhatsApp. Every detail meets consular standards so your visa appointment goes smoothly.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href="/sample-eticket.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-extrabold text-slate-900 hover:bg-slate-100 transition shadow-md"
                >
                  <FileText size={16} className="text-[#1D68E2]" />
                  <span>Open PDF in New Tab</span>
                  <ExternalLink size={13} />
                </a>

                <a
                  href="/sample-eticket.pdf"
                  download="FlyDummyTicket-AirIndia-Sample-72DB6I.pdf"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-3 text-xs sm:text-sm font-bold text-white transition"
                  title="Download Sample PDF"
                >
                  <Download size={15} />
                  <span className="hidden sm:inline">Download</span>
                </a>
              </div>
            </div>

            {/* Quick Pricing Summary Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                Transparent All-Inclusive Pricing
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">Dummy Flight Ticket</span>
                  <span className="font-black text-slate-900 text-sm">₹350 / person</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">Hotel Booking Voucher</span>
                  <span className="font-black text-slate-900 text-sm">₹250 / person</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-semibold text-[#1D68E2] flex items-center gap-1">
                    <Sparkles size={12} /> Flight + Hotel Combo (Best Value)
                  </span>
                  <span className="font-black text-emerald-600 text-sm">₹500 bundle</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">Immigration Proof of Return</span>
                  <span className="font-black text-slate-900 text-sm">₹1,000</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">Travel Insurance (Visa Approved)</span>
                  <span className="font-black text-slate-900 text-sm">₹400 / person</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">Ok To Board (OTB) Clearance</span>
                  <span className="font-black text-slate-900 text-sm">₹250 / person</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
