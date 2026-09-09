import { useState, useEffect } from "react";

export default function WhatsAppFAB() {
  const [isHovered, setIsHovered] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Show a gentle greeting bubble 2.5s after page load, automatically fading after 8s
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowNotification(true);
    }, 2500);

    const hideTimer = setTimeout(() => {
      setShowNotification(false);
    }, 12000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const whatsappUrl =
    "https://wa.me/919560099481?text=" +
    encodeURIComponent("Hi FlyDummyTicket Team, I have an inquiry regarding visa itineraries.");

  return (
    <aside
      aria-label="WhatsApp Support"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center group select-none"
    >
      {/* Floating Greeting Pill / Tooltip - Positioned above button on mobile, to the left on desktop */}
      <div
        className={`transition-all duration-300 transform ${
          isHovered || showNotification
            ? "opacity-100 scale-100 translate-y-0 sm:translate-x-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-2 sm:translate-y-0 sm:translate-x-2 pointer-events-none"
        } absolute bottom-full right-0 mb-2 sm:mb-0 sm:static sm:mr-3 origin-bottom-right sm:origin-right w-max max-w-[calc(100vw-2rem)]`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 sm:gap-2.5 rounded-2xl bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 text-slate-800 shadow-xl shadow-slate-900/10 border border-slate-200/80 hover:border-emerald-300 transition"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0D8746]" />
          </span>
          <div className="text-left">
            <p className="text-[10px] sm:text-[11px] font-extrabold text-slate-900 leading-tight">
              Need Instant Help?
            </p>
            <p className="text-[9px] sm:text-[10px] font-medium text-emerald-700 leading-tight">
              Chat on WhatsApp (24/7)
            </p>
          </div>
          {showNotification && !isHovered && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowNotification(false);
              }}
              className="ml-1 text-slate-400 hover:text-slate-600 text-xs font-bold leading-none p-1 cursor-pointer"
              aria-label="Close notification"
            >
              ✕
            </button>
          )}
        </a>
      </div>

      {/* Main WhatsApp FAB Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with our visa consultants on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#0A7039] via-[#0D8746] to-[#25D366] text-white shadow-xl shadow-emerald-600/35 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Pulsing Ripple Wave */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* Online Status Dot on Button */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-300 border-2 border-white" />
        </span>

        {/* Crisp WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          className="h-6 w-6 sm:h-7 sm:w-7 fill-white drop-shadow-sm transition-transform group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.7.77 5.22 2.1 7.37L2.1 29.9l6.75-1.95A13.9 13.9 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm8.06 19.88c-.34.96-1.7 1.76-2.36 1.87-.62.1-1.42.14-4.58-1.17-3.9-1.62-6.4-5.58-6.6-5.84-.19-.26-1.59-2.11-1.59-4.03 0-1.91 1-2.85 1.36-3.24.36-.39.78-.49 1.04-.49.26 0 .52 0 .75.01.24.01.56-.09.88.67.33.8 1.13 2.76 1.23 2.96.1.2.17.44.03.7-.13.26-.2.42-.4.66-.2.23-.42.52-.6.7-.2.2-.41.42-.18.82.23.4 1.04 1.71 2.23 2.77 1.53 1.36 2.82 1.79 3.22 1.99.4.2.63.17.87-.1.23-.27 1-1.16 1.27-1.56.27-.4.53-.33.9-.19.36.13 2.31 1.09 2.71 1.29.4.2.66.3.76.47.1.17.1.97-.24 1.93z" />
        </svg>
      </a>
    </aside>
  );
}
