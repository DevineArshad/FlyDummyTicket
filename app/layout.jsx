import "./globals.css";
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
import WhatsAppFAB from "../src/components/common/WhatsAppFAB";

export const viewport = {
  themeColor: "#14213D",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://flydummyticket.com"),
  title: {
    default: "Flight & Hotel Reservation for Visa Applications | FlyDummyTicket",
    template: "%s | FlyDummyTicket",
  },
  description:
    "Get verifiable flight reservations and hotel bookings for visa applications. Active airline PNR codes, instant WhatsApp delivery, and full documentation for Schengen, GCC, US, and UK visas.",
  keywords: [
    "dummy ticket",
    "dummy flight ticket",
    "flight reservation for visa",
    "dummy ticket for visa",
    "flight itinerary for visa application",
    "dummy hotel booking",
    "proof of onward travel",
    "return ticket for immigration",
    "verifiable flight reservation",
    "dummy air ticket with live PNR",
    "schengen visa dummy ticket",
    "flight reservation with PNR",
    "travel medical insurance for visa",
    "hotel voucher for visa",
    "flight and hotel package for visa",
    "vfs global dummy ticket",
  ],
  authors: [{ name: "FlyDummyTicket" }],
  creator: "FlyDummyTicket",
  publisher: "FlyDummyTicket",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flydummyticket.com/",
    siteName: "FlyDummyTicket",
    title: "FlyDummyTicket | Verifiable Flight & Hotel Reservations for Visa",
    description:
      "Official flight reservations and hotel vouchers with verifiable airline PNR codes for visa applications and international travel. Fast delivery via WhatsApp and email.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "FlyDummyTicket Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlyDummyTicket | Verifiable Flight & Hotel Reservations for Visa",
    description:
      "Official flight reservations and hotel vouchers with verifiable airline PNR codes for visa applications and international travel. Fast delivery via WhatsApp and email.",
    images: ["/logo.png"],
  },
  verification: {
    google: "google8d49fe0fa3ddca00",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://flydummyticket.com/#website",
      "url": "https://flydummyticket.com/",
      "name": "FlyDummyTicket",
      "description": "Verifiable Flight Reservations & Hotel Bookings for Visa Applications",
      "inLanguage": "en",
    },
    {
      "@type": "TravelAgency",
      "@id": "https://flydummyticket.com/#organization",
      "name": "FlyDummyTicket",
      "url": "https://flydummyticket.com/",
      "logo": "https://flydummyticket.com/logo.png",
      "image": "https://flydummyticket.com/logo.png",
      "description":
        "Provider of verifiable airline flight reservations, hotel vouchers, and onward travel documentation for visa applications.",
      "telephone": "+919560099481",
      "email": "flydummyticket@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "East Azad Nagar",
        "addressLocality": "Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110051",
        "addressCountry": "IN",
      },
      "openingHours": "Mo-Su 00:00-23:59",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <div className="flex min-h-screen flex-col bg-white text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFAB />
        </div>
      </body>
    </html>
  );
}
