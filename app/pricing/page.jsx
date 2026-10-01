import PricingPage from "../../src/views/PricingPage";

export const metadata = {
  title: "Pricing Plans - Verifiable Flight & Hotel Visa Reservations | FlyDummyTicket",
  description:
    "Transparent pricing for verifiable flight reservations, hotel vouchers, and combo documentation packages. Rapid delivery with live airline PNR verification.",
  alternates: {
    canonical: "https://flydummyticket.com/pricing",
  },
  openGraph: {
    title: "Pricing Plans - Verifiable Flight & Hotel Visa Reservations | FlyDummyTicket",
    description:
      "Transparent pricing for verifiable flight reservations, hotel vouchers, and combo documentation packages. Rapid delivery with live airline PNR verification.",
    url: "https://flydummyticket.com/pricing",
  },
};

export default function Pricing() {
  return <PricingPage />;
}
