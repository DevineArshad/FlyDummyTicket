import SharedBookingCard from "../components/common/SharedBookingCard";

function ComboPackage() {
  return (
    <SharedBookingCard
      serviceType="combo"
      serviceTitle="Flight + Hotel Combo Package"
      price="₹499"
      badge="★ Most Popular Bundle • Best Value"
      description="Complete travel documentation bundle including verifiable flight itinerary with active airline PNR and confirmed hotel accommodation voucher with perfectly matching dates."
      features={[
        "Verifiable flight ticket with live 6-character airline PNR",
        "Confirmed hotel booking voucher with hotel address & phone",
        "Synchronized departure, check-in, check-out and return dates",
        "Meets both flight and lodging requirements for Schengen & global visas",
        "Best value package saving money compared to booking separately",
        "Priority WhatsApp support and instant PDF dispatch in 10-30 mins",
      ]}
    />
  );
}

export default ComboPackage;
