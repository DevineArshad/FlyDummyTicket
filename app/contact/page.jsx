import Contact from "../../src/views/Contact";

export const metadata = {
  title: "Contact FlyDummyTicket | 24/7 WhatsApp & Email Documentation Support",
  description:
    "Need assistance with your visa flight reservation or hotel voucher? Contact our documentation team via WhatsApp at +91 95600 99481 or email.",
  alternates: {
    canonical: "https://flydummyticket.com/contact",
  },
  openGraph: {
    title: "Contact FlyDummyTicket | 24/7 WhatsApp & Email Documentation Support",
    description:
      "Need assistance with your visa flight reservation or hotel voucher? Contact our documentation team via WhatsApp at +91 95600 99481 or email.",
    url: "https://flydummyticket.com/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
