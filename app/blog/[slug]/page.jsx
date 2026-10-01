import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "../../../src/data/blogPosts";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  MessageCircle,
  Plane,
  ShieldCheck,
  User,
} from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | FlyDummyTicket",
    };
  }

  const canonicalUrl = `https://flydummyticket.com/blog/${post.slug}`;

  return {
    title: `${post.title} | FlyDummyTicket`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "FlyDummyTicket",
      "logo": {
        "@type": "ImageObject",
        "url": "https://flydummyticket.com/logo.png",
      },
    },
    "datePublished": post.date,
    "mainEntityOfPage": `https://flydummyticket.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="bg-gradient-to-b from-orange-50/40 via-white to-slate-50 py-10 sm:py-14 lg:py-18">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="transition-colors hover:text-[#E6582A]">
              Home
            </Link>
            <ChevronRight size={13} className="text-slate-400" />
            <Link href="/blog" className="transition-colors hover:text-[#E6582A]">
              Blog
            </Link>
            <ChevronRight size={13} className="text-slate-400" />
            <span className="font-bold text-[#E6582A] truncate max-w-[200px] sm:max-w-none">
              {post.category}
            </span>
          </nav>

          {/* Article Header */}
          <header className="border-b border-slate-200 pb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-bold">
              <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[#E6582A]">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-slate-900 leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              {post.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-orange-100 text-[#E6582A] flex items-center justify-center font-bold">
                  <User size={15} />
                </div>
                <div>
                  <span className="font-bold text-slate-800 block">{post.author}</span>
                  <span>Published on {post.date}</span>
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-1 font-bold text-[#E6582A] hover:underline"
              >
                <ArrowLeft size={13} />
                <span>All Articles</span>
              </Link>
            </div>
          </header>

          {/* Article Markdown Content Body */}
          <div className="prose prose-slate max-w-none py-10 space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
            {post.content.split("\n\n").map((block, i) => {
              const trimmed = block.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-xl sm:text-2xl font-black text-slate-900 pt-4 tracking-tight">
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }
              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-lg sm:text-xl font-bold text-slate-900 pt-2">
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }
              if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
                const items = trimmed.split("\n").map((line) => line.replace(/^[*|-]\s+/, ""));
                return (
                  <ul key={i} className="space-y-2 list-disc pl-5">
                    {items.map((item, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    ))}
                  </ul>
                );
              }
              if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ")) {
                const items = trimmed.split("\n").map((line) => line.replace(/^\d+\.\s+/, ""));
                return (
                  <ol key={i} className="space-y-2 list-decimal pl-5">
                    {items.map((item, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    ))}
                  </ol>
                );
              }
              if (trimmed.startsWith("> ")) {
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-[#E6582A] pl-4 py-2 my-4 italic text-slate-600 bg-orange-50/50 rounded-r-xl"
                    dangerouslySetInnerHTML={{ __html: trimmed.replace(/^>\s*/, "").replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                  />
                );
              }
              if (trimmed === "---") {
                return <hr key={i} className="my-8 border-slate-200" />;
              }

              // Simple table rendering if markdown table
              if (trimmed.includes("|")) {
                const lines = trimmed.split("\n").filter((l) => l.trim() && !l.includes(":---"));
                if (lines.length > 1) {
                  const headers = lines[0].split("|").filter(Boolean).map((h) => h.trim());
                  const rows = lines.slice(1).map((r) => r.split("|").filter(Boolean).map((c) => c.trim()));
                  return (
                    <div key={i} className="overflow-x-auto my-6">
                      <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                        <thead className="bg-slate-100 text-slate-900 font-bold">
                          <tr>
                            {headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-3 border-b border-slate-200" dangerouslySetInnerHTML={{ __html: h.replace(/\*\*(.*?)\*\*/g, '$1') }} />
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 border-b border-slate-100" dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
              }

              return (
                <p
                  key={i}
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: trimmed
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\*(.*?)\*/g, "<em>$1</em>")
                      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#E6582A] underline font-semibold">$1</a>'),
                  }}
                />
              );
            })}
          </div>

          {/* Author Bio & Share Callout */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs my-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-orange-50 text-[#E6582A] border border-orange-100 flex items-center justify-center font-bold">
                <Plane size={22} className="rotate-[-45deg]" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900">FlyDummyTicket Editorial & Consulting Desk</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Helping travelers fulfill embassy visa criteria safely with genuine airline PNR reservations.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/919560099481?text=Hi%20FlyDummyTicket%20Team%2C%20I%20have%20a%20question%20about%20visa%20tickets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition shrink-0"
            >
              <MessageCircle size={15} />
              <span>Ask a Consultant</span>
            </a>
          </div>

          {/* Embedded Service CTA Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 sm:p-10 text-white shadow-xl">
            <div className="max-w-2xl">
              <span className="inline-block text-[10px] font-black uppercase tracking-wider text-orange-400 bg-white/10 px-3 py-1 rounded-full mb-3">
                FAST DOCUMENT DISPATCH
              </span>
              <h3 className="text-2xl font-black">
                Ready to Order Your Verifiable Flight Reservation?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Receive an authentic, airline-verifiable flight reservation with live 6-digit PNR in 10 to 30 minutes for just ₹299 ($4 USD). Free date changes included.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/services/flight-reservation"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#E6582A] hover:bg-[#C9441B] px-5 py-3 text-xs font-bold text-white shadow-md transition"
                >
                  <span>Book Flight Reservation (₹299)</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/services/flight-hotel-package"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 text-xs font-bold text-white transition"
                >
                  <span>Flight + Hotel Combo (₹499)</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
