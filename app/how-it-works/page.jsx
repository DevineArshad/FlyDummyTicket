import HowItWorksPage from "../../src/views/HowItWorksPage";

export const metadata = {
  title: "How It Works - Verifiable Visa Travel Reservations Explained | FlyDummyTicket",
  description:
    "Learn how verifiable flight reservations work for visa applications, how to verify active PNR codes on airline websites, and why consulates require travel itineraries.",
  alternates: {
    canonical: "https://flydummyticket.com/how-it-works",
  },
  openGraph: {
    title: "How It Works - Verifiable Visa Travel Reservations Explained | FlyDummyTicket",
    description:
      "Learn how verifiable flight reservations work for visa applications, how to verify active PNR codes on airline websites, and why consulates require travel itineraries.",
    url: "https://flydummyticket.com/how-it-works",
  },
};

export default function HowItWorks() {
  return <HowItWorksPage />;
}
