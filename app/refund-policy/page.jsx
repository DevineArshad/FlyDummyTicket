import RefundPolicy from "../../src/views/RefundPolicy";

export const metadata = {
  title: "Refund & Cancellation Policy | FlyDummyTicket",
  description:
    "Learn about our refund terms, service delivery commitments, and satisfaction guarantees for travel reservation documentation.",
  alternates: {
    canonical: "https://flydummyticket.com/refund-policy",
  },
  openGraph: {
    title: "Refund & Cancellation Policy | FlyDummyTicket",
    description:
      "Learn about our refund terms, service delivery commitments, and satisfaction guarantees for travel reservation documentation.",
    url: "https://flydummyticket.com/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return <RefundPolicy />;
}
