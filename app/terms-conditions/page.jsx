import TermsConditions from "../../src/views/TermsConditions";

export const metadata = {
  title: "Terms and Conditions | FlyDummyTicket",
  description:
    "Review the terms of service, acceptable usage guidelines, and service delivery policies for FlyDummyTicket travel documentation services.",
  alternates: {
    canonical: "https://flydummyticket.com/terms-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | FlyDummyTicket",
    description:
      "Review the terms of service, acceptable usage guidelines, and service delivery policies for FlyDummyTicket travel documentation services.",
    url: "https://flydummyticket.com/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  return <TermsConditions />;
}
