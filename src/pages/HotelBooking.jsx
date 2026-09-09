import SharedBookingCard from "../components/common/SharedBookingCard";

function HotelBooking() {
  return (
    <SharedBookingCard
      serviceType="hotel"
      serviceTitle="Dummy Hotel Booking Voucher"
      price="₹249"
      badge="Confirmed Accommodation Proof"
      description="Official hotel reservation voucher with genuine hotel name, address, contact telephone, and confirmation number. Synchronized to match your visa travel dates."
      features={[
        "Confirmed accommodation proof for all global visa types",
        "Includes full hotel address, contact details, and booking reference",
        "Synchronized check-in and check-out dates",
        "Accepted for Schengen Visa Code Article 14 proof of lodging",
        "Instant delivery straight to your WhatsApp and Email in PDF format",
      ]}
    />
  );
}

export default HotelBooking;
