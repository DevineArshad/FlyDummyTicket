import PrivacyPolicy from "../../src/views/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | FlyDummyTicket",
  description:
    "Read our privacy policy detailing data handling practices, security protocols, and customer confidential information protection.",
  alternates: {
    canonical: "https://flydummyticket.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | FlyDummyTicket",
    description:
      "Read our privacy policy detailing data handling practices, security protocols, and customer confidential information protection.",
    url: "https://flydummyticket.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
