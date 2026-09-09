import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Is a dummy flight ticket legally accepted for Gulf country visa applications?",
    answer:
      "Yes. Gulf embassies, consular sections, and immigration portals (including UAE GDRFA, Saudi MOFA & Nusuk, Qatar Hayya, Oman ROP, Kuwait MOI, and Bahrain NPRA) accept verifiable flight reservations and hotel vouchers rather than requiring expensive, non-refundable tickets before your visa is approved.",
  },
  {
    question: "Can I verify the booking reference (PNR) directly on the airline website?",
    answer:
      "Yes. Every ticket we issue comes with an authentic 6-digit PNR code. You can go to the operating airline's official website (such as Emirates, Qatar Airways, Lufthansa, Singapore Airlines, British Airways, Air France, Air India, KLM, or Turkish Airlines), go to 'Manage Booking' or 'My Trips', enter your surname and PNR, and view your active flight reservation.",
  },
  {
    question: "How long will the dummy ticket remain valid?",
    answer:
      "Validity depends on the airline and travel route, typically staying active for 2 to 3 weeks. We recommend ordering close to your visa appointment or embassy file submission date so the reservation remains active during consulate verification.",
  },
  {
    question: "What if my visa appointment is postponed or my travel dates change?",
    answer:
      "We provide 100% free date changes. Simply contact our support team on WhatsApp or reply to your order confirmation email with your revised dates, and we will update your itinerary and issue a new PDF free of charge.",
  },
  {
    question: "How quickly do I receive my ticket after placing an order?",
    answer:
      "Our processing is rapid: your official IATA-standard PDF ticket is delivered directly to your WhatsApp and Email address within 10 to 30 minutes of order confirmation.",
  },
  {
    question: "Can I use this ticket as proof of return / onward travel for Gulf airports & Ok To Board (OTB)?",
    answer:
      "Yes. If you are traveling on a one-way or tourist visa to Dubai, Abu Dhabi, Jeddah, Riyadh, Doha, Muscat, Kuwait, or Bahrain, airlines strictly require confirmed proof of onward/return travel before issuing boarding passes. Our Return Ticket satisfies airport check-in agents, Ok To Board (OTB) mandates, and border immigration.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="scroll-mt-20 bg-[#F7F8FA] py-16 sm:py-20 border-b border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE */}
        <div className="text-center mb-12">
          <p className="text-xs font-black uppercase tracking-widest text-[#E6582A] mb-1">
            GOT QUESTIONS?
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 bg-[#E6582A] rounded-full" />
          <p className="mt-3 text-sm text-slate-500 font-medium">
            Everything you need to know about dummy flight tickets, hotel vouchers, and airline PNR verification.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-xs sm:text-sm font-extrabold text-slate-900 hover:text-[#E6582A] transition cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#E6582A]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-xs sm:text-sm leading-relaxed text-slate-600 bg-[#FAFCFF]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WHATSAPP QUESTION HELP STRIP */}
        <div className="mt-10 rounded-2xl bg-white p-5 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-extrabold text-slate-900">Have a specific embassy or airline question?</h4>
            <p className="text-xs text-slate-500 font-medium">Our travel documentation team is available 24/7 on WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20have%20a%20question%20about%20my%20visa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition"
          >
            <MessageCircle size={14} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default FAQ;