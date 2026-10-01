import DateChange from "../../../src/views/DateChange";

export const metadata = {
  title: "Free Itinerary Reschedule & Date Change Service | FlyDummyTicket",
  description:
    "Reschedule your visa flight itinerary or hotel booking free of charge if your embassy appointment, visa processing, or travel schedule changes.",
  alternates: {
    canonical: "https://flydummyticket.com/services/date-change",
  },
  openGraph: {
    title: "Free Itinerary Reschedule & Date Change Service | FlyDummyTicket",
    description:
      "Reschedule your visa flight itinerary or hotel booking free of charge if your embassy appointment, visa processing, or travel schedule changes.",
    url: "https://flydummyticket.com/services/date-change",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://flydummyticket.com/services/date-change#service",
  "name": "Itinerary Rescheduling Service",
  "description":
    "Reschedule your visa flight itinerary or hotel booking free of charge if your embassy appointment, visa processing, or travel schedule changes.",
  "url": "https://flydummyticket.com/services/date-change",
  "provider": {
    "@type": "TravelAgency",
    "@id": "https://flydummyticket.com/#organization",
    "name": "FlyDummyTicket",
    "url": "https://flydummyticket.com/",
  },
};

export default function DateChangePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <DateChange />
    </>
  );
}
