import { useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Send } from "lucide-react";

function QuickContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const text = encodeURIComponent(
      `Hi FlyDummyTicket Team, I requested a call back / quote:\n` +
      `• Name: ${name}\n` +
      `• Email: ${email}\n` +
      `• Phone/WhatsApp: ${phone}\n` +
      `• Message: ${message || "I need assistance with a dummy ticket"}`
    );
    window.open(`https://wa.me/919560099481?text=${text}`, "_blank");
  };

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: TEXT CALLOUT */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-[#EA580C] bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60 mb-1">
              FAST ASSISTANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              Get Instant Call Back or WhatsApp Support
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Have specific questions about your visa appointment, layovers, or airline requirements? Fill out the quick form or contact our 24/7 helpdesk.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 text-xs font-bold">
              <a
                href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20need%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 text-white px-5 py-3 shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919560099481"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 px-5 py-3 hover:bg-slate-100 transition"
              >
                <Phone size={15} className="text-[#EA580C]" />
                <span>+91 95600 99481</span>
              </a>
            </div>
          </div>

          {/* RIGHT: QUICK INQUIRY FORM */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#F8FAFC] border border-slate-200/80 p-5 sm:p-8 shadow-xs">
              <h3 className="text-base font-extrabold text-slate-900 mb-4">
                Leave your details for immediate assistance:
              </h3>

              {submitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-center text-emerald-800">
                  <CheckCircle2 size={32} className="mx-auto text-emerald-600 mb-2" />
                  <p className="font-extrabold text-sm">Thank you, {name}!</p>
                  <p className="text-xs mt-1 text-emerald-700">
                    Your inquiry has been routed to our WhatsApp desk. We will respond within minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-900 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Email ID *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-900 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-900 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Message / Visa Country
                      </label>
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="e.g. Dubai UAE Tourist Visa, 2 PAX"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-900 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#EA580C] text-xs font-black uppercase tracking-wider text-white shadow-md shadow-orange-500/25 hover:bg-[#C2410C] transition cursor-pointer"
                  >
                    <Send size={14} />
                    <span>Send Message via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default QuickContactSection;
