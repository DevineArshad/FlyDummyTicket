import Blog from "../../src/views/Blog";

export const metadata = {
  title: "Travel Visa Documentation & Immigration Guides | FlyDummyTicket Blog",
  description:
    "In-depth guides on visa requirements, flight itinerary rules for embassies, proof of onward travel, and international immigration tips.",
  alternates: {
    canonical: "https://flydummyticket.com/blog",
  },
  openGraph: {
    title: "Travel Visa Documentation & Immigration Guides | FlyDummyTicket Blog",
    description:
      "In-depth guides on visa requirements, flight itinerary rules for embassies, proof of onward travel, and international immigration tips.",
    url: "https://flydummyticket.com/blog",
  },
};

export default function BlogPage() {
  return <Blog />;
}
