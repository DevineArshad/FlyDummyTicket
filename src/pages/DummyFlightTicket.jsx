import SharedBookingCard from "../components/common/SharedBookingCard";

function DummyFlightTicket() {
  return (
    <SharedBookingCard
      serviceType="flight"
      serviceTitle="Dummy Flight Ticket for Visa"
      price="₹299"
      badge="100% Embassy Approved • Verifiable PNR"
      description="Official IATA airline reservation with live 6-character PNR. Checkable directly on the operating airline's website under Manage Booking. Delivered within 10 to 30 minutes."
      features={[
        "Checkable on official airline websites (Emirates, Qatar, Lufthansa, etc.)",
        "Valid for Schengen, US, UK, Canada, Australia & global visas",
        "Includes standard IATA barcode, flight numbers & baggage info",
        "Delivered as print-ready, high-resolution PDF on WhatsApp & Email",
        "100% Free date change guarantee if appointment is postponed",
      ]}
    />
  );
}

export default DummyFlightTicket;
