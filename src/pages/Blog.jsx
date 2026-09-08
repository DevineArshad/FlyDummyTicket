import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  Globe,
  Plane,
  Search,
  Sparkles,
  Tag,
  User,
} from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Visa Guides",
    title: "How to Apply for a Schengen Visa Without Buying Real Flight Tickets (2026)",
    excerpt:
      "Buying expensive non-refundable flight tickets before receiving your visa is a high-risk gamble. Learn why embassies prefer verifiable reservations and how to obtain one.",
    date: "Sep 5, 2026",
    readTime: "6 min read",
    author: "Elena Rostova, Travel Legal Consultant",
    featured: true,
  },
  {
    id: 2,
    category: "Airlines & PNR",
    title: "What is an Airline PNR and How Do Embassies Verify It?",
    excerpt:
      "Understand the global distribution system (GDS) behind Passenger Name Records (PNR) and how visa officers verify authentic seat reservations directly with airlines.",
    date: "Aug 29, 2026",
    readTime: "4 min read",
    author: "Capt. Rajesh Sharma",
  },
  {
    id: 3,
    category: "Digital Nomads",
    title: "Proof of Onward Travel: Why Airlines Deny Boarding at Check-in",
    excerpt:
      "Traveling on a one-way ticket to Southeast Asia or Latin America? Here is how to prevent immigration and check-in desk boarding denial with a rented return ticket.",
    date: "Aug 21, 2026",
    readTime: "5 min read",
    author: "Marcus Vance, Remote Nomad",
  },
  {
    id: 4,
    category: "Visa Guides",
    title: "Hotel Booking vs Flight Itinerary: Why Your Dates Must Match Exactly",
    excerpt:
      "Consular officers carefully cross-check flight arrival and hotel check-in timestamps. Avoid the #1 reason for documentation inquiries.",
    date: "Aug 14, 2026",
    readTime: "4 min read",
    author: "Priya Menon, Visa Specialist",
  },
  {
    id: 5,
    category: "Airlines & PNR",
    title: "Step-by-Step Guide: Checking Your Dummy Ticket on the Airline Website",
    excerpt:
      "A pictorial walkthrough showing how to enter your 6-character PNR on Emirates, Lufthansa, and Air France 'Manage Booking' portals.",
    date: "Aug 02, 2026",
    readTime: "3 min read",
    author: "FlyDummyTicket Editorial Team",
  },
  {
    id: 6,
    category: "Visa Guides",
    title: "Top 7 Reasons Tourist Visas Get Delayed and How to Fix Them",
    excerpt:
      "From incomplete return proofs to mismatched accommodation dates, learn how to audit your submission packet before your appointment.",
    date: "Jul 25, 2026",
    readTime: "7 min read",
    author: "Elena Rostova",
  },
];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Visa Guides", "Airlines & PNR", "Digital Nomads"];

  const filteredArticles = articles.filter((art) => {
    const matchesCat =
      selectedCategory === "All" || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-b from-[#F0F5FD] via-white to-[#F8FAFD] py-10 sm:py-14 lg:py-18">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="transition-colors hover:text-[#1D68E2]">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#1D68E2]">Travel Blog & Guides</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1D68E2] shadow-xs">
            <BookOpen size={13} className="text-[#1D68E2]" />
            <span>EXPERT VISA ADVICE & GUIDES</span>
          </div>

          <h1 className="mt-3.5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Travel Insights, Guides & <span className="text-[#1D68E2]">Visa Tips</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Authoritative guides on flight reservations, hotel vouchers, embassy regulations, and onward travel compliance written by experienced travel consultants.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#1D68E2] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides..."
              className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3.5 py-2 text-xs font-semibold text-slate-800 focus:border-[#1D68E2] focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
            <Search size={14} className="pointer-events-none absolute left-3 top-2.5 text-slate-400" />
          </div>
        </div>

        {/* Article Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-[11px] font-semibold text-slate-400">
                  <span className="rounded-md bg-blue-50 px-2 py-0.5 font-bold text-[#1D68E2]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {article.readTime}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-[#1D68E2] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-2.5 text-xs text-slate-500 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{article.date}</span>
                <span className="font-bold text-[#1D68E2] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read Article <ArrowRight size={13} />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-3xl bg-brand-navy p-8 text-white text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-bold">Need a reservation for your visa application?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Valid flight and hotel itineraries issued with live PNR codes in 10 to 30 minutes.
            </p>
          </div>
          <Link
            to="/services/flight-reservation"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 rounded-xl bg-[#1D68E2] hover:bg-[#1556BE] px-5 py-3 text-xs font-bold text-white shadow-md transition-all shrink-0"
          >
            <span>Get Flight Reservation</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
