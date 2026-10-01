import VisaGuide from "../../src/views/VisaGuide";

export const metadata = {
  title: "Gulf & GCC Visa Flight Itinerary Requirements Guide | FlyDummyTicket",
  description:
    "Comprehensive guide on flight reservation, hotel voucher, and Ok To Board (OTB) requirements for UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain visa applications.",
  alternates: {
    canonical: "https://flydummyticket.com/visa-guide",
  },
  openGraph: {
    title: "Gulf & GCC Visa Flight Itinerary Requirements Guide | FlyDummyTicket",
    description:
      "Comprehensive guide on flight reservation, hotel voucher, and Ok To Board (OTB) requirements for UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain visa applications.",
    url: "https://flydummyticket.com/visa-guide",
  },
};

export default function VisaGuidePage() {
  return <VisaGuide />;
}
